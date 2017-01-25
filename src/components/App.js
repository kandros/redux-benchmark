import React from 'react';
import SingleConnectedComponent from './OneContainerForAll';
import Config from './Config';

const App = () => (
    <div>
        <Config/>
        <SingleConnectedComponent/>
    </div>
);

export default App;

