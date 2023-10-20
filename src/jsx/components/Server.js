import axios from "axios"
import { BASEURL } from "../../variable"

export const fetchUsers = (success,error)=>{
    axios.get(BASEURL+"J0i4Y2/data").then((resp)=>{
        if(resp.status===200){
            success(resp.data)
        }else{
            success([])
        }
    }).catch((err)=>{
        error(err)
    })
}


export const deleteUserServer =(id,success,error)=>{
    axios.delete(`${BASEURL}J0i4Y2/data/${id}`).then((resp)=>{
        if(resp.status===200){
            success(true)
        }else{
            success(false)
        }
    }).catch((err)=>{
        error(err)
    })
}

export const addUserServer = (data,success,error)=>{
    axios.post(`${BASEURL}J0i4Y2/data`,data).then((response)=>{
        console.log(response);
        if(response.status==201){
            success(true)
        }else{
            success(false)
        }
    }).catch((err)=>{
        error(err)
    })
} 