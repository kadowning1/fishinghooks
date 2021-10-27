import React, { useState } from 'react';
import axios from 'axios'


export default function Dashboard() {
    // useEffect(() => {
    //     // GET request using axios inside useEffect React hook
    //     axios.get('https://api.npms.io/v2/search?q=react')
    //         .then(response => setTotalReactPackages(response.data.total));

    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    const [dashboard, setDashboard] = useState({})

    const dashboardInfo = (event) => { // need to extract name and previous orders
        event.preventDefault();
        axios({
            method: 'get',
            url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register',
        })
         // Make a request for a user with a given ID

            .then(function (response) {
                // handle success
                console.log(response.data.data.token)
                // console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    
    return (
        <h2>Dashboard</h2>
    );
}