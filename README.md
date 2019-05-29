# vue-simple-countdown

简单的vue倒计时功能

![](https://raw.githubusercontent.com/zhangangs/vue-simple-countdown/master/public/demo.gif)

## Install
```
npm install vue-simple-countdown --save
```

## Usage
Import:
```javascript
import simpleCountdown from 'vue-simple-countdown'
Vue.use(simpleCountdown)
```
Use:
```html
<template>
  <div id="app">
    <simple-countdown class="btn-send" :count="60" @sendSms="sendSms"/>
    <!-- <simple-countdown
        class="btn-send"
        :count="60"
        @sendSms="sendSms"
        default-text="默认文字"
        reset-text="倒计时文字"
      /> -->
  </div>
</template>
export default {
  name: "app",
  methods: {
    sendSms() {
      alert("验证码发送成功!");
    }
  }
};
</script>
```
## Available props
The component accepts these props:


属性 | 类型 | default | 描述
---|---|---|---
count | Number | `60` | 倒计时总时间(默认60秒)
sendSms | Function | 无 | 回调函数，调用短信接口
defaultText | String | '发送验证码' | 默认展示的文字
resetText | String | '重新发送' | 正在倒计时的文字


