import { useEffect, useState, useContext } from "react"
import { Input, Label, Button } from "semantic-ui-react"
import Store from '../store'
import { observer } from 'mobx-react-lite'
import { Route, Redirect } from 'react-router-dom'


function Login() {
    const [pass, setPass] = useState('')
    // const [IsAdmin, setIsAdmin] = useState(false)
    const OwnStore = useContext(Store)

    useEffect(() => {
        PostPassword()
    }, [])
    // const LOGIN = event => {
    //     OwnStore.SET()
    //     console.log(OwnStore.Auth)

    // }
    const handleChange = event => {
        setPass(event.target.value)

    }

    // console.log(IsAdmin)

    const eventHandler = event => {
        event.preventDefault();
        // OwnStore.SET(IsAdmin)
        setPass("");
        PostPassword()


    }

    // console.log(Math.ceil(Math.log2(1000000)))
    const PostPassword = () => {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                AdminPassword: pass
            }),
        }).then((res) => res.json())
            .then((result) => OwnStore.SET(result))
    }



    return (
        <div>
            <form onSubmit={eventHandler}  >
                <Label>
                    Enter password:
                </Label>
                <Input
                    value={pass}
                    placeholder='Введите наименование'
                    onChange={handleChange}
                />
                <Input type="submit" value="Submit" />
            </form>
            {/* <Button
                onClick={LOGIN}
            > LogIn</Button> */}
        </div>

    )
}

export default observer(Login)

