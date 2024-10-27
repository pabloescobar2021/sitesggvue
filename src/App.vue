<template>
  <div id="app">
    <MyCustomComponent class="mainfooter"></MyCustomComponent>
    <GlavniyDivSite></GlavniyDivSite>
    <UslugiDivIndex></UslugiDivIndex>
    <RabotaPoObject></RabotaPoObject>
    <BottomSvyaz></BottomSvyaz>
    
  </div>
</template>

<script>
import MyCustomComponent from './components/MyCustomComponent.vue';
import GlavniyDivSite from './components/GlavniyDivSite.vue';
import UslugiDivIndex from './components/UslugiDivIndex.vue';
import RabotaPoObject from './components/RabotaPoObject.vue';
import BottomSvyaz from './components/BottomSvyaz.vue';

export default {
  name: 'App',
  components: {
    MyCustomComponent,
    GlavniyDivSite,
    UslugiDivIndex,
    RabotaPoObject,
    BottomSvyaz,

  }
}
</script>


<style>
#app{
  /* background-color: rgb(212, 212, 212); */
}
</style>