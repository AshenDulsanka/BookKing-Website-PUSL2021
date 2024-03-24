import axios from "axios"; 

export const fetchServiceProvider = async (serviceProvider) => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get("http://localhost:8081/api/getServiceProvider", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data.data;

    serviceProvider.name = data.name || "";
    serviceProvider.email = data.email || "";
    serviceProvider.phoneNo = data.phoneNumber || "";
    serviceProvider.address = data.address || "";
    serviceProvider.serviceDesc = data.serviceDesc || "";

  } catch (error) {
    console.error("Error fetching service provider details:", error);
  }
};

export const updateServiceProvider = async (serviceProvider) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8081/api/spupdateProfile",
        {
          name: serviceProvider.name,
          email: serviceProvider.email,
          phoneNo: serviceProvider.phoneNo,
          address: serviceProvider.address,
          serviceDesc: serviceProvider.serviceDesc,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Profile updated successfully:", response.data.msg);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
};

export const fetchServices = async (services) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8081/api/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      services.splice(0, services.length, ...response.data.data); 
    } catch (error) {
      console.error("Error fetching services:", error);
    }
};

export const fetchService = async (SID, service) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:8081/api/services/${SID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;

      service.SID = data.SID;
      service.Category = data.Category;
      service.Name = data.Name;
      service.Location = data.Location;
      service.price = data.price;
      service.ShortDescription = data.ShortDescription;
      service.LongDescription = data.LongDescription;
    } catch (error) {
      console.error("Error fetching service:", error);
    }
};

export const updateServiceData = async (service) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", service.Name);
    formData.append("longDescription", service.LongDescription);
    formData.append("shortDescription", service.ShortDescription);
    formData.append("price", service.price);
    formData.append("location", service.Location);
    formData.append("category", service.Category);
    formData.append("SID", service.SID);

    const response = await axios.put("http://localhost:8081/api/updateService", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Service updated successfully:", response.data.msg);
  } catch (error) {
    console.error("Error updating service:", error);
  }
};