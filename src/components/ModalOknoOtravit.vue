<template>
<div class="div_modal">
    <div class="content_modal">
        
        <Transition>
        <a :key="count"  class="a_but"  @click="closeTimer">{{ count }}</a>
        </Transition>
        <div class="div_mes">
            Ваше обращение отправлено!
        </div>
        <button class="button" @click="$emit('close')">ОК</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            count: 10,
            interval: null,
            Iszero: false,
        }
        
    },
    mounted(){
        this.interval = setInterval(() => {
            this.count--;

            if(this.count <= 0){
                this.$emit('close');
            }

        }, 1000);
    },
    methods:{
        closeTimer(){
            
            this.$emit('close');
             

             
        }
    }
   
}
</script  >

<style scoped >
.div_modal{
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.244);
  display: flex;
  transition: opacity 0.3s ease;
}
.content_modal{
    position: relative; top: 40%; 
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.916);
    width: 40%;height: 200px;
    border-radius: 20px;
}
.div_mes{
    display: flex;justify-content: center;align-items: center; text-align: center;
    position: absolute;
    top: 50%;transform: translateY(-50%);
    /* left: 50%;transform: translateX(-50%); */
    width: 100%;
}
.a_but{
    display: flex; position: absolute;
    justify-content: center; align-items: center;
    right: 5px;top: 5px;
    cursor: pointer;
}
.button{
    display: flex; position: absolute;
    justify-content: center; align-items: center;
    bottom: 0; left: 50%;transform: translateX(-50%);
    width: 50px;height: 40px;
    border-radius: 40px;
    cursor: pointer;
}


.v-enter-active, .v-leave-active{
    transition: opacity 0.2s ease;
}
.v-enter-from, .v-leave-to {
    opacity: 0;
}
</style>