import { configureStore } from "@reduxjs/toolkit";
import roomReducer from '../features/room/roomSlice.js'
import reservationReducer from '../features/reservation/reservationSlice.js'

const store = configureStore({
    reducer : {
        rooms : roomReducer,
        reservations : reservationReducer
    }
})

export default store;