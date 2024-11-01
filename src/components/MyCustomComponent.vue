<template> 
<div class="all">
   <div class="upfooter">
      <img :src="text.logo" class="logo">
      <p class="ptext"> ССГ </p>
      <a
      class="A_cont_main" 
      v-for="(item, key) in text" 
      :key="key"
      :class="{Napisat: key === 'napis'}"
      

      @click="handleClick(key)"
      @mouseover="showContainer(key)"
      @mouseleave="startCloseTimer('usl')"

      :to="key === 'glav' ? '/' : (key === 'onas' ? '/about' : item.path)"


      >
         {{ item }} </a>
      <a class="A_cont_mobile" @click="toggleMenu" ref="menuContainer">
        <div>&#8226;</div>
        <div>&#8226;</div>
        <div>&#8226;</div>
      </a>

      <!-- <router-Link to="/about" class="asd">Главная</router-Link> -->
   </div>

  <div v-if="isMenuOpen" class="menu_cont" >
    <ul >
      <li @click="MenuButhome('glav')">Главная</li>
      <li @click="MenuButhome('onas')">О нас</li>
      <li @click="scrollToSection('servicesSection')" >Услуги</li>
    </ul>
  </div>

    <div v-if="isUslpressed" class="menuUslugi"
    @mouseover="showContainer('usl')"
    @mouseleave="startCloseTimer('usl')"
    >
    <ul>
      <li v-for="(usluga,index) in uslugi"
      :key="index"
      @click="uslclickdata(index)" 
      class="menuUslugi2" > 
        {{ usluga }}
      </li>
    </ul>
    </div>

  <ModalDanieOtrpavka v-if="Ismodal2" @close="closeFirstModal" @close2="Ismodal2 = false"></ModalDanieOtrpavka> 
  <ModalOknoOtravit v-if="Ismodal3" @close="Ismodal3 = false"></ModalOknoOtravit>

</div>
  </template>
  
  <script>
import  EventBus  from '@/utils/eventBus';
import ModalDanieOtrpavka from './ModalDanieOtrpavka.vue';
import ModalOknoOtravit from './ModalOknoOtravit.vue';


  export default {
    components:{ModalDanieOtrpavka, ModalOknoOtravit},
    data() {
      return {
       text:{
        glav: 'Главная',
        onas: 'О нас',
        usl: 'Услуги',
        napis: 'Написать нам',
        },
       isMenuOpen: false,
       Ismodal2: false,
       Ismodal3: false,
       isUslpressed:false,
       closeTimer: null,   

       uslugi:[
        "НВК",
        'Отопление, водоснабжение, теплосети',
        "Теплосети",
        'Кондиционирование, вентиляция, пожаротушение',
        'Изготовление любых металл кострукций,',
        'Монолитное строительно зданий',
        'Кровельные работы',
        'Электромонтажные работы',
        'Благоустройство',
        ]
      };
    },
    computed: {
  
},
    mounted(){
      document.addEventListener('click', this.toggleMenuClickOutside)
    },
    beforeUnmount(){
      document.addEventListener('click', this.toggleMenuClickOutside)
    },
    methods:{
      toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
      },
      toggleMenuClickOutside(event){
        if(this.$refs.menuContainer && !this.$refs.menuContainer.contains(event.target)){
          this.isMenuOpen = false}
      },

      scrollToSection(sectionId) {
      EventBus.emit('scrollToSection', sectionId);

      this.isMenuOpen = false;
      },
      closeFirstModal(){
        this.Ismodal2 = false;
        this.Ismodal3 = true;
      },
      handleClick(key){
        if(key === 'napis'){
          this.Ismodal2 = !this.Ismodal2;
        }
        if(key === 'usl'){
          this.isUslpressed = !this.isUslpressed;
          
        }

        if(key === 'onas'){
          this.$router.push('/about')
        }

        if(key === 'glav'){
          this.$router.push('/')
        }
      },
      showContainer(key){
        if(key === 'usl'){
          this.isUslpressed = true;
          this.cancelCloseTimer(); 
        } 
      },

      startCloseTimer(key){
        if(key === 'usl'){
          this.closeTimer = setTimeout(() => {
            this.isUslpressed = false;
          }, 200);
        }
      },

      cancelCloseTimer(){
        if(this.closeTimer){
          clearTimeout(this.closeTimer);
          this.closeTimer = null
        }
      },
      

      // buttons v massive uslugov
      uslclickdata(index){
        const routesMap = [
           '/NVK',  '/otopl', '/telp','/kond','/metal','/monolit','/krovel',
           '/elec','/blagous',
      ];
        const route = routesMap[index];
        if (route ) {
          this.$router.push(route);
          this.isUslpressed = false
        }
      },


      MenuButhome(any){
        if(any === 'glav'){this.$router.push('/') }
        if(any === 'onas'){this.$router.push('/about') }
      }
    }
  };
  </script>
  
  <style scoped>
.all{
  font-family: Arial, sans-serif; font-weight: 300;
}
.upfooter{
  display: flex;justify-content: center;align-items: center;position:fixed;top: 0;z-index: 1000;
  width: 100%;height: 60px;
  background-color: black;
  margin: 0; padding: 0;
}
.logo{
  display: flex; justify-content: left; position: absolute; left: 10px;
  width: 120px; height: 60px;display: none;
}
.ptext{ color: white; font-size: 40px;
  display: flex; justify-content: left; position: absolute; left: 50px;
  justify-content: center;align-items: center;
  background-color: rgb(120, 84, 32);
  width: 150px;
  border-radius: 20px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 300px;
}
.A_cont_main{
  display: flex; justify-content: center;align-items: center; text-align: center;
  color: white;
  cursor: pointer;
  width:120px;
}
.A_cont_main:hover, .A_cont_mobile:hover{
  color: rgba(207, 149, 24, 0.644);
}
.A_cont_mobile{
  display: none; color: white;cursor: pointer;
  font-size: 30px;
  justify-content: left;align-items: center; justify-items: left; 
  width: 100%;
}
.Napisat{
  display: flex; justify-content: center; align-items: center; 
  background-color: red;border-radius: 30px; height: 40px; width: 120px;
  
}

.menu_cont{
  display: flex;  z-index: 10;
  position: fixed; color: white;
  background-color: black;
  width: 150px;
  font-size: 20px;
}
.menu_cont ul{
  list-style: none;
  margin: 0; padding: 0;
  width: 100%;
}
.menu_cont li{
  display: flex;
  padding: 13px;
  width: 100%; justify-content: left;
  cursor: pointer;
}
.menu_cont li:hover{
  color: rgba(207, 149, 24, 0.644);
}

.menuUslugi{
  display: flex;  z-index: 1044;
  position: fixed; color: white;
  background-color: black;
  width: 230px;
  font-size: 15px;
  left: 50%;
}
.menuUslugi ul{
  list-style:symbols('s');
  margin: 0; padding: 0;
  width: 95%;
}
.menuUslugi li{
  display: grid;
  padding: 5px;
  width: 100%; justify-content: left;
  cursor: pointer;
}
.menuUslugi li:hover{
  color: rgba(207, 149, 24, 0.644);
}


@media (max-width: 850px){
  .A_cont_main{
    display: none;
  }
  .A_cont_mobile{
    display: flex; margin-left: 20px;
  }
  .ptext{
    left:calc(50% - 70px); 

  }
}
  </style>
  