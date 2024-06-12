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

      .then((res)=>{
        console.log(res.data.results.data);
        this.works = res.data.results.data;
      })

    }
  },
  created(){
    this.fetchWorks()
  },
  components:{

  }
}

</script>

<template>

  <!-- <h2>AppMain</h2> -->

  <div class="container">
    <h2 class="text-2xl my-8">These are my Projects</h2>

    <ul class="grid grid-cols-3 gap-4">
      <li class="border p-4 shadow-lg rounded-lg" v-for="work in works" :key="work.id">
        <h2 class="text-lg text-green-400 font-medium">{{ work.title }}</h2>
      </li>
    </ul>
  </div>
  
</template>

<style>

</style>
