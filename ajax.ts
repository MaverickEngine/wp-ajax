const wp = (window as any).wp;
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
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
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
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
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
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
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
            reject(response.responseJSON?.message || response.statusText || response.responseText || response);
        });
    });
}