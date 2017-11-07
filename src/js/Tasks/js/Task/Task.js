//import React from 'react';
import { h, Component } from 'preact';
/** @jsx h */
export default class Task extends Component {
    constructor() {
        super();
    }

    apiEndpointRequest(url, request) {
        fetch(url).then(response => {
            if (response.ok) {
                // console.log('retrieved uuid: '+response.json().uuid); // synchronous. will not work. (that is why we needed thunk!)

                response.json().then((response) => {
                    //document.querySelector('#uuid').value = response.uuid;
                    //console.log('retrieved uuid: '+response.uuid); // asynchronous. using a promise. works.

                    //append element with the uuid as its name
                    let entry = document.createElement('li');
                    entry.appendChild(document.createTextNode(response.uuid));
                    document.getElementById('project-list').appendChild(entry);

                }).catch(error => {
                    return Promise.reject(console.log('JSON error: ' + error.message));
                });

                return response;
            }

            if (response.status === 404) {
                return Promise.reject(console.log('Endpoint error: ' + url));
            }

            return Promise.reject(console.log('HTTP error: ' + response.status));
        }).catch(error => {
            return Promise.reject(console.log('URL error: '+error.message));
        });
    }


    render() {
        return (
            <section>
                <p>
                    You can add projects here: <button onClick={ () => this.apiEndpointRequest('https://httpbin.org/uuid') } type="button">Add project</button>
                    <br/><br/>
                    That will actually perform a Fetch request to a real API endpoint and when the request returns 'ok', append the element below.
                </p>
                <ul id="project-list">
                    <li>An existing project</li>
                    <li>Another existing project</li>
                </ul>
            </section>
        )
    }
}
