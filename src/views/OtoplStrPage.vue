<template>
    <div>
        <UslugiGlavniyDiv title="Отопление, водоснабжение, водоотведение"></UslugiGlavniyDiv>

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
        {
          photo: require('@/assets/img/production-hard-cheese-cheese-manufacture-interior.jpg'), 
          text: 'Водоснабжение и канализация',
          txt: [
                'Проектирование и монтаж систем отопления',
                'Установка котельных и тепловых пунктов',
                'Монтаж радиаторов и тёплых полов',
                'Автоматизация отопительных систем',
                'Обслуживание и ремонт систем отопления'
          ]
        },
        
        {photo: require('@/assets/img/isdsd.webp'), 
        text: 'Дождевая канализация',
        txt: [
                'Проектирование и монтаж систем отопления',
                'Установка котельных и тепловых пунктов',
                'Монтаж радиаторов и тёплых полов',
                'Автоматизация отопительных систем',
                'Обслуживание и ремонт систем отопления'
          ]
        },
        {photo: require('@/assets/img/ffsssd.webp'), 
        text: 'Дренажные системы',
        txt: [
                'Проектирование и монтаж систем отопления',
                'Установка котельных и тепловых пунктов',
                'Монтаж радиаторов и тёплых полов',
                'Автоматизация отопительных систем',
                'Обслуживание и ремонт систем отопления'
          ]
        },

      ]
    }
  }
}
</script>

<style scoped>
</style>