import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./header.tsx"
import SideBar from './sidebar.tsx'
import Body from './body.tsx'

function App() {
  

  return(
    <div className='bg-black h-screen' >
      <div>
     <Header/>
     <section className=' flex flex-row gap-16'>
     <SideBar/>
     <Body/>
     </section>
    
      </div>
     
    </div>
    
  )
}

export default App
