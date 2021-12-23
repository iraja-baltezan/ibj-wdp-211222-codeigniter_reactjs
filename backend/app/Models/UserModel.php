<?php
namespace App\Models;

use CodeIgniter\Model;
use Exception;

class UserModel extends Model
{
    protected $table = 'user';
    protected $allowedFields = ['name', 'email', 'password'];

    protected $updatedField = 'updated_at';
    protected $beforeInsert = ['beforeInsert'];
    protected $beforeUpdate = ['beforeUpdate'];

    protected function beforeInsert(array $data):array
    {
        return $this->getUpdatedDataWithHashedPassword($data);
    }

    protected function beforeUpdate(array $data):array
    {
        return $this->getUpdatedDataWithHashedPassword($data);
    }

    private function getUpdatedDataWithHashedPassword(array $data):array
    {
        if(isset($data['data']['password']))
        {
            $plainTextPassword = $data['data']['password'];
            $data['data']['password'] = $this->hashPassword($plainTextPassword);
        }
        return $data;
    }

    private function hashPassword(string $plainTextPassword):string
    {
        return password_hash($plainTextPassword, PASSWORD_BCRYPT);
    }

    public function findUserByEmailAddress(string $emailAddress)
    {
        $user = $this->asArray()
            ->where(['email' => $emailAddress])
            ->first();
        if (!$user)
            throw new Exception('User does not exist for specified email address');

        return $user;
    }
}