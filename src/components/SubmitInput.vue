<template>
    <div>
        <form @submit.prevent="submitForm">
            <input v-model="name" type="text" placeholder="Ваше имя" required />
            <input v-model="email" type="email" placeholder="Ваш email" required />
            <textarea v-model="phone" placeholder="Ваше сообщение" required></textarea>
            <button type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('phone', this.phone);

        const response = await fetch('http://mishutvd.beget.tech/submit.php', {
          method: 'POST',
          body: formData
        });

        const result = await response.text();
        alert(result);
      }
      catch (error) {
        console.error('Ошибка при отправке:', error);
      }
    }
  }
};
</script>

<style scoped>

</style>