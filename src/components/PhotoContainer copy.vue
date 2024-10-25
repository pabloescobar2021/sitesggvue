<template>
    <div>
      <div class="divGrid" v-for="(item, index) in imgArray" :key="index">
        <div class="divGrid2">
            
          <img class="img_l_full" :src="item.img1" alt="Image 1" />
          <img class="img_l" :src="item.img2" alt="Image 2" />
          <img class="img_l" :src="item.img3" alt="Image 3" />
        </div>
        <div class="divGrid2">
          <img class="img_r" :src="item.img4" alt="Image 4" />
          <img class="img_r" :src="item.img5" alt="Image 5" />
          <img class="img_R_full" :src="item.img6" alt="Image 6" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:{
        images:{
            type: Array,
            required: true
        }
    },
    computed:{
        imgArray(){
            return this.images;
        }
    },
    data() {
      return {
        
      };
    }
  };
  </script>

<style>
.divGrid{
display: grid; grid-template-columns: 50% 50%; width: 100%;
overflow: hidden;
justify-content: center;align-items: center; margin: 0 auto; justify-items: center;
}
.divGrid2{
    display: flex;flex-wrap: wrap ; justify-content: center;align-items: center;
    overflow: hidden; width: 100%; position: relative;
    
}
.divGrid2 img{
    display: flex;
    width: 200px; height: 350px; object-fit:fill;
    padding: 5px;
    min-width: 150px; /* или выставить минимальную ширину, чтобы элементы не переносились */
    position: relative;
   
}
.img_l_full{
    display: flex; flex: 1 1 100%; position: relative;
}
.img_l{
    display: flex; flex: 1 1 20%; position: relative;
}
.img_R_full{
    display: flex; flex: 1 1 100%; position: relative;
}
.img_r{
    display: flex; flex: 1 1 20%;
}
.pForImg{
    position: absolute;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    text-transform: uppercase;
    font-size: 23px;
    text-align: center;
    transition: transform 0.3s ease; 
}
@media (max-width:1100px){
    .divGrid{
        grid-template-columns: 1fr;
    }
    .img_l, .img_r {
        flex: 1 1 100%;
    }
    .divGrid2 img{
        height: 350px; object-fit:cover;
    }
}
</style>