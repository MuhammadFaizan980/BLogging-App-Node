const getGeneralResponse = (data, message, success) => {
    return {
        success, message, data,
    };
}

module.exports = { getGeneralResponse };