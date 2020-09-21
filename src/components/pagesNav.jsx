import React from 'react'

export default function pagesNav(props) {
    const { prodsPerPage, totalProds, paginate, nextPage, prevPage } = props

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalProds / prodsPerPage); i++) {
        pageNumber.push(i)
    }


    return (
        <div className="container">
            <div className="row">
                <ul className="pagination col l10 push-l1 m10 push-m1 s10 push-s1">
                    <li>
                        <button type="submit" className={`btn btn-primary waves-effect`} onClick={() => prevPage()}>
                            <i className="material-icons">chevron_left</i>
                        </button>

                    </li>
                    {pageNumber ? pageNumber.map((num) =>
                        <li key={num}>
                            <button type="submit" className="btn waves-effect light-blue lighten-2" onClick={() => paginate(num)}>
                                {num}
                            </button>
                        </li>
                    ) : false}
                    <li>
                        <button type="submit" className={`btn btn-primary waves-effect`} onClick={() => nextPage()}>
                            <i className="material-icons">chevron_right</i>
                        </button>

                    </li>
                </ul>
            </div>
        </div>
    )
}
