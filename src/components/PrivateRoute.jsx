import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const code = useSelector((state) => state.code.value)

  return code !== '' ? <Component {...rest} /> : <Navigate to="/" replace />
}
export default PrivateRoute
