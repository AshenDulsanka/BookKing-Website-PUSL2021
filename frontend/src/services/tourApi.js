import axios from 'axios'
import { ref } from 'vue'

export default function getTours () {
    const url = 'http://localhost:8081/api/Tours'
    const tours = ref([])
    const error = ref(null)
  
    const getAllTours = async () => {
      tours.value = []
      error.value = null
  
      try {
        const response = await axios.get(url)
        tours.value = response.data.data
      } catch (err) {
        error.value = err.message
      }
    }
  
    return { tours, error, getAllTours }
  }