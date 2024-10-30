<template>
  <div id="app">
    <MyCustomComponent class="mainfooter"></MyCustomComponent>
    <Router-View></Router-View>
    
  </div>
</template>



<script>
import MyCustomComponent from './components/MyCustomComponent.vue';

export default {
  name: 'App',
  components: {
    MyCustomComponent,

  }
}
</script>


<style>
#app{
  /* background-color: rgb(212, 212, 212); */
}
</style>