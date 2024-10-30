<template>
<div class="CUFP" >

    <div class="Mcont" v-for="(item,index) in items" 
    :key="index"
    >
        <div class="divcontCUFP"
        :class="{ 'special-style': isEven && index === items.length - 1 }"
        @click="showtext(index)"
        >
            <div class="txtCUFP" >{{ item.text }}</div>
            <img :src="item.photo">
            
        </div>

        
        <div v-if="activeIndex === index" class="vivodtexta" > 
            <div 
            class="textposlephoto" 
            v-for="(line, lineIndex) in item.txt"
            :key="lineIndex"
            >
            <div class="line" >{{ line }}</div>
            </div>
            </div>
        

    </div>

</div>
</template>

<script>
export default {
    props:{
        items:{
            type: Array,
            required: true,
            default: () => []
        }
    },
  data(){
    return{
        activeIndex: null,
    }
  },
  computed:{
    isEven(){
        return !this.items.length % 2 === 0;
    }
  },
  methods:{
    showtext(index){
        this.activeIndex = index;
    }
  }
}
</script>

<style scoped>
.CUFP{
    font-family: Montserrat, sans-serif; 
    margin: 0 auto;
    position: relative; 
    display: flex; flex-wrap: wrap;
    width: 100%;
    background-color: rgb(212 212 212);
}
.Mcont{
    display: flex;flex: 1 1 30%;
    width: 100%;
    position: relative;
}

.divcontCUFP{
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100%;
}
.txtCUFP{
    display: flex;justify-content: center;align-items: center; margin: 0 auto;
    position: absolute;
    z-index: 2;
    top: 45%;
    left: 50%; transform: translateX(-50%) scale(1);
    color: white; text-align: center;
    font-size: 30px; font-weight: 600;
    width: 100%;
    transition: transform 0.3s ease;
    pointer-events: none;
}
.divcontCUFP img{
    display: flex; 
    position: relative;
    width: 100%; height: 300px;
    object-fit: cover;
    filter: brightness(65%);
    
    transition: transform 0.3s ease;
}
.divcontCUFP::after{
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%;height: 100%;
    z-index: 1;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0)0%, rgba(0, 0, 0, 0.742)70%);
}

.vivodtexta{
 display: flex;  flex-wrap: wrap;
 position: absolute;
 width: 100%;height: 100%;
 
 z-index: 3;
 
}
.textposlephoto{
    display: flex; justify-content: center;align-items: center;
    flex: 1 1 50%; text-align: center;
    position: relative;
    width: 100%;height: auto;
    z-index: 3;
    pointer-events: none;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    font-size:medium;
}
.line{
    display: flex;justify-content: center;align-items: center;
    
}


/* .Mcont:last-child .divcontCUFP{
    width: 50%;
    margin: 0 auto;
    
} */
.special-style{
    width: 100%; 
    margin: 0 auto;
}
.divcontCUFP:hover img,
.divcontCUFP:hover .txtCUFP
{
    transform: scale(1.03);
}
.divcontCUFP:hover .txtCUFP{
    transform: scale(1.06) translateX(-48%);
    
}


@media (max-width:600px){
    .Mcont{
        flex: 1 1 100%
    }
}
</style>