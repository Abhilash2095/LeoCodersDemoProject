import axios from 'axios';
import { useDispatch } from 'react-redux';
// import baseURL from '../services/network/base_url';
import {actionTypes} from './actionTypes';

export const DoLogin = (input,callback) => {
    return async function(dispatch)
    {
        console.log('inputpit--', input);
        dispatch({type: actionTypes.login, payload: input});
        props.navigation.navigate("Home")
    }
   
 
    //   callback(input)

//   return
//   return async function (dispatch) {
//     axios.post(baseURL.base_url + 'service_login', input).then(resp => {
//       dispatch({type: actionTypes.login, payload: resp.data});
//       callback(resp.data)
//     });
//   };
};

