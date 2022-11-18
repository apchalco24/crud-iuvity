class ApiResponse {

    constructor(code, description, detail, status = '') {
        this.code = code;
        this.description = description;
        this.detail = detail;
        this.status = status;
    }
}

module.exports = ApiResponse;