

// const dateFormatRegex = /^\d{4}\d{2}\d{2}$/;
const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

function isValidDateFormat(dateString) {
    return dateFormatRegex.test(dateString);
}

module.exports = isValidDateFormat;






/*

^: This symbol indicates the start of the string. It ensures that the pattern starts matching from the beginning of the string.
\d{4}: This part matches exactly four digits. In the context of a date, it represents the year in "YYYY" format.
-: This matches a hyphen character, which is used as a separator between the year, month, and day.
\d{2}: This part matches exactly two digits. In the context of a date, it represents the month in "MM" format.
-: Another hyphen character to separate the month and day.
\d{2}: Matches exactly two digits again, representing the day in "DD" format.
$: This symbol indicates the end of the string. It ensures that the pattern matches all characters up to the end of the string.

*/