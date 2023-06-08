import React from 'react';

const CardClass = ({data}) => {
    const {image, name, Ins_name, available_seats, price} = data;

    return (
        <div>
            <div className="card w-fit bg-base-100 shadow-xl">
                <figure><img className='h-[230px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Instructor Name: {Ins_name}</p>
                    <p>Available seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardClass;