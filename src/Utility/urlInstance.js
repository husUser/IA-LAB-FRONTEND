import axios from 'axios'

let axiosInstance = axios.create({
    baseURL:"https://ialabbooking.be.evangadisc.com/api"
    // baseURL:"http://localhost:6388/api" 
    
})
export {axiosInstance}
