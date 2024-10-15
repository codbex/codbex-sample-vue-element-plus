import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Text - Basic',
            sampleUrl: 'https://element-plus.org/en-US/component/text.html#basic',
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
