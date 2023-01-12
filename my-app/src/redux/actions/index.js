import * as actions from "../actionTypes";
import axios from "axios";

import clientAxios from "../../config/clientAxios";
// import {complexs} from '../../data/complexsExample'
axios.defaults.baseURL = "https://pf-henry-backend-production.up.railway.app/";
//CRUD COMPLEX
export const getAllComplex = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/complejo/all");
    const logic = data.filter((e) => e.deleted === false);
    dispatch({
      type: actions.GET_ALL_COMPLEX,
      payload: {
        data,
        logic,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getComplexDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/complejo/${id}`);

    dispatch({
      type: actions.GET_COMPLEX_DETAIL,
      payload: data,
    });
  } catch (error) {
    alert(error);
  }
};

export const createComplex = async (complex) => {
  try {
    const create = await axios.post("/complejo/create", complex);
    return { create, msg: "complex updated" };
  } catch (error) {
    alert("error - complex not created");
    console.log(error);
  }
};

export const updateComplex = (id, complex) => {
  try {
    const create = axios.put(`/complejo/update/${id}`, complex);

    return { create, msg: "complex updated" };
  } catch (error) {
    alert("error - complex not updated");
    console.log(error);
  }
};

export const deleteComplex = (id) => {
  try {
    const create = axios.post(`/complejo/delete/${id}`);

    return { create, msg: "complex deleted" };
  } catch (error) {
    alert("error - complex not deleted");
    console.log(error);
  }
};

//
//CRUD CLIENT/USER

export const getAllUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/clients/all");
    const logic = data.filter((e) => e.deleted === false);
    dispatch({
      type: actions.GET_ALL_USER,
      payload: {
        api: data,
        logic,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    const find = await axios.get(`/clients/${id}`);

    dispatch({
      type: actions.GET_USER_DETAIL,
      payload: find.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const createUser = async (formData) => {
  console.log(formData);
  try {
    const { data } = await clientAxios.post("/clients/create", formData);

    return data;
  } catch (error) {
    alert("error - user not created");
    console.log(error);
  }
};

export const updateUser = (id, user) => {
  console.log("esto es  id", id);
  console.log("esto es  user", user);

  try {
    const create = axios.put(`/clients/update/${id}`, user);

    return { create, msg: "user updated" };
  } catch (error) {
    alert("error - user not updated");
    console.log(error);
  }
};

export const deleteUser = (id) => {
  try {
    const create = axios.post(`/clients/delete/${id}`);

    return { create, msg: "user deleted" };
  } catch (error) {
    alert("error - user not deleted");
    console.log(error);
  }
};

//CRUD COURT
export const getAllCourt = () => async (dispatch) => {
  try {
    const api = await axios.get("/court/all");
    dispatch({
      type: actions.GET_ALL_COURT,
      payload: api.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createCourt = async (court) => {
  try {
    const create = await axios.post("/court/create", court);

    return { create, msg: "court created" };
  } catch (error) {
    alert("error - court not created");
    console.log(error);
  }
};
export const updateCourt = (id, { numberCourt, description, typeCourt }) => {
  const court = {
    numberCourt,
    description,
    typeCourt,
  };
  try {
    const create = axios.put(`/court/update/${id}`, court);

    return { create, msg: "court updated" };
  } catch (error) {
    alert("error - court not updated");
    console.log(error);
  }
};

export const deleteCourt = (id) => {
  try {
    const create = axios.post(`/court/delete/${id}`);

    return { create, msg: "court deleted" };
  } catch (error) {
    alert("error - court not deleted");
    console.log(error);
  }
};

//CRUD TURN
export const getAllTurn = () => async (dispatch) => {
  try {
    const api = await axios.get("/turn/all");
    dispatch({
      type: actions.GET_ALL_TURN,
      payload: api.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTurnDetail = (id) => async (dispatch) => {
  try {
    const find = await axios.get(`/turn/${id}`);

    dispatch({
      type: actions.GET_TURN_DETAIL,
      payload: find,
    });
  } catch (error) {
    alert(error);
  }
};

export const createTurn = (clientID, courtID, { date, time_start }) => {
  const turn = { date, time_start };
  try {
    const create = axios.get(`/turn/create/${clientID}/${courtID}`, turn);

    return { create, msg: "turn created" };
  } catch (error) {
    alert("error - turn not created");
    console.log(error);
  }
};

export const updateTurn = (id, { date, time_start }) => {
  const turn = { date, time_start };
  try {
    const create = axios.put(`/turn/update/${id}`, turn);

    return { create, msg: "turn updated" };
  } catch (error) {
    alert("error - turn not updated");
    console.log(error);
  }
};

export const deleteTurn = (id) => {
  try {
    const create = axios.post(`/turn/delete/${id}`);

    return { create, msg: "turn deleted" };
  } catch (error) {
    alert("error - turn not deleted");
    console.log(error);
  }
};

//CRUD TYPECOUR
export const getAllTypeCourt = () => async (dispatch) => {
  try {
    const api = await axios.get("/typecourt/all");
    dispatch({
      type: actions.GET_ALL_TYPECOURT,
      payload: api.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTypeCourtDetails = (id) => async (dispatch) => {
  try {
    const find = await axios.get(`/typecourt/${id}`);

    dispatch({
      type: actions.GET_TYPECOURT_DETAIL,
      payload: find,
    });
  } catch (error) {
    alert(error);
  }
};

export const createTypeCourt = async (typecourt) => {
  try {
    const create = await axios.post("/typecourt/create", typecourt);
    return { create, msg: "typecourt created" };
  } catch (error) {
    alert("error - typecourt not created");
    console.log(error);
  }
};

export const updateTypeCourt = (id, { description, icon }) => {
  const typecourt = { description, icon };
  try {
    const create = axios.put(`/typecourt/update/${id}`, typecourt);
    return { create, msg: "typecourt updated" };
  } catch (error) {
    alert("error - typecourt not updated");
    console.log(error);
  }
};

export const deleteTypeCourt = (id) => {
  try {
    const create = axios.post(`/typecourt/delete/${id}`);
    return { create, msg: "typecourt deleted" };
  } catch (error) {
    alert("error - typecourt not deleted");
    console.log(error);
  }
};

//CRUD EVENT
export const getAllEvent = () => async (dispatch) => {
  try {
    const api = await axios.get("/event/all");
    dispatch({
      type: actions.GET_ALL_EVENT,
      payload: api.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getEventDetails = (id) => async (dispatch) => {
  try {
    const find = await axios.get(`/event/${id}`);

    dispatch({
      type: actions.GET_EVENT_DETAIL,
      payload: find,
    });
  } catch (error) {
    alert(error);
  }
};

export const createEvent = ({ description, icon }) => {
  const typecourt = { description, icon };
  try {
    const create = axios.get("/event/create", typecourt);

    return { create, msg: "event created" };
  } catch (error) {
    alert("error - event not created");
    console.log(error);
  }
};

export const updateEvent = (id, { description, icon }) => {
  const typecourt = { description, icon };
  try {
    const create = axios.put(`/event/update/${id}`, typecourt);

    return { create, msg: "event updated" };
  } catch (error) {
    alert("error - event not updated");
    console.log(error);
  }
};

export const deleteEvent = (id) => {
  try {
    const create = axios.post(`/event/delete/${id}`);

    return { create, msg: "event deleted" };
  } catch (error) {
    alert("error - event not deleted");
    console.log(error);
  }
};

// FILTROS Y ORDENAMIENTOS
export const filterSports = (id, arr) => async (dispatch) => {
  console.log(id);
  console.log(arr);
  const filtered = arr.filter((item) =>
    id ? item["courts"].some((atr) => atr.typeCourtId === id) : true
  );
  dispatch({
    type: actions.FILTER_BY_SPORT,
    payload: filtered,
  });
};

export const orderAZ = (array) => (dispatch) => {
  let arr = array;

  let ordered = arr.sort((actual, siguiente) => {
    if (actual.name > siguiente.name) return 1;
    if (actual.name < siguiente.name) return -1;
    return 0;
  });

  dispatch({
    type: actions.FILTER_BY_AZ,
    payload: [...ordered],
  });
};

export const orderFav = (array) => (dispatch) => {
  let arr = array;

  let ordered = arr.sort((actual, siguiente) => {
    if (actual.name > siguiente.name) return 1;
    if (actual.name < siguiente.name) return -1;
    return 0;
  });

  dispatch({
    type: actions.FILTER_BY_AZ,
    payload: [...ordered],
  });
};

export const searchCity = (city, array, setNotfound) => (dispatch) => {
  const filtered = array.filter(
    (e) => e.city.toLowerCase() === city.toLowerCase()
  );

  if (filtered.length > 0) {
    setNotfound(true);
    dispatch({
      type: actions.SEARCH_BY_CITY,
      payload: filtered,
    });
  } else {
    alert("city not found");
  }
};

//CRUD REVIEWS Review
export const getAllReview = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/reviews/all");

    dispatch({
      type: actions.GET_ALL_REVIEW,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getReviewDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/reviews/${id}`);

    dispatch({
      type: actions.GET_REVIEW_DETAIL,
      payload: data,
    });
  } catch (error) {
    alert(error);
  }
};

