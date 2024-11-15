<template>
    <div class="all1" id="servicesSection">
      <h1 style="display: flex; justify-content: center; align-items: center;  ">Услуги</h1>
      <div class="div_cont" >
        <div v-for="(item, index) in itemsWithButton" :key="index" class="grid_item" 
        @click="clickimage(index)"
        >
          <p class="centered_text">{{ item.text }}</p>
          <a class="button_podrob">{{ item.button_podrob }}</a>
          <img :src="item.img" alt="icon" class="icon" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
import  EventBus  from '@/utils/eventBus';

  export default {
    data() {
      return {
        items: [
          { img: require('../assets/img/tryba-pnd-v-otrezkah.jpg'), text: 'НВК',  },
          { img: require('../assets/img/59e18e49a35a11efa193ae3507932d84.png'), text: 'Отопление, водоснабжение и водоотведение' },
          { img: require('../assets/img/zil-4.jpg'), text: 'Теплосети' },
          { img: require('../assets/img/rab2.jpeg'), text: 'Кондиционирование, вентиляция' },
          { img: require('../assets/img/cec420337df211ef960f160f3f05b604-transformed.png'), text: 'Изготовление любых металлокострукций, сварка' },
          { img: require('../assets/img/MONOLIT.jpg'), text: 'монолитное строительно зданий' },
          { img: require('../assets/img/rab4.png'), text: 'кровельные работы  ' },
          { img: require('../assets/img/rabadas.jpg'), text: 'Электромонтажные работы' },
          { img: require('../assets/img/29c07318822b11efb0595aa46c65dc88-transformed.png'), text: ' Благоустройство  ' },
        ]
      }
    },
    computed:{
        itemsWithButton(){
            return this.items.map(item => ({
                ...item, button_podrob: item.button_podrob || 'Подробнее'
            }))
        }
    },
    mounted(){
      EventBus.on('scrollToSection', this.handleScrollToSection);
    },
    unmounted(){
      EventBus.off('scrollToSection', this.handleScrollToSection);
    },
    methods:{
      handleScrollToSection(sectionId1) {
        const section = document.getElementById(sectionId1);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth'});
        }
      },
      // Ссылки в услугах
      clickimage(index){
      if(index === 0){
        this.$router.push('/NVK')
      }
      if(index === 1){
        this.$router.push('/otopl')
      }
      if(index === 2){
        this.$router.push('/telp')
      }
      if(index === 3){
        this.$router.push('/kond')
      }
      if(index === 4){
        this.$router.push('/metal')
      }
      if(index === 5){
        this.$router.push('/monolit')
      }
      if(index === 6){
        this.$router.push('/krovel')
      }
      if(index === 7){
        this.$router.push('/elec')
      }
      if(index === 8){
        this.$router.push('/blagous')
      }
    }
    },
    
      
  }
  </script>
  
  <style scoped>
  .all1 {
    font-family: Arial, sans-serif;
    font-weight: 300;
    position: relative;
    z-index: 0;
    
    
  }
  .div_cont{
    display: flex; flex-wrap: wrap; position: relative;
    width: 100%; 
  }
  .grid_item {
    position: relative;
    display: flex; /* Выравнивание изображения и текста */
    justify-content: center;
    align-items: center;
    width: auto; height: auto;
    flex: 1 1 30%; 
    overflow: hidden; 
    cursor: pointer;
  }
  .grid_item:hover .icon,
  .grid_item:hover .centered_text {
    transform: scale(1.04);
  }
  
  .icon {
    display: flex; 
    width: 100%; height: 350px;
    position: relative;
    object-fit: cover;
    transition: transform 0.3s ease;
    filter: brightness(80%);
  }
  .icon img {
    width: 100%; display: flex; 
    height: 100px;
  }
  
  .centered_text {
   position: absolute; color: white; display: flex;
   align-items: center; justify-content: center; margin: 0 auto;justify-items: center;
   z-index: 1;
   text-transform: uppercase;
   font-size: 25px;
   text-align: center;
   transition: transform 0.3s ease;
   background-image:linear-gradient(to top, rgba(0, 0, 0, 0.719)0%, rgba(0, 0, 0, 0)50% ); 
   height:100%;width: 100%;
  }
  .button_podrob{ 
    position: absolute; color: white; display: none; 
   align-items: center; justify-content: center; margin: 0 auto;justify-items: center;
   z-index: 2;
   /* text-transform: uppercase; */
   font-size: 23px;
   text-align: center;
   background-color: rgba(223, 8, 8, 0.632);
   height: 50px; border-radius: 10px;
   margin-top: 10%; top: 200px;
   cursor: pointer;
  }
  .grid_item:hover .button_podrob {
  display: flex
}
h1 {
    font-size: 35px;
    font-family: Montserrat, sans-serif;
    background-color: rgb(212, 212, 212); 
    margin: 0; padding: 20px; color: rgb(0, 0, 0)
}

  @media (max-width: 1200px){
    .grid_item{
        flex: 1 1 50%;
    }
  }
  @media (max-width: 900px){
    .grid_item{
    flex: 1 1 100%;
    }
  }
  </style>
  