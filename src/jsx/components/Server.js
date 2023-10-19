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