export function Home2() {

    function showGallery(argument: boolean) {
        let home = document.querySelector<HTMLDivElement>('#homeSection')!
        let hero = document.querySelector<HTMLDivElement>('#hero')!
        let logoG = document.querySelector<HTMLDivElement>('#logoGallery')!
        let gallery = document.querySelector<HTMLDivElement>('#gallerySection')!
        let slide = document.querySelector<HTMLDivElement>('#slide')!
        
        if (argument) {
            home?.classList.add('hideHome')
            hero?.classList.add('hideHero')
            logoG?.classList.add('logoGalleryShow')
            gallery?.classList.add('showGallery')
            slide?.classList.add('showSlide')
        } else {
            home?.classList.remove('hideHome')
            hero?.classList.add('hideHero')
            logoG?.classList.remove('logoGalleryShow')
            gallery?.classList.remove('showGallery')
            slide?.classList.remove('showSlide')
        }

    }

    return (
        <>
        <main className="main"> 
            <section className="main-section" id="homeSection">
                <div className="hero-wrapper" id="hero">
                    <img src="../../../public/pexels-medhat-ayad.jpg" alt="" />
                </div>

                <img src="../../../public/arrow-down-solid.svg" className="arrow-button" onClick={() => showGallery(true)}></img>
            </section>

            <section className="gallery-section" id="gallerySection">
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