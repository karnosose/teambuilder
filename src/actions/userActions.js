export const SET_CURRENT_USER = 'set_current_user';
export const SET_SERVER_ERROR ='SET_SERVER_ERROR';

const URL = 'https://picsart-bootcamp-2020-api.herokuapp.com/api/v1'

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const getUsers = (token) => {
    return (dispatch) => {
        fetch(`${URL}/users`, {
            headers: {
                token: token,
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
            dispatch(setCurrentUser(user))
            localStorage.setItem('token', JSON.stringify(user.token));
        })
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

export const setServerError = error => {
    return {
        type: SET_SERVER_ERROR,
        error
    }
}