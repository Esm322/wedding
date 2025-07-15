<template>
  <div class="container">
    <div class="first-block">
      <img class="img-first-block" src="./assets/classic-header.png">

      <div class="wrapper-text-first-block">
        <p class="name-text">
          Трофим
        </p>
        <p class="name-text">
          Соломия
        </p>
        <div class="wrapper-date-first-block">
          <div class="wrapper-date">
            <span class="date-text">
              воскресенье
            </span>
            <span class="date-text slash">
              |
            </span>
            <span class="date-text day">
              7
            </span>
            <span class="date-text slash">
              |
            </span>
            <span class="date-text">
              сентября
            </span>
          </div>
          <p class="date-text year">2025</p>
        </div>
      </div>

      <div class="countdown">
        <div class="timer">
          <div class="time-block">
            <span class="time-value">{{ days }}</span>
            <span class="time-label">дней</span>
          </div>
          <div class="time-block">
            <span class="time-value">{{ hours }}</span>
            <span class="time-label">часов</span>
          </div>
          <div class="time-block">
            <span class="time-value">{{ minutes }}</span>
            <span class="time-label">минут</span>
          </div>
          <div class="time-block">
            <span class="time-value">{{ seconds }}</span>
            <span class="time-label">секунд</span>
          </div>
        </div>
      </div>
    </div>

    <div class="second-block">
      <h3 class="title">
        Дорогие гости!
      </h3>

      <p class="second-block-text">
        Приглашаем вас разделить с нами радость особенного для нас события и стать частью нашей семейной истории!
      </p>
    </div>

    <div class="third-block">
      <h3 class="title">
        План мероприятия
      </h3>

      <ul class="third-block-list list-reset hide-m">
        <li class="third-block-item">
          <div class="third-block-item-wrapper time-wrapper">
            <span class="third-block-time">
              16:30
            </span>
          </div>
          <div class="third-block-item-wrapper">
            <img class="third-block-img" src="./assets/calendar.png">
          </div>
          <div class="third-block-item-wrapper">
            <h4 class="third-block-text">
              Сбор гостей
            </h4>
            <p class="third-block-text">
              Просим взять с собой хорошее настроение и свои улыбки
            </p>
          </div>
        </li>

        <div class="lines"></div>

        <li class="third-block-item">
          <div class="third-block-item-wrapper">
            <h4 class="third-block-text">
              Церемония регистрации
            </h4>
            <p class="third-block-text">
              Трогательный и значимый шаг, который ознаменует начало нашей семейной жизни
            </p>
          </div>
          <div class="third-block-item-wrapper ring-wrapper">
            <img class="third-block-img ring" src="./assets/ring.jpg">
          </div>
          <div class="third-block-item-wrapper time-ring-wrapper">
            <span class="third-block-time">
              17:00
            </span>
          </div>
        </li>

        <div class="lines"></div>

        <li class="third-block-item">
          <div class="third-block-item-wrapper time-wrapper">
            <span class="third-block-time">
              18:00
            </span>
          </div>
          <div class="third-block-item-wrapper">
            <img class="third-block-img" src="./assets/plate.png">
          </div>
          <div class="third-block-item-wrapper">
            <h4 class="third-block-text">
              Торжественный ужин
            </h4>
            <p class="third-block-text">
              Уютная атмосфера, вкусная еда и приятная компания сделают этот день незабываемым для всех нас
            </p>
          </div>
        </li>
      </ul>

      <ul class="third-block-list list-reset display-m hide">
        <li class="third-block-item">
          <div class="third-block-item-wrapper time-wrapper bg-sbor">
            <span class="third-block-time">
              16:30
            </span>
          </div>
          <div class="third-block-item-wrapper">
            <h4 class="third-block-text">
              Сбор гостей
            </h4>
            <p class="third-block-text">
              Просим взять с собой хорошее настроение и свои улыбки
            </p>
          </div>
        </li>

        <div class="lines"></div>

        <li class="third-block-item">
          <div class="third-block-item-wrapper time-ring-wrapper bg-ceremonia">
            <span class="third-block-time">
              17:00
            </span>
          </div>
          <div class="third-block-item-wrapper">
            <h4 class="third-block-text">
              Церемония регистрации
            </h4>
            <p class="third-block-text">
              Трогательный и значимый шаг, который ознаменует начало нашей семейной жизни
            </p>
          </div>
        </li>

        <div class="lines"></div>

        <li class="third-block-item">
          <div class="third-block-item-wrapper time-wrapper bg-supper">
            <span class="third-block-time">
              18:00
            </span>
          </div>
          <div class="third-block-item-wrapper">
            <h4 class="third-block-text">
              Торжественный ужин
            </h4>
            <p class="third-block-text">
              Уютная атмосфера, вкусная еда и приятная компания сделают этот день незабываемым для всех нас
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="fourth-block">
      <h3 class="title">
        Место проведения
      </h3>

      <p class="fourth-block-text">
        ZAGARRO CLUB RESORT, зал Green Garden
      </p>

      <a class="fourth-block-text link" target="_blank"
        href="https://yandex.ru/maps/35/krasnodar/?ll=39.017355%2C45.121389&mode=routes&rtext=~45.119804%2C38.998005&rtt=auto&ruri=~&z=13.8">
        Краснодар, Ростовское шоссе, 25/4
      </a>

      <yandex-map class="map" v-model="map" :settings="{
        location: {
          center: [38.998004, 45.119803],
          zoom: 17,
        },
      }" width="100%" height="500px">
        <yandex-map-listener :settings="{ onClick: openMaps }" />
        <yandex-map-controls :settings="{ position: 'right' }">
          <yandex-map-zoom-control />
        </yandex-map-controls>
        <yandex-map-default-scheme-layer />
        <yandex-map-default-features-layer />
        <yandex-map-default-marker v-for="(marker, index) in markers" :key="index" :settings="marker">
          <div class="marker"></div>
        </yandex-map-default-marker>
      </yandex-map>
    </div>

    <div class="fifth-block">
      <h3 class="title">
        Отвечаем на Ваши вопросы
      </h3>

      <ul class="list-reset fifth-block-list">
        <li class="fifth-block-item">
          <h4 class="fifth-block-title">
            Есть ли дресс-код или пожелания по стилю одежды?
          </h4>
          <p class="fifth-block-text">
            На нашей свадьбе ограничений по дресс-коду нет. Будем рады вашему присутствию и доверяем вашему вкусу и
            стилю в выборе наряда!
          </p>
        </li>

        <li class="fifth-block-item">
          <h4 class="fifth-block-title">
            До какого числа необходимо подтвердить участие в мероприятии?
          </h4>
          <p class="fifth-block-text">
            Подтвердите свое присутствие до 1 августа. Поскольку в анкете есть вопросы касательно напитков и еды, просим
            гостей, которые придут в паре заполнять форму по отдельности.
          </p>
        </li>
      </ul>
    </div>

    <div class="sixth-block">
      <h3 class="title">
        Вы сможете прийти?
      </h3>

      <p class="sixth-block-text">
        Подтвердите своё присутствие и ответьте на пару вопросов, чтобы мы всё подготовили!
      </p>

      <button class="btn-open btn-reset" @click="openModal">
        Подтвердить участие
      </button>
    </div>

    <div class="seventh-block">
      <h3 class="title">
        Детали
      </h3>

      <p class="seventh-block-text">
        По любым вопросам до свадьбы и в день торжества смело обращайтесь к Анастасии
      </p>

      <a class="seventh-block-link" target="_blank" href="https://t.me/BondarevAnV">
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" class="tg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2629 9.3444 8.93015 10.3492 5.43191 11.8733C4.86385 12.0992 4.56628 12.3202 4.53919 12.5363C4.4934 12.9015 4.95073 13.0453 5.57349 13.2411C5.6582 13.2678 5.74598 13.2954 5.83596 13.3246C6.44866 13.5238 7.27284 13.7568 7.70131 13.766C8.08996 13.7744 8.52375 13.6142 9.00266 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.1391 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.3761 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5034 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78393 14.6448 10.8036 15.3168C11.2937 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2078 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8308 18.0694 15.3826 18.0186C15.7033 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6632 17.3816 10.0585 17.5622 8.16098C17.5781 7.99473 17.5582 7.78197 17.5422 7.68858C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0057 7.22234 16.9064 7.22408C16.455 7.23204 15.7626 7.47282 12.43 8.85893Z"
            fill="#000000" />
        </svg>
      </a>
    </div>

    <div class="last-block">
      <img class="img-last-block" src="./assets/classic-footer.png">

      <p class="footer-text">
        Этот день мы хотим
      </p>
      <p class="footer-text">разделить с вами!</p>
    </div>

    <div class="modal" v-if="isModal">
      <div class="modal-container">
        <div class="close-modal" @click="openModal">
          <span class="close">&#215;</span>
        </div>
        <iframe src="https://svdba.ru/form/trofim-solomiya" width="100%" height="500px" style="border:none;">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, shallowRef, watch } from 'vue';

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapZoomControl,
  YandexMapControls,
  YandexMapListener,
} from 'vue-yandex-maps';

