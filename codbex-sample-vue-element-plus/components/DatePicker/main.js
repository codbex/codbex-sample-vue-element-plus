import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'DatePicker - Enter Date',
            sampleUrl: 'https://element-plus.org/en-US/component/date-picker.html#enter-date',
            size: 'default',
            value1: null,
            value2: null,
            shortcuts: [
                {
                    text: 'Today',
                    value: new Date(),
                },
                {
                    text: 'Yesterday',
                    value: () => {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        return date
                    },
                },
                {
                    text: 'A week ago',
                    value: () => {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        return date
                    },
                },
            ],
            disabledDate: (time) => {
                return time.getTime() > Date.now();
            }
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
