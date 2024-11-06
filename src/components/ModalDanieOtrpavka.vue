<template>
<div class="div_modal">
    <div class="content_modal">
        
        <a :key="count"  class="a_but"  @click="$emit('close2')" >✖</a>
        <p class="p_txt">Заказать консультацию</p>
        <div class="div_mes">
            <input v-model="FormData.name" class="inputtxt" type="text" placeholder="Как к вам обращаться">
            <input v-model="FormData.mail" class="inputtxt" type="email" placeholder="Почта">
            <input v-model="FormData.tel" class="inputtxt" type="tel" placeholder="Номер телефона">

            <label for="checkbox">Политика конфиденциальности</label>
            <input v-model="checkbox" id="checkbox" class="checkbox" type="checkbox">

            <p class="p_error" v-if="message || polkond">{{ message }} <br> {{ polkond }}</p>
        </div>
        <button class="button" @click="Button_send">Отправить</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            FormData:{
                name:'',
                mail:'',
                tel:'',
            },
            checkbox: false,

            message: '',
            polkond: '',
        }
        
    },
    methods:{
        Button_send(){
            if(this.FormData.name === "" || this.FormData.mail === "" || this.FormData.tel === ""){
                this.message = "Введите данные"
            }
            else{
                this.message = ""
            }
            if (this.checkbox === false){
                this.polkond = "Подтвердите Политику конфиденциальности"
            }
            else{
                this.polkond = ""
            }
            if(this.message === "" && this.polkond === ""){
                console.log(this.FormData)
                Object.keys(this.FormData).forEach(key =>{
                    this.FormData[key] = '';
                })
                
                this.$emit('close');
            }
            
        }
    }
   
}
</script  >

<style scoped >
.div_modal{
  position: fixed;
  z-index: 99928;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.244);
  display: flex;
  transition: opacity 0.3s ease;
  font-family: "Montserrat", serif; 
}
.content_modal{
    position: relative; top: 30%; 
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.916);
    width: 50%; max-height: 500px; height: 400px;
    border-radius: 20px;
    z-index: 232323;
}
.div_mes{
    display:flex; flex-flow: column;
    justify-content: center;align-items: center; text-align: center;
    position: relative;
    top: 40%;transform: translateY(-50%);
    /* left: 50%;transform: translateX(-50%); */
    width: 100%;z-index: 232323;
}
.a_but{
    display: flex; position: absolute;
    justify-content: center; align-items: center;
    right: 10px;top: 5px;
    cursor: pointer;z-index: 232323;
    font-size: 20px;
}
.button{
    display: flex; position: absolute;
    justify-content: center; align-items: center;
    bottom: 10px; left: 50%;transform: translateX(-50%);
    width: 200px;height: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: red;
    font-size: 18px; color: white;
    font-family: "Montserrat", serif; 
}
.p_txt{
    display: flex; position: relative;justify-content: center; align-items: center;
    left: 50%;transform: translateX(-50%);top: 20px;
    text-align: center;
}
.p_error{
    display: flex;
    position: relative;
    top: 80%;
    color: red;
}
.inputtxt{
    display: flex;
    width: 80%; margin-bottom: 25px;
    height: 30px; 
}
.checkbox{
    display: flex; position: relative;
    width: 10%;
    margin: 0;
    
}

.v-enter-active, .v-leave-active{
    transition: opacity 0.2s ease;
}
.v-enter-from, .v-leave-to {
    opacity: 0;
}


@media (max-width: 700px){
    .content_modal{
        width: 70%;
    }
}
@media (max-width: 400px){
    .content_modal{
        width: 100%;
    }
}
</style>