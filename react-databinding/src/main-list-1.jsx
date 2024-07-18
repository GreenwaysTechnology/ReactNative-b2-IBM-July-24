import ReactDOM from 'react-dom/client'
import React from 'react'
import { PRODUCTS } from './mock-data/product'

const ProductList = props => {

    const { products } = props
    return <div>
        {
            products.map(product => {
                return <section key={product.id}>
                    <h1>{product.id}</h1>
                    <h3>{product.title}</h3>
                    <div>
                        {product.images.map((img,index) => {
                            return <img key={index} src={img} height={100} width={100} alt='img' />
                        })}
                    </div>
                <h4>Price : {product.price}</h4>
                </section>
            })
        }
    </div>
}



const App = () => {
    return <>
        <ProductList products={PRODUCTS} />
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
