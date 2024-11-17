<template>
  <div id="app">
    <MyCustomComponent class="mainfooter"></MyCustomComponent>
    <Router-View></Router-View>
    
  </div>
</template>



<script>
import MyCustomComponent from './components/MyCustomComponent.vue';

export default {
  name: 'App',
  components: {
    MyCustomComponent,

  },
  metaInfo: {
    title: 'Инженерно-строительная компания ССГ - Главная',
    meta: [
      {name: 'description',content: 'Инженерно-строительная компания, занимающаяся нвк, отоплением, водоснабжением, водоотведением, теплосетями '},
      { name: 'keywords', content: 'инженерно-строительная компания, электромонтажные работы, отопление, водоснабжение, монтаж теплосетей, строительство' },
      { property: 'og:title', content: 'Инженерно-строительная компания ССГ - Главная' },
      { property: 'og:description', content: 'ССГ предлагает полный комплекс строительных и инженерных услуг для вашего бизнеса и дома.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://https://ssg-n.ru/' },
      { property: 'og:image', content: 'https://https://ssg-n.ru/path/to/image.jpg' },
    ]
  }
}
</script>


<style>
#app{
  /* background-color: rgb(212, 212, 212); */
}

h2{
  margin: 0;
  display: flex;
  margin: 0 auto;
}
</style>