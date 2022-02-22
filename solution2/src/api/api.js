import axios from 'axios';

//http://ws-old.parlament.ch/councillors?format=json

const instance = axios.create({
    'baseURL': 'http://localhost:8000/',
    headers: {
        'ContentType': 'text/json',
        'Accept': 'text/json',
        'Access-Control-Allow-Origin': '*'
    },
})

const httpConsumer = {
    getCouncilors() {
        return instance.get('').then(responce => responce.data);
    },
    getAffairs() {
        return instance.get('affairs/').then(responce => responce.data);
    }
}

export default httpConsumer;