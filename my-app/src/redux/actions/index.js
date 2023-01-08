import * as actions from '../actionTypes'
import axios from 'axios'
import {sports,services} from '../../data/complexsExample'
import clientAxios from "../../config/clientAxios";
// import {complexs} from '../../data/complexsExample'


//CRUD COMPLEX
export const getAllComplex = () => async(dispatch)=>{
    try {
        const {data} = await axios.get("http://localhost:3001/complejo/all")
        const logic = data.filter(e => e.delete === false)
        dispatch({
            type: actions.GET_ALL_COMPLEX,
            payload: {
              api: data,
              logic
            }})
  
    } catch (error) {
        console.log(error)
    }
}




export const getComplexDetails = (id) => async(dispatch) =>{
  try{
    
    const find = await axios.get(`http://localhost:3001/complejo/${id}`)
    
    dispatch({
      type: actions.GET_COMPLEX_DETAIL,
      payload: find
    })
  }catch(error){
    alert(error)
}
}

export const createComplex = async(complex)=>{
  try{
    
    const create = await axios.post("http://localhost:3001/complejo/create",complex)
    return {create, msg:"complex updated"}
  }
  catch(error){
    alert('error - complex not created')
    console.log(error)
  }
}

export const updateComplex = (id,{logo,cuit,complexName,complexAddress})=>{
  
  let complex = {
    name:complexName,
    cuit,
    logo: logo.length ? logo : "https://icones.pro/wp-content/uploads/2022/03/icone-de-construction-et-de-batiment-gris.png" ,
    addres:complexAddress
  }
  try{
    
    const create = axios.put(`http://localhost:3001/complejo/update/${id}`,complex)
    
    return {create, msg:"complex updated"}
  }
  catch(error){
    alert('error - complex not updated')
    console.log(error)
  }
}

export const deleteComplex = (id)=>{

  try{
    
    const create = axios.post(`http://localhost:3001/complejo/delete/${id}`)
    
    return {create, msg:"complex deleted"}
  }
  catch(error){
    alert('error - complex not deleted')
    console.log(error)
  }
}

//
//CRUD CLIENT/USER

export const getAllUser = () => async(dispatch)=>{
  try {
      const {data} = await axios.get("http://localhost:3001/clients/all")
      const logic = data.filter(e => e.delete === false)
      dispatch({
          type: actions.GET_ALL_USER,
          payload: {
            api: data,
            logic
          }
      })

  } catch (error) {
      console.log(error)
  }
}


export const getUserDetails = (id) => async(dispatch) =>{
try{
  
  const find = await axios.get(`http://localhost:3001/clients/${id}`)
  
  dispatch({
    type: actions.GET_USER_DETAIL,
    payload: find.data
  })
}catch(error){
  alert(error)
}
}

export const createUser = async (formData)=>{
  try{
    
    const { data } = await clientAxios.post("/clients/create", formData);
    
    return data;
  }
  catch(error){
    alert('error - user not created')
    console.log(error)
  }
}

export const updateUser = (id,{fullname,password,email,phone})=>{
  
  let user = {
    name:fullname,
    password,
    email,
    phone
  }
  try{
    
    const create = axios.put(`http://localhost:3001/clients/update/${id}`,user)
    
    return {create, msg:"user updated"}
  }
  catch(error){
    alert('error - user not updated')
    console.log(error)
  }
}

export const deleteUser = (id)=>{

  try{
    
    const create = axios.post(`http://localhost:3001/clients/delete/${id}`)
    
    return {create, msg:"user deleted"}
  }
  catch(error){
    alert('error - user not deleted')
    console.log(error)
  }
}

//CRUD COURT
export const getAllCourt = () => async(dispatch)=>{
  try {
      const api = await axios.get("http://localhost:3001/court/all")
      dispatch({
          type: actions.GET_ALL_COURT,
          payload: api.data
      })

  } catch (error) {
      console.log(error)
  }
}


export const getCourtDetails = (id) => async(dispatch) =>{
try{
  
  const find = await axios.get(`http://localhost:3001/court/${id}`)
  
  dispatch({
    type: actions.GET_COURT_DETAIL,
    payload: find
  })
}catch(error){
  alert(error)
}
}

export const createCourt = (court)=>{

  try{
    
    const create = axios.get("http://localhost:3001/court/create",court)
    
    return {create, msg:"court created"}
  }
  catch(error){
    alert('error - court not created')
    console.log(error)
  }
}

export const updateCourt = (id,{numberCourt,description,typeCourt})=>{
  
  const court = {
    numberCourt,
    description,
    typeCourt
  }
  try{
    
    const create = axios.put(`http://localhost:3001/court/update/${id}`,court)
    
    return {create, msg:"court updated"}
  }
  catch(error){
    alert('error - court not updated')
    console.log(error)
  }
}

