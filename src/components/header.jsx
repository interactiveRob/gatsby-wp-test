import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
    <nav>
        <div className="container">
            <div className="left">
                <div className="logo"></div>
                <div className="choice">America&apos;s energy choice</div>
            </div>
            <div className="right">
                <button className="slide-left">Contact us</button>
            </div>
        </div>
    </nav>
)

export default Header
