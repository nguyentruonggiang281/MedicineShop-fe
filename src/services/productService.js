import axios from "axios";
import { localStorageService } from "./localStorageService";
import { https } from "./configAxios";
import { BASE_URL } from "../utils/baseURL";


const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorageService.getItem("accessToken")}`
  }
});
export let productService = {
  getAllProduct: async () => {
    try {
      const response = await axios.get(BASE_URL + "/api/v1/products");
      return response.data
    } catch (error) {
      console.log(error);
    }
  },
  getProductById: async (id) => {
    try {
      const response = await axios.get(BASE_URL + `/api/v1/products/${id}`);
      return response.data
    } catch (error) {
      console.log(error);
    }
  },
  getUnitsByIdProduct: async (id) => {
    try {
      const response = await axios.get(BASE_URL + `/api/v1/products/${id}/units`);
      return response.data
    } catch (error) {
      console.log(error);
    }
  },

  create: async (values) => {
    try {
      const response = await axios.post(BASE_URL + `/product/`, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (values) => {
    try {
      const response = await https.delete(`/product`, values)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
