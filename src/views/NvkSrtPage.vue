<template>
    <div>
        <UslugiGlavniyDiv title="НВК"></UslugiGlavniyDiv>

        <ContentUslForPage 
        :items="parentItems"
        
        ></ContentUslForPage>
        <AfterUslugiDiv style="display: none;"
        :items2="afteruslfuv"
        ></AfterUslugiDiv>
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
import AfterUslugiDiv from '@/components/uslugi/AfterUslugiDiv.vue';
import VseNashiUslugiDiv from '@/components/VseNashiUslugiDiv.vue';




export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,
    AfterUslugiDiv,
    VseNashiUslugiDiv

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
      afteruslfuv:[
        {t1: 'Опыт и профессионализм', t2:'Многолетний опыт в проектировании и монтаже наружных сетей водоснабжения и канализации. Гарантирия качественной и своевременой реализации работ.'},
        {t1: 'Использование современных технологий', t2:'Мы применяем передовые решения и оборудование, что позволяет минимизировать эксплуатационные затраты и продлить срок службы инженерных систем.'},
        {t1: 'Комплексный подход', t2:'Мы предлагаем полный цикл услуг — от разработки проектной документации до сдачи объекта "под ключ". Это позволяет обеспечить согласованность всех процессов и избежать дополнительных затрат.'},
        {t1: 'Надежность и долговечность', t2:'Мы используем только проверенные материалы высокого качества, которые обеспечивают бесперебойную работу систем на долгие годы.'},
        {t1: 'Индивидуальный подход', t2:'Для каждого клиента мы разрабатываем уникальные инженерные решения с учётом всех особенностей объекта и пожеланий заказчика.'},
        {t1: 'Гарантийное обслуживание', t2:'Мы предоставляем гарантию на все выполненные работы и при необходимости оперативно устраняем любые возможные проблемы.'},
      ]
    }
  }
}
</script>

<style scoped>
</style>