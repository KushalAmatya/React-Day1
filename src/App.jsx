import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './component/new';
import Button from './component/Button';
import Inputfield from './component/Inputfield';
import Inpbut from './component/Inpbut';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <New/>
        <Button className={'button1'} label={"Stop"}/>
        <Button label={"Hello"}/>
        <Button dis label={"Disabled"}/>
        <Button/>
        <div className='Inputfield'>
        <Inputfield value ={"Hello"}/>
        </div>
        <Inpbut/>
    </>
  )
}

export default App
