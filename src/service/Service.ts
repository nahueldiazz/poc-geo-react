import axios from 'axios'

export default class Service  {
    async getIp() {
        const res = await axios.get('https://geolocation-db.com/json/')
        return res.data.IPv4
    }

    async getUserIp(ip: any){
        const res = await axios.get('')
        return res 
    }
    async postUserIp(location: any, ip: any){
        const res = await axios.post('')
        return res 
    }

}
