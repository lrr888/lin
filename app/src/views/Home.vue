<template>
  <div class="home">
    <router-link to="/home/tab1">正在热映</router-link>
    <router-link to="/home/tab2">即将上映</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
   
  }
}
</script>
<style lang="scss">
.home{
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
  

</style>
