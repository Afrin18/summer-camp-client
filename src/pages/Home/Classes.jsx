import { useEffect, useState } from 'react';
import CardClass from '../Home/CardClass';

const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    return (
        <div className='mt-20'>
            <h2 className='text-4xl text-center font-semibold mb-4'>---Popular Classes---</h2>
            <div className="divider"></div> 
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    classes.map(data => <CardClass 
                        key={data._id}
                        data={data}
                        ></CardClass>)
                }
            </div>
            {/* // <p>Fine-art photography</p>
            // <p>Landscape photography</p>
            // <p>Fashion photography</p>
            // <p>Time-lapse photography</p>
            // <p>Architectural photography</p>
            // <p>Abstract photography</p>
            // <p>Macro photography</p> */}
        </div>
    );
};

export default Classes;