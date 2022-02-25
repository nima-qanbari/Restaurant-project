import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Slidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElemens"

const Hero = () => {
  const [open, setOpen] = useState(false)

  const toggleHandler = () => {
    setOpen( !open  )
  }
  return (
<>
    <HeroContainer >
        <Navbar toggle={toggleHandler}/>
        <Sidebar open={open} toggle={toggleHandler} />
        <HeroContent>
            <HeroItems>
                <HeroH1>Greatest pizza Ever</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place </HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
</>
  )
}

export default Hero