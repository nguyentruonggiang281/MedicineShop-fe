import axios from "axios";
import { BASE_URL } from "../utils/baseURL";

export let CustomersService = {
  getInfo: async (idAccount) => {
    try {
        const response = await axios.get(BASE_URL + `/api/v1/customers/${idAccount}`);
       
        return response.data
    } catch (error) {
        console.log(error)   
    }
  },

  getAllCustomers: async () => {
    try {
        const response = await axios.get(BASE_URL + `/api/v1/customers`);
        return response.data
    } catch (error) {
        console.log(error)   
    }
  },
  getAllOrder: async (idAccount) => {
    try {
        const response = await axios.get(BASE_URL + `/api/v1/customers/${idAccount}/orders`);
        return response.data
    } catch (error) {
        console.log(error)   
    }
  },

  createAddress: async (CustomerAddressRequest) => {
    try {
        const response = await axios.post(BASE_URL + `/api/v1/address`,CustomerAddressRequest);
        return response.data
    } catch (error) {
        console.log(error)   
    }
  },
};
