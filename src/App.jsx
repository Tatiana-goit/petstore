import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import NotFound from './pages/NotFound/NotFound'

import { lazy } from 'react'
import { Suspense } from 'react'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { currentUser } from './redux/auth/auth-operation'
import {Loader} from './helpers/Loader/Loader'

import {
  getIsAuth,
  getToken,
  getIsFetchCurrentUser,
} from './redux/auth/auth-selector'

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "homePage" */),
)
const Personal = lazy(() =>
  import('./pages/Personal/Personal' /* webpackChunkName: "personal" */),
)
const CartPage = lazy(() =>
  import('./pages/CartPage/CartPage' /* webpackChunkName: "cart" */),
)
const Login = lazy(() =>
  import('./pages/Login/Login' /* webpackChunkName: "login" */),
)
const Registration = lazy(() =>
  import(
    './pages/Registration/Registration'
    /* webpackChunkName: "registration" */
  ),
)

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(getIsAuth)
  const token = useSelector(getToken)
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser)

  useEffect(() => {
    if (token) {
      dispatch(currentUser())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <div className="App">
      <Navigation />

      {isFetchCurrentUser ? (
        <Loader/>
      ) : (
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route
              path="/"
              element={<PublicRoute isAuth={isAuth} component={HomePage} />}
            />
            <Route
              path="/personal"
              element={<PrivateRoute isAuth={isAuth} component={Personal} />}
            />
             <Route
              path="/cart"
              element={<PrivateRoute isAuth={isAuth} component={CartPage} />}
            />
            <Route
              path="/login"
              element={<PublicRoute isAuth={isAuth} component={Login} />}
            />
            <Route
              path="/registration"
              element={<PublicRoute isAuth={isAuth} component={Registration} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </div>
  )
}

export default App
