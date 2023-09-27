declare const wp: any;

function handleError(response: any) {
    if (!response.ok) {
        const status = response.status;
        const message = response.responseJSON?.message || response.statusText || response.responseText || response;
        const code = response.responseJSON?.code || response.code || "";
        return { status, code, message };
    }
    return response;
}

export function apiPost(path: string, data: any, headers: object = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            data,
            type: "POST",
            headers
        })
        .done(async (response: any) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
        .fail(async (response: any) => {
            reject(handleError(response));
        });
    });
}

export function apiGet(path: string, headers: object = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            type: "GET",
            headers
        })
        .done(async (response: any) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
        .fail(async (response: any) => {
            reject(handleError(response));
        });
    });
}

export function apiDelete(path: string, headers: object = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            type: "DELETE",
            headers
        })
        .done(async (response: any) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
        .fail(async (response: any) => {
            reject(handleError(response));
        });
    });
}

export function apiPut(path: string, data: any, headers: object = {}) {
    return new Promise((resolve, reject) => {
        wp.apiRequest({
            path,
            data,
            type: "PUT",
            headers
        })
        .done(async (response: any) => {
            if (response.error) {
                reject(response);
            }
            resolve(response);
        })
        .fail(async (response: any) => {
            reject(handleError(response));
        });
    });
}