<template>
    <div class="all">
        <div class="all2">
            <h2>Почему стоит выбрать именно Нас:</h2>
            <div v-for="(item,index) in items2"
            :key="index"
            >
                <div class="grid" >
                    <div class="t1">{{ item.t1 }}</div>
                    <div class="t2">{{ item.t2 }}</div>
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
        }
    },
    data(){
        return{

        }
    }
 }
</script>

<style scoped>
.all{
    font-family: Montserrat, sans-serif; 
    margin: 0 auto;
    position: relative; 
    display:flow-root; flex-flow: column;
    width: 100%;
    background-color: rgb(212 212 212);
    background-image: linear-gradient(to top, 
    rgb(212 212 212)0%, 
    rgba(227, 192, 126, 0.514) 35%, 
    rgba(223, 166, 59, 0.419) 80%  );
}


h2{
    display: flex;justify-content: center;text-align: center;
    font-size: 30px;
    
}
.grid{
    display: grid;justify-content: center;align-items: center;margin: 0 auto;
    grid-template-columns: 1fr;
    width: 80%;
    
}
.grid div{
    display: flex;justify-content: center;align-items: center;
    padding: 10px;
    font-size: 17px;
    

}
.t1{ 
    display: flex;
    text-align: center;
    height: 30px;
    font-weight: 600;
    width: 100%;
}
.t2{
    display: flex;
    text-align: center;
    font-weight: 400;
    width: 100%;
    margin-bottom: 10px;
    background-color: beige;
    border-radius: 10px;
}


</style>