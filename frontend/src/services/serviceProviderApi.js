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
      const response = await axios.get(`http://localhost:8081/api/service/${SID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;

      service.SID = data.SID || "";
      service.Category = data.category || ""; 
      service.Name = data.Name || "";
      service.Location = data.Location || "";
      service.Price = data.Price || "";
      service.ShortDescription = data.ShortDescription || "";
      service.LongDescription = data.LongDescription || "";
    } catch (error) {
      console.error("Error fetching service:", error);
    }
};

export const updateServiceData = async (service) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post("http://localhost:8081/api/updateService", {
      SID: service.SID,
      Category: service.category,
      Name: service.Name,
      Location: service.Location,
      Price: service.Price,
      ShortDescription: service.ShortDescription,
      LongDescription: service.LongDescription,
    }, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Service updated successfully:", response.data.msg);
    alert("Service updated successfully");
  } catch (error) {
    console.error("Error updating service:", error);
  }
};