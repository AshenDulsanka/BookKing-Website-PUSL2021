<template>
  <div class="contact-us">
    <NewHeader />
    <h1 class="customer-service-">Customer Service - Contact</h1>
    <input class="input" type="text" />
    <input class="input1" type="text" />
    <input class="input2" type="text" />
    <input class="input3" type="text" />
    <input class="input4" type="text" />
    <div class="name">Name</div>
    <div class="email-address">Email Address</div>
    <div class="phone-number">Phone Number</div>
    <div class="location">Location</div>
    <div class="message">Message</div>
    <h1 class="faqs">FAQ’s</h1>
    <div class="how-do-i-container">
      <p class="how-do-i">How do I make a booking on your website?</p>
      <ul class="to-make-a-booking-simply-visi">
        <li>
          <span class="to-make-a"
            >To make a booking, simply visit our website and select the desired
            service or product. Follow the prompts to enter relevant details,
            choose your preferences, and complete the payment process.</span
          >
        </li>
      </ul>
    </div>
    <div class="can-i-modify-container">
      <p class="how-do-i">Can I modify or cancel my reservation?</p>
      <ul class="to-make-a-booking-simply-visi">
        <li>
          <span class="to-make-a"
            >Yes, in most cases, you can modify or cancel your reservation
            through your account on our website. Please refer to the specific
            terms and conditions associated with your booking for more
            information.</span
          >
        </li>
      </ul>
    </div>
    <div class="what-payment-methods-container">
      <p class="how-do-i">What payment methods do you accept?</p>
      <ul class="to-make-a-booking-simply-visi">
        <li>
          <span class="to-make-a"
            >We accept a variety of payment methods, including credit/debit
            cards, PayPal, and other secure online payment options. The
            available methods will be displayed during the checkout
            process.</span
          >
        </li>
      </ul>
    </div>
    <div class="is-my-payment-container">
      <p class="how-do-i">Is my payment information secure on your website?</p>
      <ul class="to-make-a-booking-simply-visi">
        <li>
          <span class="to-make-a"
            >Yes, we take the security of your payment information seriously.
            Our website uses encryption and follows industry best practices to
            ensure your data is secure.</span
          >
        </li>
      </ul>
    </div>
    <div class="how-do-i-container1">
      <p class="how-do-i">How do I retrieve my booking confirmation?</p>
      <ul class="to-make-a-booking-simply-visi">
        <li>
          <span class="to-make-a"
            >Once your booking is confirmed, you will receive a confirmation
            email containing all the necessary details. You can also log in to
            your account on our website to view and print your booking
            confirmation.</span
          >
        </li>
      </ul>
    </div>
    <div class="contact-us-child" />
    <img class="book-king-1" alt="" src="/book-king-1@2x.png" />
    <section class="connect-with-us">
      Connect with Us: Your Direct Line to Exceptional Service – Reach Out,
      Share Your Thoughts, and Let Us Assist You!
    </section>
    <h1 class="contact-us1">Contact Us</h1>
    <button class="button"><b>Submit</b></button>
    <NewFooter />
  </div>
</template>

<!--<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ContactUs",
  });
</script>-->

<script>
  import { defineComponent } from "vue";
  import NewHeader from "/src/components/newheader.vue";
  import NewFooter from "/src/components/newfooter.vue";

  export default defineComponent({
    name: "ContactUs",
    components: { NewHeader, NewFooter },
  });
</script>

<style scoped>
  .customer-service- {
    margin: 0;
    position: absolute;
    top: 350px;
    left: 162px;
    font-size: var(--font-size-13xl);
    letter-spacing: 0.09em;
    font-weight: 700;
    font-family: inherit;
  }
  .input {
    border: none;
    outline: none;
    background-color: var(--color-khaki);
    position: absolute;
    top: 610px;
    left: 162px;
    width: 807px;
    height: 48px;
  }
  .input1 {
    border: none;
    outline: none;
    background-color: var(--color-khaki);
    position: absolute;
    top: 725px;
    left: 162px;
    width: 807px;
    height: 48px;
  }
  .input2 {
    border: none;
    outline: none;
    background-color: var(--color-khaki);
    position: absolute;
    top: 840px;
    left: 162px;
    width: 807px;
    height: 48px;
  }
  .input3 {
    border: none;
    outline: none;
    background-color: var(--color-khaki);
    position: absolute;
    top: 955px;
    left: 162px;
    width: 807px;
    height: 48px;
  }
  .input4 {
    border: none;
    outline: none;
    background-color: var(--color-khaki);
    position: absolute;
    top: 1070px;
    left: 162px;
    width: 807px;
    height: 256px;
  }
  .name {
    position: absolute;
    top: 580px;
    left: 162px;
    font-weight: 600;
  }
  .email-address {
    position: absolute;
    top: 695px;
    left: 162px;
    font-weight: 600;
  }
  .phone-number {
    position: absolute;
    top: 810px;
    left: 162px;
    font-weight: 600;
    white-space: pre-wrap;
  }
  .location {
    position: absolute;
    top: 925px;
    left: 162px;
    font-weight: 600;
  }
  .message {
    position: absolute;
    top: 1040px;
    left: 162px;
    font-weight: 600;
  }
  .faqs {
    margin: 0;
    position: absolute;
    top: 1452px;
    left: 121px;
    font-size: var(--font-size-21xl);
    font-weight: 600;
    font-family: inherit;
  }
  .how-do-i {
    margin: 0;
    font-weight: 600;
  }
  .to-make-a {
    font-weight: 300;
  }
  .to-make-a-booking-simply-visi {
    margin: 0;
    font-size: inherit;
    padding-left: var(--padding-lgi);
  }
  .how-do-i-container {
    position: absolute;
    top: 1586px;
    left: 123px;
    font-size: var(--font-size-sm);
    display: inline-block;
    width: 1679px;
  }
  .can-i-modify-container {
    position: absolute;
    top: 1680px;
    left: 121px;
    font-size: var(--font-size-sm);
    display: inline-block;
    width: 1679px;
  }
  .what-payment-methods-container {
    position: absolute;
    top: 1774px;
    left: 118px;
    font-size: var(--font-size-sm);
    display: inline-block;
    width: 1679px;
  }
  .is-my-payment-container {
    position: absolute;
    top: 1868px;
    left: 118px;
    font-size: var(--font-size-sm);
    display: inline-block;
    width: 1679px;
  }
  .how-do-i-container1 {
    position: absolute;
    top: 1962px;
    left: 121px;
    font-size: var(--font-size-sm);
    display: inline-block;
    width: 1679px;
  }
  .contact-us-child {
    position: absolute;
    top: 1530.5px;
    left: 117.5px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1656px;
    height: 1px;
  }
  .book-king-1 {
    position: absolute;
    top: 687px;
    left: 1242px;
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
  .connect-with-us {
    position: absolute;
    top: 398px;
    left: 162px;
    font-size: var(--font-size-13xl);
    font-family: var(--font-poppins);
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    width: 1597px;
    height: 95px;
  }
  .contact-us1 {
    margin: 0;
    position: absolute;
    top: 216px;
    left: 123px;
    font-size: var(--font-size-21xl);
    font-weight: 700;
    font-family: var(--font-tajawal);
    display: inline-block;
    width: 236px;
    height: 39px;
  }

  .button {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: absolute;
    top: 1363px;
    left: 171px;
    width: 99px;
    height: 36px;
    border-radius: 4px;
    background-color: #faff00;
  }
  .contact-us {
    width: 100%;
    height: 2281px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-black);
    font-family: var(--font-poppins);
  }
</style>
