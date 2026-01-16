## Fontana Aurélien

## Validator — IPLsocial

Email: aurelien.fontana@student.vinci.be \
GitHub: https://github.com/aurelien-fontana-vinci/IPLsocial

Description
-----------
This module is part of the IPLSocial project and contains a function that checks
whether an email address is valid according to several rules.
The goal is to prevent incorrect formats before they are used in the application.

Validation Rules
----------------
An email address is considered invalid if:

- it does not contain "@"
- it does not contain a "." after the "@"
- it ends with "."
- it contains a space (" ")
- it has no text before or after the "@"

Installing Dependencies
-----------------------
If needed, run the following command to install the dependencies:

npm install

Running the Tests
-----------------
To run the unit tests:

npm test
