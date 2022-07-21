import { useRef } from "react"
export function Home2() {
    const home = useRef<HTMLDivElement>(null)
    const hero = useRef<HTMLDivElement>(null)
    const logoG = useRef<HTMLDivElement>(null)
    const gallery = useRef<HTMLDivElement>(null)
    const slide = useRef<HTMLDivElement>(null)

    function showGallery(argument: boolean) {
        // let home = document.querySelector<HTMLDivElement>('#homeSection')!
        // let hero = document.querySelector<HTMLDivElement>('#hero')!
        // let logoG = document.querySelector<HTMLDivElement>('#logoGallery')!
        // let gallery = document.querySelector<HTMLDivElement>('#gallerySection')!
        // let slide = document.querySelector<HTMLDivElement>('#slide')!
        
        if (argument) {
            home.current?.classList.add('hideHome')
            hero.current?.classList.add('hideHero')
            logoG.current?.classList.add('logoGalleryShow')
            gallery.current?.classList.add('showGallery')
            slide.current?.classList.add('showSlide')
        } else {
            home.current?.classList.remove('hideHome')
            hero.current?.classList.remove('hideHero')
            logoG.current?.classList.remove('logoGalleryShow')
            gallery.current?.classList.remove('showGallery')
            slide.current?.classList.remove('showSlide')
        }

    }

    return (
        <>
        <main className="main"> 
            <section className="main-section" ref={home} id="homeSection">
                <div className="hero-wrapper" ref={hero} id="hero">
                    <img src="../../../public/pexels-medhat-ayad.jpg" alt="" />
                </div>

                <img src="../../../public/arrow-down-solid.svg" className="arrow-button" onClick={() => showGallery(true)}></img>
            </section>

            <section className="gallery-section" ref={gallery} id="gallerySection">
                <div id="logoGallery">
                    <p className="strong-logo" onClick={() => showGallery(false)}></p>
                </div>
                <div id="slide" className="slide-show">
                    <div className="card">
                        <img src="../../../public/assets/regular/angel.jpg" alt="" />
                    </div>
                    <div className="card">
                        <img src="#" alt="" />
                    </div>
                    <div className="card">
                        <img src="#" alt="" />
                    </div>
                    <div className="card">
                        <img src="#" alt="" />
                    </div>
                    <div className="card">
                        <img src="#" alt="" />
                    </div>
                    <div className="card">
                        <img src="#" alt="" />
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}