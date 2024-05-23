import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LoginHeader from '../components/LoginHeader/LoginHeader'

const Layout = (props) => {
  return (
    <div className={props.isAuth ? "layout" : "layout100"}>
      {props.isAuth ? <Header /> : <LoginHeader/>}
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout