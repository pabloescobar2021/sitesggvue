<template>
    <div>
      <GlavniyDivSite></GlavniyDivSite>
      <UslugiDivIndex v-if="true" ></UslugiDivIndex>
      <RabotaPoObject></RabotaPoObject>
      <BottomSvyaz></BottomSvyaz>
      <FooterDivSite></FooterDivSite> 
      
    </div>
  </template>

  <script>
import GlavniyDivSite from '@/components/GlavniyDivSite.vue';
import UslugiDivIndex from '@/components/UslugiDivIndex.vue';
import RabotaPoObject from '@/components/RabotaPoObject.vue';
import BottomSvyaz from '@/components/BottomSvyaz.vue';
import FooterDivSite from '@/components/FooterDivSite.vue';


export default {
  name: 'App',
  components: {
    GlavniyDivSite,
    UslugiDivIndex,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    

  }
}

</script>

<style scoped>
</style>