"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPut = exports.apiDelete = exports.apiGet = exports.apiPost = void 0;
const wp = window.wp;
function apiPost(path, data, headers = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            data,
            type: "POST",
            headers
        })
            .done(async (response) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
            .fail(async (response) => {
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
        });
    });
}
exports.apiPost = apiPost;
function apiGet(path, headers = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            type: "GET",
            headers
        })
            .done(async (response) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
            .fail(async (response) => {
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
        });
    });
}
exports.apiGet = apiGet;
function apiDelete(path, headers = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            type: "DELETE",
            headers
        })
            .done(async (response) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
            .fail(async (response) => {
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
        });
    });
}
exports.apiDelete = apiDelete;
function apiPut(path, data, headers = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            data,
            type: "PUT",
            headers
        })
            .done(async (response) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
            .fail(async (response) => {
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
        });
    });
}
exports.apiPut = apiPut;
//# sourceMappingURL=ajax.js.map