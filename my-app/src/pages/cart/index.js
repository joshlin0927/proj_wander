// 套件
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// Css 擺放位置
import './cart_step.css'
// 頁面
import CartStep01 from './CartStep01'
import CartStep02 from './CartStep02'
import CartStep03 from './CartStep03'

function index() {
  return (
    <>
      <Switch>
        <Route path="/Cart/Step01" exact>
          <CartStep01 />
        </Route>
        <Route path="/Cart/Step02" exact>
          <CartStep02 />
        </Route>
        <Route path="/Cart/Step03" exact>
          <CartStep03 />
        </Route>
        <Route path="/Cart">
          <Redirect to="/Cart/Step01" />
        </Route>
      </Switch>
    </>
  )
}

export default index
