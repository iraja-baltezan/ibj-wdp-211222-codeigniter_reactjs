/**
 * Formatter.js
 * This contains helper functions for formatting dates and currencies in our
 * application.
 *
 * The formatDate uses Luxon to present a more readable date string to the user.
 * The formatCurrency returns a properly formatted currency value (with the
 * Naira symbol included).
 */

import {DateTime} from 'luxon';

export const formatDate = (dateString) => {
    const dateISOString = new Date(dateString).toISOString();
    const formattedDateTime = DateTime.fromISO(dateISOString);
    return formattedDateTime.setLocale('en').toLocaleString(DateTime.DATE_FULL);
}

export const formatCurrency = (amount) => `₦${new Intl.NumberFormat('en-GB').format(amount)}`;
