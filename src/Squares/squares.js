
// import css
import css from './css/index.css';

// consider this to be the 'app' code for this component / spa.

function retrieveParticipantId(url, request) {
    fetch(url).then(response => {
        if (response.ok) {
            // console.log('retrieved uuid: '+response.json().uuid); // synchronous. will not work.

            response.json().then((response) => {
                document.querySelector('#uuid').value = response.uuid;
                //console.log('retrieved uuid: '+response.uuid); // asynchronous. using a promise. works.
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

setInterval( () => { retrieveParticipantId('https://httpbin.org/uuid') }, 2500 );

