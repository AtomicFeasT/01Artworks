import { FunctionComponent, HTMLAttributes, ReactNode, useState } from "react"
import '../styles/pages/home.scss'

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

export function Home2() {
    const [showClass, setShowClass] = useState(false)

    return (
        <>
        <main className="main"> 
            <Section className="main-section" show={showClass} hideClass='hideHome'>
                <div className={`hero-wrapper ${showClass? 'hideHero': ''}`} id="hero">
                    {/* <img src="../../../public/pexels-medhat-ayad.jpg" alt="" /> */}
                    
                    <div className="modern-frame">
                        <img src="../../../public/assets/ib/fabricated-world.png" alt="" />
                    </div>
                </div>

                <div className="arrow-wrapper">
                    <img src="../../../public/circle-arrow-down-solid.svg" className="arrow-button" onClick={() => setShowClass(true)}></img>
                </div>
            </Section>

            <section className={`gallery-section ${showClass? 'showGallery': ''}`} id="gallerySection">
                <div id="logoGallery">
                    <p className="strong-logo" onClick={() => setShowClass(false)}></p>
                </div>

                <div id="slide" className="slide-show">
                    <div className="modern-frame">
                        <img src="../../../public/assets/regular/anxious.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="../../../public/assets/regular/cheese-top-hat.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="../../../public/assets/regular/fire-flex.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="../../../public/assets/regular/hasegui.jpg" alt="" />
                    </div>

                    <div className="modern-frame">
                        <img src="../../../public/assets/regular/pizza.jpg" alt="" />
                    </div>
                </div>

                <div className="buttons">
                    <button><img className="button-left" src="../../../public/circle-arrow-left-solid.svg" alt="" /></button>
                    <button><img className="button-right" src="../../../public/circle-arrow-right-solid.svg" alt="" /></button>
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