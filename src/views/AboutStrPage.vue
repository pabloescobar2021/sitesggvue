<template  >
        <UslugiGlavniyDiv 
        :backgr_blur="backgr_blur"
        :IsbuttonSub=' false '
        title='Инженерно-строительная компания "ССГ" '>
        <div class="ab1" >
            <p class="ap1">Наша компания — это ваш надежный партнер в реализации комплексных 
                строительных и инженерных проектов. С многолетним опытом работы, 
                мы гордимся высоким качеством услуг, которые предоставляем нашим 
                клиентам. Мы объединяем профессионализм, инновации и внимание к 
                деталям для выполнения задач любой сложности.</p>

        </div>

        <div class="divaboutcont" >
        <div v-for="(item, index) in items"
        :key="index"
        class="divabout1"
        >
            <img :src="item.icon">
            <p>{{ item.txt }}</p>   
        </div>
        </div>
        
        </UslugiGlavniyDiv>

    <div>
        <YandexMap></YandexMap>
    </div>
    <BottomSvyaz></BottomSvyaz>
</template>


<script>
import UslugiGlavniyDiv from '@/components/UslugiGlavniyDiv.vue';
import YandexMap from '@/utils/YandexMap.vue';
import BottomSvyaz from '@/components/BottomSvyaz.vue';






export default {
    name: 'AboutStrPage',
    components:{
        UslugiGlavniyDiv,
        YandexMap,
        BottomSvyaz
    },
    data(){
        return{
            backgr_blur:{
                height: '500px',
                maxHeight: 'none',minHeight: '400px'
            },
            items:[
                {icon: require('@/assets/icons/free-icon-security-102649.png'),
                 txt:'Надежность'
                 },
                {icon: require('@/assets/icons/free-icon-quality-3002398.png'),
                 txt:'Качество'
                 },
                {icon: require('@/assets/icons/free-icon-professionalism-12773561.png'),
                 txt:'Профессионализм'
                 },
                {icon: require('@/assets/icons/free-icon-innovation-8940910.png'),
                 txt:'Инновации'
                 },
            ]
        }
    },
    computed:{
        dymancStyle(){
            const styles = {...this.backgr_blur};

            if (window.innerWidth <= 900){
                styles.height = '600px'
            }
            if (window.innerWidth <= 768){
                styles.height = '700px'
            }
            



            if (window.innerWidth >= 900){
                styles.height = '500px'
            }
            return styles
        }
    },
    mounted(){
        window.addEventListener('resize', this.updatestyle);
        this.updatestyle();
    },
    beforeUnmount(){
        window.removeEventListener('resize', this.updatestyle);
    },
    methods: {
       updatestyle(){
        this.backgr_blur = this.dymancStyle;
       } 
    }
};
</script>

<style scoped >
.d{
    font-family: Montserrat, sans-serif; 
    margin: 0 auto;
    position: relative; 
    display:flex; flex-flow: column;
    justify-content: center;align-items: center;margin: 0 auto;
    width: 100%;
}
.ab1{
    display: flex;justify-items: center;align-items: center;
    margin: 0 auto; margin-bottom: 20px
}
.ap1{ 
    justify-items: center;margin: 0 auto; text-align: center;
    width: 80%;
    font-weight: 500;font-size: 20px;
}
.divaboutcont{
    display: flex;justify-content: center;align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
.divabout1{
    display: grid;justify-content: center;align-items: center;
    flex: 1 1 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    padding: 10px;font-weight: 600
}
.divabout1 img{
    justify-content: center;align-items: center;
    width: 40px;filter: invert(1);
}


.ymaps3x0--main-engine-container {
    filter: brightness(0.5);
}



@media(max-width: 500px){
    .ap1{
        font-size: 15px;
    }
    .divaboutcont{
        gap: 10px;
    }
    .divabout1{
        display: flex;
        height: 30px;
    }
}
@media(max-width: 450px){
    .divabout1{
        display: flex;
        height: 45px;
    }
}
</style>