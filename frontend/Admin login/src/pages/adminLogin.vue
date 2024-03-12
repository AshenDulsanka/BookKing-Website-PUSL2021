<template>
  <div class="service-provider-login1">
    <Header1 />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Header1 from '../components/Header.vue'

export default defineComponent({
  name: 'adminLogin',
  components: { Header1 }
})
</script>
<style scoped>
  @media screen and (max-width: 1350px) {
    .password-input-frame {
      flex: 1;
      margin-left: 0;
    }

    .header-frame {
      flex-wrap: wrap;
    }

    .service-provider-login1 {
      gap: 52px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .password-input-frame {
      min-width: 100%;
    }

    .service-provider-login1 {
      gap: 26px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .already-have-account-message {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
