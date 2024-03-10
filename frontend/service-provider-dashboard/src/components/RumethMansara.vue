<template>
  <section class="rumeth-mansara">
    <div class="piliyandala-rd-kottawarumethga">
      <div class="text">
        <img
          class="image-icon"
          loading="lazy"
          alt=""
          src="/ellipse-29@2x.png"
        />
      </div>
      <div class="your-services">
        <div class="footer">
          <div class="service-provider-info">
            <div class="rumeth-label">
              <div class="rumeth-mansara1">
                <span>
                  <ul class="rumeth-mansara2">
                    <li>Rumeth Mansara</li>
                  </ul>
                </span>
              </div>
            </div>
            <div class="dashboard-sections">
              <div class="dashboard-sections1">
                <div class="piliyandala-rd-kottawa-container">
                  <span>
                    <ul class="piliyandala-rd-kottawa">
                      <li>100/02, Piliyandala Rd, Kottawa</li>
                    </ul>
                  </span>
                </div>
                <div class="div1">
                  <span class="txt">
                    <ul class="ul">
                      <li>071-1234567</li>
                    </ul>
                  </span>
                </div>
                <div class="rumethgayoragmailcom">
                  <span class="rumethgayoragmailcom-txt">
                    <ul class="rumethgayoragmailcom1">
                      <li>rumethgayora@gmail.com</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            <div class="dashboard-sections2">
              <div class="a-paragraph-is-container">
                <span>
                  <ul class="a-paragraph-is-defined-as-a-g">
                    <li>
                      A paragraph is defined as “a group of sentences or a
                      single sentence that forms a unit” (Lunsford and Connors
                      116). Length and appearance do not determine whether a
                      section in a paper is a paragraph. For instance, in some
                      styles of writing, particularly journalistic styles, a
                      paragraph can be just one sentence long.
                    </li>
                  </ul>
                </span>
              </div>
              <div class="paragraph-definition">
                <button class="edit-label">
                  <div class="edit-label-child" />
                  <b class="edit">Edit</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="image-frames" />
        <div class="image-frames1">
          <div class="image-frames2">
            <div class="image-frames3">
              <div class="image-frames4">
                <div class="service-icons">
                  <!--To add a service-->
                  <button @click="addService()"><img
                    class="image-3-icon"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </button>
                </div>
                <div class="thumbnails">
                  <!-- To delete a service -->
                  <button @click="deleteService()"><img
                    class="image-4-icon"
                    loading="lazy"
                    alt=""
                    src="/image-4@2x.png"
                  /></button>
                </div>
                <!-- To return to home or exit, input href location accordingly below-->
                <a href="/"><img
                  class="image-6-icon"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                /></a>
              </div>
            </div>
            <div id="formContainer" class="form-container" v-if="formVisible">
                <form>
                  <!-- Your form fields go here -->
                  <label for="inputField">Enter the service you are providing</label>
                  <br>
                  <input type="text" id="inputField1" name="inputField1">
                  <br>
                  <button type="button" class="action-button" @click="submitForm()">Submit</button>
                  <button type="button" class="action-button" @click="cancelForm()">Cancel</button>
                </form>
              </div>
            <div class="footer-line" />
            <div class="your-services-parent">
              <b class="your-services1">
                <span class="your-services-txt-container">
                  <ul class="your-services2">
                    <li>Your Services</li>
                  </ul>
                </span>
              </b>
              <div class="no-services-text">
                <div class="no-services-available">no services available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RumethMansara",
  setup() {
    // basic services fetch function
    // userServices = fetch('api/[userid]/services/')
    let sampleServices = ['car rental', 'car wash', 'detailing'];

    function deleteService() {
      let options = "";
      for (let i = 0; i < sampleServices.length; i++) {
        options += `${i + 1}. ${sampleServices[i]}\n`;
      }

      let person = prompt(`Choose What to Delete\n${options}`);

      if (person !== null && person >= 1 && person <= sampleServices.length) {
        window.alert(`Hello ${sampleServices[person - 1]} was deleted!`);
      }
    }

    const formVisible = ref(false);

    function addService() {
      formVisible.value = true;
    }

    function cancelForm() {
      formVisible.value = false;
    }

    function submitForm() {
        //post/api/[userid]/service/
    //   let options = "";
    //   for (let i = 0; i < sampleServices.length; i++) {
    //     options += `${i + 1}. ${sampleServices[i]}\n`;
    //   }

    //   let person = prompt(`Choose What to Delete\n${options}`);

    //   if (person !== null && person >= 1 && person <= sampleServices.length) {
    //     window.alert(`Hello ${sampleServices[person - 1]} was deleted!`);
    //   }
      formVisible.value = false;
    }
    return {
      sampleServices,
      deleteService,
      addService,
      cancelForm,
      submitForm,
      formVisible,
    };
  }
});
</script>
<style scoped>

.image-3-icon{
}

.image-4-icon{
  width: 250px;
  height: 137px;
}

.image-6-icon{
  width: 70px;
  height: 70px;
  border: 2px solid black;
    border-radius: 8px;
}

