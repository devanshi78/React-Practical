import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RoomDetails from './pages/RoomDetails'
import RoomList from './pages/RoomList'
import ReservationForm from './pages/ReservationForm'
import ReservationList from './pages/ReservationList'
import Navbar from './components/Navbar'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/roomdetails' element={
          <>
            <Navbar />
            <RoomDetails />
          </>
        } />
        <Route path='/roomlist' element={
          <>
            <Navbar />
            <RoomList />
          </>
        } />
        <Route path='/reservationform' element={
          <>
            <Navbar />
            <ReservationForm />
          </>
        } />
        <Route path='/reservationlist' element={
          <>
            <Navbar />
            <ReservationList />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
