
import { makeAutoObservable, configure } from "mobx"
import { createContext } from 'react'
import { nanoid } from "nanoid";

configure({ enforceActions: "never" })
configure({
    useProxies: "never"
})

const removeCard = (todos, id) =>
    todos.filter((todo) => todo.id !== id);

const addProductCard = (ProductCard, name, description, price, url) => [
    {
        id: nanoid(),
        name,
        description,
        price,
        url,
        done: false,
    },
    ...ProductCard,
];


class Store {
    Name = ''
    Description = ''
    Price = 0
    ImageUrl = ``
    ProductCard = []
    Auth = false
    products = []

    constructor() {
        //со значением автообсервбл не нужно расставлять декораторы (@action, @observeble, @computed,@reaction) теперь mobx распознает значения автоматически
        makeAutoObservable(this)
    }
    SET(IsAdmin) {
        this.Auth = IsAdmin
    }
    SETOUT() {
        this.Auth = false
    }
    addTodo() {
        this.ProductCard = addProductCard(this.ProductCard, this.Name, this.Description, this.Price, this.ImageUrl);
        // this.ProductsPost()        
    }

    async ProductsPost() {
        await fetch(`https://shop107.herokuapp.com/db`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.ProductCard)
        });
        
    }

    removeCard(id) {
        this.ProductCard = removeCard(this.ProductCard, id);
    }
}


//чтобы испоьзовать данные из стора в реакт компонентах нужно обернуть стор в реакт контекст
export default createContext(new Store())
