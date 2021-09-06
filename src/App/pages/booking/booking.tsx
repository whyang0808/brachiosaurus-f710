import React, { useEffect, useState } from 'react'
import Nav from '../../layout/Nav'
import { BookingList } from '../../components/booking'
import SearchBar from '../../components/_shared/SearchBar'
import axiosAuth from '../../axios'

const BookingPage: React.FC = (props) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    (async () => {
      try {
        const bookings = await axiosAuth.get('/booking')
        if (bookings && bookings.data) {
          setData(bookings.data)
        }
      } catch (error) {
        console.log('error', error)
      }
    }
    )()
  }, [])

  return (
    <Nav>
      <SearchBar
        type='booking'
        SearchProps={{
          placeholder: 'Search by Booking'
        }}
      />
      <BookingList data={data} />
    </Nav>
  )
}

export default BookingPage
