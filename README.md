# Sample Vue with Element Plus

Sample about how to use Vue.js with Element Plus in UMD mode

## Instalation

https://element-plus.org/en-US/guide/installation.html#import-in-browser

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="../../styles.css">
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

## View (HTML)

https://github.com/codbex/codbex-sample-vue-element-plus/blob/main/codbex-sample-vue-element-plus/index.html

```html
<body>
        <div id="app">
            <h1>Enhanced Form</h1>

            <el-form :model="form" label-width="auto" style="max-width: 600px" @submit.prevent="submitForm">
                <!-- Text Input -->
                <el-form-item label="Name">
                    <el-input type="text" v-model="formData.name">
                    </el-input>
                </el-form-item>

                ...
```

## Controller (TypeScript)

https://github.com/codbex/codbex-sample-vue-element-plus/blob/main/codbex-sample-vue-element-plus/app.js

```typescript
// Import your translations
import en from './locales/en.json' with { type: "json" };
import fr from './locales/fr.json' with { type: "json" };

// Define the messages for each language
const messages = {
    en,
    fr
};

// Create the i18n instance with options
const i18n = VueI18n.createI18n({
    locale: 'en', // Set default language
    messages,     // Set locale messages
});

const app = Vue.createApp({
    data() {
        return {
            formData: {
                name: '',
                date: '',
                gender: '',
                age: 18,
                agree: false,
                option: ''
            },
            locale: this.$i18n.locale,
            users: [] // For storing remote data
        };
    },
    methods: {
        submitForm() {
            alert(JSON.stringify(this.formData));
        },
        // Method to fetch remote data
        async fetchRemoteData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                this.users = await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        changeLocale() {
            this.$i18n.locale = this.locale; // Switch language dynamically
        }
    },
    mounted() {
        // Fetch remote data when the component is mounted
        this.fetchRemoteData();
    }
});
app.use(i18n);
app.use(ElementPlus);
app.mount('#app');
```
