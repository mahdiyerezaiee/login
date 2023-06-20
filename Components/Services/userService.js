import * as http from "./httpSrvice";
import {config} from "../Shared/Config/config.json"
export const CreateCustomer=(user)=>{
    return http.post(`${config.BaseApi}/AuthenticatedUser/CreateUser`,JSON.stringify(user));
}