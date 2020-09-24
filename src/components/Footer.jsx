import React from 'react'
import PagesNav from './pagesNav'
import { AiOutlineFacebook, AiFillGithub, AiFillMail, AiOutlinePhone } from "react-icons/ai";

export default function Footer(props) {
    return (
        <nav>
            <PagesNav prodsPerPage={props.prodsPerPage} totalProds={props.totalProds} paginate={props.paginate} nextPage={props.nextPage} prevPage={props.prevPage} className="center" />
            <div className="row col l12 m12 s12">
                <div className="redes col m6 s6 l6">
                    <a href="https://www.facebook.com/nicolas.selicki" className="grey-text text-darken-3 col m6 s6 l6"><AiOutlineFacebook className="grey-text text-darken-3 icon" /> Facebook</a>
                    <a href="https://github.com/nico-slk" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiFillGithub className="grey-text text-darken-3 icon" /> GitHub</a>
                </div>
                <div className="contacto col m6 s6 l6">
                    <a href="nico1991.6@gmail.com" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiFillMail className="grey-text text-darken-3 icon" /> Gmail</a>
                    <a href="https://wa.me/5492255526270" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiOutlinePhone className="grey-text text-darken-3 icon" /> WhatsApp</a>
                </div>
            </div>
        </nav>
    )
}
