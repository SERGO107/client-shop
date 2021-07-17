import React from 'react'
import { List } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import Store from '../store'


export const Head = () => {
    const OwnStore = useContext(Store)

    return (
        <div>
            <List floated='right' horizontal fluid='true' widths={4} size='massive'>
                <List.Item disabled href='#'>
                    © GitHub, Inc.
                </List.Item>
                <List.Item href='#'>Terms</List.Item>
                <List.Item href='#'>Privacy</List.Item>
                <List.Item href='#'>Contact</List.Item>
            </List>

            <List horizontal fluid='true' widths={2} size='massive' floated='left'>
                <List.Item href='#'>About Us</List.Item>
                <List.Item href='#'>Jobs</List.Item>
            </List>
        </div>
    )
}
export default observer(Head)
