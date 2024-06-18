<script>
import BentoBox from '../components/BentoBox.vue'

export default{
  data(){
    return{
      technologies: [
        'css', 'javascript', 'laravel', 'php', 'mysql'
      ]
    }
  },
  methods:{

  },
  created(){
    
  },
  components:{
    BentoBox
  }
}

</script>

<template>

  <section class="section-home mt-5">
    <div class="container">
      <h1>Alessandro Casalaspro</h1>
      <h2>Web Developer</h2>

      <div class="technologies-wrapper">
        <BentoBox v-for="technology in technologies" :key="technology">
          {{ technology }}
        </BentoBox>
      </div>

    </div>
  </section>
  
</template>

<style lang="scss" scoped>

  .section-home{
    background-color: #49CE0D;

  }
</style>
