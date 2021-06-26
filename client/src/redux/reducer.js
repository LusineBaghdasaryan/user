import * as actionTypes from './actionTypes';


const initialState = {
    loading: false,
    error: null,
    success: false,
    successMessage:null,
    userId: null,
    token: null,
    isAuth:false
};

export const mainReducer = (store = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOADING:
            return {
                ...store,
                loading: action.payload,
                error: action.payload && null,
                successMessage:null,
                success: false
            }
        case actionTypes.REGISTER:
            return {
                ...store,
                success: true,
                successMessage: action.payload
            }
        case actionTypes.LOGIN:
            return {
                ...store,
                success: true,
                userId: action.payload.userId,
                token: action.payload.token,
                isAuth: true
            }
        case actionTypes.LOGOUT:
            return {
                ...store,
                isAuth: false
            }
        case actionTypes.ERROR:
            return {
                ...store,
                loading: false,
                success: false,
                error: action.payload
            }
        default:
            return store
    }
    
}

