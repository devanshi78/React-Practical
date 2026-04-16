import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../features/reservation/reservationSlice';
import { getAllRooms } from '../features/room/roomSlice';

const ReservationForm = () => {

  const [reservations, setReservation] = useState({});
  const dispatch = useDispatch();

  const rooms = useSelector(state => state.rooms.rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservations, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservations));
    setReservation({});
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow">

            <h3 className="text-center mb-4">Book Room</h3>

            <div className="mb-3">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                name="name"
                value={reservations.name || ''}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Room</label>
              <select
                name="roomId"
                value={reservations.roomId || ''}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">-- Select Room --</option>

                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.title} ({room.status}) - ₹{room.price}
                  </option>
                ))}

              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Check-In Date</label>
              <input
                type="date"
                name="checkIn"
                value={reservations.checkIn || ''}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Check-Out Date</label>
              <input
                type="date"
                name="checkOut"
                value={reservations.checkOut || ''}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <button className="btn btn-primary w-100">
              Book Now
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default ReservationForm;