const URL = 'https://picsart-bootcamp-2020-api.herokuapp.com/api/v1';
export const SET_PROJECTS = 'SET_PROJECTS';

export const setProjects = projects => {
    return {
        type: SET_PROJECTS,
        projects: projects
    }
}

export const getProjects = (token) => {
    return (dispatch) => {
        fetch(`${URL}/projects`, {
            headers: {
                token: token,
            }
        })
        .then(res => res.json())
        .then(res => dispatch(setProjects(res)))
    }
}