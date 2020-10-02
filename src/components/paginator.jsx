import React, { Component } from 'react'
import ProductCard from './ProductCard'
import Footer from './Footer'
import Slide from './Slide'
import { CommonLoading } from 'react-loadingg';

export default class Paginator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.p.filter((e) => e.currency_id !== "USD"),
            currentPage: 1,
            productPerPage: 6
        }

    }
    componentDidMount() {
        this.setState({
            ...this.state,
            currentPage: 1,
        })
    }

    render() {
        const { currentPage, productPerPage } = this.state;

        const indexOfLastProduct = currentPage * productPerPage; // determino el indice del ultimo producto de la pagina (pagina actual * cantidad de productos por pagina)
        const indexOfFirstPost = indexOfLastProduct - productPerPage; // determino el indice del primer producto de la pagina (ultimo - primero)
        const currentProduct = this.props.p.slice(indexOfFirstPost, indexOfLastProduct)
        // Al array de todos los productos les hago un slice entre el primer elemento y el ultimo, despues filtro por tipo de moneda


        const paginate = pageNum => this.setState({ ...this.state, currentPage: pageNum })
        const nextPage = () => currentProduct.length >= productPerPage ? this.setState({ ...this.state, currentPage: currentPage + 1 }) : false
        const prevPage = () => (currentPage > 1) ? this.setState({ ...this.state, currentPage: currentPage - 1 }) : false




        return (
            <div className="container col s12 m12 l12">
                <div className="row">
                    <Slide currentProduct={this.props.p} />
                    {currentProduct ? currentProduct.map((e) =>

                        <div className="col s12 m6 l4 thiscard" key={e.id}>
                            <ProductCard
                                img={e.thumbnail}
                                title={e.title}
                                price={e.price}
                                condition={e.condition}
                                currentId={e.currency_id}
                                availableQuantity={e.available_quantity}
                                permalink={e.permalink}
                            />
                        </div>

                    ) : <CommonLoading className="commonloading" />
                    }
                </div>

                <Footer prodsPerPage={this.state.productPerPage} totalProds={this.props.p.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </div>
        )
    }
}
