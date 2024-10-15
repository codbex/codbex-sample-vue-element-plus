import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Space - Basic usage',
            sampleUrl: 'https://element-plus.org/en-US/component/space.html#basic-usage',
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
