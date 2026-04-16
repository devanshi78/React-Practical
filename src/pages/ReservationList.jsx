import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewReservation, deleteReservation } from '../features/reservation/reservationSlice'

const ReservationList = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { reservations } = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(viewReservation());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <input
          type="text"
          placeholder="Search room..."
          className="form-control mb-3 text-center w-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h2 className='text-center mb-4'>Room List</h2>
        {
          reservations.length === 0 ? (
            <h4>No Reservations Found</h4>
          ) : (
            reservations
              .filter((res) =>
                res.name.toLowerCase().includes(search.toLowerCase())
                )
                  .map((res) => {
                    const { id, name, roomId, checkOut, checkIn } = res;
                    return (
                      <div className="col-md-4" key={id}>
                        <div className="card p-3 mb-3 shadow">

                          <h5>Guest Name : {name}</h5>
                          <p>Room ID: {roomId}</p>
                          <p>Check-In: {checkIn}</p>
                          <p>Check-Out: {checkOut}</p>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => dispatch(deleteReservation(id))}
                          >
                            Cancel
                          </button>

                        </div>
                      </div>
                    )
                  })
              )
        }
      </div>
    </div>
  )
}

export default ReservationList