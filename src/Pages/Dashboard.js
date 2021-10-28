import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Dropdown, DropdownButton} from 'react-bootstrap';


export default function Dashboard(props) {

    const [dashboard, setDashboard] = useState({})

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + props.token
            },
        })
            // Make a request for a user with a given ID

            .then(function (response) {
                // handle success
                // dashboardInfo()
                setDashboard(response.data)
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(dashboard)

    return (
        <div>

            <h2>Dashboard</h2>
            <br></br>
            <h3>Welcome {Object.keys(dashboard).length > 0 && dashboard.data.user_data.name}!</h3>
            <br></br>

            <DropdownButton
                variant="outline-secondary"
                title="Previous Orders"
                id="input-group-dropdown-1"

            >
                <div className='text-center'>
                    <p>Previous Orders</p>
                    {/* <p>{dashboard?.data.user_data.orders}</p> */}
                </div>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Products</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="https://port-3000-react-container-2-kadowning110103.codeanyapp.com/">Home</Dropdown.Item>
            </DropdownButton>


        </div>
    );
}