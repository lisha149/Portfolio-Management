import axios from "axios";
import {
  STOCKS_CREATE_FAIL,
  STOCKS_CREATE_REQUEST,
  STOCKS_CREATE_SUCCESS,
  STOCKS_DELETE_FAIL,
  STOCKS_DELETE_REQUEST,
  STOCKS_DELETE_SUCCESS,
  STOCKS_LIST_FAIL,
  STOCKS_LIST_REQUEST,
  STOCKS_LIST_SUCCESS,
} from "../constants/stockConstants";

export const listStocks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: STOCKS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/stocks`, config);

    dispatch({
      type: STOCKS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STOCKS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createStockAction =
  (stockname, transactiontype, quantity, amount, transactiondate) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: STOCKS_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/stocks/create`,
        { stockname, transactiontype, quantity, amount, transactiondate },
        config
      );

      dispatch({
        type: STOCKS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: STOCKS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STOCKS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/stocks/${id}`, config);

    dispatch({
      type: STOCKS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STOCKS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
