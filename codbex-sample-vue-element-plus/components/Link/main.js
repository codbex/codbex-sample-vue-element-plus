import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Link - Basic',
            sampleUrl: 'https://element-plus.org/en-US/component/link.html#basic',
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
