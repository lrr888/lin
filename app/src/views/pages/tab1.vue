<template>
  <div>
    tab1
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  created(){
    this.getdate()
  },
  methods:{
    getdate(){
      this.$http.get('/api/app').then(res=>{
        console.log(res.data)
      })
    }
  }
}
</script>