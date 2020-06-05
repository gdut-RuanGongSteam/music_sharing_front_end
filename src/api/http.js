import axios from 'axios'
axios.defaults.withCredentials=true

const baseUrl = "http://120.24.35.66:8080/music_system/"

export function request(url, data, method = "GET") {
    let parameter = method.toLowerCase() === "get" ? "params" : "data";
    return new Promise((resolve, reject) => {
        axios({
                method: method,
                url: baseUrl + url,
                [parameter]: data
            }).then(res => {
                resolve(res.data)
            })
            .catch(error => {
                console.log("error", error)
                reject()
            })
    })
}