// import axiosWithAuth from '../axiosAuth';
import axios from 'axios';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';


export const fetchFriends = () => dispatch => {
    dispatch({ type: LOADING })
        axios
          .get('http://localhost:5000/api/friends', {headers: { Authorization: localStorage.getItem('token') }})
          .then( response  => {
              dispatch({
                  type: SUCCESS,
                  payload: response.data,
              });
              console.log(response.data);
          })

          .catch(error => {
              dispatch({
                  type: ERROR,
                  payload: " Uh Oh "
              });
          });
}


export const LOGIN_START = 'LOGIN_START';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload}
            )
            fetchFriends();
        })
}