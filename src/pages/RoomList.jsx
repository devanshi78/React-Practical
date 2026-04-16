import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRooms } from '../features/room/roomSlice';

const RoomList = () => {

  const list = useSelector(state => state.rooms.rooms);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <input
            type="text"
            placeholder="Search room..."
            className="form-control mb-3 text-center w-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h2 className='text-center mb-4'>Room List</h2>
          {
            list
              .filter((room) =>
                room.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((room, id) => {
                const { title, price, image, status } = room;
                return (
                  <div className="col-md-4 mb-4" key={id}>
                    <div className="card h-100 shadow">
                      <img src={image} alt='' className='img-fluid mb-2' style={{ height: "200px", objectFit: "cover" }} />
                      <div className='px-3'>
                        <h5>{title}</h5>
                        <p>Type: {status}</p>
                        <p>Price: ₹{price}</p>
                      </div>
                    </div>
                  </div>
                )
              })}

        </div>
      </div>
    </>
  )
}

export default RoomList
