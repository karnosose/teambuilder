const URL = 'https://picsart-bootcamp-2020-api.herokuapp.com/api/v1';
export const SET_TEAMS = 'SET_TEAMS';

export const setTeams = teams => {
    return {
        type: SET_TEAMS,
        teams: teams
    }
}

export const getTeams = (token) => {
    return (dispatch) => {
        fetch(`${URL}/teams`, {
            headers: {
                token: token,
            }
        })
        .then(res => res.json())
        .then(res => dispatch(setTeams(res)))
    }
}