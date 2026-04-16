import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addRooms } from '../features/room/roomSlice';

const RoomDetails = () => {

    const [rooms, setRooms] = useState({});
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRooms({ ...rooms, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addRooms(rooms));
        setRooms({});
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <form action="" method="post" onSubmit={handleSubmit} className='card p-4 shadow'>
                            <h2 className='text-center my-4'>Add Room Details</h2>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor="image">Image</label>
                                <input className='form-control' type="text" name="image" id="image" value={rooms.image || ''} onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor="title">Title :</label>
                                <input className='form-control' type="text" name="title" id="title" value={rooms.title || ''} onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor="price">Price</label>
                                <input className='form-control' type="number" name="price" id="price" value={rooms.price || ''} onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Availability</label>
                                <select
                                    className='form-control'
                                    name="status"
                                    value={rooms.status || ''}
                                    onChange={handleChange}
                                >
                                    <option value="">-- Select Status --</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomDetails
