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
  <main class="container">
    <section class="create">
      <div class="return-create">
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
        <button class="return-create-icon">
          <img src="@/assets/icons/add-button.svg" alt="" />
        </button>
      </div>
    </section>
    <section class="info">
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
    <OrderInfoComponent />
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/tovw.scss' as *;

main {
  .create {
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
  .info {
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
}
</style>
