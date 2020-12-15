import axios from "axios";
import MockAdapter from "axios-mock-adapter"


export function fetchGETAPI(request){
    axios.get(request.url)
    .then(response => {
        console.log(response);
        request.callbackSuccess(response)
    })
}

export function mockedFetchAPI(request){
//regex working 
//yourword = "getAccountDetails" 
// new RegExp("\\b"+yourword+"\\b").test(input word)
}
