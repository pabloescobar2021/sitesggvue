<template>
    <div>
        <UslugiGlavniyDiv title="Кровельные работы"></UslugiGlavniyDiv>

        <ContentUslForPage :items="parentItems"></ContentUslForPage>
        <AfterUslugiDiv
        :items2="items2"
        :allafter="allafter"
        ></AfterUslugiDiv>
        <RabotaPoObjectAnother :imgs="imgs"></RabotaPoObjectAnother>
        <VseNashiUslugiDiv></VseNashiUslugiDiv>
        <BottomSvyaz></BottomSvyaz>
        <FooterDivSite></FooterDivSite>  
      </div>
</template>

<script>
import UslugiGlavniyDiv from '@/components/UslugiGlavniyDiv.vue';
import BottomSvyaz from '@/components/BottomSvyaz.vue';
import FooterDivSite from '@/components/FooterDivSite.vue';
import ContentUslForPage from '@/components/uslugi/ContentUslForPage.vue';
import VseNashiUslugiDiv from '@/components/VseNashiUslugiDiv.vue';
import AfterUslugiDiv from '@/components/uslugi/AfterUslugiDiv.vue';
import RabotaPoObjectAnother from '@/components/RabotaPoObjectAnother.vue';



export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,
    VseNashiUslugiDiv,
    AfterUslugiDiv,
    RabotaPoObjectAnother

  },
  data(){
    return{
      parentItems:[
        {photo: require('@/assets/img/falc.webp'), text: 'Фальцевая кровля'},
        {photo: require('@/assets/img/eks.webp'), text: 'Эксплуатируемая кровля'},
        {photo: require('@/assets/img/ker.webp'), text: 'Кровля из керамики'},
      ],
      items2:[
        {t1: 'Гарантия на все выполненные работы'},
        {t1: 'Соблюдаем сроки, указанные в договоре'},
        {t1: 'Высококвалифицированные специалисты '},
        {t1: 'Работы выполняются по установленным стандартам и технологиям.'},
      ],
      imgs:[
        {i: require('@/assets/img/22012ad19d9d38561bf32cc159b83379.jpg'), txt:'Жилые комплексы'},
        {i: require('@/assets/img/jc1F3d_hQ8w.jpg'),txt:'Промышленные объекты'},
        {i: require('@/assets/img/proekt-karkasnogo-doma-kd-530-1.jpg'),txt:'Коттеджные поселки'},
        {i: require('@/assets/img/441_original.webp'),txt:'Коммерческие объекты'},

      ]

      // allafter:{
      //   backgroundImage: `url(${require('@/assets/img/f27005479b0711ef8507329d19dd9c8f_1.jpeg')})`,
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   backgroundAttachment: 'fixed',
      // },
    }
  }
}
</script>

<style scoped>
</style>