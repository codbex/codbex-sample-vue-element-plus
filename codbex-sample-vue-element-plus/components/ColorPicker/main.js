import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Color Picker - Basic usage',
            sampleUrl: 'https://element-plus.org/en-US/component/color-picker.html#basic-usage',
            color1: '#409EFF',
            color2: null,
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
