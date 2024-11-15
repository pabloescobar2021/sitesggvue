<template>
<div class="all">
    <h2>СВЯЖИТЕСЬ С НАМИ</h2>
    <div class="div_grid">
        <div>
            
            <div>
                <div class="div_podpic">
                    <p class="p_main" >Позвоните или напишите нам:</p>
                    <p class="p_other">ooo.ssg88@mail.ru</p>
                    <p class="p_other">+7 (928) 854-76-43</p>
                </div>
                <div class="div_podpic">
                    <p class="p_main" >Приезжайте в наш офис:</p>
                    <p class="p_other">Сочи, Пластунская 50/2, Офис 46-б</p>
                </div>
                <div class="div_podpic">
                    <p class="p_main" >График работы:</p>
                    <p class="p_other">Пн. – Пт.: с 8:00 до 18:00</p>
                    <p class="p_other">Суббота и воскресенье - выходные дни</p>
                </div>
            </div>
        </div>
        <div class="div_2_" style="position: relative;">
            <div class="div_input">
                <p class="p_txt_zayav">Оставьте заявку</p>
                <input class="input_cls" v-model="formData.name" type="text" placeholder="Ваше ФИО" />
                <p class="errormess_other" v-if="message1 " > {{ message1 }}  </p>
                <input class="input_cls" v-model="formData.email" type="email" placeholder="Email" />
                <p class="errormess_other" v-if="message2 " > {{ message2 }}  </p>
                <input class="input_cls" v-model="formData.phone" type="tel" placeholder="Номер телефона" />
                <p class="errormess_other" v-if="message3 " > {{ message3 }}  </p>

                <div style="display: flex;">
                <input class="check" id="check" v-model="checkbox" type="checkbox">
                <p class="p_other" for="check">Принять пользовательское соглашение</p>
                </div>

                <p class="errormess" v-if="chekValue" >  {{ chekValue }} </p>
                <!-- <span class="" v-if="chekValue" > {{ chekValue }} </span> -->
                <button class="buttsub"  @click="submitForm "> Отправить </button>
                <ModalOknoOtravit v-if="Ismodal" @close="Ismodal = false"></ModalOknoOtravit>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
import ModalOknoOtravit from './ModalOknoOtravit.vue';

export default {
    components:{ModalOknoOtravit },
    data(){
        return{
            formData:{
                name: '',
                email:'',
                phone:"",
                
            },
            message1: '',
            message2: '',
            message3: '',
            chekValue:'',
            checkbox: false,

            Ismodal: false,
        }
    },
   methods:{
    async submitForm() {

        this.message1 = !this.formData.name ? 'Пожалуйста, заполните это поле!' : '';
        this.message2 = !this.formData.email ? 'Пожалуйста, заполните это поле!' : '';
        this.message3 = !this.formData.phone ? 'Пожалуйста, заполните это поле!' : '';
        this.chekValue = !this.checkbox ? 'Пожалуйста, примите пользовательское соглашение!' : '';

       const Errors = [this.message1, this.message2,this.message3, this.chekValue].some(msg => msg);

       if(!Errors) {
        // alert('Данные успешно отправлены')
        // console.log(this.formData);

        // this.formData.name = '';
        //     this.formData.email = '';
        //     this.formData.phone = '';
        //     this.checkbox = false;

        // this.message1 = '';
        // this.message2 = '';
        // this.message3 = '';
        // this.chekValue = '';

        // this.Ismodal = true;

        try{
            const formData = new FormData();
            formData.append('name', this.formData.name);
            formData.append('email', this.formData.email);
            formData.append('phone', this.formData.phone);

            const response = await fetch('http://mishutvd.beget.tech/submit.php',{
                method: 'POST',
                body: formData
            });

            const result = await response.text();
            alert(result);
        } catch (error){
            console.error('Ошибка при отправке', error);
        }
       }

      
    }
    
   }
}
</script>

<style scoped>
.all{
    font-family: "Montserrat", serif;
    font-weight: 300;
    background-color: rgb(212, 212, 212);
    
    }
.div_grid{
    display: grid; grid-template-columns: 50% 50%; width: 80%;
    justify-content: center;align-items: center;margin: 0 auto;
    font-family: "Montserrat", serif;
    font-weight: 600;
    
}

@media (max-width:1000px){
    .div_grid{
        grid-template-columns: 1fr;
    }
    .div_2_{
        margin-top: 20px;
    }
}

h2{
    display: flex;justify-content: center;align-items: center;margin: 0 auto; text-align: center;
    font-family: "Montserrat", serif; padding: 20px;
}

.div_podpic{
    display: grid;grid-auto-rows: 30px;
}
.div_podpic:not(:last-child){
    margin-bottom: 10px
}
.p_main{
    font-weight: 700;
}
.p_other{
    font-weight: 500;
}
.p_txt_zayav{
    margin: 0 auto; margin-bottom: 10px;
    font-size: 24px;
    font-family: "Montserrat", serif; 
}

.div_input{
    display: grid;
}
.input_cls{
    margin-bottom: 10px; margin-top: 10px;
    padding: 2px;
    border-radius: 5px; border: solid 0.2px black;
    height: 50px;
    font-size: 15px; font-family: "Montserrat", serif;
}


.buttsub{
    display: flex; justify-content: center; margin: 0 auto; align-items: center;
    width: 50%; height: 50px; text-align: center;
    background-color: rgb(245, 5, 5);
    font-size: 23px;font-style: normal;
    border-radius: 15px;
    color: white;
    padding: 6px;
    font-family: "Montserrat", serif; font-weight: 400;
}
.buttsub:active{
    transform: scale(0.92);
}
.check{
    display: flex;justify-content: left; width: fit-content;
}
.errormess , .errormess_other {
    display: flex;justify-content: center;align-items: center;justify-items: center;text-align: center;
    position: relative; width: 100%;
    color: red; font-size: 15px;
    font-family: "Montserrat", serif; font-weight: 500;margin: 0; 
}
.errormess_other{
 margin: 0; justify-content: left;
}
</style>