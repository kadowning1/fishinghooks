import React from 'react'
import axios from "axios";

export default function Axios() {
    const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
    return (
        <div>
            getAPI() {
                // Make a request for a user with a given ID
                axios.get(apiKey + '/api/menu/type_amount/4/2')
                    .then(function (response) {
                        // handle success
                        console.log(response);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    })
}
        </div>
    )
}
