import countdown from './components/countdown.vue';

export default {
    install(Vue) {
        Vue.component(countdown.name, countdown);
    }
};