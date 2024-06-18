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
        if(res.data.seccess){
          console.log(res.data.results.data);
          this.works = res.data.results.data;
        }else{
          this.$router.replace({
            name: 'not-found'
          })
        }
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

    <ul class="grid grid-cols-3 gap-4">
      <li class="border p-4 shadow-lg rounded-lg" v-for="work in works" :key="work.id">
        <h2 class="text-lg text-green-400 font-medium">{{ work.title }}</h2>

        <p v-if="work.type" class="text-gray-600">
          Type of Work: {{ work.type.name }}
        </p>

        <ul class="flex flex-wrap gap-2 mt-2">
          Technologies used: <br>
          <li class="rounded-full bg-gray-200 px-3 leading-6" v-for="tech in work.technologies" :key="tech.id">
            
            {{ tech.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
  
</template>

<style>

</style>
