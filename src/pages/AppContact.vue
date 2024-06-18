<script>
import axios from 'axios';

export default{
  data(){
    return{
        name: '',
        mail: '',
        message: "",
    }
  },
  methods:{
    sendMessage(){
      const data = {
        name: this.name,
        mail: this.mail,
        message: this.message
      }
      axios.post('http://127.0.0.1:8000/api/contacts', data)
    }
  },
  created(){
    
  },
  components:{

  }
}

</script>

<template>
  <section>
    <h1 class="py-5">Contact Me!</h1>

    <form action="">
      <div class="mb-3">
        <label for="name"></label>
        <input type="text" name="name" id="name" v-model="name">
      </div>
      <div class="mb-3">
        <label for="mail"></label>
        <input type="email" name="mail" id="mail" v-model="mail">
      </div>
      <div class="mb-3">
        <label for="message"></label>
        <textarea type="text" name="message" id="message" v-model="message">
        </textarea>
      </div>

      <button class="mb-3"type="submit">Send message</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>

</style>
