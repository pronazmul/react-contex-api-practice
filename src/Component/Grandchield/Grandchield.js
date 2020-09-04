import React, { useContext } from 'react';
import { contexApi } from '../../App';

const Grandchield = () => {
    const [count, setCount] = useContext(contexApi)
    return (
        <div>
            <h6>This in From Grandchield Component</h6>
            <p>Value is:{count}</p>
            <button onClick={()=>setCount(count + 1)} className='btn btn-success'>Increase Value</button>
            <hr></hr>
        </div>
    );
};

export default Grandchield;