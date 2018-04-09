module.exports = version => {
    return version.major >= 0
        && version.minor >= 0
        && version.patch >= 0
}