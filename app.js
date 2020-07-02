require('dotenv').config();
const axios = require('axios');


axios({
    "method":"GET",
    "url":"https://thefork.p.rapidapi.com/restaurants/list",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"thefork.p.rapidapi.com",
    "x-rapidapi-key":process.env.THE_FORK_API_KEY,
    "useQueryString":true
    },"params":{
    "pageNumber":"1",
    "queryPlaceValueCoordinatesLongitude":"9.189982",
    "pageSize":"10",
    "queryPlaceValueCoordinatesLatitude":"45.4642035",
    "queryPlaceValueCityId":"348156"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })