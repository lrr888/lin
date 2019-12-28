<template>
  <div id="app">
    <header>
      猫眼电影
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <FooterBar/>
    </footer>
  </div>
</template>
<script>
import FooterBar from "@/components/FooterBar.vue"
export default {
  components:{
    FooterBar
  }
}
</script>
<style lang="scss">
@import url('../src/assets/css/reset.scss');
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
header{
  width: 100%;
  height: 50px;
  background: red;
  color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
main{
  flex: 1;
  overflow: auto;
}
footer{
  width: 100%;
  height: 50px;
  background: #ccc;
  .foots{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
