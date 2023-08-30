import React from "react"

import { ReactComponent as Logo } from "../logo.svg";

export default function Main() {
    return (
        <main>
            <div className="transform-container">
                <div className="img-transform-container">
                    <img src="./images/mobile/image-transform.jpg" alt="transform-mobile-img" className="mobile-image" />
                    <img src="./images/desktop/image-transform.jpg" alt="transform-desktop-img" className="desktop-image" />
                </div>

                <div className="transform">
                    <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for you.
                    </p>

                    <a href="/" className="learn-more">LEARN MORE</a>
                    <hr />
                </div>
            </div>


            <div className="img-stand-out-container">
                <img src="./images/mobile/image-stand-out.jpg" alt="stand-out-mobile-img" className="mobile-image" />
                <img src="./images/desktop/image-stand-out.jpg" alt="stand-out-desktop-img" className="desktop-image" />
            </div>

            <div className="stand-out">
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of
                    designers, researchers, photographers,
                    videographers, and copywriters,we'll
                    build and extend your brand in digital places.
                </p>
                <a href="/" className="learn-more">LEARN MORE</a>
                <hr />
            </div>

            <div className="graphic-design">
                <div className="graphic-design-text">
                    <h2>Graphic Design</h2>
                    <p>Great design makes you memorable. We deliver
                        artwork that underscores your brand message
                        and captures potential clients' attention.
                    </p>
                </div>
            </div>

            <div className="photography">
                <div className="photography-text">
                    <h2>Photography</h2>
                    <p>Increase your credibility by getting the most
                        stunning, high-quality photos that improve your
                        business image.
                    </p>
                </div>
            </div>

            <div className="client-testimonials">
                <h2>CLIENT TESTIMONIALS</h2>
                <div className="testimonies">
                    <div className="testimony-container">
                        <div className="img-container">
                            <img src="./images/image-emily.jpg" alt="emily" />
                        </div>
                        <p className="testimony emily">We put our trust in Sunnyside and they delivered,
                            making sure our needs were
                            met and deadlines were always hit.
                        </p>
                        <div>
                            <h3 className="name">Emily R.</h3>
                            <p className="role ">Marketing Director</p>
                        </div>
                    </div>
                    <div className="testimony-container">
                        <div className="img-container">
                            <img src="./images/image-thomas.jpg" alt="thomas" />
                        </div>

                        <p className="testimony">Sunnyside's enthusiasm coupled with
                            their keen interest in our brand's success
                            made it a satisfying and enjoyable
                            experience.
                        </p>
                        <div>
                            <h3 className="name">Thomas S.</h3>
                            <p className="role ">Chief Operating Officer</p>
                        </div>
                    </div>
                    <div className="testimony-container">
                        <div className="img-container">
                            <img src="./images/image-jennie.jpg" alt="jennie" />
                        </div>
                        <p className="testimony">Incredible end result! Our sales increased
                            over 400% when we worked with
                            Sunnyside. Highly recommended!
                        </p>
                        <div>
                            <h3 className="name">Jennie F.</h3>
                            <p className="role ">Business Owner</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <img src="./images/mobile/image-gallery-milkbottles.jpg" alt="milk-bottles" className="mobile-image" />
                <img src="./images/mobile/image-gallery-orange.jpg" alt="orange" className="mobile-image" />
                <img src="./images/mobile/image-gallery-cone.jpg" alt="cone" className="mobile-image" />
                <img src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar-cubes" className="mobile-image" />

                <img src="./images/desktop/image-gallery-milkbottles.jpg" alt="milk-bottles" className="desktop-image" />
                <img src="./images/desktop/image-gallery-orange.jpg" alt="orange" className="desktop-image" />
                <img src="./images/desktop/image-gallery-cone.jpg" alt="cone" className="desktop-image" />
                <img src="./images/desktop/image-gallery-sugarcubes.jpg" alt="sugar-cubes" className="desktop-image" />
            </div>

            <footer>
                {/* <img src="./images/logo.svg" alt="sunnyside-logo" /> */}
                <Logo className="footer-logo" />
                <nav>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Projects</a></li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <img src="./images/icon-facebook.svg" alt="facebook" />
                    <img src="./images/icon-instagram.svg" alt="instagram" />
                    <img src="./images/icon-twitter.svg" alt="twitter" />
                    <img src="./images/icon-pinterest.svg" alt="pinterest" />
                </div>
            </footer>

        </main>

    )
}