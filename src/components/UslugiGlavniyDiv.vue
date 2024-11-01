<template>
    <div class="all">
        <div class="div_head" >
    
            <div class="backgr_blur " :style="backgroundStyle"></div>
            <div class="underbackgr"></div>
    
            <div class="divP_h2 " >
            <h2 class="h2title">{{ title }}</h2> 
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
        <div class="underline" ></div>
    </div>
    
        
    
        
    </template>
    
    <script>
    import ModalDanieOtrpavka from './ModalDanieOtrpavka.vue';
    import ModalOknoOtravit from './ModalOknoOtravit.vue';
    
    
    
    export default {
        props:{
            title:{
                type: String,
                default: 'Заголовок',
            }
        },

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
                    require('../assets/img/chad_1ec816f8fbf744c8b3bb59da730e4274.png'),
                    require('../assets/img/canstockphoto3333605.jpg'),
                    require('../assets/img/chad_036c16b6f4f8456193f54b3e9c5832f9.png'),
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
        /* background-image: linear-gradient(to right, rgb(132, 87, 14)20%, rgba(95, 12, 12, 0.66) 100%);  */
        width: 100%;
        min-height: 500px;max-height: 700px;
        height: 500px;
        z-index: 222;
        overflow: hidden;
        display:flow-root;
        justify-content: center;align-items: baseline;
        position: relative;
        
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
    .backgr_blur{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: background-image 2s ease-in-out;
        height: 500px;
        animation: gradientmove 100s ease infinite;  
        width: 100%;
        max-height: 1000px;
        background-size: 120% 200%;
        background-position: center;background-repeat: no-repeat; 
    }
    .underbackgr{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }

    .divP_h2{
        display: flex; justify-content: center;align-items: center; text-align: center; flex-flow: column;
        width: 100%; margin-top: 10%; z-index: 2;
    }
    .h2title{
        font-size: 30px; color: white; height: 15px;
        display: flex;justify-content:center; align-items: center;
       
    }
    .grid_cont{
        display: flex; justify-content: center;align-items: center; margin: 0 auto;justify-items:center; margin-top: 50px;
        width: 40%;
        grid-template-columns: 1fr 1fr;  grid-template-rows: auto auto;
        gap: 50px; 
    }
    .grid_item{
      background-color: #f0f0f0b3; /* Светлый фон для элементов */
      padding: 20px; /* Внутренние отступы */
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
    
    
    
    .underline{
        display: flex;justify-content: center;align-items: center;margin: 0 auto;
        width: 90%;height: 1px;
        background-color: red;
    }
    
    
    @media(max-width:900px) {
        .grid_cont{
            display: flex;  gap: 15px; width: 100%;
            margin-top: 10px;
            flex-flow: wrap
        }
        .grid_item{
            display: flex;
            height: auto; font-size: 16px;
            flex: 1 1 100%; 
            max-width: 300px; height: 50px;
            padding: 0;
            
        }
        .divP_h2{

        }
        .divP_h2 p {

        }
        .image-slider{
            background-size: 400% 200%;
        }
        .div_head{
            height: 600px;
        }
        .backgr_blur{
            height: 600px;
        }
    }
    @media(max-width:500px){
        .divP_h2{
        display: flex; justify-content: center;align-items: center; text-align: center; flex-flow: column;
        width: 100%; margin-top: 0;
    }
        .divP_h2{
            margin-top: 30%;
        }
        .grid_item{
            font-size: 14px;
            max-width: 200px;
        }
        .div_head{
            height: 700px;
        }
        .backgr_blur{
            height: 700px; 
        }
    }
    </style>