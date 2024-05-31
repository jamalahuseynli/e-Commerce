import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LoginHeader from '../components/LoginHeader/LoginHeader'
import { AuthContext } from '../context/AuthContext'

const Layout = (props) => {

  const {token}=useContext(AuthContext)

  return (
    <div className={token ? "layout" : "layout100"}>
      {token ? <Header /> : <LoginHeader/>}
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout