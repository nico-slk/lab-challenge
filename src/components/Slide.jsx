import React, { useEffect, useState } from 'react'
import { CommonLoading } from 'react-loadingg';
import Slider from "react-slick";

export default function Slide(props) {
    const [list, setList] = useState(props.currentProduct)


    function mezclar(prop) {
        setList(prop.sort(function () { return Math.random() - 0.5 }));
    }

    useEffect(() => {
        mezclar(list)
    }, [list])

    const desc = () => {
        var num = parseInt(Math.random() * 30)
        while (num < 5 && num > 40) {
            num = parseInt(Math.random() * 30)
        }
        return num
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };


    return (
        <div className="row z-depth-3">
            <h5 className="center-align">DESTACADOS</h5>
            <Slider  {...settings} className="slide">

                {list ? list.map((e) =>

                    <div className="slide-element" key={e.id}>
                        <div className="slide-cont">
                            <img src={e.thumbnail} alt={e.title} />
                            <div className="slide-info">
                                <h4>{e.title}</h4>
                                    <h5>
                                        <span> <b>${e.price}</b> {e.currency_id}<h5 className="red-text text-red-lighter 4">-{desc()}% OFF</h5></span>
                                    </h5>
                                <button type="submit" className="btn btn-primary left" onClick={() => window.location = `${e.permalink}`}>
                                    Ir a articulo
				                </button>
                            </div>
                        </div>
                    </div>

                ) : <CommonLoading className="commonloading" />
                }

            </Slider>
        </div>
    )
}
