import React, { useEffect, useRef } from 'react'
import './ProductSlide.css'

const ProductSlide = () => {

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollByTwo = () => {
          const container = scrollContainerRef.current;
          container.scrollLeft += 2 * 200;
    
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          }
        };
    
        const startAutoScrolling = () => {
          setInterval(scrollByTwo, 4000);
        };
        startAutoScrolling();
      }, []);

    return (
        <div className="product-list">
            <div className="product-cont">
                <div className="product-rlist" ref={scrollContainerRef}>
                    <div className="item-details">
                        <img src="https://preview.colorlib.com/theme/fashi/img/products/women-2.jpg.webp" alt="" />
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
                        <img src="https://preview.colorlib.com/theme/fashi/img/products/women-3.jpg.webp" alt="" />
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
                        <img src="https://preview.colorlib.com/theme/fashi/img/products/women-4.jpg.webp" alt="" />
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
                        <img src="https://preview.colorlib.com/theme/fashi/img/products/women-1.jpg.webp" alt="" />
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
    )
}

export default ProductSlide