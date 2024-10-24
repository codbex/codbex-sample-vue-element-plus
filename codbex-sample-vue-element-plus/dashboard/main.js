import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
    ArrowRight,
    CaretBottom,
    CaretTop,
    Warning,
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const value1 = ref('Option1')
const value2 = ref(['Option1'])

const app = createApp({
    setup() {
        return {
            Check: Check,
            Delete: Delete,
            Edit: Edit,
            Message: Message,
            Search: Search,
            Star: Star,
            ArrowRight: ArrowRight,
            CaretBottom: CaretBottom,
            CaretTop: CaretTop,
            Warning: Warning,
            Document: Document,
            IconMenu: IconMenu,
            Location: Location,
            Setting: Setting,
        }
    },
    data: function () {
        return {
            sampleTitle: 'Button - Basic usage',
            sampleUrl: 'https://element-plus.org/en-US/component/button.html#basic-usage',
            activeIndex: activeIndex,
            activeIndex2: activeIndex2,
            activities: [
                {
                    content: 'Event start',
                    timestamp: '2018-04-15',
                },
                {
                    content: 'Approved',
                    timestamp: '2018-04-13',
                },
                {
                    content: 'Success',
                    timestamp: '2018-04-11',
                },
            ],
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ],
            options: [
                {
                    value: 'Option1',
                    label: 'Label1',
                },
                {
                    value: 'Option2',
                    label: 'Label2',
                },
                {
                    value: 'Option3',
                    label: 'Label3',
                },
                {
                    value: 'Option4',
                    label: 'Label4',
                },
                {
                    value: 'Option5',
                    label: 'Label5',
                }
            ],
            value1: value1,
            value2: value2,
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    },
});

app.use(ElementPlus);
app.component('arrowright', ArrowRight)
app.component('caretbottom', CaretBottom)
app.component('carettop', CaretTop)
app.component('warning', Warning)
app.component('location', Location)
app.component('icon-menu', IconMenu)
app.component('document', Document)
app.component('setting', Setting)
app.mount('#app');
