import React, { useContext } from 'react';
import Grandchield from './Grandchield/Grandchield';
import { contexApi } from '../App';

const Chield = () => {
    const data = useContext(contexApi);
    return (
        <div>
            <h3>This is From Chield Component</h3>
            <p>Value is:{data}</p>
            <hr></hr>
            <Grandchield></Grandchield>
        </div>
    );
};

export default Chield;