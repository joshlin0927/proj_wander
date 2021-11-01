// 套件
import { Route, Switch, Redirect } from 'react-router-dom'
import ArtMessageADD from './ArtMessageADD'

// Css 擺放位置
import './Art.css'
// 頁面
import ArtMessage from './ArtMessage'

function index(props) {
  return (
    <>
      <Switch>
        <Route path="/ArtIndex/ArtMessage/">
          <ArtMessage />
        </Route>
        <Route path="/ArtIndex/ArtMessageADD/">
          <ArtMessageADD />
        </Route>
        <Route exact path="/ArtIndex">
          <Redirect to="/ArtIndex/ArtMessage/" />
        </Route>
      </Switch>
    </>
  )
}

export default index
