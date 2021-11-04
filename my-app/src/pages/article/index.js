// 套件
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Css 擺放位置
import './Art.css'
// 頁面
import Article from './Article'
import ArticleSt from './st/ArticleSt'
import ArtMessage from './ArtMessage'
import ArtMessageADD from './ArtMessageADD'
import ArticleMessage from './ArticleMessage'
import ArticleMessageSt from './st/ArticleMessageSt'

function index() {
  const member = localStorage.getItem('member')
    ? JSON.parse(localStorage.getItem('member'))
    : ''
  const identity = member ? member.identity : ''
  return (
    <>
      <Switch>
        <Route path="/ArtIndex/Article" exact>
          <Article />
        </Route>
        <Route path="/ArtIndex/ArticleSt" exact>
          <ArticleSt />
        </Route>
        <Route path="/ArtIndex/ArtMessageADD" exact>
          <ArtMessageADD />
        </Route>
        {/* <Route path="/ArtIndex/ArticleMessage/:sid?" exact> */}
        <Route path="/ArtIndex/ArticleMessage/" exact>
          <ArticleMessage />
        </Route>
        <Route path="/ArtIndex/ArticleMessageSt/" exact>
          <ArticleMessageSt />
        </Route>
        <Route path="/ArtIndex/ArtMessage" exact>
          <ArtMessage />
        </Route>
        <Route path="/ArtIndex">
          {identity === 0 ? (
            <Redirect to="/ArtIndex/ArticleSt" />
          ) : (
            <Redirect to="/ArtIndex/Article" />
          )}
        </Route>
      </Switch>
    </>
  )
}

export default index
