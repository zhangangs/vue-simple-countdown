# vue-simple-countdown

简单的vue倒计时功能

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAABTCAYAAAAiGbPpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEa8AABGvAff9S4QAAASOSURBVHhe7ZhRbuIwFEXZIVJX0gVUFUuBncA+Wokf/viv+PLE9nXixC/BgQLR9FzpaKqQOC65x05n5QghIchAiIIMhCjIQIiCDIQoyECIggyEKMhAiIIMhCjIQIiCDIQoyECIggyEKMhAiIIMhCjIQIiCDIQos2W4XC7udDq57+9vgIfju+Y794zMlsFP7nw+u5+fH4CH47vmO/eMzJbB22pNGuBR+M49I8gAiwcZAAQyAAhkABDIACCQAUAgA4BABgCBDAACGQAEMgAIZAAQyAAgkAFAIAOAQAYAgQy/wtFt31ZuvTu2x467tVt97rNz8nPXbvs1PL53m9XG7XvHIn6sfOw64pxWb1t3tD4/bEbm93dBhlv42rr1Ki+0L/JAhq99LGNzfHNI5wlfxN71kf2nUV6duzl0Y4fzmnFzClnCdf4zS7xmfs3n6/y69vwaGmlHz9+4rV8IzM8ixfexEJDhBorSFnJ0hB3CWJ3D8WIniKt5WxaJYI3bMbgm0Mk5dv+ACj2+65Q7nkX4Pmp2mfA92bvfEkCGuYQHOihfKNXch9wUbdeUtCm6tdLbpHvkAsTi5/PpyxrPHSvr9CtYjQzl/T1+DsV1/nsaE3MBIMNcRl8Pari2yifyslsMZejGtXec8jWujgoZzILb11XvIC8CGe7m1qJNcU2GTIDsFc0WIRHnea2M/RX9ugzmDmDOv0KsF4MM9xJ2itoVPxVWO8VoMWNx62VoBEivanqN6+9I4nMbCrl6/8jO6cszSwbjXtZuFbGOLQtkuJOw9Q8KUVKWoHtl0IpdSShmEsCPlSTIxq4mH0dYMgznkCSNv3v63fLd4NrvtEwpkOEetDJuPptCTvyBapW1k6F/PGK9ZmSYq//gHuGcvHSxoL1VvlIGc2do52DJMEExr+WADHcQCh3+ePRFsB6wUUAxKUNbtMoVv90d4v1iIQfltEp4hwzhvGYR6MaslGHma+UzQYZbUWHbh+8f8uB/VULhRwo9LkMslf8s/X1RVzB/n+5afzy/RxhreL9MhuNuG/6tlSHQE2yODPZ38mqQ4Sb6pUv0Chce+ng5bBk0bl4WjVMUUsfDKrvrChbmICm7n0eKmmTI5nq/DFN/L6R7IcOsLFmGuGLbDzR+Fh/+1CpZyJDKXfyffYN2oXi+ylZcq/nkBU0/H1T6dH7vOj/X7rNH7wxT392rQYaZxIeZCpATyxALvQ7lHS1RQy5D+NkcMyf/e2CAL3UrUVngQjzR7Rzdsfky6HcW12QIc7GEXwDIMIfeSpgfUxkGhWt3id7xTBrjmluYLtiERC1TrzY2YbyqnWE49jXpXwcy3Er7ilHxcLNzP96bf1sBBmLUoGvjbpLwc6gf69rq/VdBBgCBDAACGQAEMgAIZAAQyAAgkAFAIAOAQAYAgQwAAhkABDIACGQAEMgAIJABQCADgFisDKfTyZ3PZ3PSAL+N75rv3DMyW4bL5RIm520FeDS+a75zz8hsGQj5X4MMhCjIQIiCDIQoyECIggyEKMhAiIIMhCjIQIiCDIQoyECIggyEKMhASIhz/wD3tBcd8pCPAwAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAABhCAYAAACONdAjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEa8AABGvAff9S4QAAATUSURBVHhe7ZhNcuI6FEZ76ezAS4AN9IRsIiwiFSbMmKcYuS3JNpJ8JRuCgfe+81WdQftHltG5V07/aQkRCbITmSA7kQmyE5kgO5EJshOZIDuRCbITmSA7kQmyE5kgO5EJshOZIDuRCbITmSA7kQmyE5kgO5EJshOZIDuRCbITmSA7kUlV9svl0p5Op/br6wtgdZxrzrm1UpXdPfx8Prc/Pz8Aq+Ncc86tlarsrtqsSQGshXNurSA7vBXIDjIgO8iA7CADsoMMyA4yIDvIgOwgA7KDDMgOMiA7yIDsIAOygwzIDjIgO8iA7L/m0G43m7b5OBrn4J1A9kfwuW03m217sM7F+Os27WZ3sM97QvFsP6/HDrtSMR3bfdO0++/8uBvDns/xo5EtTFnZ3aJ78W5kkNAJaJ0PONGCtMnxQfLvY3sc5pIXyve+bbprr7J3134PYxli+/unx/38mv31OY7+2u0nsj86/83O7mWzuuWUwy6/Lu600w49xV0fFYGjskt4gY1dIRRufk8Ye3x+oSiuhOvjrl8q6PSd+ncYz+fzcL/Dst9zbSRlv7erjwwdMxPTj9t0/14quyFgGCPryLN0wn1093Tj1HecmFTK6XONQpzQ7zjRfeG3zeSuFPAzobPn3NDZk+7p74sXdF723xXdUnmiOZrnO8x3Xjr//D6rSMKxV/+tICx7vygTiSokHd04H9F0nXb+MyZj8r3+COZlN7/vFxS9eV9HKIKsGN+gu8vLPuk2pUV2i2UsbPlcv8UXsOQzJamQ7AzFz425Dh3O57/D0LWbpCGkv0tddnuneGV3p7OPC7mAO2QfJZvtbEvnMx3DS+dlrxdYjhevsJuEb/9U2KG4hmtLxWndO75f9W+AdaGz39XZ58R0Atwouz/ftNtd+f/BS530Knt6PBDmWuzs/XMn72vSv/c4h764ojldd5vpmKX5Pwtkv0v2JeecCNE4Vdl7icbubFxX6MCOquz9faVn258cZULXjsdKdxP/exYKCNlfxlx3NkgWKurcveyHTpyxeLxkkRQ12TM5vICJvHlHTSnLfi2i/BNkpCBmiansU/yzjLki+7tR6uwZycL1sh+jbj5Z8KLsoWjyHcaNPxyb67627EMx5wWXPcvcMUrFdS0e9+8wr/yd0mvmjz8PXdn7hb8VL4rVtWPxd3u/sIlUBdlr3c6f88+tF99E9uHdrHGHz5rxervYhjHi42E+8Vym94Zrlhf1M6Gz5yzs7DF5Fzc7niH7nBhetsaNVfkDsyOWfSqkRRh/GHOyCw0MhTFSn6unULilYn8mkrIHIX6BX9DhMyFw7VjhuP1tHC22tfh9N03HCwxzTo+nc7j7E8H8lHkkYZ6v7OoOOvsbEHYCJ+x854uv/Rt19In4S4iKo9jdH8EbdHUHskPPWt3Xfebc9lm4FsgOMiA7yIDsIAOygwzIDjIgO8iA7CADsoMMyA4yIDvIgOwgA7KDDMgOMiA7yIDsIMPLZD+dTu35fDYnBfBonGvOubVSlf1yufiHu2oDWBvnmnNurVRlJ+T/FGQnMkF2IhNkJzJBdiITZCcyQXYiE2QnMkF2IhNkJzJBdiITZCcyQXYiE2QnMkF2IhNkJzJBdiITZCcyQXYiE2QnMkF2IhNkJzJBdiKStv0HPfUGXSmwqXsAAAAASUVORK5CYII=)

## Usage
Install：
```
npm install vue-simple-countdown --save
```

Import:
```javascript
import simpleCountdown from 'vue-simple-countdown'
Vue.use(simpleCountdown)
```

## Use
```
<template>
  <div id="app">
    <simple-countdown class="btn-send" :count="60" @sendSms="sendSms"/>
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
## options

名称 | 描述 | default
---|---|---
count | 倒计时总时间 | 60
sendSms | 回调函数 | 无
defaultText | 默认文字 | '发送验证码'
resetText | 正在倒计时文字 | '重新发送'