export const createReview = async (review) => {
  console.log("esto llega en review", review);
  try {
    const create = await axios.post("/reviews/create", review);
    alert("Review created");
    return { create, msg: "review updated" };
  } catch (error) {
    alert("error - review not created");
    console.log(error);
  }
};

export const updateReview = (id, review) => {
  try {
    const create = axios.put(`/reviews/update/${id}`, review);

    return { create, msg: "review updated" };
  } catch (error) {
    alert("error - review not updated");
    console.log(error);
  }
};

export const deleteReview = (id) => {
  try {
    const create = axios.post(`/reviews/delete/${id}`);

    return { create, msg: "review deleted" };
  } catch (error) {
    alert("error - complex not deleted");
    console.log(error);
  }
};

//OTROS
export const getAllServices = () => async (dispatch) => {
  try {
    const { data } = await axios.get("`/servicescomplejo/all`");
    dispatch({
      type: actions.GET_ALL_SERVICES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createService = (service) => {
  try {
    const create = axios.get("/servicescomplejo/create", service);

    return { create, msg: "service created" };
  } catch (error) {
    alert("error - service not created");
    console.log(error);
  }
};

export const addFavorite = (id, arr) => {
  //ver como cambiarlo para mejorar, considerar crear otra funcion
  return {
    type: actions.ADD_FAVORITE,
    payload: arr,
  };
};

export const addFavoriteLocalStorage = (arr) => {
  //ver como cambiarlo para mejorar, considerar crear otra funcion
  return {
    type: actions.FAV_LOCAL,
    payload: arr,
  };
};

export const createFavorite = async (id) => {
  try {
    const send = axios.post(`/favorites/create/${id}`);
    return { send, msg: "complex array created" };
  } catch (error) {
    console.log(error);
  }
};

export const updateFavorite = (id, obj, bool) => async (dispatch) => {
  console.log("esto es update", obj);
  try {
    const send = await axios.put(`/clients/update/${id}`, obj);

    if (bool) {
      dispatch({
        type: actions.UPDATE_FAVORITES,
        payload: obj.favorites,
      });
    } else {
      {
        dispatch({
          type: actions.UPDATE_FAVORITES_DEL,
          payload: obj.favorites,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFavorite = () => async (dispatch) => {
  const favorites = await axios.get("url");

  dispatch({
    type: actions.GET_FAVORITES,
    payload: favorites,
  });
};

//LOGIN
export const setCurrentUser = (data) => {
  return {
    type: actions.SET_CURRENT_USER,
    payload: data,
  };
};

export const logoutUser = () => {
  return {
    type: actions.LOGOUT_CURRENT_USER,
    payload: null,
  };
};

export const checkUserSession = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return {
      type: actions.LOGOUT_CURRENT_USER,
      payload: null,
    };
  } else {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    return async (dispatch) => {
      try {
        const { data } = await clientAxios("clients/profile", config);
        return dispatch({
          type: actions.SET_CURRENT_USER,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
};

// DEVELOPER FUNCTIONS
export const changeStatusComplex = async (id, change) => {
  try {
    const update = await axios.put(`/complejo/update/${id}`, change);

    return { update, msg: "complex updated" };
  } catch (error) {
    alert("error - complex not updated");
    console.log(error);
  }
};

export const changeStatusUser = async (id, change) => {
  try {
    const update = await axios.put(`/clients/update/${id}`, change);

    return { update, msg: "user updated" };
  } catch (error) {
    alert("error - user not updated");
    console.log(error);
  }
};
