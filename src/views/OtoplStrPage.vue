<template>
    <div>
        <UslugiGlavniyDiv title="Отопление, водоснабжение, водоотведение"></UslugiGlavniyDiv>

        <ContentUslForPage :items="parentItems"></ContentUslForPage>
        <RabotaPoObject></RabotaPoObject>
        <AfterUslugiDiv
        :items2="afteruslfuv"
        ></AfterUslugiDiv>
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
import AfterUslugiDiv from '@/components/uslugi/AfterUslugiDiv.vue';



export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,
    AfterUslugiDiv,

  },
  data(){
    return{
      parentItems:[
        {
          photo: require('@/assets/img/production-hard-cheese-cheese-manufacture-interior.jpg'), 
          text: 'Водоснабжение и канализация',
          txt: [
                'Проектирование и монтаж систем отопления',
                'Установка котельных и тепловых пунктов',
                'Монтаж радиаторов и тёплых полов',
                'Автоматизация отопительных систем',
                'Обслуживание и ремонт систем отопления'
          ],
          
        },
        
        {photo: require('@/assets/img/isdsd.webp'), 
        text: 'Водоснабжение',
        txt: [
                'Проектирование и монтаж систем водоснабжения',
                'Установка насосных станций и резервуаров',
                'Монтаж трубопроводов и сантехнических систем',
                'Водоподготовка и фильтрация',
                'Обслуживание водоснабжения'
          ]
        },
        {photo: require('@/assets/img/ffsssd.webp'), 
        text: 'Водоотведение',
        txt: [
                'Проектирование систем водоотведения',
                'Установка канализационных систем',
                'Очистные сооружения и септики',
                'Обслуживание и ремонт систем водоотведения',
                'Прокладка ливневой канализации'
          ]
        },
      ].map(item => ({ ...item, podr: 'Подробнее' })),
      podr: 'Подробнее',
      
    }
  }
}
</script>

<style scoped>
</style>