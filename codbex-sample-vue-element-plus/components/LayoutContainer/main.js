import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Layout Container - Common Layouts',
            sampleUrl: 'https://element-plus.org/en-US/component/container.html#common-layouts',
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