export const deleteCourt = (id)=>{

  try{
    
    const create = axios.post(`http://localhost:3001/court/delete/${id}`)
    
    return {create, msg:"court deleted"}
  }
  catch(error){
    alert('error - court not deleted')
    console.log(error)
  }
}

//CRUD TURN
export const getAllTurn= () => async(dispatch)=>{
  try {
      const api = await axios.get("http://localhost:3001/turn/all")
      dispatch({
          type: actions.GET_ALL_TURN,
          payload: api.data
      })

  } catch (error) {
      console.log(error)
  }
}


export const getTurnDetail = (id) => async(dispatch) =>{
try{
  
  const find = await axios.get(`http://localhost:3001/turn/${id}`)
  
  dispatch({
    type: actions.GET_TURN_DETAIL,
    payload: find
  })
}catch(error){
  alert(error)
}
}

export const createTurn = (clientID,courtID,{ date, time_start})=>{
  
  const turn = { date, time_start}
  try{
    
    const create = axios.get(`http://localhost:3001/turn/create/${clientID}/${courtID}`,turn)
    
    return {create, msg:"turn created"}
  }
  catch(error){
    alert('error - turn not created')
    console.log(error)
  }
}

export const updateTurn = (id,{ date, time_start})=>{
  
  const turn = { date, time_start}
  try{
    
    const create = axios.put(`http://localhost:3001/turn/update/${id}`,turn)
    
    return {create, msg:"turn updated"}
  }
  catch(error){
    alert('error - turn not updated')
    console.log(error)
  }
}

export const deleteTurn = (id)=>{

  try{
    
    const create = axios.post(`http://localhost:3001/turn/delete/${id}`)
    
    return {create, msg:"turn deleted"}
  }
  catch(error){
    alert('error - turn not deleted')
    console.log(error)
  }

}

//CRUD TYPECOUR
export const getAllTypeCourt = () => async(dispatch)=>{
  try {
      const api = await axios.get("http://localhost:3001/typecourt/all")
      dispatch({
          type: actions.GET_ALL_TYPECOURT,
          payload: api.data
      })

  } catch (error) {
      console.log(error)
  }
}


export const getTypeCourtDetails = (id) => async(dispatch) =>{
try{
  
  const find = await axios.get(`http://localhost:3001/typecourt/${id}`)
  
  dispatch({
    type: actions.GET_TYPECOURT_DETAIL,
    payload: find
  })
}catch(error){
  alert(error)
}
}

export const createTypeCourt = ({description,icon})=>{
  
  const typecourt = {description,icon}
  try{
    
    const create = axios.get("http://localhost:3001/typecourt/create",typecourt)
    
    return {create, msg:"typecourt created"}
  }
  catch(error){
    alert('error - typecourt not created')
    console.log(error)
  }
}

export const updateTypeCourt = (id,{description,icon})=>{
  
  const typecourt = {description,icon}
  try{
    
    const create = axios.put(`http://localhost:3001/typecourt/update/${id}`,typecourt)
    
    return {create, msg:"typecourt updated"}
  }
  catch(error){
    alert('error - typecourt not updated')
    console.log(error)
  }
}

export const deleteTypeCourt = (id)=>{

  try{
    
    const create = axios.post(`http://localhost:3001/typecourt/delete/${id}`)
    
    return {create, msg:"typecourt deleted"}
  }
  catch(error){
    alert('error - typecourt not deleted')
    console.log(error)
  }
}

//CRUD EVENT
export const getAllEvent = () => async(dispatch)=>{
  try {
      const api = await axios.get("http://localhost:3001/event/all")
      dispatch({
          type: actions.GET_ALL_EVENT,
          payload: api.data
      })

  } catch (error) {
      console.log(error)
  }
}


export const getEventDetails = (id) => async(dispatch) =>{
try{
  
  const find = await axios.get(`http://localhost:3001/event/${id}`)
  
  dispatch({
    type: actions.GET_EVENT_DETAIL,
    payload: find
  })
}catch(error){
  alert(error)
}
}

export const createEvent = ({description,icon})=>{
  
  const typecourt = {description,icon}
  try{
    
    const create = axios.get("http://localhost:3001/event/create",typecourt)
    
    return {create, msg:"event created"}
  }
  catch(error){
    alert('error - event not created')
    console.log(error)
  }
}

export const updateEvent = (id,{description,icon})=>{
  
  const typecourt = {description,icon}
  try{
    
    const create = axios.put(`http://localhost:3001/event/update/${id}`,typecourt)
    
    return {create, msg:"event updated"}
  }
  catch(error){
    alert('error - event not updated')
    console.log(error)
  }
}

