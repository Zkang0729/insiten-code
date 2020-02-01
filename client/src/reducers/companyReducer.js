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
  SEARCH_COMPANY,
  TARGET_REVENUE,
  SET_SEARCH,
  CLEAR_SEARCH,
  LARGE_TO_SMALL_SORT,
  SMALL_TO_LARGE_SORT,
} from "../actions/types";

const initialState = {
  companies: [],
  company: null,
  sortedCompanies: [],
  current: null,
  loading: false,
  search: false,
  error: null,
};

const closestCompany = (companies, target) => {
  var closestCompany = companies;
  // Below lines are similar to insertion sort
  for (var i = 1; i < closestCompany.length; i++) {
    var diff = Math.abs(closestCompany[i].Revenue - target);

    // Insert closestCompany[i] at correct place
    var j = i - 1;
    if (Math.abs(closestCompany[j].Revenue - target) > diff) {
      var temp = closestCompany[i];
      while (j >= 0 && Math.abs(closestCompany[j].Revenue - target) > diff) {
        closestCompany[j + 1] = closestCompany[j];
        j--;
      }
      closestCompany[j + 1] = temp;
    }
  }
  return closestCompany;
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
          company._id === action.payload._id ? action.payload : company,
        ),
        loading: false,
      };
    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          company => company._id !== action.payload,
        ),
        loading: false,
      };
    case SEARCH_COMPANY:
      return {
        ...state,
        companies: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: true,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: false,
      };
    case TARGET_REVENUE:
      return {
        ...state,
        sortedCompanies: closestCompany([...state.companies], action.payload),
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
    case LARGE_TO_SMALL_SORT:
      return {
        ...state,
        companies: state.companies.sort((a, b) => {
          if (a.Revenue > b.Revenue) return 1;
          if (a.Revenue < b.Revenue) return -1;
          return 0;
        }),
      };
    case SMALL_TO_LARGE_SORT:
      return {
        ...state,
        companies: state.companies.sort((a, b) => {
          if (a.Revenue > b.Revenue) return -1;
          if (a.Revenue < b.Revenue) return 1;
          return 0;
        }),
      };
    default:
      return state;
  }
};
