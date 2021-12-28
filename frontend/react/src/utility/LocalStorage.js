/**
 * LocalStorage.js:
 * This contains helper functions for retrieving and saving data via
 * LocalStorage.
 *
 * NOTE:
 * For the sake of brevity, we use LocalStorage for Global State Management.
 * This may not be in line with global best practices. Please consider
 * alternatives like Redux, Mobx or using the useContext and useReducer React
 * Hooks. These will add considerable complexity to the tutorial hence the
 * oversimplification.
 *
 * Our application requires global state management for three key resources:
 *
 * user:    This is an object containing the details of the authenticated user.
 *          Two helper functions (saveUser and loadUser) are exported to aid in
 *          saving and loading the authenticated user.
 * token:   This is a string corresponding to the JWT created for the
 *          authenticated user. Two helper functions (loadJWT and saveJWT) are
 *          exported to aid in loading and saving the JWT.
 * clients: This is an array corresponding to the array of clients retrieved
 *          from the API. Two helper functions (loadClients and saveClients) are
 *          made exported to aid in loading and saving the clients on the
 *          database. Additionally three helper functions (addClient,
 *          updateClient and deleteClient) are exported to help with modifying
 *          the saved array of clients.
 *
 * The last exported function (clearState) is used to simulate the effect of
 * logging out.
 *
 */

const getItem = (itemName) => localStorage.getItem(itemName);

const saveItem = (itemName, itemValue) => {
    localStorage.setItem(itemName, itemValue);
};

const getFilteredClients = clientId => {
    return loadClients().filter(({id}) => clientId !== id);
};

export const loadUser = () => JSON.parse(getItem('user'));

export const saveUser = (user) => {
    saveItem('user', JSON.stringify(user));
};

export const loadJWT = () => getItem('token');

export const saveJWT = (token) => {
    saveItem('token', token);
};

export const loadClients = () => JSON.parse(getItem('clients'));

export const findClient = (clientId) =>
    loadClients().find(({id}) => id === clientId);

export const saveClients = (clients) => {
    saveItem('clients', JSON.stringify(clients));
};

export const addClient = (client) => {
    saveClients([...loadClients(), client]);
};

export const updateClient = (client) => {
    saveClients([...getFilteredClients(client.id), client]);
};

export const deleteClient = ({id}) => {
    saveClients(getFilteredClients(id));
};

export const clearState = () => {
    localStorage.clear();
};
