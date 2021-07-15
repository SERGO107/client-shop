import { Route, Redirect } from 'react-router-dom'
import Admin from '../admin/Admin'

const PrivateRoute = ({ component: Component, handler, ...rest }) => {
    console.log(handler)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (handler) { return <Admin/> }
                else { return <Component/>  }
            }

            }
        />
    )
}

export default (PrivateRoute)
