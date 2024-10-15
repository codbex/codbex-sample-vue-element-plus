import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Scrollbar - Basic usage',
            sampleUrl: 'https://element-plus.org/en-US/component/scrollbar.html#basic-usage',
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
