import React from 'react'
import Collections from '../components/Collections'
import Footers from '../components/Footers'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Collections />
        <Footers />
    </div>
  )
}
