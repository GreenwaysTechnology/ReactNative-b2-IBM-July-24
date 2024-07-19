import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
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

const Page = ({ children }) => {
    return <div>
        {children}
    </div>
}
const Header = (props) => {
    return <>
        <>{props.children}</>
        <hr />
    </>
}
const Footer = () => {
    return <h1>Footer</h1>
}
const Layout = (props) => {
    return <div>
        {props.children}
    </div>
}

const App = () => {
    return <>
        <Layout>
            {/* Passing these components as prop */}
            <Header>
                <h1>IBM</h1>
            </Header>
            <Page>
                <ProductList products={PRODUCTS} />
            </Page>
            <Footer />
        </Layout>
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

