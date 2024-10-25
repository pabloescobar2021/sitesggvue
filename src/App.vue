<template>
  <div id="app">
    <MyCustomComponent class="mainfooter"></MyCustomComponent>
    <GlavniyDivSite></GlavniyDivSite>
    <UslugiDivIndex></UslugiDivIndex>
    <RabotaPoObject></RabotaPoObject>
    
  </div>
</template>

<script>
import MyCustomComponent from './components/MyCustomComponent.vue';
import GlavniyDivSite from './components/GlavniyDivSite.vue';
import UslugiDivIndex from './components/UslugiDivIndex.vue';
import RabotaPoObject from './components/RabotaPoObject.vue';

export default {
  name: 'App',
  components: {
    MyCustomComponent,
    GlavniyDivSite,
    UslugiDivIndex,
    RabotaPoObject,

  }
}
</script>


<style>

</style>