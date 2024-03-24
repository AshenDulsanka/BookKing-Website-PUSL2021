<template>
  <div :class="$style.userDashboard">
    <newheader />
      <main :class="$style.rumethMansaraPiliyandalaRd">
      <userDashboardContent 
        v-if="user && bookings"
        :name="user.name"
        :address="user.address"
        :phoneNo="user.phoneNumber"
        :email="user.email"
        :bookings="bookings"
      />
      
    </main>
    
  </div>

  <newfooter />

</template>

<script>
  import { defineComponent, onMounted } from "vue";
  
  import userDashboardContent from "../../components/dashboard/userDashboardContent.vue";
  import newfooter from "../../components/public/newfooter.vue";
  import newheader from "../../components/public/newheader.vue";
  import axios from "axios";

  export default defineComponent({
    name: "UserDashboard",
    components: { newheader, userDashboardContent, newfooter },
    data() {
      return {
        user: null,
        bookings: null,
      };
    },
    mounted() {
      this.fetchUserData();
      this.fetchBookings();
    },
    methods: {
      async fetchUserData() {
        try {
          const response = await axios.get("http://localhost:8081/api/getUser", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          this.user = response.data.data;
        } catch (error) {
          console.error(error);
        }
      },
      async fetchBookings() {
        try {
          const response = await axios.get("http://localhost:8081/api/getBookings", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          this.bookings = response.data.data || [];
        } catch (error) {
          console.error(error);
        }
      },
    },
  });
</script>

<style module>
  .rumethMansaraPiliyandalaRd {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 1390px;
    box-sizing: border-box;
    gap: 19px 0px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .userDashboard {
    width: 100%;
    height: 1024px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 161px 0px;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1350px) {
    .rumethMansaraPiliyandalaRd {
      padding-bottom: 903px;
      box-sizing: border-box;
    }

    .userDashboard {
      height: auto;
      gap: 80px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .rumethMansaraPiliyandalaRd {
      padding-bottom: 587px;
      box-sizing: border-box;
    }

    .userDashboard {
      gap: 40px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .rumethMansaraPiliyandalaRd {
      padding-bottom: 382px;
      box-sizing: border-box;
    }
  }
</style>
../components/userDashboardContent.vue../../components/dashboard/userDashboardContent.vue