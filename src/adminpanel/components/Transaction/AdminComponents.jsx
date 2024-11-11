import React from 'react'
import Resources from './Resources'
import Query from './Query'
import IdCard from './IDCard'
import IdCardDetails from './IdCardDetails'
import IdCardUpdate from './IdcardUpdate'
import AdminLogin from './AdminLogin'
import Events from './Events/Events'
import EventDetails from './Events/EventsDetails'
import CommonLinks from './commonlinks/Commonlinks'

const AdminComponents = () => {
  return (
    <div>
      <Resources />
      <Query />
      <IdCard />
      <IdCardDetails />
      <IdCardUpdate />
      <AdminLogin />
      <Events />
      <EventDetails />
      <CommonLinks />
    </div>
  )
}

export default AdminComponents