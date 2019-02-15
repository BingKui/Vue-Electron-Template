/**
 * 页面重定向到给定地址
 * @param {String} path 页面跳转路径
 * @param {Object} param 跳转需要添加的参数
 */
export const redirectTo = (path, param = {}) => {
    let query = '';
    for (let key in param) {
        query += `${key}=${param[key]}&`;
    }
    window.location.href = `${path}${query ? '?' + query : ''}`;
};

/**
 * 替换页面到给定地址
 * @param {String} path 地址
 * @param {Object} param 页面带的参数
 */
export const repalceTo = (path, param = {}) => {
    let query = '';
    for (let key in param) {
        query += `${key}=${param[key]}&`;
    }
    window.location.replace(`${path}${query ? '?' + query : ''}`);
};

/**
 * 浏览器返回方法
 */
export const navigateBack = () => {
    window.history.go(-1);
};

/**
 * 浏览器前进给定步长
 * @param {Number} num 前进步长，默认：1
 */
export const navigateForward = (num = 1) => {
    window.history(num);
};

/**
 * 获取 url 参数
 * @param {String} name 参数名
 */
export const getUrlParam = (name) => {
    let search = window.location.search;
    search = search.substring(1, search.length);
    const arr = search.split('&');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        const _name = arr[i].split('=')[0];
        if (_name === name) {
            result = arr[i].split('=')[1];
            break;
        }
    }
    return result;
};
