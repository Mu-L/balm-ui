import axios from 'axios';
import { bus } from 'balm-ui';

export default {
  install(Vue) {
    Vue.prototype.$http = axios;

    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        bus.pub('off-loading');

        return response.data;
      },
      (error) => {
        bus.pub('off-loading');

        return Promise.reject(error);
      }
    );
  }
};