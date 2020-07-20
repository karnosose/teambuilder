import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


export const EDIT_USER = 'edit_user';
export const SET_CURRENT_USER = 'set_current_user';
export const SET_SERVER_ERROR = 'SET_SERVER_ERROR';


const URL = 'https://picsart-bootcamp-2020-api.herokuapp.com/api/v1'

export const editUser = (user) => {
    return {
        type: EDIT_USER,
        user
    }
}

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const setServerError = error => {
    return {
        type: SET_SERVER_ERROR,
        error
    }
}

export const getUsers = () => {
    return (dispatch) => {
        fetch(`${URL}/users`, {
            headers: {
                token: JSON.parse(localStorage.getItem('user')),
            }
        })
        .then(res => res.json())
        .then(res => dispatch(setCurrentUser(res)))
    }
}

export const login = (email, password) => {
    
    return dispatch => {
        fetch(`${URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email:email, password:password})
        })
        .then(response =>  {
            if(response.status !== 200){
                throw Error(response.statusText)
            } 
            return response.json();
        })
        .then(user => {
            localStorage.setItem('token', JSON.stringify(user.token));
            history.push('/profile')
        })
        .catch(error => 
           dispatch(setServerError(error.message)) 
        )
    }
}

export const  registerUser = userData => {
    return () => {
        fetch(`${URL}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
        .then(response =>  {
            if(response.status !== 200){
              throw Error(response.statusText)
            }
        })
    }
    
  }
