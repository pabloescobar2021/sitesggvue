<template>
<div class="begStroka"
>
    <div class="beg1"
    v-for="item in itemss"
    :key="item"
    >
        <span>{{ item.item }}</span>
    </div>
</div>
</template>

<script>
export default {
    props:{
        itemss:{
            type: Array,
            required: true,
            default: () => []
        }
    },
    data(){
        return{
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,

        containerWidth: window.innerWidth * 3,
        }
    },
    mounted(){
        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    },
    methods:{
        handleResize(){
            this.screenWidth = window.innerWidth;
            console.log(this.screenWidth);

            this.containerWidth = this.screenWidth * 3;
        }
    },
}
</script>

<style scoped>
.begStroka{
    font-family: Montserrat, sans-serif; 
    display: flex;
    justify-content: center ;align-items: center;
    margin: 0 auto;
    width: 100%;
    color: white;
    background-color: black;
    white-space: nowrap;
    overflow: hidden;
    
}
    .beg1{
    display: flex;
    justify-content: center;align-items: center;
    height: 50px;
    padding-right: 30px;
    animation: begstrok 30s ease-in-out infinite;
    transform: translateX(3000px);
    }

@keyframes begstrok {
    0% {
        transform: translateX(1000px);
    }
    100% {
        transform: translateX(-1000px);
    }
}




@media (max-width:700px){
    .begStroka{
       
    }
}
@media (max-width:400px){
    .begStroka{
        
    }
}
</style>
