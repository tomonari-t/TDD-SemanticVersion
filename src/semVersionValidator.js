'use strict'

const semVersionValidator = version => (
    version.major >= 0
        && version.minor >= 0
        && version.patch >= 0
);

module.exports = semVersionValidator;