const map = shallowRef(null);
const markers = reactive([
  {
    coordinates: [38.998004, 45.119803],
  }
]);

const isModal = ref(false);
const targetDate = ref(new Date('2025-09-07T16:30:59'));
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let interval;

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate.value - now;

  if (diff <= 0) {
    clearInterval(interval);
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
};

const openModal = () => isModal.value = !isModal.value;

const openMaps = () => window.open('https://yandex.ru/maps/35/krasnodar/?ll=39.017355%2C45.121389&mode=routes&rtext=~45.119804%2C38.998005&rtt=auto&ruri=~&z=13.8')

watch(
  () => isModal.value,
  (newValue) => {
    if (newValue === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style>
  .first-block {
    margin-bottom: 70px;
  }

  .img-first-block {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .wrapper-text-first-block {
    z-index: 100;
    margin-bottom: 50px;
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name-text {
    font-family: 'GreatVibes';
    font-size: 82px;
    line-height: 82px;
  }

  .name-text:nth-child(1) {
    margin-bottom: 10px;
  }

  .name-text:nth-child(2) {
    margin-bottom: 20px;
  }

  .wrapper-date {
    display: flex;
    margin-bottom: 15px;
  }

  .date-text {
    text-transform: uppercase;
    font-family: 'CormorantItalic';
    font-size: 25px;
  }

  .slash {
    padding: 0 20px;
    font-family: sans-serif;
  }

  .day {
    font-size: 50px;
    transform: translateY(-10px);
  }

  .year {
    padding-left: 40px;
    font-size: 28px;
    text-align: center;
  }

  .countdown {
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  .timer {
    display: flex;
  }

  .time-block {
    display: flex;
    padding: 18px;
    width: 115px;
    flex-direction: column;
    align-items: center;
    background-color: rgba(213, 191, 171, .4);
    border-radius: 10px;
  }

  .time-block:not(:last-child) {
    margin-right: 30px;
  }

  .time-value {
    margin-bottom: 23px;
    font-size: 40px;
  }

  .time-label {
    font-size: 30px;
  }

  .last-block {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .img-last-block {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 20px;
    top: 0;
  }

  .second-block {
    display: flex;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }

  .second-block-text {
    padding: 0 250px;
    text-align: center;
  }

  .third-block {
    display: flex;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }

  .third-block-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .third-block-item {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }

  .third-block-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .third-block-item-wrapper:not(:nth-child(2)) {
    width: 48%;
    align-items: flex-start;
  }

  .time-wrapper {
    padding-top: 10px;
  }

  .time-ring-wrapper {
    padding-top: 20px;
  }

  .third-block-item-wrapper:nth-child(1) {
    align-items: end;
  }

  .third-block-item-wrapper:nth-child(2) {
    padding: 0 10px;
    align-items: center;
  }

  .third-block-item:first-child {
    margin-bottom: 20px;
  }

  .third-block-item:nth-of-type(2) {
    margin-bottom: 20px;
  }

  .third-block-list>li.third-block-item:nth-of-type(2)>div.third-block-item-wrapper:nth-of-type(1)>p.third-block-text:nth-child(2) {
    text-align: end;
  }

  .ring-wrapper {
    padding: 0!important;
  }

  .lines {
    margin-bottom: 20px;
    width: 1px;
    height: 60px;
    align-self: center;
    background-color: #000;
  }

  .third-block-img {
    width: 50px;
    height: 50px;
  }

  .ring {
    width: 75px;
    height: 75px;
    transform: translateY(-4px);
  }

  .fourth-block {
    display: flex;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }

  .fourth-block-text {
    margin-bottom: 20px;
  }

  .link {
    color: rgb(134, 120, 107);
    transition: color .3s ease-in-out;
  }

  .link:hover {
    color: rgb(213, 191, 171);
  }

  .fifth-block {
    display: flex;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }

  .fifth-block-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fifth-block-item {
    display: flex;
    width: 80%;
    flex-direction: column;
    text-align: center;
  }

  .fifth-block-item:not(:last-child) {
    margin-bottom: 20px;
  }

  .fifth-block-title {
    margin-bottom: 10px;
  }
  .sixth-block {
    display: flex;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }

  .sixth-block-text {
    margin-bottom: 20px;
  }

  .btn-open {
    padding: 20px;
    border-radius: 10px;
    font-size: 30px;
    font-family: 'GreatVibes';
    background-color: rgb(213, 191, 171);
    color: #fff;
    transition: color .3s ease-in-out, background-color .3s ease-in-out, outline .3s ease-in-out, box-shadow .3s ease-in-out;
  }

  .btn-open:hover {
    box-shadow: 8px 8px 8px 1px rgba(213, 191, 171, 0.4);
    color: rgb(213, 191, 171);
    background-color: #fff;
    outline: 1px solid rgb(213, 191, 171);
  }

  .seventh-block {
    display: flex;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }

  .seventh-block-text {
    margin-bottom: 20px;
  }

  .footer-text {
    z-index: 100;
    font-family: 'GreatVibes';
    font-size: 82px;
    line-height: 82px;
  }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(33, 33, 33, .3);
    z-index: 999;
  }

  .modal-container {
    position: relative;
    margin: 10% auto;
    padding: 5px;
    padding-bottom: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    width: 90%;
    max-width: 800px;
    max-height: 80vh;
  }

  .close-modal {
    position: absolute;
    top: -40px;
    right: -40px;
    cursor: pointer;
    transition: .3s ease-in-out;
  }

  .close-modal:hover {
    color: #fff;
  }

  .close {
    font-size: 50px;
  }

  .map {
    width: 60%!important;
  }

  .marker {
    position: relative;
    width: 20px;
    height: 20px;
    background: #ff0000;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 20px;
  }

  .tg path {
    transition: fill .3s ease-in-out;
  }

  .tg:hover path {
    fill: rgb(213, 191, 171);
  }

  @media (max-width: 576px) {
    .container {
      padding: 0 10px;
    }

    .first-block {
      margin-bottom: 50px;
    }

    .title {
      margin-bottom: 30px;
    }

    .wrapper-text-first-block {
      margin-bottom: 30px;
      padding-top: 80px;
    }

    .date-text {
      font-size: 20px;
    }

    .day {
      font-size: 35px;
    }

    .time-block:not(:last-child) {
      margin-right: 20px;
    }

    .time-block {
      width: 75px;
      padding: 10px;
    }

    .time-value {
      margin-bottom: 10px;
      font-size: 30px;
    }

    .time-label {
      font-size: 20px;
    }

    .second-block-text {
      padding: 0 0;
    }

    .third-block-item-wrapper:not(:first-child) {
      width: 80%;
    }

    .third-block-item-wrapper:first-child {
      width: 20%;
    }

    .time-wrapper {
      padding-top: 0px;
    }

    .third-block-item-wrapper:nth-child(1) {
      align-items: self-start;
    }

    .third-block-item-wrapper:nth-child(2) {
      padding: 0 0px;
      align-items: self-start;
    }

    .time-ring-wrapper {
      padding-top: 0px;
    }

    .third-block-text {
      font-size: 24px;
    }

    .bg-sbor {
      background-image: url('./assets/calendar.png');
      background-repeat: no-repeat;
      padding-bottom: 72px;
      background-size: 50px;
      background-position: 0 40px;
    }

    .bg-ceremonia {
      background-image: url('./assets/ring.jpg');
      background-repeat: no-repeat;
      padding-bottom: 96px;
      background-size: 90px 80px;
      background-position: -20px 30px;
    }

    .bg-supper {
      background-image: url('./assets/plate.png');
      background-repeat: no-repeat;
      padding-bottom: 120px;
      background-size: 55px;
      background-position: 0 40px;
    }

    .fourth-block {
      margin-bottom: 40px;
    }

    .fourth-block-text {
      font-size: 24px;
      text-align: center;
    }

    .map {
      width: 100% !important;
      height: 300px !important;
    }

    .fifth-block {
      margin-bottom: 40px;
    }

    .fifth-block .title {
      font-size: 34px;
    }

    .fifth-block-item {
      width: 100%;
      font-size: 24px;
      text-align: center;
    }

    .sixth-block {
      margin-bottom: 40px;
    }

    .sixth-block-text {
      text-align: center;
    }

    .btn-open {
      padding: 15px;
      font-size: 25px;
    }

    .seventh-block {
      margin-bottom: 40px;
    }

    .seventh-block-text {
      text-align: center;
    }

    .img-last-block {
      left: 10px;
    }

    .footer-text {
      font-size: 36px;
      line-height: 32px;
    }

    .modal-container {
      position: relative;
      margin: 86% auto;
      padding: 5px;
      padding-bottom: 0;
      background: white;
      border-radius: 8px 8px 0 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      width: 100%;
      max-width: 800px;
      max-height: 80vh;
    }

    .close-modal {
      top: -50px;
      right: 45%;
      border: 1px solid #000;
      border-radius: 50%;
      padding: 0 8px 5px 8px;
      background-color: #fff;
    }
  }
</style>
