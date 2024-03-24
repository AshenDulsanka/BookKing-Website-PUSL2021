<template>
  <div class="contact-us">
    <NewHeader />
    <h1 class="contact-us-header">Contact Us</h1>
    <section class="content-wrapper">
      <div class="intro">
        <h2 class="connect-with-us">
          Connect with Us: Your Direct Line to Exceptional Service – Reach Out,
          Share Your Thoughts, and Let Us Assist You!
        </h2>
          <br>
          <a href="mailto:bookkinglk@gmail.com" style="text-decoration: none;">Email: bookking@gmail.com</a><br>
          <a href="tel:076 702 4733" style="text-decoration: none;">Call us: 076 702 4733</a>
      </div>
      <div class="form-and-image">
        <div class="feedback-form">
          <h2 class="feedback">Leave a FeedBack!!!</h2>
          <form action="#" method="post" class="feedback-content">
            <div>
              <label for="name" class="name">Name</label>
              <input
                id="name"
                name="name"
                class="input"
                type="text"
                placeholder="Enter your name here"
                maxlength="30"
                required
                autofocus
              />
            </div>
            <div>
              <label for="email" class="email-address">Email Address</label>
              <input
                id="email"
                name="email"
                class="input1"
                type="email"
                placeholder="Enter your email address here"
                maxlength="20"
              />
            </div>
            <div>
              <label for="phone" class="phone-number">Phone Number</label>
              <input
                id="phone"
                name="phone"
                class="input2"
                type="tel"
                placeholder="Enter your phone number here"
                maxlength="10"
              />
            </div>
            <div>
              <label for="location" class="location">Location</label>
              <input
                id="location"
                name="location"
                class="input3"
                type="text"
                placeholder="Enter your city here"
              />
            </div>
            <div>
              <label for="message" class="message">Message</label>
              <textarea
                id="message"
                name="message"
                class="input4 msg-box"
                placeholder="Enter your message here"
                minlength="10"
                maxlength="100"
                v-model="text"
              ></textarea>
            </div>
            <button class="submitBtn" @click="submit">
              Submit
              <svg
                fill="white"
                viewBox="0 0 448 512"
                height="1em"
                class="arrow"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div class="logo-image">
          <img
            class="book-king-1"
            alt=""
            src="../../../public/assets/book-king-1@2x.png"
          />
        </div>
      </div>
      <div class="faq-box">
        <h1 class="faqs">FAQ’s</h1>
        <div class="contact-us-child" />
        <div class="how-do-i-container">
          <p class="how-do-i">How do I make a booking on your website?</p>
          <ul class="to-make-a-booking-simply-visi">
            <li>
              <span class="to-make-a"
                >To make a booking, simply visit our website and select the
                desired service or product. Follow the prompts to enter relevant
                details, choose your preferences, and complete the payment
                process.</span
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
                through your account on our website. Please refer to the
                specific terms and conditions associated with your booking for
                more information.</span
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
          <p class="how-do-i">
            Is my payment information secure on your website?
          </p>
          <ul class="to-make-a-booking-simply-visi">
            <li>
              <span class="to-make-a"
                >Yes, we take the security of your payment information
                seriously. Our website uses encryption and follows industry best
                practices to ensure your data is secure.</span
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
                email containing all the necessary details. You can also log in
                to your account on our website to view and print your booking
                confirmation.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>
  <NewFooter />
</template>

<script>
import { defineComponent } from "vue";
import NewHeader from "../../components/public/newheader.vue";
import NewFooter from "../../components/public/newfooter.vue";

export default defineComponent({
  name: "ContactUs",
  components: { NewHeader, NewFooter },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async submit() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('Please login to submit feedback');
          return;
        }

        const response = await fetch('http://localhost:8081/api/sendFeedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            text: this.text,
          }),
        });

        const responseData = await response.json();
        
        if (response.ok) {
          alert("Feedback submitted successfully");
        } else {
          this.error = alert('Something went wrong. Please try again later');
        }
      } catch (error) {
        console.error('Error occurred:', error);
        this.error = 'An error occurred. Please try again later.';
      }
    },
  },
});
</script>

<style scoped>
.content-wrapper {
  height: 100%;
}

