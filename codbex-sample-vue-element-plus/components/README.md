# Icons

## Importmap

Add `@element-plus/icons-vue`:

```html
<script type="importmap">
    {
        "imports": {
            ...
            "@element-plus/icons-vue": "https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2/dist/index.min.js"
        }
    }
</script>
```

### HTML/Template
```html
<el-button :icon="Search" circle />
```
->
```html
<el-button :icon="Search" circle></el-button>
```

### Vue

```js
...
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
            ...
        }
    },
    data: function () {
        ...
    }
});
```