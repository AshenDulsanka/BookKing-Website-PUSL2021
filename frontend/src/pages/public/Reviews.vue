<template>
  <div :class="$style.reviews">
    <newheader />
    <main :class="$style.reviewsInner">
      <section :class="$style.reviewsParent">
        <h1 :class="$style.reviews1">Reviews</h1>
        <reviewsFrame 
          reviewText="Great value for money, the room was clean and the staff were very helpful. The location was great, close to the beach and the main road. Would definitely stay again."
          image="../../../public/assets/images/User.png"
        />
        <reviewsFrame 
          reviewText="Great value for money, the room was clean and the staff were very helpful. The location was great, close to the beach and the main road. Would definitely stay again."
          image="../../../public/assets/images/User.png"
        />
        <reviewsFrame 
          reviewText="Great value for money, the room was clean and the staff were very helpful. The location was great, close to the beach and the main road. Would definitely stay again."
          image="../../../public/assets/images/User.png"
        />
        <reviewsFrame 
          reviewText="Great value for money, the room was clean and the staff were very helpful. The location was great, close to the beach and the main road. Would definitely stay again."
          image="../../../public/assets/images/User.png"
        />
        <reviewsFrame 
          reviewText="Great value for money, the room was clean and the staff were very helpful. The location was great, close to the beach and the main road. Would definitely stay again."
          image="../../../public/assets/images/User.png"
        />
        <reviewsFrame 
          reviewText="Great value for money, the room was clean and the staff were very helpful. The location was great, close to the beach and the main road. Would definitely stay again."
          image="../../../public/assets/images/User.png"
        />
        <reviewsFrame 
          reviewText="Great value for money, the room was clean and the staff were very helpful. The location was great, close to the beach and the main road. Would definitely stay again."
          image="../../../public/assets/images/User.png"
        />
      </section>
    </main>
    <div :class="$style.reviewsChild" />
    
  </div>
  <newfooter />
</template>

<script>
  import { defineComponent } from "vue";
  import newheader from "../../components/public/newheader.vue";
  import reviewsFrame from "../../components/public/reviewsFrame.vue";
  import newfooter from "../../components/public/newfooter.vue";

  export default defineComponent({
    name: "Reviews",
    components: { newheader, reviewsFrame, newfooter },
  });
</script>

<style module>
  .reviews1 {
    margin: 0;
    width: 206px;
    height: 38px;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .reviewsParent {
    width: 1617px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: 72px 0px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }
  .reviewsInner {
    width: 1740px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 290px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
  }
  .reviewsChild {
    width: 1908px;
    height: 3116px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    max-width: 100%;
  }
  .reviews {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 80px 0px;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1350px) {
    .reviewsInner {
      padding-bottom: 153px;
      box-sizing: border-box;
    }

    .reviews {
      gap: 87px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .reviews1 {
      font-size: var(--font-size-13xl);
    }

    .reviewsParent {
      gap: 36px 0px;
    }

    .reviewsInner {
      padding-bottom: var(--padding-80xl);
      box-sizing: border-box;
    }

    .reviews {
      gap: 44px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .reviews1 {
      font-size: var(--font-size-5xl);
    }

    .reviewsParent {
      gap: 18px 0px;
    }
  }
</style>../components/reviewsFrame.vue
