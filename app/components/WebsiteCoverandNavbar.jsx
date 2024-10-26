import React from 'react'
import WebsiteNavbar1 from './WebsiteNavbar1'
import WebsiteNavbar2 from './WebsiteNavbar2'

const WebsiteCoverandNavbar = () => {
  return (
    <div className="w-full h-screen bg-[url('/bgpic.jpg')] bg-cover bg-no-repeat bg-center ">
      <WebsiteNavbar2 where={0} />
    </div>
  )
}

export default WebsiteCoverandNavbar
