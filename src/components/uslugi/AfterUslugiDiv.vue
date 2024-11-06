<template>
<div class="allafterall">
    <div class="allafter"
    :style="allafter"
    >

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
</div>
</template>

<script>
export default {
    props:{
        items2:{
            type: Array,
            required: true,
            default: () => []
        },
        allafter:{
            type: Object,
            default:() => ({

            }), 
        }
    },
    data(){
        return{

        }
    }
 }
</script>

<style scoped>

.allafterall{
    position: relative;
}

.allafter{
    font-family: Montserrat, sans-serif; 
    margin: 0 auto;
    padding: 40px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); */
    text-align: center;
    /* background-color: rgb(255, 255, 255); */
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    position: relative;
    width: 80%;
}
.allafterall::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/img/610_original.webp');
    background-size: cover;
    background-position: center;
    filter:  brightness(50%);
    
    z-index: 0;
}

.allafter h2{
    font-size: 25px;
    color: #ffffff;
    width: 100%; 
    margin-bottom: 20px;
    justify-content: center; align-items: center;
    z-index: 1; 
}
.afterusl1{
    display: flex;justify-content: center; align-items: center;
    border-radius: 15px;
    /* background-color: #fff; */
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.379)10%, rgba(255, 255, 255, 0)80%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.401);
    transition: transform 0.3s, box-shadow 0.3s;
    flex: 1 1 30%;
    margin: 0 auto;
    z-index: 1;
    height: 200px;  
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
    display: flex;
    font-size: 22px;
    color: #ffffff;
    font-weight: 300;
    padding: 10px;
    
}
.t2{
    
}


</style>