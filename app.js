require('dotenv').config();
const axios = require('axios');


// var url = "https://thefork.p.rapidapi.com/restaurants/list" + "/22f072d9a2mshef218d3aa19563dp15e0cejsn0349cdcb46a3";

// axios.get(url).then(function (response) {
   
//   console.log('I worked some how');  
//   console.log(response);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
// .finally(function () {
//   // always executed
// });

axios({
    "method":"GET",
    "url":"https://thefork.p.rapidapi.com/restaurants/list",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"thefork.p.rapidapi.com",
    "x-rapidapi-key":process.env.X_RapidAPI_Key,
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