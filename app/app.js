import Vue from "nativescript-vue";
import RadDataForm from 'nativescript-ui-dataform/vue';
Vue.use(RadDataForm);

import Home from "./components/Home";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
