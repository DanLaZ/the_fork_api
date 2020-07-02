require('dotenv').config();
const axios = require('axios');


axios({
    "method":"GET",
    "url":"https://thefork.p.rapidapi.com/restaurants/list",
    "headers":{
    "content-type":"application/json",
    "x-rapidapi-host":"thefork.p.rapidapi.com",
    "x-rapidapi-key":process.env.THE_FORK_API_KEY,
    "useQueryString":true
    },"params":{
    "pageNumber":"1",
    "queryPlaceValueCoordinatesLongitude":"9.189982",
    "pageSize":"1",
    "queryPlaceValueCoordinatesLatitude":"45.4642035",
    "queryPlaceValueCityId":"348156"
    }
    })
    .then((response)=>{

        let resturants = response.data.data;
        
        for (let i = 0; i < resturants.length; i++) {
            // resturants[i];
            console.log(resturants[i].name);
        }
    })
    .catch((error)=>{
      console.log(error)
    })