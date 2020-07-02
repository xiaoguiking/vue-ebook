### 阅读器开发

- 分页算法，全文搜索算法，引入 web 字体，主题设计
- 离线存储机制设计 localStorage + IndexedDB
- 实现复杂手势
- vuex + mixin 实现组件解耦
- ES6 使用
- 科大讯发 web 在线 api 合成开发

### 搭建静态资源服务器

- Nginx 安装
- 配置文件
- 常见问题解决

### 引入 Css3 字体

- `index.html`文件放在 public/fonts

  ```css
  index.html
  引入
   <link rel="stylesheet" href="<%= BASE_URL %>fonts/daysOne.css" />

   使用
   About.vue
  <template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 class="test">ABCD</h2>
  </div>
  </template>
  ```

  <script>
  export default {};
  </script>

<style lang="less" scoped>
.about {
  h1 {
    color: red;
  }
  .test {
    font-family: "Days One";
    color: orange;
  }
}
</style>

第二种方式
全局引入
assets/fonts/

main.js
import './assets/fonts/daysOne.css'

```

```

- meta 配置 index.html

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0 maximum-scale=1.0, minimum=1.0, user-scalable=no"
/>
```

- rem

```js

```
