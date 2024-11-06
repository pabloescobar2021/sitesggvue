<template>
    <div class="rabotapoobject2">
        <div>
            <h1> Работаем на следующих обьектах: </h1> 
        </div>

        <div class="grid_rabota">
            <div class="rab1" >
                <img :src="imgs[0].i">
                <p>{{ imgs[0].txt }}</p>
            </div>

            <div class="rab2" >
                <div class="rab2_1" >
                    <img :src="imgs[1].i">
                    <p>{{ imgs[1].txt }}</p>
                </div>
                <div class="rab2_2">
                    <img :src="imgs[2].i">
                    <p>{{ imgs[2].txt }}</p>
                </div>
            </div>

            <div class="rab3" >
                <img :src="imgs[3].i">
                <p>{{ imgs[3].txt }}</p>
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
                // txt: текст на фото
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
    background-color: rgb(255, 255, 255); 
    color: rgb(0, 0, 0);
    display: grid; justify-content: center;
    text-align: center;
    width: 100%;
    grid-template-columns: 60%;
}
h1{
    
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
    width: 100%;height: 250px;border-radius: 15px;
    
    
}
.rab1 , .rab2 , .rab3 {
    position: relative;
    width: 100%; display: flex; justify-content: center;align-items: center;
    margin: 0 auto;
    z-index: 1; padding: 2px; gap: 4px;
    overflow: hidden;  
    transition: transform 0.6s ease; 
    cursor:default ;
}
.rab2_1{
    position: relative; display: flex;justify-content: center;align-items: center;
    padding: 2px; gap: 4px; width: 60%;
    z-index: 1; transition: transform 0.6s ease; 
}
.rab2_2{
    position: relative; display: flex;justify-content: center;align-items: center;
    padding: 2px; gap: 4px; width: 40%;
    z-index: 1; transition: transform 0.6s ease; 
}

.grid_rabota p{
    position: absolute;z-index: 3; color: white;
    top: 50%; 
    left: 50%; transform: translateX(-50%);
    margin: 0 auto;
    font-weight: 600; font-size: 23px;
    width: 100%;
}


.rab1::after, .rab2_1::after, .rab3::after, .rab2_2::after {
    content: '';
    position: absolute;
    top: 2px;left: 2px;
    width: calc(100% - 4px);height: calc(100% - 4px);
    border-radius: 15px;
    z-index: 0;
    background-image:linear-gradient(to top,rgba(2, 3, 4, 0.748)20%, rgba(2, 3, 4, 0.288)60%) ;
}

.grid_rabota .rab1:hover,
.grid_rabota .rab2_2:hover,
.grid_rabota .rab2_1:hover,
.grid_rabota .rab3:hover {
    transform: scale(0.92);
}


@media (max-width:750px){
    .rab2_1{
        width: 100%;
}
    .rab2_2{
        width: 100%;
}
    .rab2{
        flex-wrap: wrap;
    }
    .rabotapoobject2 h1{
        font-size: 25px;
    }
}
</style>