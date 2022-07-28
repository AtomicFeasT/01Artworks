import React, { FunctionComponent, HTMLAttributes, ReactNode, useRef, useState } from "react"

// Production SCSS
import '../styles/pages/home.scss'

// Autoprefixed CSS
// import './css/styles.min.css'

// Remove And Add Class In The Click Of A Button
type SectionProps = HTMLAttributes<HTMLElement>&{children: ReactNode, show: boolean, hideClass: string}

const Section: FunctionComponent<SectionProps> = ({ 
    children,
    hideClass,
    show,
    className,
    ...rest
}) => {
    return (
        <section className={`${className} ${show? hideClass: ''}`} {...rest}>
            {children}
        </section>
    )
}

// Carousel Logic
// const buttons = document.querySelectorAll('[]')

// buttons.forEach(button => {
    
// });

export function HomeRevamp() {
    const [showClass, setShowClass] = useState(false)

    return (
        <>
        <main className="main"> 
            <Section className="main-section" show={showClass} hideClass='hideHome'>
                <div className={`hero-wrapper ${showClass ? 'hideHero': ''}`}>
                    
                    <div className="frame-wrapper">
                        <div className="fw-400 modern-frame span-two-columns">
                            <img src="./assets/ib/fabricated-world.png" alt="" />
                        </div>
                        <div className="ld-red-180 modern-frame">
                            <img src="./assets/ib/lady-in-red-modified.png" alt="" />
                        </div>
                        <div className="pfr-180 modern-frame">
                            <img src="./assets/ib/promise-of-reunion.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="arrow-wrapper">
                    <img src="./assets/arrows/circle-arrow-down-solid.svg" className="arrow-button" onClick={() => setShowClass(true)}></img>
                </div>
            </Section>

            <section className={`gallery-section ${showClass ? 'showGallery': ''}`} id="gallerySection">
                <div id="logoGallery">
                    <p className="strong-logo" onClick={() => setShowClass(false)}></p>
                </div>

                <div className="slides-wrapper carousel">

                    <div className="slide-show-wrapper">
                        <div data-active className="slide-show first-slide">
                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/anxious.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/cheese-top-hat.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/fire-flex.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/hasegui.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/pizza.jpg" alt="" />
                            </div>
                        </div>

                        <div className="slide-show second-slide">

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/anxious.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/cheese-top-hat.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/fire-flex.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/hasegui.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/pizza.jpg" alt="" />
                            </div>
                        </div>
                    </div>
             
                    <div className="buttons">
                        <button><img className="button-left prev" src="./assets/arrows/circle-arrow-left-solid.svg" alt="" /></button>
                        <button><img className="button-right next" src="./assets/arrows/circle-arrow-right-solid.svg" alt="" /></button>
                    </div>
                </div>
              


            </section>
        
        </main>
        </>
    )
}