import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Checkbox - Basic usage',
            sampleUrl: 'https://element-plus.org/en-US/component/checkbox.html#basic-usage',
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
