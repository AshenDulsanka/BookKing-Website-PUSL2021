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