import { save, store } from "app/services/store"
import axios from "axios"
export const getFlightsData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}`)
    store.dispatch(save(response.data))
    return response
}