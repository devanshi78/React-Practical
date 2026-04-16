import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const addRooms = createAsyncThunk('rooms/addRooms', async (rooms, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post('/rooms', rooms);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.response.data);
    }
})

export const getAllRooms = createAsyncThunk('rooms/getAllRooms', async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get('/rooms');
        return res.data;
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.response.data);
    }
})

const roomSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addRooms.fulfilled, (state, action) => {
            state.rooms.push(action.payload);
        });
        builder.addCase(getAllRooms.fulfilled, (state, action) => {
            state.rooms = action.payload
        });
    }
});

export default roomSlice.reducer;