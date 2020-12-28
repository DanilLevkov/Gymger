import * as axios from 'axios';

const ms = axios.create({
    baseURL: "http://20.52.2.24:8000"
})

export const regAPI = (login, password) => {
    debugger
    return ms.post("/register/", {login, password}).then(res=>res.data)
}

export const loginAPI = (login, password) => {
    return ms.post("/login/", {login, password}).then(res=>res.data)
}

export const lentaAPI = (token, tags) => {
    
    if(token.length>4 && tags[0]){
    return ms.post("/feed/", {token, tags}).then(res=>res.data)
    }
    else if (token.length>4){
        return ms.post("/feed/", {token}).then(res=>res.data)
    }
    else if (tags[0]){
        return ms.post("/feed/", {tags}).then(res=>res.data)
    }
    else return ms.post("/feed/", {}).then(res=>res.data)
    
}

export const AnketaPost = (token, interests, ind) => {
    return ms.post("/profile/interests/", {token, interests, ind}).then(res=>res.data)
}

export const AnketaPut = (token, interests, ind) => {
    return ms.put("/profile/interests/", {token, interests,ind}).then(res=>res.data)
}

export const AnketaGet = (token) => {
    return ms.get("/profile/interests/", {params: {token}}).then(res=>res.data)
}

export const CardGet = (token, id) => {
    if (token.length>3) {return ms.get("feed/"+id+"/", {params: {token}}).then(res=>res.data) }
    else 
    return ms.get("feed/"+id+"/", {}).then(res=>res.data)
}

