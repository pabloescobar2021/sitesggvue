<template>
<div class="Vsenashiusl" >
    <h2>Другие услуги</h2>
    <div class="divVNU1">
        <div v-for="(item, index) in items"
        :key="index"
        class="divVNU2"
        @click="Pagetransit(index)"
        :class="{ highlighted: index === currentPathIndex  }"
        >
                <div class="divVNU3" >
                    <img class="imgicons" :src="item.iconsimg" >
                    <div>{{ item.uslug }}</div>
                </div>
        </div>

    </div>
</div>
</template>


<script>
import { ccilki } from '@/utils/CCilkiStranic';

export default {
    props:{
        checkPage:{
            type: String
        }
    },

    data(){
        return{
            items:[
                {uslug: 'НВК', iconsimg: require('@/assets/icons/nv.png') },
                {uslug: 'Отопление, водоснабжение...', 
                iconsimg: require('@/assets/icons/kot.png') },
                {uslug: 'Теплосети', 
                iconsimg: require('@/assets/icons/icons8-heating-radiator-50.png') },
                {uslug: 'Кондиционирование, вентиляция...', 
                iconsimg: require('@/assets/icons/ko.png') },
                {uslug: 'Металлоконструкции, сварка', 
                iconsimg: require('@/assets/icons/svar2.png') },
                {uslug: 'Монолитное строительство зданий', 
                iconsimg: require('@/assets/icons/stroy.png') },
                {uslug: 'Кровельные работы', 
                iconsimg: require('@/assets/icons/icons8-roofing-50.png') },
                {uslug: 'Электромонтажные работы', 
                iconsimg: require('@/assets/icons/elec.png') },
                {uslug: 'Благоустройство', 
                iconsimg: require('@/assets/icons/icons8-nature-50.png') },
            ],
            ccilki,
            highlightedIndex: null,
            currentPathIndex: -1,
        }
    },
    methods:{
        Pagetransit(index){
            const rout = this.ccilki[index];

            if(rout ){
                this.$router.push(rout);
            }
        },

        // сравнивает путь(на какой сейчас странице) и массив ccilki и возращает индекс
        //то есть то есть если на нвк то вернет 0
        UpdateCurIndex(){
            this.currentPathIndex = this.ccilki.indexOf(this.$route.path);
        }
    },
    mounted(){
        this.UpdateCurIndex();
    },
    // следит за обновлением пути и запускает функцию UpdateCurIndex
    watch:{
        '$route.path': 'UpdateCurIndex'
    },
    computed: {
        
    },

}

</script>


<style scoped>
.Vsenashiusl{
    font-family: Montserrat, sans-serif;
    background-color: rgb(255, 255, 255); 
    color: rgb(0, 0, 0); justify-content: center;align-items: center;
    padding-bottom: 20px;

}
h2{
    justify-content: center;align-items: center;
    padding: 10px; padding-top: 20px;
}
.divVNU1{
    display: flex;flex-wrap: wrap;
    grid-template-rows: repeat(auto-fill, 40px);
    justify-content: center;align-items: center;
    margin: 0 auto;
    gap: 10px; 
    width: 70%;
    padding: 30px;
    background-color: rgb(255, 255, 255);  border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.036);
    overflow: hidden
}

.divVNU2{
    display: flex; flex: 1 1 20%;
    min-width: 200px;
    justify-content: left;align-items: center; text-align: left;
    color: rgb(0, 0, 0); font-weight: 500; font-size: 16px;
    height: 150px;
    cursor: pointer;
    background-color: rgb(255, 255, 255); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    
}
.divVNU2:last-child{
    justify-content: center;
}
.divVNU2:hover{
    color: rgb(0, 0, 0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.634);
}
.divVNU3{
    display: grid;
    padding: 10px;
    
}


.imgicons{
    width: 50px; height: 50px
}

.highlighted {
  background-color: rgb(188, 188, 183); /* Пример стиля для выделенного элемента */
  border-radius: 20px;width:min-content;
  margin: 0 auto;
}

@media (max-width: 800px){
    .divVNU1{
        
    }
    .divVNU2{
        flex: 1 1 40%;
    }
    
}
@media (max-width: 500px){
    .divVNU1{
        
    }
    .divVNU3{
    
    }
    .divVNU2:last-child{
        justify-content: left;
    }
}

</style>