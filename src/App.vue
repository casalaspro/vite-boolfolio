<script>
  import AppMain from './components/AppMain.vue';

  export default{
  data(){
    return{
      message: 'Ciao Mondo!',
    }
  },
  methods:{

  },
  created(){
    
  },
  components:{
    AppMain
  }
}

</script>

<template>
  <h1>{{ message }}</h1>
  <AppMain />

</template>

<style lang="scss">

// @use './style.css';


</style>
