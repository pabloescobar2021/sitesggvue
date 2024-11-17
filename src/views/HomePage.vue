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
  name: 'HomePage',
  components: {
    GlavniyDivSite,
    UslugiDivIndex,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
  },
  metaInfo: {
    title: 'Инженерно-строительная компания ССГ - Главная',
    meta: [
      {name: 'description',content: 'Инженерно-строительная компания, занимающаяся нвк, отоплением, водоснабжением, водоотведением, теплосетями '},
      { name: 'keywords', content: 'инженерно-строительная компания, электромонтажные работы, отопление, водоснабжение, монтаж теплосетей, строительство' },
      { property: 'og:title', content: 'Инженерно-строительная компания ССГ - Главная' },
      { property: 'og:description', content: 'ССГ предлагает полный комплекс строительных и инженерных услуг для вашего бизнеса и дома.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ssg-n.ru/' },
      { property: 'og:image', content: 'https://https://ssg-n.ru/path/to/image.jpg' },
    ]
  }
}

</script>

<style scoped>
</style>