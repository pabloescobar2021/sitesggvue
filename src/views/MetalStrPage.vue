<template>
    <div class="allmet">
        <UslugiGlavniyDiv title="Изготовление любых металлоконструкций, сварка"></UslugiGlavniyDiv>

      <div class="contmetgridall" >
        <div class="contmetgridall2">
          <h2>Виды сварочных работ</h2>
          <ContentUslForPage 
          :items="parentItems" :IsWrap="true" :showimgcont="false"
          :customStyle="styleObject"
          :Mcontcustomstyle="styleObject2"
          :divVmestoimgtxt3="styleObject3"
          :disableAfter="true"
          ></ContentUslForPage>
        </div>
        
        <div class="contmetgridall2">
          <h2>Изготовление металлоконструкций</h2>
          <ContentUslForPage 
          :items="parentItems2" :IsWrap="true" :showimgcont="false"
          :customStyle="styleObject"
          :Mcontcustomstyle="styleObject2"
          :divVmestoimgtxt3="styleObject3"
          :disableAfter="true"
          ></ContentUslForPage>
        </div>
        
      </div>

        <RabotaPoObject></RabotaPoObject>
        <AfterUslugiDiv
        :items2="afteruslfuv"
        ></AfterUslugiDiv>
        <BottomSvyaz></BottomSvyaz>
        <FooterDivSite></FooterDivSite>  
      </div>
</template>

<script>
import UslugiGlavniyDiv from '@/components/UslugiGlavniyDiv.vue';
import RabotaPoObject from '@/components/RabotaPoObject.vue';
import BottomSvyaz from '@/components/BottomSvyaz.vue';
import FooterDivSite from '@/components/FooterDivSite.vue';
import ContentUslForPage from '@/components/uslugi/ContentUslForPage.vue';
import AfterUslugiDiv from '@/components/uslugi/AfterUslugiDiv.vue';



export default {
  name: 'NvkSrtPage',
  components: {
    UslugiGlavniyDiv,
    RabotaPoObject,
    BottomSvyaz,
    FooterDivSite,
    ContentUslForPage,
    AfterUslugiDiv,

  },
  data(){
    return{
      parentItems:[
        {photo: require('@/assets/img/vodosikanal.webp'), 
        text: 'Электродуговая сварка (MMA)',
        opis: 'Широко используется для соединения стальных конструкций в строительстве и ремонте.'
      },
        {photo: require('@/assets/img/2492af3d849311ef9c9c46f041e3c814-transformed.png'), text: 'Сварка в среде защитных газов (MIG/MAG)',
        opis: 'Для сварки стали, алюминия и других металлов, требующих высокой скорости и чистоты шва.'
        },
        {photo: require('@/assets/img/308_original.webp'), text: 'Тигельная сварка (TIG)',
        opis: 'Высококачественная сварка нержавеющей стали и цветных металлов, используется в ответственных конструкциях.'
        },
        {photo: require('@/assets/img/nasos-dlya-perekachki-vody-4.jpg'), text: 'Контактная сварка',
        opis:'Соединение металлов под воздействием давления и электрического тока, часто применяется в автомобилестроении.'
        },
        {photo: require('@/assets/img/c4aaa3537441487ca58363c88a97a526.png'), text: 'Плазменная сварка',
        opis:'Используется для высокоточных работ с алюминием и другими тугоплавкими металлами.'
        },

      ],
      parentItems2:[
        {photo: require('@/assets/img/vodosikanal.webp'), text: 'Каркасные конструкции',
          opis: 'Изготовление металлических каркасов для промышленных зданий, складов и ангаров.'
        },
        {photo: require('@/assets/img/2492af3d849311ef9c9c46f041e3c814-transformed.png'), text: 'Металлические лестницы и перила',
          opis: 'Лестницы и ограждения для жилых, коммерческих и промышленных зданий.'
        },
        {photo: require('@/assets/img/308_original.webp'), text: 'Навесы и козырьки',
          opis: 'Металлические навесы для парковок, входов в здания и террас.'
        },
        {photo: require('@/assets/img/nasos-dlya-perekachki-vody-4.jpg'), text: 'Опоры и мачты',
          opis: 'Опоры для линий электропередач, рекламных щитов и освещения.'
        },
        {photo: require('@/assets/img/c4aaa3537441487ca58363c88a97a526.png'), text: 'И другое',
          opis: 'Изготовим под заказ ВСЕ что угодно.'
        },

      ],
      afteruslfuv: [
  {
    t1: 'Опыт и профессионализм', 
    t2: 'Наша команда обладает многолетним опытом в изготовлении металлоконструкций и выполнении сварочных работ, гарантируя точность, надежность и качество на всех этапах производства.'
  },
  {
    t1: 'Использование современных технологий', 
    t2: 'Мы применяем передовые сварочные технологии и высококачественные материалы, что обеспечивает долговечность и надежность металлоконструкций, а также соответствие современным стандартам.'
  },
  {
    t1: 'Комплексный подход', 
    t2: 'Предоставляем полный спектр услуг — от разработки чертежей и проектирования конструкций до их изготовления, сборки и установки на объекте, обеспечивая согласованность всех процессов.'
  },
  {
    t1: 'Надежность и долговечность', 
    t2: 'Мы используем только проверенные материалы и методы, которые обеспечивают прочность металлоконструкций и долговечность сварочных швов даже при высоких нагрузках.'
  },
  {
    t1: 'Индивидуальный подход', 
    t2: 'Каждое изделие разрабатывается с учетом специфики и требований клиента, что позволяет создавать уникальные и экономичные решения для любых объектов.'
  },
  {
    t1: 'Гарантийное обслуживание', 
    t2: 'Мы предоставляем гарантию на все выполненные работы и при необходимости обеспечиваем оперативное обслуживание, чтобы поддерживать качество и безопасность металлоконструкций.'
  }
],

  styleObject:{
    backgroundColor: 'black', borderRadius: '50px',
    flexWrap: 'wrap', height: 'auto',
    padding: '20px'
  },
  styleObject2:{
    flex: '1 1 50%',
    
    
  },
  styleObject3:{
    marginTop: '10px', fontSize: '16px',
    width: '80%', color: 'rgb(233, 142, 52)'
  }

    }
  }
}
</script>

<style scoped>
.allmet{
  font-family: Montserrat, sans-serif; 
    margin: 0 auto;
    position: relative; 
    width: 100%;
    background-color: rgb(212 212 212);
    justify-content: center; align-items: center; text-align: center
}
h2{
  display: flex;justify-content: center;align-items: center;
  height: 60px; width: 80%; margin: 0 auto;
}
.contmetgridall{
  display: flex;flex-flow: column;
}
.contmetgridall2{
  
}
</style>