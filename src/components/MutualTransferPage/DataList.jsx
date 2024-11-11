import React from 'react'
import EmailNotiCard from "../Cards/EmailNotiCard";
import Footer from "../Cards/Footer";
import TopImageCard from "../Cards/TopImageCard";
import Mutual from './Mutual_transfer/Mutual';
const DataList = () => {
  return (
    <>
    <TopImageCard title="Mutual Transfer View Portal" description="Welcome to the Aidoea Mutual Transfer View Portal"/>
    <Mutual/>
    <EmailNotiCard />
    <Footer />

    </>
  )
}

export default DataList