export const deleteEvent = (id)=>{

  try{
    
    const create = axios.post(`http://localhost:3001/event/delete/${id}`)
    
    return {create, msg:"event deleted"}
  }
  catch(error){
    alert('error - event not deleted')
    console.log(error)
  }
}

// FILTROS Y ORDENAMIENTOS
export const filterSports = (sport,arr) => async(dispatch) =>{
  const filtSports = arr.filter(e => e.sports)
  const filtered = filtSports.filter(e => e.sports.some(e => e === sport))
  
  
  dispatch({
    type: actions.FILTER_BY_SPORT,
    payload: filtered
  })
}

export const filterServices= (service,arr) => async(dispatch) =>{
  
  const filtServ = arr.filter(e => e.services)
  const filtered = filtServ.filter(e => e.services.some(e => e === service))
  
  
  dispatch({
    type: actions.FILTER_BY_SPORT,
    payload: filtered
  })
}


export const orderAZ = (array) => dispatch =>{
  let arr = array
  
  let ordered = arr.sort((actual,siguiente) =>{
    if(actual.name > siguiente.name) return 1
    if(actual.name < siguiente.name) return -1
    return 0
  });
  
  dispatch({
    type: actions.FILTER_BY_AZ,
    payload: [...ordered]
  })
}

export const orderFav = (array) => dispatch =>{
  let arr = array
  
  let ordered = arr.sort((actual,siguiente) =>{
    if(actual.name > siguiente.name) return 1
    if(actual.name < siguiente.name) return -1
    return 0
  });
  
  dispatch({
    type: actions.FILTER_BY_AZ,
    payload: [...ordered]
  })
}

export const searchCity = (city, array, setNotfound) => dispatch =>{
  
  const filtered = array.filter(e => e.city === city)
  
  if(filtered.length > 0){
    setNotfound(true)
    dispatch({
      type: actions.SEARCH_BY_CITY,
        payload: filtered
      })
    }else{
      alert("city not found")
    }
  }
  
  //OTROS
  export const getAllServices = () => async(dispatch)=>{
    // try {
    //     const api = await axios.get("https://restcountries.com/v3.1/all")
    //     dispatch({
    //         type: actions.GET_ALL_COMPLEX,
    //         payload: api.data
    //     })
  
    // } catch (error) {
    //     console.log(error)
    // }
    dispatch({
      type: actions.GET_ALL_SERVICES,
      payload: services
    })
  }
  
  export const getAllSports = () => async(dispatch)=>{
    // try {
    //     const api = await axios.get("https://restcountries.com/v3.1/all")
    //     dispatch({
    //         type: actions.GET_ALL_COMPLEX,
    //         payload: api.data
    //     })
  
    // } catch (error) {
    //     console.log(error)
    // }
    dispatch({
      type: actions.GET_ALL_SPORTS,
      payload: sports
    })
  }

  export const addFavorite = (id,arr)=>{
    //ver como cambiarlo para mejorar, considerar crear otra funcion    
    return{
      type: actions.ADD_FAVORITE,
      payload: arr
    }
  }

  export const addFavoriteLocalStorage = (arr)=>{
    //ver como cambiarlo para mejorar, considerar crear otra funcion
    return{
      type: actions.FAV_LOCAL ,
      payload: arr
    }
  }

  export const createFavorite= async(id)=>{
    try{
      const send = axios.post(`http://localhost:3001/favorites/create/${id}`)
      return {send, msg:"complex array created"}
    }catch(error){console.log(error)}
  }

  export const updateFavorite= async(id,obj)=>{
    try{
      const send = await axios.put(`http://localhost:3001/clients/update/${id}`,obj)
      return {send, msg:"the complex was added to favorites"}
    }catch(error){console.log(error)}
  }

  export const getFavorite = ()=>async(dispatch)=>{
    
    const favorites = await axios.get("url")

    dispatch({
      type: actions.GET_FAVORITES,
      payload: favorites
    })
  }

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
export const changeStatusComplex = async (id, change) =>{
  try{
    
    const update = await axios.put(`http://localhost:3001/complejo/update/${id}`,change)
    
    return {update, msg:"complex updated"}
  }
  catch(error){
    alert('error - complex not updated')
    console.log(error)
  }


}

export const changeStatusUser = async(id,change) =>{
  try{
    
    const update = await axios.put(`http://localhost:3001/clients/update/${id}`,change)
    
    return {update, msg:"user updated"}
  }
  catch(error){
    alert('error - user not updated')
    console.log(error)
  }


}