import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

export const ProductList = () => {

    const [dat, setData] = useState([])
    useEffect(() => {
        fetch("/db")
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <div className='wrap'>
            <h1>Сегодня в продаже</h1>
            {dat.map(item => (
                <List horizontal key={item.id} >
                    <Image size='medium' rounded centered inline src={item.url} bordered />
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
