import React from 'react'
import './Hero.css'
import banner1 from '../../assets/banner1.jpg'


const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner1} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="category-banner-wrapper">
                <div className="category-container">
                    <div className="category-row">
                        <div className="category-col">
                            <div className="category">
                                <img src="https://preview.colorlib.com/theme/fashi/img/banner-1.jpg.webp" alt="" />
                                <div className="inner-text">
                                    <h4>Men's</h4>
                                </div>
                            </div>
                        </div>
                        <div className="category-col">
                            <div className="category">
                                <img src="https://preview.colorlib.com/theme/fashi/img/banner-2.jpg.webp" alt="" />
                                <div className="inner-text">
                                    <h4>Women's</h4>
                                </div>
                            </div>
                        </div>
                        <div className="category-col">
                            <div className="category">
                                <img src="https://preview.colorlib.com/theme/fashi/img/banner-3.jpg.webp" alt="" />
                                <div className="inner-text">
                                    <h4>Kid's</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero