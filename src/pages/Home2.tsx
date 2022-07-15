export function Home2() {

    function showGallery(argument) {
        let home = document.querySelector('#homeSection')
        let logoG = document.querySelector('#logoGallery')
        let gallery = document.querySelector('#gallerySection')
        let slide = document.querySelector('slide')
        
        if (argument) {
            home?.classList.add('hideHome')
            logoG?.classList.add('logoGalleryShow')
            gallery?.classList.add('showGallery')
            slide?.classList.add('showSlide')
        } else {
            home?.classList.remove('hideHome')
            logoG?.classList.remove('logoGalleryShow')
            gallery?.classList.remove('showGallery')
            slide?.classList.remove('showSlide')
        }

    }

    return (
        <>
        <nav className="nav-bar">
            <menu>
                <a href="#" className="button"></a>
            </menu>
            <div className="social-bar">
                <a href="#" className="facebook button"></a>
                <a href="#" className="twitter button"></a>
                <a href="#" className="instagram button"></a>
                <a href="#" className="pinterest button"></a>
            </div>
        </nav>

        <main className="main"> 
            <section className="main-section" id="homeSection">
                <div className="hero-wrapper">
                    <img src="" alt="" className="hero-image" />
                </div>
                <div className="logo">
                    <p className="light-logo"></p>
                    <p className="strong-logo"></p>
                </div>
                <div className="arrow-button" onClick={showGallery(true)}>
                    <a href="#" className="button"></a>
                </div>
            </section>
            <section className="gallery-section" id="gallerySection">
                <div id="logoGallery">
                    <p className="strong-logo" onClick={showGallery(false)}></p>
                </div>
                <div id="slide" className="slide-show">
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
                    <div className="card">
                        <img src="#" alt="" />
                    </div>
                </div>
            </section>
        </main>

        </>
    )
}