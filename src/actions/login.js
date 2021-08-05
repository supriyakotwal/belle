import {login} from '../api'
export function loginUser(){
    const output = login()
    .then((data) => data.json())

    return{
        type:'LOGIN_SUCCESS',
        payload:output
    }
}