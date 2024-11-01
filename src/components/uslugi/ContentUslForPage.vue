<template>
<div class="CUFP" >

    <div class="Mcont" v-for="(item,index) in items" 
    :key="index"
    :style="[{ flex: IsWrap ? '1 1 30%' : '1 1 100%'}, Mcontcustomstyle]"
    >
        <div class="divcontCUFP"
        :class="[{ 'special-style': isEven && index === items.length - 1 },
        { 'no-after': disableAfter }]"
        @click="showtext(item, index)"
        >
            <div v-if="showimgcont"
            class="txtCUFP" >{{ item.text }}</div>
            <div v-if="showimgcont"
            class="txtCUFP butPod">{{ item.podr }}</div>
            <img v-if="showimgcont"
            :src="item.photo" >
            <div v-else
            class="divVmestoimg" :style="customStyle">
            <div class="divVmestoimgtxt2" >{{item.text}}</div>
            <div class="divVmestoimgtxt">{{ item.podr }}</div>

            <div class="divVmestoimgtxt2" :style="divVmestoimgtxt3" > {{ item.opis }} </div>
            </div>
            
        </div>

        
        
    </div>

    <div v-if="SelectedIt" class="vivodtexta" ref="targetcont"
    >   
        <div class="tasd">Включая:</div>
        <div v-for="(line,lineIndex) in SelectedIt.txt"
        :key="lineIndex"
        class="textposlephoto"
        >
            <div class="line" >{{ line }}</div>
            
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
        },
        showimgcont:{
            type: Boolean, default: true,
        },
        // for metal str flex:1 1 30/100
        IsWrap:{
            type: Boolean,
            default: true,
        },
        // style forr divVmestoimg
        customStyle:{
            type: Object,
            default:() => ({}),
        },
        Mcontcustomstyle:{
            type: Object,
            default:() => ({}),
        },
        divVmestoimgtxt3:{
            type: Object,
            default:() => ({}),
        },
        // Отключение ::after(linear-gradient на фото)
        disableAfter:{
            type: Boolean,
            default: false
        }
    },
  data(){
    return{
        activeIndex: null,
        SelectedIt: null,
        
    }
  },
  mounted(){
    
  },
  computed:{
    isEven(){
        return !this.items.length % 2 === 0;
    }
  },
  methods:{
    showtext(item){
        this.SelectedIt = item;

        if(!this.SelectedIt.txt || this.SelectedIt.txt.length === 0){
            this.SelectedIt = null;
            return;
        }

        this.$nextTick(() => {
            const target = this.$refs.targetcont;
            if(target){target.scrollIntoView({ behavior: 'smooth'}) ;}
        });
        

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
    font-size: 25px; font-weight: 600;
    width: 100%;
    transition: transform 0.3s ease;
    pointer-events: none;
}
.butPod{
    top: 70%;font-size: 20px; 
    background-color: red;
    width: auto;height: 30px;
    border-radius: 10px;
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
.no-after::after {
    content: none;
}



.divVmestoimg{
    display: flex; flex-flow: column; 
    justify-content: center;align-items: center;margin: 0 auto; text-align: center;
    position: relative;
    width: 100%; height: 100px;
    transition: transform 0.3s ease;
    z-index: 12;
    background-color: rgba(94, 76, 30, 0.922);
    border: 2px white solid;
}
.divVmestoimgtxt2{
    font-size: 18px; color: white;
    transition: transform 0.3s ease;
}
.divVmestoimgtxt{
    font-size: 18px; color: white;
    background-color: rgb(215, 172, 61);
    cursor: pointer;
    border-radius: 5px;
}



.vivodtexta{
 display: flex; flex-wrap: wrap;  
 position: relative;
 width: 100%;height: 100%;
 margin: 0 auto; justify-content: center;align-items: center;
 background-color: rgb(255, 255, 255);
 z-index: 3;
 
}
.textposlephoto{
    display: flex; justify-content: center;align-items: center;
     text-align: center;
    position: relative;
    pointer-events: none;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    font-size:medium;
    height: auto;
    width: auto;
    flex: 1 1 30%;
}
.line{
    display: flex;justify-content: center;align-items: center; text-align: center;
    background-color: rgb(251, 188, 15);
    font-weight: 500;font-size: 22px;
    min-height: 100px;
    border-radius: 10px;
    width: 100%;
}
.tasd{
    display: flex;flex: 1 1 100%; justify-content: center;align-items: center;
    font-size: 25px;
    margin-top: 100px;
    font-weight: 600;
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
.divcontCUFP:hover .txtCUFP,
.divcontCUFP:hover .divVmestoimgtxt2
{
    transform: scale(1.03);
}
.divcontCUFP:hover .txtCUFP{
    transform: scale(1.06) translateX(-48%);
    
}


@media (max-width:800px){
    .Mcont{
        flex: 1 1 100%
    }
    .txtCUFP{
        font-size: 25px;
    }
}
</style>