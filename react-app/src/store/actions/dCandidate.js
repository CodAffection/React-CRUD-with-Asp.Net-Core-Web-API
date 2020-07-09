import * as actionTypes from './actionTypes';

import api from '../api';


const formatData = data => ({
    ...data,
    age: parseInt(data.age ? data.age : 0)
})

export const fetchAll = () => dispatch => {
    api.dCandidate().fetchAll()
        .then(response => {
            dispatch({
                type: actionTypes.FETCH_ALL,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
};

export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.dCandidate().create(data)
        .then(res => {
            dispatch({
                type: actionTypes.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.dCandidate().update(id, data)
        .then(res => {
            dispatch({
                type: actionTypes.UPDATE,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.dCandidate().delete(id)
        .then(res => {
            dispatch({
                type: actionTypes.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}