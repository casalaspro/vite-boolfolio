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
  <AppNavbar />  <!-- <AppMain /> -->
   <router-view></router-view>

</template>

<style lang="scss">

// @use './style.css';


</style>
