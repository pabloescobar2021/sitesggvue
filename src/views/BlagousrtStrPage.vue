<template>
    <div>
        <UslugiGlavniyDiv title="Благоустройство"></UslugiGlavniyDiv>

        <ContentUslForPage :items="parentItems"></ContentUslForPage>
        <RabotaPoObject :images="img"></RabotaPoObject>
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
        {photo: require('@/assets/img/1627131570_15-p-ozelenenie-18.jpg'), text: 'Озеление'},
        {photo: require('@/assets/img/landshaftnyj-dizajn-dorozhki-65-foto-idej41.jpg'), text: 'Устройство дорожек и площадок'},
        {photo: require('@/assets/img/FEM5mbQ1Vvs.jpg'), text: 'Освещение территории'},
        {photo: require('@/assets/img/5af8823645c35.jpg'), text: 'Ограждения и заборы'},
        {photo: require('@/assets/img/f.jpeg'), text: 'Малые архитектурные формы'},
        {photo: require('@/assets/img/i.webp'), text: 'Укладка газона'},
      ],
      img:[
      {img1: require('../assets/img/cf48c3a65ceef58f93200358e96b22d1.jpg'), text1: 'Производственные предприятия ',
        img2: require('../assets/img/komers.webp'), text2: 'Коммерческие здания ',
        img3: require('../assets/img/diploma.webp'), text3: 'Частные дома и коттеджи ',
        img4: require('../assets/img/pexels-izafi-23507929.jpg'), text4: 'Жилые комплексы и многоквартирные дома   ',
        img5: require('../assets/img/6-pic_32ratio_900x600-900x600-1040.jpg'), text5: 'Объекты инфраструктуры ',
        img6: require('../assets/img/shk.webp'), text6: 'Социальные объекты ',}
      ]
    }
  }
}
</script>

<style scoped>
</style>