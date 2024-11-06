<template>
    <div>
        <UslugiGlavniyDiv title="Монолитное строительство зданий" ></UslugiGlavniyDiv>

        <ContentUslForPage 
        :items="parentItems" :imgones="imgs"
        :showimgcont="false"
        :customStyle="customStyle"
        :disableAfter="true"
        :divVmestoimgtxt3="divVmestoimgtxt34"
        :Mcontcustomstyle="McontMonolit"
        :divVmestoimgtxt2="divVmestoimgtxt2mon"
        :divcontCUFP="divcontCUFPmon"
        :CUFPstyle='CUFPstylemon'
        :contIfNeeded="true"
        ></ContentUslForPage>
        <RabotaPoObject style="display: none;"></RabotaPoObject>
        <RabotaPoObjectAnother
        :imgs="imgitems"
        ></RabotaPoObjectAnother>
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
import RabotaPoObjectAnother from '@/components/RabotaPoObjectAnother.vue';
import VseNashiUslugiDiv from '@/components/VseNashiUslugiDiv.vue';



export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,
    RabotaPoObjectAnother,
    VseNashiUslugiDiv

  },
  data(){
    return{
      parentItems:[
        {opis: 'Монолитные здания могут служить более 100 лет, выдерживая экстремальные условия и нагрузки.' ,photo: require('@/assets/img/vodosikanal.webp'), text: 'Долговечность'},
        {opis: 'Высокая прочность позволяет монолитным конструкциям быть устойчивыми к землетрясениям и другим природным катаклизмам.' ,photo: require('@/assets/img/2492af3d849311ef9c9c46f041e3c814-transformed.png'), text: 'Сейсмоустойчивость'},
        {opis: 'Теплоизоляционные свойства монолита способствуют снижению энергозатрат на отопление и охлаждение зданий.' ,photo: require('@/assets/img/308_original.webp'), text: 'Энергоэффективность'},
        {opis: 'Монолитные конструкции позволяют воплощать сложные архитектурные решения, создавая уникальные формы и пространства.' ,photo: require('@/assets/img/nasos-dlya-perekachki-vody-4.jpg'), text: 'Гибкость дизайна'},

      ],
      imgs:[
        {img: require('@/assets/img/30258560060511319_bf8c.jpg')},
        {img: require('@/assets/img/fggggg.webp')},
        {img: require('@/assets/img/obj_2_1_orig.jpg')},
      ],
      imgitems:[
        {i: require('@/assets/img/30258560060511319_bf8c.jpg'), txt: 'Жилые комплексы'},
        {i: require('@/assets/img/XXL.webp'),  txt: 'Промышленные объекты'},
        {i: require('@/assets/img/1633712701_101-p-stroika-domovgrafii-foto-116.jpg'), txt: 'Коттеджные посёлки'},
        {i: require('@/assets/img/12ce27767fcb0d3def29627cafdcf9c5.jpg'),  txt: 'Коммерческие объекты'},
      ],

      CUFPstylemon:{
        width: '80%',gap: '10px',
        padding: '20px',
      },
      McontMonolit:{
        flex: "1 1 300px",
        height: 'auto', 
        
      },
      divcontCUFPmon:{
        width: '100%',
        height: '300px', 
        
      },
      customStyle:{
        backgroundColor: 'white', borderRadius: '15px', 
        flexWrap: 'wrap', 
        padding: '5px', minHeight: '200px',
        height: 'auto',
        minWidth: '200px',
        marginTop: '20px',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
      },
      divVmestoimgtxt2mon:{
        color: 'black',
        fontWeight: '500',
        fontSize:"20px",
      },
      
      divVmestoimgtxt34:{
        width: '100%' ,
        color: 'black',
        fontSize:"18px",
        marginTop: '20px',
        fontWeight: '400'
      },
      
      
      
    }
  }
}
</script>

<style scoped>
</style>