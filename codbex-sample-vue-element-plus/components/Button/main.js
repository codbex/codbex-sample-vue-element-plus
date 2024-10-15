import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'

const app = createApp({
    setup() {
        return {
            Check: Check,
            Delete: Delete,
            Edit: Edit,
            Message: Message,
            Search: Search,
            Star: Star,
        }
    },
    data: function () {
        return {
            sampleTitle: 'Button - Basic usage',
            sampleUrl: 'https://element-plus.org/en-US/component/button.html#basic-usage',
        };
    }
});

app.use(ElementPlus);
app.mount('#app');
