<template>
  <div id="app">
    <div class="header">
      <h3>用户注册</h3>
    </div>
    <div class="form">
      <div class="form-group">
        <label class="form-label">手机号码</label>
        <div class="form-cell">
          <input type="text" placeholder="手机号码">
          <simple-countdown class="btn-send" :count="60" @sendSms="sendSms"/>
          <!-- <simple-countdown
            class="btn-send"
            :count="60"
            @sendSms="sendSms"
            default-text="默认文字"
            reset-text="倒计时文字"
          /> -->
        </div>
      </div>
      <div class="form-group">
        <input type="checkbox">
        <a href="javascript:">阅读并接受《隐私权保护声明》</a>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    sendSms() {
      alert("验证码发送成功!");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 30%;
  margin: auto;
}
* {
  box-sizing: border-box;
}

a {
  color: #286ce7;
  text-decoration: none;
}
input[type="text"] {
  width: 100%;
  border: 1px solid #e1e1e1;
  padding: 12px 8px;
  outline: none;
  transition: all 0.3s linear;
  border-radius: 2px;
}
input:hover,
input:focus {
  border-color: #3d76dd;
}

.header {
  margin-top: 50px;
  border-bottom: 1px solid #e1e1e1;
}
.form {
  margin-top: 20px;
}
.form-group {
  margin-bottom: 20px;
}
.form-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-cell .btn-send {
  margin-left: 10px;
  width: 40%;
  padding: 11px 0;
  border: 1px solid #ddd;
  background: #f7f7f7;
  border-radius: 2px;
}
.form-label {
  display: block;
  margin-bottom: 10px;
}

.btn {
  background: 2196f3;
  border-radius: 3px;
  border: none;
  color: #fff;
  padding: 14px 20px;
  width: 100%;
}

.btn-primary {
  background-color: #3d76dd;
}
</style>
