<template>
    <div>
        <UslugiGlavniyDiv title="Кондиционирование, вентиляция, пожаротушение"></UslugiGlavniyDiv>

        <ContentUslForPage :items="parentItems"></ContentUslForPage>
        <RabotaPoObject></RabotaPoObject>
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



export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,

  },
  data(){
    return{
      parentItems:[
        {photo: require('@/assets/img/vodosikanal.webp'), text: 'Водоснабжение и канализация'},
        {photo: require('@/assets/img/2492af3d849311ef9c9c46f041e3c814-transformed.png'), text: 'Дождевая канализация'},
        {photo: require('@/assets/img/308_original.webp'), text: 'Дренажные системы'},
        {photo: require('@/assets/img/nasos-dlya-perekachki-vody-4.jpg'), text: 'Канализационные насосные станции'},
        {photo: require('@/assets/img/c4aaa3537441487ca58363c88a97a526.png'), text: 'Водопроводная насосная станция'},

      ]
    }
  }
}
</script>

<style scoped>
</style>