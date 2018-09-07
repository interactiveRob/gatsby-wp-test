import React from 'react'
import Link from 'gatsby-link'
import tagline from "../layouts/img/tagline.svg";

const Header = ({ siteTitle }) => (
    <nav>
        <div className="container">
            <div className="left">
                <div className="logo"></div>
                <div className="choice">
						<object type="image/svg+xml" data={tagline}/>
                </div>
            </div>
            <div className="right">
                <button className="slide-left">Contact us</button>
            </div>
        </div>
    </nav>
)

export default Header
