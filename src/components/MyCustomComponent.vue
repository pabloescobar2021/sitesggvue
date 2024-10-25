<template> 
<div class="all">
   <div class="upfooter">
      <img :src="text.logo" class="logo">
      <p class="ptext"> ССГ </p>
      <a v-for="(value, key) in filteredText" :key="key"
      :class="{Napisat: key === 'napis'}">
         {{ value }} </a>
   </div>
   
</div>
  </template>
  
  <script>

  export default {
    data() {
      return {
       text:{
        logo: require('../assets/img/logo123123.png'),
        glav: 'Главная',
        onas: 'О нас',
        usl: 'Услуги',
        napis: 'Написать нам'
       },

      };
    },
    computed: {
  filteredText() {
    return Object.entries(this.text)
      .filter(([key]) => key !== 'logo')
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
  }
}
  };
  </script>
  
  <style scoped>
.all{
  font-family: Arial, sans-serif; font-weight: 300;
}
.upfooter{
  display: flex;justify-content: center;align-items: center;position:fixed;top: 0;z-index: 1000;
  width: 100%;height: 60px;
  background-color: black;
  margin: 0; padding: 0;
}
.logo{
  display: flex; justify-content: left; position: absolute; left: 10px;
  width: 120px; height: 60px;display: none;
}
.ptext{ color: white; font-size: 40px;
  display: flex; justify-content: left; position: absolute; left: 50px;
  justify-content: center;align-items: center;
  background-color: rgb(120, 84, 32);
  width: 150px;
  border-radius: 20px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 300px;
}
.upfooter a{
  display: flex; justify-content: center;align-items: center; text-align: center;
  color: white;
  cursor: pointer;
  width:120px;
  
}
.upfooter a:hover{
  color: rgba(207, 149, 24, 0.644);
}
.Napisat{
  display: flex; justify-content: center; align-items: center;
  background-color: red;border-radius: 30px; height: 40px; width: 120px;
  
}
  </style>
  