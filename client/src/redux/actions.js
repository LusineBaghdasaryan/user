import * as actionTypes from './actionTypes';
import axios from "axios";

const changeLoader = (bool) => (
        {
            type: actionTypes.CHANGE_LOADING,
            payload: bool,
        });


export const register = (data) => {
    const url = "api/auth/register";
    return async (dispatch) => {
        dispatch(changeLoader(true));
        try {
            const res = await axios.post(`${url}`, {...data}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!res.data.hasError) {
                dispatch(({type: actionTypes.REGISTER, payload: res.data.message}));
                dispatch(changeLoader(false));
            }
        } catch (e) {
            dispatch(({type: actionTypes.ERROR, payload: e.response.data.message || e}));
        }
    }
    
}


export const login = (data) => {
    const url = "api/auth/login";
    return async (dispatch) => {
        dispatch(changeLoader(true));
        try {
            const res = await axios.post(`${url}`, {...data}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!res.data.hasError) {
                dispatch(({type: actionTypes.LOGIN, payload: res.data}));
                dispatch(changeLoader(false));
                localStorage.setItem("userData",JSON.stringify({userId:res.data.userId,token:res.data.token}));
            }
        } catch (e) {
            dispatch(({type: actionTypes.ERROR, payload: e.response.data.message || e}));
        }
    }
    
}



export const getUser = (id) => {
    const url = `api/auth/${id}`;
    return async (dispatch) => {
        dispatch(changeLoader(true));
        try {
            const res = await axios.get(`${url}`);
            if (!res.data.hasError) {
                dispatch(({type: actionTypes.GET_USER, payload: res.data}));
                dispatch(changeLoader(false));
            }
        } catch (e) {
            dispatch(({type: actionTypes.ERROR, payload: e.response.data.message || e}));
        }
    }
    
}