.customer-service {
  margin: 0;
  font-size: var(--font-size-13xl);
  letter-spacing: 0.09em;
  font-weight: 700;
  font-family: inherit;
}

.feedback-content {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.input,
.input1,
.input2,
.input3,
.input4 {
  background-color: rgb(252, 252, 176);
  border-radius: 7px;
  margin: 0;
  padding: 1%;
  color: #000;
  word-wrap: break-word;
  height: 30px;
  font-size: 17px;
  width: 100%;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

::placeholder {
  color: black;
  opacity: 0.5;
  font-weight: 500;
  text-align: left;
}

.msg-box {
  padding: 1%;
  margin-top: 0.15rem;
  color: #000000;
  height: 100px;
}

.name,
.email-address,
.phone-number,
.location,
.message {
  font-weight: 600;
}

.faqs {
  margin: 0;
  font-size: var(--font-size-21xl);
  font-weight: 600;
  font-family: inherit;
}

.how-do-i,
.to-make-a {
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

.contact-us-child {
  border-top: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 100%;
  height: 1px;
}

.book-king-1 {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.connect-with-us {
  font-size: var(--font-size-10xl);
  font-family: var(--font-poppins);
  color: var(--color-black);
}

.contact-us-header {
  font-size: var(--font-size-21xl);
  font-weight: 700;
  font-family: var(--font-tajawal);
}

.submitBtn {
  cursor: pointer;
  border: none;
  border-radius: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 900;
  color: rgb(255, 255, 255);
  letter-spacing: 0.7px;
  padding: 0;
  margin: 1rem 0;
  background: linear-gradient(to left, rgb(0, 0, 0), rgb(255, 174, 0));
  width: 120px;
  height: 40px;
}

.submitBtn:hover .arrow {
  animation: slide-in-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.submitBtn:active {
  transform: scale(0.97);
}

.contact-us {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-poppins);
}

.contact-us-header {
  margin: 2rem 10.35rem;
}

.intro {
  margin: 2rem 1rem;
}

.form-and-image {
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  flex-wrap: wrap;
}

.feedback-form {
  flex: 0 0 60%;
}
.logo-image {
  flex: 0 0 30%;
}
.book-king-1 {
  border-radius: 50%;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
.content-wrapper {
  margin: 0 13rem 4rem;
}

.faq-box {
  margin-top: 2rem;
}

@media screen and (max-width: 1600px) {
  .feedback-form {
    flex: 0 0 60%;
  }
  .logo-image {
    flex: 0 0 30%;
  }
  .form-and-image {
    padding: 0 2rem;
    row-gap: 2rem;
  }
  .content-wrapper {
    margin: 0 6rem 4rem;
  }
  .contact-us-header {
    margin: 2rem 5.35rem;
  }
}
@media screen and (max-width: 1200px) {
  .feedback-form {
    flex: 0 0 50%;
  }
  .logo-image {
    flex: 0 0 45%;
  }
  .form-and-image {
    padding: 0 2rem;
    row-gap: 2rem;
  }
  .content-wrapper {
    margin: 0 6rem 4rem;
  }
  .contact-us-header {
    margin: 2rem 5.35rem;
  }
}
@media screen and (max-width: 900px) {
  .feedback-form {
    flex: 0 0 50%;
  }
  .logo-image {
    flex: 0 0 45%;
  }
  .form-and-image {
    padding: 0 2rem;
    row-gap: 2rem;
  }
  .content-wrapper {
    margin: 0 6rem 4rem;
  }
  .contact-us-header {
    margin: 2rem 5.35rem;
  }
}

@media screen and (max-width: 800px) {
  .feedback-form {
    flex: 0 0 100%;
  }
  .logo-image {
    flex: 0 0 100%;
  }
  .form-and-image {
    padding: 0 2rem;
  }
  .content-wrapper {
    margin: 0 2rem 4rem;
  }
  .contact-us-header {
    margin: 2rem 1.35rem;
  }
}

@media screen and (max-width: 500px) {
  .content-wrapper {
    margin: 0 0.5rem 4rem;
  }
  .form-and-image {
    padding: 0;
  }
}
</style>
