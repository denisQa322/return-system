<script lang="ts" setup>
import { ref } from 'vue'

const reference = ref('')
const quantity = ref('')
const price = ref('')
const date = ref('')

const returnReason = ref('')
const sellerName = ref('')
</script>

<template>
  <section>
    <div class="return-create container">
      <div class="return-create-inputs">
        <div class="reference input">
          <label for="reference">Референс</label>
          <input id="reference" v-model="reference" />
        </div>
        <div class="quantity input">
          <label for="quantity">Количество</label>
          <input id="quantity" v-model="quantity" />
        </div>
        <div class="price input">
          <label for="price">Стоимость</label>
          <input id="price" v-model="price" />
        </div>
        <div class="date input">
          <label for="date">Дата</label>
          <input id="date" v-model="date" type="date" />
        </div>
      </div>
      <div class="return-create-selects">
        <div class="return-reason select">
          <label>Причина возврата</label>
          <select v-model="returnReason">
            <option disabled value="">Выбери причину возврата</option>
            <option>Повреждение</option>
            <option>Неверное вложение</option>
            <option>Брак</option>
            <option>Б/У</option>
            <option>Некомплект/Недостача</option>
          </select>
        </div>
        <div class="seller-name select">
          <label>Поставщик</label>
          <select v-model="sellerName">
            <option disabled value="">Выбери поставщика</option>
            <option>ЮГ</option>
            <option>EMEX</option>
            <option>РК</option>
            <option>АП</option>
          </select>
        </div>
      </div>
      <button class="return-create-icon"><img src="@/assets/icons/add-button.svg" alt="" /></button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/tovw.scss' as *;

section {
  border-bottom: toVw(1px) solid #0067a4;
  .return-create {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: toVw(70px);
    align-items: center;
    padding-bottom: toVw(25px);
    &-inputs {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: toVw(70px);
      .input {
        display: grid;
        justify-items: center;
        label {
          font-size: toVw(20px);
          margin-bottom: toVw(5px);
        }
        input {
          border: toVw(1px) solid #0067a4;
          border-radius: toVw(7px);
          padding: toVw(10px) toVw(5px);
          font-size: toVw(15px);
        }
      }
    }
    &-selects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: toVw(70px);
      .select {
        display: grid;
        justify-items: center;
        label {
          font-size: toVw(20px);
          margin-bottom: toVw(5px);
        }
        select {
          border: toVw(1px) solid #0067a4;
          border-radius: toVw(7px);
          padding: toVw(10px) toVw(5px);
          font-size: toVw(15px);
          option {
            padding: toVw(10px) toVw(5px);
            font-size: toVw(15px);
          }
        }
      }
    }
    &-icon {
      margin-left: auto;
      background: none;
      border: none;
      cursor: pointer;
      img {
        width: toVw(40px);
      }
    }
  }
}
</style>
