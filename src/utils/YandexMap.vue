<template>
    <div id="map" :style="{ width: '100%', height: '300px' }"></div>
  </template>
  
  <script>
  /* global ymaps */
  export default {
    name: 'YandexMap',
    mounted() {
      // Загрузка API Яндекс.Карт с использованием вашего API-ключа
      const script = document.createElement('script');
      script.src = 'https://enterprise.api-maps.yandex.ru/2.1/?apikey=1858a1e0-3bda-4b30-bf3e-228eb597ac6b&lang=ru_RU';
      script.type = 'text/javascript';
      script.onload = this.initMap;
      document.head.appendChild(script);
    },
    methods: {
      initMap() {
        // Убедитесь, что объект ymaps доступен после загрузки скрипта
        ymaps.ready(() => {
          const map = new ymaps.Map('map', {
            center: [43.601332, 39.739636], // Центр карты (например, Москва)
            zoom: 15 // Масштаб карты
          });
  
          // Пример добавления метки на карту
          const placemark = new ymaps.Placemark([43.601332, 39.739636], {
    hintContent: 'Наш Офис',
    balloonContent: 'Наш офис'
}, {
    // Указываем кастомные параметры для метки
    iconLayout: 'default#image',
    iconImageHref: require('@/assets/icons/Icon.png'),
    iconImageSize: [50, 42], // Размеры иконки
    iconImageOffset: [-15, -42], // Смещение иконки
    // Вы можете изменить цвет метки через iconColor:
    iconColor: 'red'  // Устанавливаем цвет метки
});
          
  
          map.geoObjects.add(placemark);
        });
      }
    }
  };
  </script>
  
  <style >
    .ymaps-2-1-79-ground-pane{
        filter: brightness(0.9);
    }
    .ymaps-2-1-79-image{
       
    }
  </style>
  