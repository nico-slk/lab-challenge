import React, { Component } from 'react'
import ProductCard from './ProductCard'
import PagesNav from './pagesNav'
import { CommonLoading } from 'react-loadingg';

export default class Paginator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.p,
            currentPage: 1,
            productPerPage: 30
        }
    }

    render() {
        const { currentPage, productPerPage } = this.state;

        const indexOfLastProduct = currentPage * productPerPage; // determino el indice del ultimo producto de la pagina (pagina actual * cantidad de productos por pagina)
        const indexOfFirstPost = indexOfLastProduct - productPerPage; // determino el indice del primer producto de la pagina (ultimo - primero)
        const currentProduct = this.props.p.slice(indexOfFirstPost, indexOfLastProduct).filter((e) => e.currency_id !== "USD")
        // Al array de todos los productos les hago un slice entre el primer elemento y el ultimo, despues filtro por tipo de moneda


        const paginate = pageNum => this.setState({ currentPage: pageNum })
        const nextPage = () => currentProduct.length >= productPerPage ? this.setState({ currentPage: currentPage + 1 }) : false
        const prevPage = () => (currentPage > 1) ? this.setState({ currentPage: currentPage - 1 }) : false


        return (
            <div className="container col s12 m12 l12">
                <div className="row">
                    {currentProduct ? currentProduct.map((e) =>

                        <div className="col s12 m6 l4 thiscard" key={e.id}>
                            <ProductCard
                                img={e.thumbnail}
                                title={e.title}
                                price={e.price}
                                currentId={e.currency_id}
                                availableQuantity={e.available_quantity}
                            />
                        </div>

                    ) : <CommonLoading className="commonloading" />
                    }
                </div>

                <PagesNav prodsPerPage={productPerPage} totalProds={this.state.products.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </div>
        )
    }
}
