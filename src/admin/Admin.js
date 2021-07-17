import React from 'react'
import { Input, Button, List, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { useContext, useState, useEffect } from 'react'
import Store from '../store'
import { UplodFiles } from './UplodFiles'


export const Admin = () => {
    const OwnStore = useContext(Store)

    const [dat, setData] = useState([])

    useEffect(() => {
        getProducts()
    }
        , [])

    const getProducts = () => {
        fetch("/db")
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
                setData(data)
            })
    }

    function funn(id, item) {

        setData(dat.filter(it => it.id !== id))
        fetch('/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(item)
        })
    }

    function pushProducts() {
        OwnStore.ProductsPost();
        getProducts()
        OwnStore.ProductCard = []
        alert(`Товары добавлены на сервер`)

    }

    const LOGOUT = event => {
        OwnStore.SETOUT()
        console.log(OwnStore.Auth)
    }

    return (
        < div >
            <Input
                fluid={true}
                value={OwnStore.Name}
                placeholder='Введите наименование'
                onChange={(evt) => (OwnStore.Name = evt.target.value)}
            />
            <Input
                fluid={true}
                value={OwnStore.Description}
                placeholder='Введите описание'
                onChange={(evt) => (OwnStore.Description = evt.target.value)}
            />
            <Input
                fluid={true}
                label='Установите цену'
                type="number"
                value={OwnStore.Price}
                placeholder='Введите цену'
                onChange={(evt) => (OwnStore.Price = evt.target.value)}
            />
            <Input
                fluid={true}
                value={OwnStore.ImageUrl}
                placeholder='Введите путь к изображению'
                onChange={(evt) => (OwnStore.ImageUrl = evt.target.value)}
            />

            <Button primary onClick={() => OwnStore.addTodo()}>Add</Button>
            <Button onClick={LOGOUT}> LogOUT</Button>

            <div>
                <Button onClick={pushProducts}> Добавить товары
                </Button>
            </div>
            <UplodFiles />
            <div>
                {OwnStore.ProductCard.map(item => (
                    < List horizontal key={item.id} >
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
                        < Button onClick={() => {
                            OwnStore.removeCard(item.id);
                        }}> Delete
                        </Button >
                    </List >
                ))}

            </div>
            <hr />
            <h4 >Ниже приведен список товаров которые увидит покупатель</h4>
            <div>

            </div>
            {dat.map(item => (
                <List horizontal key={item.id}>
                    <Image size='medium' big='true' src={item.url} />
                    <List.Item>

                        <List.Content>
                            <List.Header> Наименование: {item.name}</List.Header>
                            Цена: {item.price}
                            <List.Content>
                                Состав: {item.description}
                            </List.Content>
                        </List.Content>

                    </List.Item>
                    <Button onClick={() => { funn(item.id, item) }}
                    >Delete
                    </Button>
                </List>
            ))}

        </div >
    )
}
export default observer(Admin)


