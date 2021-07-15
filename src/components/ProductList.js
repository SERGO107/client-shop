import React from 'react'
import { List, Card, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

export const ProductList = () => {

    const [dat, setData] = useState([])
    useEffect(() => {
        fetch("https://shop107.herokuapp.com/db")
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <div className='wrap'>
            {dat.map(item => (
                <List horizontal key={item.id}>
                    <Image size='medium' big src={item.url} />
                    <List.Item>

                        <List.Content>
                            <List.Header> Наименование: {item.name}</List.Header>
                            Цена: {item.price}
                            <List.Content>
                                Состав: {item.description}
                            </List.Content>
                        </List.Content>

                    </List.Item>
                </List>
            ))}
        </div>
    )
}

export default observer(ProductList)
{/*  */ }

{/* <List  horizontal key={item.id}>
                    <Card  >
                        <Image src={item.url} wrapped ui={false} />
                        <Card.Content >
                            <Card.Header><p>Наименование:{item.name}</p></Card.Header>
                            <Card.Meta>Цена: {item.price}</Card.Meta>
                            <Card.Description>
                                Описание:{item.description}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </List>*/ }
