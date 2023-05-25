import Link from 'next/link'
import React from 'react'

const BannerSection = () => {
    return (
        <div className="main-banner">
            <div className="row">
                <div className="col-lg-7">
                    <div className="header-text">
                        <h6>Welcome To Movie Plus</h6>
                        <h4><em>Browse</em> All Popular Movies Here</h4>
                        <div className="main-button">
                            <Link href="browse.html">Browse Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection