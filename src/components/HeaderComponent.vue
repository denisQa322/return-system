<script lang="ts" setup></script>

<template>
  <header>
    <div class="header container">
      <nav class="header-navigation">
        <div class="header-navigation-main-page">
          <RouterLink to="/"> <img src="@/assets/images/support-main-img.png" alt="" /></RouterLink>
        </div>
        <div class="header-navigation-pages">
          <RouterLink to="/returns">Возвраты</RouterLink>
          <RouterLink to="/rejects">Отмены</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/tovw.scss' as *;
header {
  padding: toVw(25px) 0;
  .header {
    &-navigation {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      &-main-page {
        cursor: pointer;
        a {
          img {
            height: toVw(50px);
            width: toVw(50px);
          }
        }
      }
      &-pages {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: auto;
        gap: toVw(5px);
        font-size: toVw(25px);
        a {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
