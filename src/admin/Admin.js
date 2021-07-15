import React from 'react'
import { Input, Button, List, Card, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useContext, useState, useEffect } from 'react'
import Store from '../store'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router'

export const Admin = () => {

    const [dat, setData] = useState([])
    useEffect(() => {
        fetch("https://shop107.herokuapp.com/db")
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
                setData(data)
            })
    }, [])

    function funn(id, item) {
        console.log(id)
        setData(dat.filter(it => it.id !== id))
        fetch('https://shop107.herokuapp.com/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(item)
        })
    }

    const OwnStore = useContext(Store)
    console.log(toJS(OwnStore.ProductCard))

    const LOGOUT = event => {
        OwnStore.SETOUT()
        console.log(OwnStore.Auth)
    }

    return (
        < div >
            <Input
                value={OwnStore.Name}
                placeholder='Введите наименование'
                onChange={(evt) => (OwnStore.Name = evt.target.value)}
            />
            <Input
                value={OwnStore.Description}
                placeholder='Введите описание'
                onChange={(evt) => (OwnStore.Description = evt.target.value)}
            />
            <Input
                type="number"
                value={OwnStore.Price}
                placeholder='Введите цену'
                onChange={(evt) => (OwnStore.Price = evt.target.value)}
            />
            <Input
                value={OwnStore.ImageUrl}
                placeholder='Введите путь к изображению'
                onChange={(evt) => (OwnStore.ImageUrl = evt.target.value)}
            />
            <Button primary onClick={() => OwnStore.addTodo()}>Add</Button>
            <Button
                onClick={LOGOUT}
            > LogOUT</Button>
            <div>
                <Button onClick={() => {
                    OwnStore.ProductsPost();
                    alert(`Товары добавлены на сервер`)
                }}> Добавить товары
                </Button>
            </div>
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
                    <Button onClick={() => { funn(item.id, item) }}
                    >Delete
                    </Button>
                </List>
            ))}

        </div >
    )
}
export default observer(Admin)


    // < List horizontal key = { item.id } >
    //                 <Image size='medium' big src={item.url} />
    //                 <List.Item>

    //                     <List.Content>
    //                         <List.Header> Наименование: {item.name}</List.Header>
    //                         Цена: {item.price}
    //                         <List.Content>
    //                             Состав: {item.description}
    //                         </List.Content>
    //                     </List.Content>

    //                 </List.Item>
    //                 < Button onClick = {() => {
    //     OwnStore.removeCard(item.id);
    // }}> Delete
    //                             </Button >
    //             </List >

    //     < List celled horizontal key = { item.id } >
    //         <Card>
    //             <Image src={item.url} wrapped ui={false} />
    //             <Card.Content>
    //                 <Card.Header><p>Наименование:
    //                     {item.name}

    //                 </p></Card.Header>
    //                 <Card.Meta>Цена: {item.price}</Card.Meta>
    //                 <Card.Description>
    //                     Описание:{item.description}
    //                 </Card.Description>
    //             </Card.Content>
    //             <Button onClick={() => {
    //                 OwnStore.removeCard(item.id);
    //             }}>Delete
    //             </Button>
    //         </Card>
    // </List >

//     < Button onClick = {
//                         () => {
//     console.log(item.id)
//     fetch('http://localhost:3001/delete', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//             'Access-Control-Allow-Origin': '*'
//         },
//         body: JSON.stringify(item)
//     })
// }
//                     }
//                     > Delete
//                     </Button >