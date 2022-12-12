<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <button :class="{title ? 'disabled-btn' : 'btn'}">立即登录</button>
    </view>
  </view>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { points } from "../../hooks/useCounter";
const title = ref("Hello");
interface baseObj {
  // name: Number;
  name: String;
}

const fun = () => {
  console.log(1);
  const a: baseObj = {
    name: "ahe"
  };
};
interface basic {
  name: String;
  
}



console.log(points);
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
