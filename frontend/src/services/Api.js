import axios from 'axios'
import { ref } from 'vue'

export default function getHotels () {
  const url = 'http://localhost:8081/api/Hotels'
  const hotels = ref([])
  const error = ref(null)

  const getAllHotels = async () => {
    hotels.value = []
    error.value = null

    try {
      const response = await axios.get(url)
      hotels.value = response.data.data
    } catch (err) {
      error.value = err.message
    }
  }

  return { hotels, error, getAllHotels }
}
