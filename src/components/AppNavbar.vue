<script>


export default{
  data(){
    return{
      menu:[
        {
          routeName: 'home',
          text: 'Home'
        },
        {
          routeName: 'portfolio',
          text: 'Portfolio'
        },
        {
          routeName: 'contact',
          text: 'Contact Us'
        }
      ]
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

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img src="../assets/matita.svg" alt="Logo" width="155" height="75" class="d-inline-block align-text-top">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item" v-for="menu_item in menu">
            <router-link :to="{ name: menu_item.routeName }" class="nav-link active" :aria-current="menu_item.text" href="#">{{ menu_item.text }}</router-link>
          </li>
          
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->

          
        </ul>

      </div>
    </div>
  </nav>

</template>

<style>

</style>

