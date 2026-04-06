import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000"
})


export const getApiServices ={
    async get (path : string,config = {}){
        const res = await api.get(path,config);
        return res.data;
    },
    async post (path : string , config = {}){
        return api.post(path,config).then((res) => res.data);
    },
    async put (path : string , config = {}){
        return api.put(path,config).then((res) => res.data);
    },
    async delete (path : string , config = {}){
        return api.delete(path , config).then((res) => res.data);
    } 

}