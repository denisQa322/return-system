<script lang="ts" setup>
import AddOrderComponent from '@/components/AddOrderComponent.vue'
import OrderInfoComponent from '@/components/OrderInfoComponent.vue'
</script>

<template>
  <main>
    <div>
      <AddOrderComponent />
      <OrderInfoComponent />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/tovw.scss' as *;
</style>
