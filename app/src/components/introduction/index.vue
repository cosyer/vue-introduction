<template>
  <div class="introduction">
    <p>
      你好，我是
      <b>cosyer</b>，我是一名前端工程师，目前居住在南京。
    </p>
    <p>
      目前在
      <a
        href="https://www.sheincorp.cn/"
        target="_blank"
      >SHEIN</a> 任职。
    </p>
    <p>
      如果你对编程感兴趣的话，欢迎直接
      <a @click="contactMe">联系我</a>，或者通过
      <a
        href="https://github.com/cosyer/"
        target="_blank"
      >GitHub</a> 和
      <a
        href="https://mydearest.cn/"
        target="_blank"
      >博客</a>。
    </p>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  methods: {
    contactMe() {
      const daovoice = window.daovoice;
      if (!daovoice) return;
      daovoice("openNewMessage", "hi, ");
    },
  },
};
</script>

<style lang="scss" scoped>
$font-color: #999;

.introduction {
  padding-top: 0px;
  p {
    font-size: 14px;
    line-height: 2em;
    margin: 0;
    letter-spacing: 2px;
    text-decoration: none;
    transition: color 0.2s ease;
    padding-top: 12px;
    // cursor: pointer;
    a {
      color: $font-color;
      text-decoration: none;
      transition: color 0.2s ease;
      cursor: pointer;
      &:hover {
        color: #f33;
      }
    }
  }
}
</style>
