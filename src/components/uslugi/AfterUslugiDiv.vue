<template>
    <div class="allafter">

            <h2>Почему стоит выбрать именно Нас:</h2>
            
            <div v-for="(item,index) in items2"
            :key="index"
            class="afterusl1"
            >
                <div class="afterusl2" >
                    <div class="t1">{{ item.t1 }}</div>
                    <!-- <div class="t2">{{ item.t2 }}</div> -->
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props:{
        items2:{
            type: Array,
            required: true,
            default: () => []
        }
    },
    data(){
        return{

        }
    }
 }
</script>

<style scoped>
.allafter{
    font-family: Montserrat, sans-serif; 
    margin: 0 auto;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: rgb(255, 255, 255);
    
    display: flex;
    flex-wrap: wrap;
    gap: 15px; /* Промежуток между элементами */
    
}


.allafter h2{
    font-size: 24px;
    color: #333;
    width: 100%; /* Заголовок занимает всю строку */
    margin-bottom: 20px;
    justify-content: center; align-items: center
    
}
.afterusl1{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.401);
    transition: transform 0.3s, box-shadow 0.3s;
    flex: 1 1 30%; /* Блоки занимают примерно 30% от ширины контейнера */
    min-width: 150px; /* Минимальная ширина для адаптивности */
    max-width: 250px; /* Максимальная ширина для выравнивания */
    margin: 0 auto;
}
.afterusl1:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
.afterusl2{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.t1{ 
    font-size: 18px;
    color: #555;
    font-weight: 500;
    padding: 10px;
}
.t2{
    
}


</style>