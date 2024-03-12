<template>

    <newheader />

</template>
<script>
import { defineComponent } from 'vue'

import newheader from '@/components/newheader.vue'

export default defineComponent({
  name: 'Header',
  components: { newheader }
})
</script>
