import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'DateTime Picker - Date and Time',
            sampleUrl: 'https://element-plus.org/en-US/component/datetime-picker.html#date-and-time',
            value1: null,
            value2: null,
            value3: null,
            defaultTime: new Date(2000, 1, 1, 12, 0, 0),
            shortcuts: [
                {
                    text: 'Today',
                    value: new Date(),
                },
                {
                    text: 'Yesterday',
                    value: () => {
                        const date = new Date()
                        date.setDate(date.getDate() - 1)
                        return date
                    },
                },
                {
                    text: 'A week ago',
                    value: () => {
                        const date = new Date()
                        date.setDate(date.getDate() - 7)
                        return date
                    },
                },
            ]
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
