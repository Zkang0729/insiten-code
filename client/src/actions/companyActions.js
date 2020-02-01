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

// Get all companies from server
export const getAllCompany = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/api/companies");
    const data = await res.json();
    dispatch({
      type: GET_ALL_COMPANY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Get a specific company from server
export const getCompany = id => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/api/companies/${id}`);
    const data = await res.json();
    dispatch({
      type: GET_COMPANY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Add new company
export const addCompany = company => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/api/companies", {
      method: "POST",
      body: JSON.stringify(company),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_COMPANY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete company from server
export const deleteCompany = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/api/companies/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_COMPANY,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Update company on server
export const updateCompany = company => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/api/companies/${company._id}`, {
      method: "PUT",
      body: JSON.stringify(company),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_COMPANY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Search server companies
export const searchCompanies = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/api/companies/search?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_COMPANY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Search for target revenue company
export const targetRevenue = target => {
  setLoading();
  return {
    type: TARGET_REVENUE,
    payload: target,
  };
};

// Set search to true
export const setSearch = () => {
  return {
    type: SET_SEARCH,
  };
};

// Set search to false
export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Set current company
export const setCurrent = company => {
  return {
    type: SET_CURRENT,
    payload: company,
  };
};

// Clear current company
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Large to small sort
export const ltsSort = () => {
  return {
    type: LARGE_TO_SMALL_SORT,
  };
};

// Small to large sort
export const stlSort = () => {
  return {
    type: SMALL_TO_LARGE_SORT,
  };
};
