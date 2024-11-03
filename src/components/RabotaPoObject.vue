<template>
<div class="all">
  <h1> Работаем на следующих обьектах: </h1> 
    <PhotoContainer :images="pageImages"> </PhotoContainer>
</div>
</template>

<script>
import PhotoContainer from './PhotoContainer.vue';

export default {
    data(){
        return{
            pageImages:[
                {
                    img1: require('../assets/img/ob1.png'), text1: 'Кафе и рестораны',
                    img3: require('../assets/img/ob3.png'), text2: 'для цехов и производств',
                    img2: require('../assets/img/ob2.png'), text3: 'для ТЦ и ТРК',
                    img4: require('../assets/img/ob4.jpg'), text4: 'Для жилых домов',
                    img5: require('../assets/img/ob5.png'), text5: 'Паркинг',
                    img6: require('../assets/img/ob6.png'), text6: 'Для офисов',
                }
            ]
        }
        
    },
    name: 'App',
  components: {
    PhotoContainer,

  }
}
</script>

<style>
.all{
    font-family: Arial, sans-serif;
    font-weight: 300;
}
h1{
    font-size: 35px;
    font-family: Montserrat, sans-serif;
    background-color: rgb(255, 255, 255); 
    margin: 0; padding: 20px; color: rgb(0, 0, 0);
    display: flex; justify-content: center;
    text-align: center;
}
</style>