<template>
  <div class="container">
    <section :class="$style.addPageButton">
      <div :class="$style.headerTextContainer">
        <div :class="$style.searchSymbolFrame">
          <h1 :class="$style.addPage">Add Page</h1>
        </div>
        <div :class="$style.priceFrame">
          <div :class="$style.locationFrame">
            <div :class="$style.vehiclesServicesFrame">
              <div :class="$style.hotelsFrame">
                <div :class="$style.hotelsFrameChild" />
                <img
                  :class="$style.searchInterfaceSymbol2Icon"
                  loading="lazy"
                  alt=""
                  src="../../../public/assets/images/addpage.png"
                />
              </div>
            </div>
            <div :class="$style.toursFrame">
              <div :class="$style.entertainmentFrame">
                <div :class="$style.price">Service name</div>
                <input :class="$style.homeServicesFrame" type="text" v-model="service.Name" />
                <div :class="$style.price">Long Description</div>
                <input :class="$style.vehicleHotelsFrame" type="text" v-model="service.LongDescription" />
                <div :class="$style.price">Short Description</div>
                <input :class="$style.vehicleHotelsFrame" type="text" v-model="service.ShortDescription" />
                <div :class="$style.price">Price</div>
                <input :class="$style.footerLinksFrame" type="text" v-model="service.Price" />
                <div :class="$style.price">Location</div>
                <input :class="$style.footerLinksFrame" type="text" v-model="service.Location" />
                <div :class="$style.price">Category</div>
                <div :class="$style.cateringMenuFrame">
                  <div :class="$style.ellipseParent">
                    <input
                      :class="$style.frameChild"
                      type="radio"
                      v-model="service.Category"
                      value="Vehicle"
                    />
                    <div :class="$style.vehicleWrapper">
                      <div :class="$style.vehicle">Vehicle</div>
                    </div>
                  </div>
                  <div :class="$style.ellipseGroup">
                    <input
                      :class="$style.frameItem"
                      type="radio"
                      v-model="service.Category"
                      value="Hotel"
                    />
                    <div :class="$style.hotelsWrapper">
                      <div :class="$style.hotels">Hotels</div>
                    </div>
                  </div>
                  <div :class="$style.reviewSummaryFrame">
                    <input
                      :class="$style.contactUsFormFrame"
                      type="radio"
                      v-model="service.Category"
                      value="Tour"
                    />
                    <div :class="$style.freelancer">Tours</div>
                  </div>
                </div>
                <div :class="$style.price">Image</div>
                <input
                  type="file"
                  accept="image/*"
                  @change="handleFileUpload"
                  :class="$style.fileInput"
                />
                <br>
                <button @click="addService" :class="$style.addServiceButton">Add Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AddPageButton",
  data() {
    return {
      service: {
        Name: "",
        LongDescription: "",
        ShortDescription: "",
        Price: "",
        Location: "",
        Category: "",
        Image: null,
      },
      selectedFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    async addService() {
      try {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("name", this.service.Name);
        formData.append("longDescription", this.service.LongDescription);
        formData.append("shortDescription", this.service.ShortDescription);
        formData.append("price", this.service.Price);
        formData.append("location", this.service.Location);
        formData.append("category", this.service.Category);
        if (this.selectedFile) {
          formData.append("image", this.selectedFile);
        }

        const response = await axios.post("http://localhost:8081/api/addService", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        alert('Service added successfully!');
        this.$router.push('/');

        console.log("Service added successfully:", response.data.msg);
        // Reset the form fields if needed
        this.service = {
          Name: "",
          LongDescription: "",
          ShortDescription: "",
          Price: "",
          Location: "",
          Category: "",
          Image: null,
        };
        this.selectedFile = null;
      } catch (error) {
        console.error("Error adding service:", error);
      }
    },
  },
});
</script>

<style module>
  .addServiceButton {
    font-family: "poppins", sans-serif;
    background-color: yellow;
    color: black;
    padding: 6px 20px;
    border-radius: 7px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
  }
  .addPage {
    width: 293px;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    margin: 0 auto;
    margin-top: 10%;
    margin-left: 50%;
  }
  .searchInterfaceSymbol2Icon {
    height: 300px;
    width: 300px;
    position: relative;
    object-fit: contain;
    z-index: 1;
  }
  .hotelsFrame {
    align-self: stretch;
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 10%;
    box-sizing: border-box;
    max-width: 100%;
  }
  .vehiclesServicesFrame {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-2xs);
    box-sizing: border-box;
    min-width: 419px;
    max-width: 100%;
  }
  .homeServicesFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 36px;
    position: relative;
    min-width: 250px;
  }
  .vehicleHotelsFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 79px;
    position: relative;
    min-width: 250px;
  }  
  .price {
    position: relative;
    font-weight: 600;
    z-index: 1
  }
  .footerLinksFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 36px;
    position: relative;
    min-width: 250px;
  }
  .entertainmentFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px 0px;
    max-width: 100%;
    font-size: var(--font-size-base);
  }
  .frameChild {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .ellipseParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .frameItem {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .ellipseGroup {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs) 0px 0px;
    gap: 0px 13px;
  }
  .contactUsFormFrame {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .reviewSummaryFrame {
    width: 117px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .cateringMenuFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .toursFrame {
    width: 556px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 28px 0px;
    min-width: 556px;
    max-width: 100%;
  }
  .locationFrame {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 0px 76px;
    max-width: 100%;
  }
  .priceFrame {
    width: 20000px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-529xl);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-sm);
    font-family: var(--font-poppins);
  }
  .headerTextContainer {
    width: 1552px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: 105px 0px;
    max-width: 100%;
  }
  .addPageButton {
    width: 1640px;
    display: flex;
    flex-direction: row;
    padding: 0px 0px var(--padding-306xl) var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-45xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
    justify-content:flex-end;
    align-items:flex-end;
  }
  @media screen and (max-width: 1350px) {
    .toursFrame {
      flex: 1;
    }

    .locationFrame {
      flex-wrap: wrap;
    }

    .addPageButton {
      padding-bottom: var(--padding-192xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .addPage {
      font-size: var(--font-size-32xl);
    }

    .longDescription {
      min-width: 100%;
    }

    .hotelsFrame {
      padding-top: var(--padding-74xl);
      padding-bottom: var(--padding-78xl);
      box-sizing: border-box;
    }

    .vehiclesServicesFrame {
      min-width: 100%;
    }

    .footerFrame {
      flex-wrap: wrap;
    }

    .toursFrame {
      min-width: 100%;
    }

    .locationFrame {
      gap: 0px 38px;
    }

    .headerTextContainer {
      gap: 52px 0px;
    }

    .addPageButton {
      padding-bottom: var(--padding-118xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .addPage {
      font-size: var(--font-size-19xl);
    }

    .cateringMenuFrame {
      flex-wrap: wrap;
    }

    .locationFrame {
      gap: 0px 19px;
    }

    .headerTextContainer {
      gap: 26px 0px;
    }
  }
</style>
