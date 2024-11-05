import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const app = createApp({
    data: function () {
        return {
            sampleTitle: 'Dialog - Customized Content',
            sampleUrl: 'https://element-plus.org/en-US/component/dialog.html#customized-content',
            dialogTableVisible: false,
            dialogFormVisible: false,
            formLabelWidth: '140px',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            gridData: [
                {
                    date: '2016-05-02',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
                {
                    date: '2016-05-04',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
                {
                    date: '2016-05-01',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
                {
                    date: '2016-05-03',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
            ]

        };
    }
});

app.use(ElementPlus);
app.mount('#app');
