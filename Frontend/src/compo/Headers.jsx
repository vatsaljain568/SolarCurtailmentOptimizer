
import React from 'react'
import SolarOuput from './navbar-compo/SolarOuput'
import CoalSaved from './navbar-compo/CoalSaved'
import Emmision from './navbar-compo/Emmision'
import Status from './navbar-compo/Status'


const Headers = () => {
  return (
        <div className=' w-full  bg-[#0B1120] flex flex-row gap-3 mt-5   justify-between   text-[#EEEEEE] justify-center border-0'>

      <SolarOuput />
      <CoalSaved/>
      <Emmision />
      <Status />
    </div>
  )
}

export default Headers
