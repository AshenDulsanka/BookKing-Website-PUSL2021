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

