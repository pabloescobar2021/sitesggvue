<template>
<div class="all">
    <div class="div_head" style="height: auto; min-height: 700px;">
        <div class="divP_h2" >
        <h2 style="font-size: 30px; color: white; height: 15px;margin-top: 100px;">Инженерно строительная компания ССГ</h2> 
        <p style="color: white" >Россия - Большое Сочи</p>
        
        </div>

        <div class="grid_cont">
            <div v-for="(item, index) in items" :key="index" class="grid_item">
                <img :src="item.icon" alt="icon" class="icon" />
                {{ item.text }} 
            </div>
        </div>

        <button class="submitbut" @click="submitbut">Оставить заявку!</button>

    </div>
</div>
</template>

<script>


export default {
    data(){
        return{
            items:[
                {text: 'Загородные дома', icon: require('../assets/img/house1.png')},
                {text: 'Частные квартиры', icon: require('../assets/img/apartment.png')},
                {text: 'Коммерческие объекты', icon: require('../assets/img/manufacturing.png')},
                {text: 'Офисные помещения', icon: require('../assets/img/coffee-shop.png')}
            ]
        }
        
    },
    methods: {
        submitbut(){
            alert('успешно')
        }
    }
}
</script>

<style scoped>
.all{
  font-family: Arial, sans-serif; font-weight: 300; margin-top: 60px; 
}
.div_head{
    background-image: linear-gradient(to right, rgb(132, 87, 14)20%, rgba(95, 12, 12, 0.66) 100%); 
    background-repeat: no-repeat; background-position: center; background-size: contain;
    animation: gradientmove 10s ease infinite;  background-size: 200% 100%;
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
    display: inline-block; justify-content: center;align-items: center; text-align: center; 
    width: 100%;
}
.grid_cont{
    display: grid; justify-content: center;align-items: center; margin: 0 auto;justify-items:center; margin-top: 50px;
    width: 40%;
    grid-template-columns: 1fr 1fr;  grid-template-rows: auto auto;
    gap: 50px;
}
.grid_item{
  background-color: #f0f0f0; /* Светлый фон для элементов */
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
    font-family: "Jost", serif;
    font-weight: 500;
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
}
</style>