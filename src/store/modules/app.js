import { GET_APP_INFO } from '@constants/storeType';
import { get } from '@common/ajax';
import urls from '@common/urls';
const app = {
    state: {
        appInfo: {},
        appTip: '这个是为了测试的提示信息',
    },
    mutations: {
        GET_APP_INFO: (state, appInfo) => {
            Object.assign(state, {
                appInfo,
            });
        }
    },
    actions: {
        getAppInfo: async ({ commit }, param) => {
            const res = await get(urls.appInfo);
            commit(GET_APP_INFO, {
                appInfo: res,
            });
        }
    },
};

export default app;
