<template>
  <div id="app">
    <div class="desc">
      <introduction></introduction>
      <skate-board></skate-board>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">

html, body, #app{
  margin: 0;
  padding: 0;
}
#app {
  min-height: 400px;
  font-family: Montserrat,Helvetica Neue,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .desc{
    width: 80vw;
    margin: 0 auto;
  }
}

</style>
