import React, {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './PDPCarousel.css';
const PDPCarousel = ({product, previewImg}) => {
    const carouselContainer = useRef();

    const [carouselWidth, setCarouselWidth] = useState(0);
    
    const [style, setStyle] = useState({
        currentPos: 0,
        preview: product.image[0],
        css: {
            width: '100%',
            transform: 'translate3D(0px, 0, 0)'
        }
    })


    const getCarouselWidth = () => {
        const carWidth = carouselContainer.current.clientWidth;
        setCarouselWidth(carWidth);
    }
    
    useEffect(() => {
        getCarouselWidth();
        window.addEventListener('resize', () => {
            if(carouselContainer && carouselContainer.current){
                getCarouselWidth()
            }
        });
        setStyle(prevStyle => {
            return {
                ...prevStyle,
                css: {
                    ...prevStyle.css,
                    width: product.image.length * 100 > carouselWidth ? `${product.image.length * 100}px` : '100%'
                }
            }
        })
    }, [carouselWidth, product.image.length]);

    const next = () => {
        const totalSlidesWidth = product.image.length * 100;
        const currentWidth = carouselWidth + Math.abs(style.currentPos);
        if(totalSlidesWidth > currentWidth){
            setStyle(prevStyle => {
                return {
                    ...prevStyle,
                    currentPos: prevStyle.currentPos - 100,
                    css: {
                        ...style.css,
                        transform: `translate3D(${totalSlidesWidth - currentWidth >= 99 ? prevStyle.currentPos - 100 : prevStyle.currentPos - (totalSlidesWidth - currentWidth)}px, 0, 0)`,
                    }
                }
            })
        }
    }
    
    const prev = () => {
        if(style.currentPos !== 0){
            setStyle(prevStyle => {
                return {
                    ...prevStyle,
                    currentPos: prevStyle.currentPos + 100,
                    css: {
                        ...style.css,
                        transform: `translate3D(${prevStyle.currentPos + 100}px, 0, 0)`,
                    }
                }
            })
        }
    }
    
    const slides = product.image.map((slide, ind) => <div className="each-slides" key={slide}>
        <img src={slide} alt={product.name} onClick={() => previewImg(ind)} />
    </div>);
    return (
        <div className="carousel-container" ref={carouselContainer}>
            <FontAwesomeIcon 
                icon={faAngleLeft} 
                onClick={prev} 
                visibility={style.currentPos === 0 ? 'hidden' : 'visible'}
            />
                <div className="carousel-slides" style={style.css}>
                    {slides}
                </div>
            <FontAwesomeIcon 
                icon={faAngleRight} 
                onClick={next} 
                visibility={carouselWidth - style.currentPos < product.image.length * 100 ? 'visible' : 'hidden'}
            />
        </div>
    );
}
 
export default PDPCarousel;