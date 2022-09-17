import React from 'react'

import Header from './Header'
import SideBar from './SideBar'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import { useSelector, } from 'react-redux'
import { selectSendMessageIsOpen, } from './features/mailSlice'

import './App.css'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router basename='/gmail-clone/'>
      <div className="app">
        <Header />

        <div className='app__body'>
          <SideBar />
          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail /> }
      </div>
    </Router>
  )
}

export default App
