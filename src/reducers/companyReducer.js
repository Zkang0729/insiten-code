import {
  GET_ALL_COMPANY,
  GET_COMPANY,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  COMPANY_ERROR,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../actions/types";

const initialState = {
  companies: null,
  company: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_COMPANY:
      return {
        ...state,
        companies: action.payload,
      };
    case GET_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
        loading: false,
      };
    case UPDATE_COMPANY:
      return {
        ...state,
        companies: state.companies.map(company =>
          company.id === action.payload.id ? action.payload : company,
        ),
        loading: false,
      };
    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          company => company.id !== action.payload,
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case COMPANY_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
