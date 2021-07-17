import React from 'react'
import { Menu } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import Store from '../store'


export const Head = () => {
    const OwnStore = useContext(Store)

    return (
        <div>
            <Menu fluid={true} widths={4} size='massive'>
                <Menu.Item header>Our Company</Menu.Item>
                <Menu.Item
                    name='aboutUs'
                //   active={activeItem === 'aboutUs'}
                //   onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='jobs'
                //   active={activeItem === 'jobs'}
                //   onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='locations'
                //   active={activeItem === 'locations'}
                //   onClick={this.handleItemClick}
                />
            </Menu>
        </div>
    )
}
export default observer(Head)
