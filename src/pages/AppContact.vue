<script>
import axios from 'axios';

export default{
  data(){
    return{
        name: '',
        mail: '',
        message: "",
        errors: {},
        success: false,
        loading: false,
    }
  },
  methods:{
    sendMessage(){
      if(this.loading===true) return;

      this.errors = {}
      this.loading = true

      const data = {
        name: this.name,
        mail: this.mail,
        message: this.message
      }
      axios.post('http://127.0.0.1:8000/api/contacts', data)
      .then(res=>{
        if(res.data.success=== true){
          // è andata bene
        }else{
          this.errors = res.data.errors
        }
      }).finally(()=>{
        this.loading = false;
      })
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

    <form v-if="success === false" action="">
      <div class="mb-3">
        <label for="name"></label>
        <input type="text" name="name" id="name" v-model="name">
        <p class="alert alert-secondary" v-if="errors.name">
          {{ errors.name.join(' ') }}
        </p>
      </div>
      <div class="mb-3">
        <label for="mail"></label>
        <input type="email" name="mail" id="mail" v-model="mail">
        <p class="alert alert-secondary" v-if="errors.name">
          {{ errors.mail.join(' ') }}
        </p>
      </div>
      <div class="mb-3">
        <label for="message"></label>
        <textarea type="text" name="message" id="message" v-model="message">
        </textarea>
        <p class="alert alert-secondary" v-if="errors.name">
          {{ errors.message.join(' ') }}
        </p>
      </div>

      <div v-if="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
      </div>

      <button class="mb-3"type="submit">Send message</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>

</style>
