<template>
    <div>
        <UslugiGlavniyDiv title="Электромонтажные работы"></UslugiGlavniyDiv>
        <BegushayaStroka :itemss="BegushayaStroka"></BegushayaStroka>
        <ContentUslForPage :items="parentItems" v-if="false" ></ContentUslForPage>
        <RabotaPoObject :images="img" ></RabotaPoObject>
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
import BegushayaStroka from '@/components/things/BegushayaStroka.vue';



export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,
    VseNashiUslugiDiv,
    BegushayaStroka,

  },
  data(){
    return{
      parentItems:[
        {photo: require('@/assets/img/vodosikanal.webp'), text: 'Водоснабжение и канализация'},
        {photo: require('@/assets/img/2492af3d849311ef9c9c46f041e3c814-transformed.png'), text: 'Дождевая канализация'},
        {photo: require('@/assets/img/308_original.webp'), text: 'Дренажные системы'},
        {photo: require('@/assets/img/nasos-dlya-perekachki-vody-4.jpg'), text: 'Канализационные насосные станции'},
        {photo: require('@/assets/img/c4aaa3537441487ca58363c88a97a526.png'), text: 'Водопроводная насосная станция'},
      ],
      BegushayaStroka:[
        {item:' Подведение силовых кабелей к объектам '},
        {item:' Монтаж распределительных щитов '},
        {item:' Установка и подключение электрооборудования '},
        {item:' Установка розеток, выключателей и осветительных приборов'},
        {item:' Автоматизация и система умного дома '},
        {item:' И другие '},
      ],
      img:[
        {img1: require('../assets/img/sdsdsd.jpg'), text1: 'Кафе и рестораны',
        img3: require('../assets/img/ob3.png'), text2: 'для цехов и производств',
        img2: require('../assets/img/ob2.png'), text3: 'для ТЦ и ТРК',
        img4: require('../assets/img/ob4.jpg'), text4: 'Для жилых домов',
        img5: require('../assets/img/ulit.jpg'), text5: 'Уличные работы',
        img6: require('../assets/img/ob6.png'), text6: 'Для офисов',
      }
      ]
    }
  }
}
</script>

<style scoped>
</style>