import axios from 'axios'

const http = axios.create({
    timeout: 5000,
    headers: {
        'X-Api-Key': 's_FqokQ2xLeFyauGdFJ#TmwBhN_Li#FRa%IcA%rDosp@4nmWQ_23v-3xzK1%w0Bw'
    }
})

export default http