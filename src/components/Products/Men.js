import React, { useRef, useEffect } from 'react'
import './Products.css'
import './ProductSlide.css'

const Men = () => {

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollByTw = () => {
          const container = scrollContainerRef.current;
          container.scrollLeft += 2 * 200;
    
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          }
        };
    
        const startAutoScrolling = () => {
          setInterval(scrollByTw, 4000);
        };
        startAutoScrolling();
      }, []);

    return (
        <section className="men-banner products">
            <div className="product-container">
                <div className="product-row row-men">
                    <div className="product-item p-men">
                        <div className="product-filter">
                            <ul>
                                <li class="active">Clothings</li>
                                <li>HandBag</li>
                                <li>Shoes</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        <div className="product-slider">
                            <div className="product-list">
                                <div className="product-cont">
                                    <div className="product-rlist" ref={scrollContainerRef}>
                                        <div className="item-details">
                                            <img src="https://preview.colorlib.com/theme/fashi/img/products/man-2.jpg.webp" alt="" />
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                            <div className="item-desc">
                                                <h3>Random Name</h3>
                                                <h1>$120</h1>
                                            </div>
                                        </div>
                                        <div className="item-details">
                                            <img src="https://preview.colorlib.com/theme/fashi/img/products/man-3.jpg.webp" alt="" />
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                            <div className="item-desc">
                                                <h3>Random Name</h3>
                                                <h1>$120</h1>
                                            </div>
                                        </div>
                                        <div className="item-details">
                                            <img src="https://preview.colorlib.com/theme/fashi/img/products/man-4.jpg.webp" alt="" />
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                            <div className="item-desc">
                                                <h3>Random Name</h3>
                                                <h1>$120</h1>
                                            </div>
                                        </div>
                                        <div className="item-details">
                                            <img src="https://preview.colorlib.com/theme/fashi/img/products/man-1.jpg.webp" alt="" />
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                            <div className="item-desc">
                                                <h3>Random Name</h3>
                                                <h1>$120</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="scroll-btn">
                                    <i class="fa-solid fa-chevron-left scroll-button" onClick={() => scrollContainerRef.current.scrollLeft -= 2 * 200}></i>
                                    <i class="fa-solid fa-chevron-right scroll-button" onClick={() => scrollContainerRef.current.scrollLeft += 2 * 200}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-col">
                        <div className="product-image-bg bg-men">
                            <h2>Men's</h2>
                            <a className='product-link'>Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Men