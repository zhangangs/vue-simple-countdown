<template>
  <button type="text" @click="countDown()" :disabled="disabled">{{text}}</button>
</template>

<script>
export default {
  name: "simple-countdown",
  data() {
    return {
      disabled: false, // 是否可以操作
      text: this.defaultText, // 展示到view的文字
      timer: null, // 用于储存定时器
      second: this.count // 另存一份，不要修改父级传递过来的数据，不然会报错
    };
  },
  props: {
    // 倒计时总时间
    count: {
      type: Number,
      default: 60
    },

    // 默认文字
    defaultText: {
      type: String,
      default: "发送验证码"
    },

    // 倒计时结束设置的文字
    resetText: {
      type: String,
      default: "重新发送"
    }
  },
  methods: {
    // 倒计时
    countDown() {
      // 触发发送验证码
      this.$emit("sendSms");
      this.timer = setInterval(() => {
        if (this.second === 1) {
          clearInterval(this.timer);
          this.disabled = false;
          this.text = this.defaultText;
          // 重置倒计时
          this.second = this.count;
        } else {
          this.second--;
          this.disabled = true;
          this.text = this.resetText + "(" + this.second + ")";
        }
      }, 1000);
    }
  }
};
</script>