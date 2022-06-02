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
  STOCKS_UPDATE_FAIL,
  STOCKS_UPDATE_REQUEST,
  STOCKS_UPDATE_SUCCESS,
} from "../constants/stockConstants";

export const stockListReducer = (state = { stocks: [] }, action) => {
  switch (action.type) {
    case STOCKS_LIST_REQUEST:
      return { loading: true };
    case STOCKS_LIST_SUCCESS:
      return { loading: false, stocks: action.payload };
    case STOCKS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const stockCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STOCKS_CREATE_REQUEST:
      return { loading: true };
    case STOCKS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case STOCKS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const stockDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STOCKS_DELETE_REQUEST:
      return { loading: true };
    case STOCKS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STOCKS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const stockUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case STOCKS_UPDATE_REQUEST:
      return { loading: true };
    case STOCKS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case STOCKS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
