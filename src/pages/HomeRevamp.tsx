import { FunctionComponent, HTMLAttributes, ReactNode, useState } from "react"

// Production SCSS
import '../styles/pages/home.scss'

// Autoprefixed CSS
// import './css/styles.min.css'

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

export function HomeRevamp() {
    const [showClass, setShowClass] = useState(false)

    return (
        <>
        <main className="main"> 
            <Section className="main-section" show={showClass} hideClass='hideHome'>
                <div className={`hero-wrapper ${showClass? 'hideHero': ''}`} id="hero">
                    <div className="modern-frame">
                        <img src="./assets/ib/fabricated-world.png" alt="" />
                    </div>
                    <div className="modern-frame">
                        <img src="./assets/ib/fabricated-world.png" alt="" />
                    </div>
                </div>

                <div className="arrow-wrapper">
                    <img src="./assets/arrows/circle-arrow-down-solid.svg" className="arrow-button" onClick={() => setShowClass(true)}></img>
                </div>
            </Section>

            <section className={`gallery-section ${showClass? 'showGallery': ''}`} id="gallerySection">
                <div id="logoGallery">
                    <p className="strong-logo" onClick={() => setShowClass(false)}></p>
                </div>

                <div id="slide" className="slide-show">
                    <div className="modern-frame">
                        <img src="./assets/regular/anxious.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="./assets/regular/cheese-top-hat.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="./assets/regular/fire-flex.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="./assets/regular/hasegui.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="./assets/regular/pizza.jpg" alt="" />
                    </div>
                </div>

                <div className="buttons">
                    <button><img className="button-left" src="./assets/arrows/circle-arrow-left-solid.svg" alt="" /></button>
                    <button><img className="button-right" src="./assets/arrows/circle-arrow-right-solid.svg" alt="" /></button>
                </div>

            </section>
        
            {/* <section className="gallery-section" ref={gallery} id="gallerySection">
                <div id="logoGallery">
                    <p className="strong-logo" onClick={() => showGallery(false)}></p>
                </div>    
                <div id="slide" className="slide-show">
                    <div className="card">
                        <img src="../../../public/assets/regular/angel.jpg" alt="" />
                    </div>    
                    <div className="card">
                        <img src="../../../public/assets/regular/anxious.jpg" alt="" />
                    </div>    
                    <div className="card">
                        <img src="../../../public/assets/regular/cheese-top-hat.jpg" alt="" />
                    </div>    
                    <div className="card">
                        <img src="../../../public/assets/regular/fire-flex.jpg" alt="" />
                    </div>    
                    <div className="card">
                        <img src="../../../public/assets/regular/hasegui.jpg" alt="" />
                    </div>            
                    <div className="card">
                        <img src="../../../public/assets/regular/pizza.jpg" alt="" />
                    </div>
                </div>
            </section> */}

        </main>
        </>
    )
}