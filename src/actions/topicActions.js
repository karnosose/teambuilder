const URL = 'https://picsart-bootcamp-2020-api.herokuapp.com/api/v1';
export const SET_TOPICS = 'SET_TOPICS';

export const setTopics = topics => {
    return {
        type: SET_TOPICS,
        topics: topics
    }
}

export const getTopics = (token) => {
    return (dispatch) => {
        fetch(`${URL}/topics`, {
            headers: {
                token: token,
            }
        })
        .then(res => res.json())
        .then(res => dispatch(setTopics(res)))
    }
}