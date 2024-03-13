<template>
  <div class="service-provider-login1">
    <AdminLoginContent />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import AdminLoginContent from '../../components/admin/adminLoginContent.vue'

export default defineComponent({
  name: 'adminLogin',
  components: { AdminLoginContent }
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
