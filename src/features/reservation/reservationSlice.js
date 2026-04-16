import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const addReservation = createAsyncThunk('reservations/addReservation', async (reservations, { rejectWithValue }) => {
    try {
        let res = await axiosInstance.post('/reservations', reservations);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error.message);
        return rejectWithValue(error.response.data)
    }
});

export const viewReservation = createAsyncThunk('reservations/viewReservation', async (_, { rejectWithValue }) => {
    try {
        let res = await axiosInstance.get('/reservations');
        return res.data;
    } catch (error) {
        console.log(error.message);
        return rejectWithValue(error.response.data)
    }
})

export const deleteReservation = createAsyncThunk('reservations/deleteReservation', async (id, { rejectWithValue }) => {
    try {
        let res = await axiosInstance.delete(`/reservations/${id}`);
        console.log("reservation Deleted.")
        return id;
    } catch (error) {
        console.log(error.message);
        return rejectWithValue(error.response.data)
    }
})

const reservationReducer = createSlice({
    name: 'reservations',
    initialState: {
        reservations: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addReservation.fulfilled, (state, action) => {
            state.reservations.push(action.payload);
        })
        builder.addCase(viewReservation.fulfilled, (state, action) => {
            state.reservations = action.payload;
        })
        builder.addCase(deleteReservation.fulfilled, (state, action) => {
            state.reservations = state.reservations.filter(
                (res) => res.id !== action.payload
            );
        })
    }
});

export default reservationReducer.reducer;