# element1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 说明

该模板是适配了 PC 端，然后可以使用 scss 来自定义全局 css 变量，使用了 element-ui

### 自定义组件说明

#### InfiniteScroll 无限滚动组件

使用该组件需要传入一个函数，函数格式类似下面的例子（这里使用setTimeout来模拟ajax请求）

```
loadingData: {
  type: Function,
  default: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          count: 30,
          all: 30,
        });
        reject(10);
      }, 2000);
    });
  },
},
```

#### CustomRadio 自定义单选框组件

使用该组件需要使用 v-model 来绑定一个值，并且需要传入一个数组，noSelect 属性是决定这个单选框可不可以一个都不选择，默认为 false（必须选择一个）

```
<CustomRadio v-model="city" :radioData="cityData" :noSelect="true" />
```
