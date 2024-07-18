import ReactDOM from 'react-dom/client'
import React from 'react'
import { PRODUCTS } from './mock-data/product'
import './index.css'

const ProductList = props => {

    const { products } = props

    const filteredProducts = products.filter(product => {
        return product.price > 50
    })

    return <div>
        {
            filteredProducts.map(product => {
                return <section key={product.id} className="card" >
                    <h1 style={styles.heading}>{product.id}</h1>
                    <h3 style={{color:'green'}}>{product.title}</h3>
                    <div>
                        {product.images.map((img, index) => {
                            return <img key={index} src={img} height={100} width={100} alt='img' />
                        })}
                    </div>
                    <h4>Price : {product.price}</h4>
                </section>
            })
        }
    </div>
}

//style object
const styles = {
    heading: {
        color: 'blue',
        borderRadius: 8,
        border: 1,
        boxShadow:"10px 20px 30px blue"
    }
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
