<template>
<div class="all">
    <div class="div_head "  >

        <div class=" backgr_blur  " :style="backgroundStyle"></div>

        <div class="divP_h2 " >
        <h2 style="">Инженерно-строительная компания ССГ</h2> 
        <p style="color: white; " >Россия - Большое Сочи</p>
        
        </div>

        <div class="grid_cont">
            <div v-for="(item, index) in items" :key="index" class="grid_item">
                <img :src="item.icon" alt="icon" class="icon" />
                {{ item.text }} 
            </div>
        </div>

        <button class="submitbut" @click="Ismodal2 = !Ismodal2">Оставить заявку!</button>
        <ModalDanieOtrpavka v-if="Ismodal2" @close="closeFirstModal" @close2="Ismodal2 = false"></ModalDanieOtrpavka>

        <ModalOknoOtravit v-if="Ismodal3" @close="Ismodal3 = false"></ModalOknoOtravit>
    </div>
</div>

    

    
</template>

<script>
import ModalDanieOtrpavka from './ModalDanieOtrpavka.vue';
import ModalOknoOtravit from './ModalOknoOtravit.vue';



export default {
    components:{ModalDanieOtrpavka, ModalOknoOtravit },
    data(){
        return{
            items:[
                {text: 'Загородные дома', icon: require('../assets/img/house1.png')},
                {text: 'Частные квартиры', icon: require('../assets/img/apartment.png')},
                {text: 'Коммерческие объекты', icon: require('../assets/img/manufacturing.png')},
                {text: 'Офисные помещения', icon: require('../assets/img/coffee-shop.png')}
            ],

            images:[
                require('../assets/img/firstimg.webp'),
                require('../assets/img/canstockphoto3333605.jpg'),
                require('../assets/img/11123.jpg'),
                require('../assets/img/shutterstock_226824577.webp'),
            ],
            currentImageIndex: 0,

            Ismodal2: false,
            Ismodal3: false, 
        }
        
    },
    computed:{
        backgroundStyle(){
            return{
                backgroundImage: `url(${this.images[this.currentImageIndex]})`, 
                transition: 'background-image 2s ease-in-out',
                
            };
        }
    },
    mounted(){
        this.startImageSlider();
    },
    methods: {
        submitbut(){
            
        },
        startImageSlider(){
            setInterval(() =>{
                this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            }, 7000);
        },
        closeFirstModal(){
            this.Ismodal2 = false;
            this.Ismodal3 = true;
        }

    }
}
</script>

<style scoped>
.all{
  font-family: Arial, sans-serif; font-weight: 300; margin-top: 60px; 
}
.div_head{
    width: 100%;
    height: 700px;
    background-position: center;
    z-index: 1;
    position: relative;
}
.backgr_blur{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter:  brightness(50%); /* Размытие только на этом слое */
    transition: background-image 2s ease-in-out;
    height: 100%; width: 100%;
    background-repeat: no-repeat; 
    animation: gradientmove 100s ease infinite; 
    background-size: 120% 150%;
}

@keyframes gradientmove {
    0% {
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
    
}
.divP_h2{
    display: flex; justify-content: center;align-items: center; text-align: center; flex-flow: column;
    width: 100%; 
}
.divP_h2 h2{
    font-size: 30px; color: white; height: auto;margin-top: 100px;
}
.grid_cont{
    display: grid; justify-content: center;align-items: center; margin: 0 auto;justify-items:center; margin-top: 50px;
    width: 20%;
    grid-template-columns: 1fr 1fr;  grid-template-rows: auto auto;
    gap: 20px; 
}
.grid_item{
  background-color: #f0f0f0b3; /* Светлый фон для элементов */
  padding: 10px; /* Внутренние отступы */
  text-align: center; /* Выравнивание текста по центру */
  font-size: 18px; /* Размер текста */
  border-radius: 15px; /* Закругленные углы */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Тень для эффекта */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px; height: 50px;
}
.icon{
  margin-right: 10px; /* Отступ между изображением и текстом */
  width: 30px; /* Ширина изображения */
  height: 30px; /* Высота изображения */ 
}
.icon:hover{
    width: 32px; height: 32px;
}
.submitbut{
    display: flex; justify-content: center;align-items: center;margin: 0 auto; font-size: 20px; color: white;
    margin-top: 30px; padding: 15px; border:  none; border-radius: 20px;
    background-color: red; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    font-family: Arial, sans-serif; font-weight: 300;
    margin-bottom: 50px;
}
.submitbut:hover{
    transform: scale(1.09);
}





@media(max-width:700px) {
    .grid_cont{
        display: flex;  flex-wrap: wrap; gap: 20px;
    }
    .grid_item{
        min-width: 200px; height: auto; font-size: 16px
    }
    .divP_h2 p {
        margin-top: 50px;
    }
    .image-slider{
        background-size: 400% 200%;
    }
}
@media(max-width:500px){
    .div_head{
        height: 700px;
    }
    .divP_h2 p {
        margin-top: 20px;
    }
}
</style>