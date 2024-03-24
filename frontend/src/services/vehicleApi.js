import axios from 'axios'
import { ref } from 'vue'

export default function getVehicles () {
    const url = 'http://localhost:8081/api/Vehicles'
    const vehicles = ref([])
    const error = ref(null)
  
    const getAllVehicles = async () => {
      vehicles.value = []
      error.value = null
  
      try {
        const response = await axios.get(url)
        vehicles.value = response.data.data
      } catch (err) {
        error.value = err.message
      }
    }
  
    return { vehicles, error, getAllVehicles }
  }