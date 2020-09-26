### 阅读器开发

- 分页算法，全文搜索算法，引入 web 字体，主题设计
- 离线存储机制设计 localStorage + IndexedDB
- 实现复杂手势
- vuex + mixin 实现组件解耦
- ES6 使用
- 科大讯发 web 在线 api 合成开发
- 字体图标
- 项目依赖包下载配置
- 准备 web 字体
- viewport 配置
- rem 设置 + 自适应布局目录
- global.scss + reset.scss 文件
- 引入 vuex

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

### 问题点

1.打包注意点
`vue.config.js`文件

```
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
};

```

2.安装 epubjs cnpm i --save e pubjs

3. 安装 npm i node-sass sass-loader

### 三、Nginx

1.Nginx 安装

mac: brew install nginx

```
Caveats
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
==> Summary
🍺  /usr/local/Cellar/nginx/1.19.0: 25 files, 2.1MB
==> Caveats
==> openssl@1.1
A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because macOS provides LibreSSL.

If you need to have openssl@1.1 first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

==> nginx
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
```

- 打开配置文件
  `vi /usr/local/etc/nginx/nginx.conf`
- 启动 nginx

  `sudo nginx`

- 关闭 nginx
  `sudo nginx -s stop`

- 检查 nginx 命令是否有错

  `sudo nginx -t`

- 修改配置文件

  ```
    server {
        listen  9998;
        server_name   resource;
        root   /Users/mac/Desktop/project-code/vue-ebook/vue-ebook-webapp/dis;        autoindex on;
        #解决跨域
        location / {
        add_header Access-Control-Allow-Origin *;
        }
        #是否走缓存
        add_header Cache-Control "no-cache, must-revalidate";
    }
  ```

- 403 问题处理 （读写权限问题）

  ```
    user  name(本机名) owner
  ```

### 阅读器开发

##### 需求：

```
阅读器-----解析+渲染 -------- 字号 + 字体 -------- 主题 -----------进度
-----目录 ------  搜索 --------  书签 ----------- 页眉、页脚 -------- 分页
```

##### 技术点

- epubjs
- vuex + mixin
- vue-i18n
- 动态切换主题、手势操作
