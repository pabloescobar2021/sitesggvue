<template>
    <div class="rabotapoobject2">
        <div>
            <h1> Работаем на следующих обьектах: </h1> 
        </div>

        <div class="grid_rabota">
            <div class="rab1" >
                <img :src="imgs[0].i">
            </div>
            <div class="rab2" >
                <img :src="imgs[1].i">
                <img :src="imgs[2].i">
            </div>
            <div class="rab3" >
                <img :src="imgs[3].i">
            </div>
        </div>

    </div>
</template>


<script>
export default {
    props:{
        imgs:{
            type: Array,
            required: true,
            default: () => [
                {i: require('@/assets/img/30258560060511319_bf8c.jpg')},
                {i: require('@/assets/img/30258560060511319_bf8c.jpg')},
                {i: require('@/assets/img/30258560060511319_bf8c.jpg')},
                {i: require('@/assets/img/30258560060511319_bf8c.jpg')},
            ]
        }
    },
 data(){
    return{
        
    }
 },
}


</script>

<style scoped>
.rabotapoobject2{
    font-family: Montserrat, sans-serif;
    background-color: rgb(212, 212, 212); 
    color: rgb(0, 0, 0);
    display: grid; justify-content: center;
    text-align: center;
    width: 100%;
    grid-template-columns: 80%;
}

.grid_rabota{
    height: auto;
    width: 100%;
    overflow: hidden;
    
    position: relative;
    border-radius: 15px;
    
}   
.rab1{
    border-radius: 15px;
}
.rab2{
    border-radius: 15px;
}
.rab3{

}
.rab1 img, .rab2 img, .rab3 img{
    object-fit: cover; position: relative;
    width: 100%;height: 200px;border-radius: 15px;
    
    
}
.rab1 , .rab2 , .rab3 {
    position: relative;
    width: 100%; display: flex; justify-content: center;align-items: center;
    margin: 0 auto;
    z-index: 1; padding: 2px; gap: 4px;
    overflow: hidden;
}


/* .rab1::after, .rab2::after, .rab3::after {
    content: '';
    position: absolute;
    top: 0;left: 0;
    width: 100%;height: 100%;
    z-index: 0;
    background-color: rgba(2, 3, 4, 0.636);
    padding: 10px
    
    
} */
</style>