#inputField1{
  margin-top: 10px;
}

.form-container {
    border-radius: 10px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    padding: 15px;
    height: 40%;
    width: 40%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .action-button {
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bolder;
    padding: 10px;
    margin: 5px;
    margin-top: 13px;
    margin-bottom: 2px;
    cursor: pointer;
    background-color: #faff00;
    color: black;
    border: none;
    border-radius: 4px;
  }


  .image-icon {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: 50%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .text {
    height: 363px;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-60xl) 0px 0px;
    box-sizing: border-box;
  }
  .rumeth-mansara2 {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .rumeth-mansara1 {
    height: 26px;
    flex: 1;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    max-width: 100%;
  }
  .rumeth-label {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .piliyandala-rd-kottawa {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .piliyandala-rd-kottawa-container {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
  }
  .ul {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .txt {
    line-break: anywhere;
  }
  .div1 {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
  }
  .rumethgayoragmailcom1 {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .rumethgayoragmailcom-txt {
    line-break: anywhere;
  }
  .rumethgayoragmailcom {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .dashboard-sections1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 42px 0px;
    max-width: 100%;
  }
  .dashboard-sections {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-95xl) var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .a-paragraph-is-defined-as-a-g {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .a-paragraph-is-container {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
  }
  .edit-label-child {
    height: 38px;
    width: 71px;
    position: relative;
    border-radius: var(--br-9xs);
    background-color: var(--color-yellow-100);
    display: none;
  }
  .edit {
    position: relative;
    font-size: var(--font-size-base);
    text-decoration: underline;
    line-height: 15px;
    font-family: var(--font-tajawal);
    color: var(--color-black);
    text-align: left;
    z-index: 1;
  }
  .edit-label {
    cursor: pointer;
    border: none;
    padding: var(--padding-xs) var(--padding-2xl) var(--padding-2xs);
    background-color: var(--color-yellow-100);
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .edit-label:hover {
    background-color: var(--color-yellow-200);
  }
  .paragraph-definition {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
  }
  .dashboard-sections2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 35px 0px;
  }
  .service-provider-info {
    width: 341px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 42px 0px;
    max-width: 100%;
  }
  .footer {
    width: 410px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-87xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
  }
  .image-frames {
    height: 953px;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
  }
  .image-3-icon {
    width: 138px;
    height: 135px;
    position: relative;
    object-fit: cover;
  }
  .service-icons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .image-4-icon {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .thumbnails {
    height: 135px;
    width: 130px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs) 0px 0px;
    box-sizing: border-box;
  }
  .image-6-icon {
    height: 139px;
    width: 120px;
    position: relative;
    object-fit: cover;
    min-height: 139px;
  }
  .image-frames4 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .image-frames3 {
    width: 610px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-28xl) var(--padding-28xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .footer-line {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
  }
  .your-services2 {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .your-services-txt-container {
    width: 100%;
  }
  .your-services1 {
    width: 339px;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    max-width: 100%;
  }
  .no-services-available {
    height: 26px;
    flex: 1;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    max-width: 100%;
  }
  .no-services-text {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-5xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .your-services-parent {
    width: 363px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6px 0px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .image-frames2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 71px 0px;
    max-width: 100%;
  }
  .image-frames1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-87xl) 0px 0px;
    box-sizing: border-box;
    min-width: 532px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .your-services {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 38px;
    min-width: 848px;
    max-width: 100%;
  }
  .piliyandala-rd-kottawarumethga {
    width: 1674px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 100px;
    max-width: 100%;
  }
  .rumeth-mansara {
    width: 1846px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }

  @media screen and (max-width: 1350px) {
    .image-frames {
      width: 100%;
      height: 1px;
    }

    .your-services {
      flex-wrap: wrap;
      min-width: 100%;
    }
  }
  @media screen and (max-width: 925px) {
    .footer {
      padding-top: var(--padding-50xl);
      box-sizing: border-box;
    }

    .image-frames4 {
      flex-wrap: wrap;
    }

    .image-frames3 {
      padding-left: var(--padding-4xl);
      padding-right: var(--padding-4xl);
      box-sizing: border-box;
    }

    .image-frames2 {
      gap: 35px 0px;
    }

    .image-frames1 {
      padding-top: var(--padding-50xl);
      box-sizing: border-box;
      min-width: 100%;
    }

    .your-services {
      gap: 0px 19px;
    }

    .piliyandala-rd-kottawarumethga {
      gap: 0px 50px;
    }
  }
  @media screen and (max-width: 450px) {
    .text {
      padding-top: var(--padding-32xl);
      box-sizing: border-box;
    }

    .dashboard-sections1 {
      gap: 21px 0px;
    }

    .dashboard-sections2 {
      gap: 17px 0px;
    }

    .service-provider-info {
      gap: 21px 0px;
    }

    .image-frames2 {
      gap: 18px 0px;
    }

    .piliyandala-rd-kottawarumethga {
      gap: 0px 25px;
    }
  }

  
</style>
