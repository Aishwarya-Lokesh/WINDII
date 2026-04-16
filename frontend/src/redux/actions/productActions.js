import axios from '../../utils/axiosConfig';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFail,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFail,
} from '../slices/productSlice';

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsRequest());
    const { data } = await axios.get('/products');
    dispatch(
      fetchProductsSuccess({
        products: data.products || data,
        totalPages: data.pages || 1,
        currentPage: data.page || 1,
      })
    );
  } catch (error) {
    dispatch(
      fetchProductsFail(
        error.response?.data?.message || error.message || 'Failed to load products'
      )
    );
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(fetchProductRequest());
    const { data } = await axios.get(`/products/${id}`);
    dispatch(fetchProductSuccess(data));
  } catch (error) {
    dispatch(
      fetchProductFail(
        error.response?.data?.message || error.message || 'Failed to load product'
      )
    );
  }
};
