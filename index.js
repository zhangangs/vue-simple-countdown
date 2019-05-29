import countdown from './src/components/countdown';

export default {
    install(Vue) {
        Vue.component(countdown.name, countdown);
    }
};