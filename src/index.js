import React from 'react';
import ReactDOM from 'react-dom'; // only needed for initial render into a DOM node
import Inbox from '../src/Inbox/inbox';

ReactDOM.render(
    <main>
        <Inbox />
    </main>,
    document.getElementById('hook')
);
