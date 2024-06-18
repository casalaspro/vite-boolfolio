<script>


export default{
  data(){
    return{

    }
  },
  methods:{

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
        <input type="text" name="name" id="name">
      </div>
      <div class="mb-3">
        <label for="mail"></label>
        <input type="email" name="mail" id="mail">
      </div>
      <div class="mb-3">
        <label for="message"></label>
        <textarea type="text" name="message" id="message">
        </textarea>
      </div>

      <button class="mb-3"type="submit">Send message</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>

</style>
