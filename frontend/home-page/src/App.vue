<script setup>
import NewHeader from './components/newheader.vue'
import NewFooter from './components/newfooter.vue'
</script>

<template>
    <NewHeader />
  <main>
    <RouterView />
  </main> 
  <NewFooter />
</template>

<style scoped>
main{
  margin: 0 !important;
  padding: 0 !important;
}
</style>
