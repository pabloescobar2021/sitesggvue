<template>
    <div>
        <UslugiGlavniyDiv title="Кондиционирование, вентиляция, пожаротушение"></UslugiGlavniyDiv>

        <ContentUslForPage :items="parentItems"></ContentUslForPage>
        <RabotaPoObject></RabotaPoObject>
        <VseNashiUslugiDiv></VseNashiUslugiDiv>
        <BottomSvyaz></BottomSvyaz>
        <FooterDivSite></FooterDivSite>  
      </div>
</template>

<script>
import UslugiGlavniyDiv from '@/components/UslugiGlavniyDiv.vue';
import RabotaPoObject from '@/components/RabotaPoObject.vue';
import BottomSvyaz from '@/components/BottomSvyaz.vue';
import FooterDivSite from '@/components/FooterDivSite.vue';
import ContentUslForPage from '@/components/uslugi/ContentUslForPage.vue';
import VseNashiUslugiDiv from '@/components/VseNashiUslugiDiv.vue';



export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,
    VseNashiUslugiDiv

  },
  data(){
    return{
      parentItems:[
        {photo: require('@/assets/img/fdc281ff7f7811ef95650ad361d3e203.png'), 
        text: 'Кондиционирование'},
        {photo: require('@/assets/img/400612027f7911ef8c41e64959f934a7.png'), 
        text: 'Вентиляция'},
        {photo: require('@/assets/img/8c1ea3a37f7911ef960f160f3f05b604.png'), 
        text: 'Пожаротушение'},
        

      ]
    }
  }
}
</script>

<style scoped>
</style>