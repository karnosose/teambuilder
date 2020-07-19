export const EDIT_USER = 'edit_user';
export const SET_CURRENT_USER = 'set_current_user';


const URL = 'https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/'

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

export const getUsers = () => {
    return (dispatch) => {
        fetch(`${URL}users`, {
            headers: {
                token: '5f146814c1365f00040edc0b',
            }
        })
        .then(res => res.json())
        .then(res => dispatch(setCurrentUser(res)))
    }
}