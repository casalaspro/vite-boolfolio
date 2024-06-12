<script>
import axios from 'axios'

export default{
  data(){
    return{
      works: [],
      currentPage: 1,
      lastPage: null,

    }
  },
  methods:{
    fetchWorks(){
      axios.get('http://127.0.0.1:8000/api/works')
    }
  },
  created(){
    
  },
  components:{

  }
}

</script>

<template>

  <h2>AppMain</h2>
  
</template>

<style>

</style>
