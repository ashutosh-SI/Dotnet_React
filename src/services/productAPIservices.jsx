
import axios from "axios";
const URL = "http://localhost:5086/api/Product"

async function getProducts() {
  let data = null;

  try {
    let response = await axios.get(URL);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

async function getProductById(productId) {
  let data = null;

  try {
    let response = await axios.get(`${URL}/${productId}`);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}
export { getProductById, getProducts };
