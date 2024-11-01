<template>
    <div>
      <div class="divGrid" v-for="(item, index) in imgArray" :key="index">
        
        <div class="div2">
        <div class="divkont div_l_full" >
          <img class="img_l_full" :src="item.img1" alt="Image 1" />
          <p class="pForImg">{{item.text1}}</p>
        </div>

        <div class="divkont div_l" >
          <img class="img_l" :src="item.img2" alt="Image 2" />
          <p class="pForImg">{{item.text2}}</p>
        </div>

        <div class="divkont div_l" >
          <img class="img_l" :src="item.img3" alt="Image 3" />
          <p class="pForImg">{{item.text3}}</p>
        </div>
        </div>
        
        
        <div class="div2">
        <div class="divkont div_r" >
          <img class="" :src="item.img4" alt="Image 4" />
          <p class="pForImg">{{item.text4}}</p>
        </div>

        <div class="divkont div_r" >
          <img class="" :src="item.img5" alt="Image 5" />
          <p class="pForImg">{{item.text5}}</p>
        </div>

        <div class="divkont div_r_full" >
          <img class="" :src="item.img6" alt="Image 6" />
          <p class="pForImg">{{item.text6}}</p>
        </div>
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

<style scoped >
.divGrid{
display: grid; grid-template-columns: 50% 50%; width: 100%;
overflow: hidden;
justify-content: center;align-items: center; margin: 0 auto; justify-items: center;
}

.div2{
    display: flex;flex-wrap: wrap ; justify-content: center;align-items: center;
    overflow: hidden; width: 100%; position: relative;
    font-family: Montserrat, sans-serif; font-weight: 500;
    background-color: rgb(212, 212, 212); 
}
.divkont{
    display: flex; position: relative; overflow: hidden;
    
}
.divkont img{
    display: flex;
    width: 100%; height: 350px; object-fit:fill;
    padding: 5px;
    min-width: 150px; /* или выставить минимальную ширину, чтобы элементы не переносились */
    position: relative;
    transition: transform 0.6s ease;
   
}
.divkont:hover img,
.divkont:hover .pForImg{
    transform: scale(1.05);
}
.divkont:hover .pForImg{
 transform: scale(1.1);
}
.div_l_full, .div_r_full{
    display: flex; flex: 1 1 100%
}
.div_l, .div_r{
    display: flex; flex: 1 1 50%
}

.pForImg{
    position: absolute;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    margin: 0 auto;
    font-size: 25px;
    text-align: center;
    transition: transform 0.6s ease; 
    background-image:linear-gradient(to top, rgba(2, 2, 2, 0.734)0%, rgba(0, 0, 0, 0.049) 80%); 
    width: 100%; height: 100%;
    
}
.pForImg::first-letter {
  text-transform: uppercase;
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
@media (max-width:700px){
  .div_l, .div_r{
    display: flex; flex: 1 1 100%
}
}
</style>