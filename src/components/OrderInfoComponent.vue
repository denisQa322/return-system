<script lang="ts" setup>
import { ref } from 'vue'

const reference = ref('')
const quantity = ref('')
const price = ref('')
const date = ref('')

const returnReason = ref('')
const returnStatus = ref('Запрос получен')
const sellerName = ref('')
</script>

<template>
  <section class="container">
    <div class="return-info">
      <div class="return-info-content">
        <div class="return-reference">
          <label>Референс</label>
          <p>{{ reference }}</p>
        </div>
        <div class="return-reference">
          <label>Количество</label>
          <p>{{ quantity }}</p>
        </div>
        <div class="return-seller">
          <label>Поставщик</label>
          <p>{{ sellerName }}</p>
        </div>
        <div class="return-reason">
          <label>Причина возврата</label>
          <p>{{ returnReason }}</p>
        </div>
        <div class="return-status">
          <label>Статус возврата</label>
          <p>{{ returnStatus }}</p>
          <select v-if="false" v-model="returnStatus">
            <option disabled value="">Выбери статус</option>
            <option>Запрос отправлен</option>
            <option>Ответ получен</option>
            <option>Запрос на возврат</option>
            <option>Возврат получен</option>
          </select>
        </div>
        <div class="return-reference">
          <label>Дата</label>
          <p>{{ date }}</p>
        </div>
        <div class="return-reference">
          <label>Стоимость</label>
          <p>{{ price }} ₸</p>
        </div>
      </div>
      <div class="return-info-buttons">
        <button class="return-info-buttons-button done">
          <img src="@/assets/icons/done-button.svg" alt="" />
        </button>
        <button class="return-info-buttons-button edit">
          <img src="@/assets/icons/edit-button.svg" alt="" />
        </button>
        <button class="return-info-buttons-button delete">
          <img src="@/assets/icons/delete-button.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/tovw.scss' as *;

section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: toVw(10px);
  .return-info {
    width: toVw(300px);
    border: toVw(1px) solid #0067a4;
    border-radius: toVw(10px);
    padding: toVw(10px);
    display: grid;
    row-gap: toVw(15px);
    &-content {
      display: grid;
      gap: toVw(15px);
      div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      label {
        font-size: toVw(15px);
      }
      p {
        margin-left: auto;
        font-size: toVw(14px);
      }
    }
    &-buttons {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      &-button {
        border: none;
        background: none;
        cursor: pointer;
        img {
          width: toVw(20px);
        }
      }
    }
  }
}
</style>
