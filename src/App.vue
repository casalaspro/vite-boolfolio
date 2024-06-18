<script>
  import AppNavbar from './components/AppNavbar.vue';
  

  export default{
  data(){
    return{
      // message: 'Ciao Mondo!',
    }
  },
  methods:{

  },
  created(){
    
  },
  components:{
    AppNavbar
  }
}

</script>

<template>
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Vite</title>
  </head>
  <body>

    <AppNavbar />  <!-- <AppMain /> -->
    <router-view></router-view>

  </body>
</html>
  


</template>

<style lang="scss">
  @use 'style/general.scss';
</style>
