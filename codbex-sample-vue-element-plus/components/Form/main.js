import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Form - Basic Form',
            sampleUrl: 'https://element-plus.org/en-US/component/form.html#basic-form',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            }
        };
    },
    methods: {
        onSubmit: function () {
            alert('submit!\n\n' + JSON.stringify(this.form));
        }
    }
});

app.use(ElementPlus);
app.mount('#app');
