import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '44761c3d6dmsh0abe248d0d930ddp112b29jsn942e6ad2a78e',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  },
}
export const getPlaceData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options)
    return data
  } catch (error) {
    console.log(error)
  }
}
