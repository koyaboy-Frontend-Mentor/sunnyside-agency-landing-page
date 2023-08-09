import React from "react"

export default function Main() {
    return (
        <main>
            <div>
                <img src="./images/mobile/image-transform.jpg" alt="" />
            </div>
            <div>
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in
                    helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you
                </p>
                <a href="/" className="learn-more">LEARN MORE</a>
            </div>

            <div>
                <img src="./images/mobile/image-stand-out.jpg" alt="" />
            </div>

            <div>
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers,researchers,
                    photographers,videographers, and copywriters,we'll
                    build and extend your brand in digital places.
                </p>
                <a href="/" className="learn-more">LEARN MORE</a>
            </div>

            <div>
                <h2>Graphic Design</h2>
                <p>Great design makes you memorable. We deliver
                    artwork that underscores your brand message
                    and captures potential clients' attention
                </p>
            </div>

            <div>
                <h2>Photography</h2>
                <p>Increase your credibility by getting the most
                    stunning, high-quality photos that improve your
                    business image.
                </p>
            </div>

            <div className="client-testimonials">
                <h2>CLIENT TESTIMONIALS</h2>
                <div>
                    <div>
                        <img src="./images/image-emily.jpg" alt="emily" />
                    </div>
                    <p>We put our trsut in Sunnyside and they delivered,
                        making sure our needs were
                        met and deadlines were always hit.
                    </p>
                    <div>
                        <h3 className="name">Emily R.</h3>
                        <p>Marketing Director</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="./images/image-thomas.jpg" alt="thomas" />
                    </div>

                    <p>Suunyside's enthusiasm coupled with
                        their keen interest in our brand's success
                        made it a satisfying and enjoyable
                        experience.
                    </p>
                    <div>
                        <h3 className="name">Thomas S.</h3>
                        <p>Chief Operating Officer</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="./images/image-jennie.jpg" alt="jennie" />
                    </div>
                    <p>Incredible end result! Our sales increased
                        over 400% when we worked with
                        Sunnyside. Highly recommended!
                    </p>
                    <div>
                        <h3 className="name">Jennie F.</h3>
                        <p>Business Owner</p>
                    </div>
                </div>
            </div>

            <div>
                <img src="./images/mobile/image-gallery-milkbottles.jpg" alt="milk-bottles" />
                <img src="./images/mobile/image-gallery-orange.jpg" alt="orange" />
                <img src="./images/mobile/image-gallery-cone.jpg" alt="cone" />
                <img src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar-cubes" />
            </div>

            <footer>
                <h2>sunnyside</h2>
                <nav>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Projects</a></li>
                    </ul>
                </nav>
                <div>
                    <img src="./images/icon-facebook.svg" alt="facebook" />
                    <img src="./images/icon-instagram.svg" alt="instagram" />
                    <img src="./images/icon-twitter.svg" alt="twitter" />
                    <img src="./images/icon-pinterest.svg" alt="pinterest" />
                </div>
            </footer>

        </main>

    )
}