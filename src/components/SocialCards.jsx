import { useEffect, useRef } from "react";
import "@/assets/css/social-cards.css";

export default function SocialCards() {
    const cardsRef = useRef(null);

    useEffect(() => {
        const cards = Array.from(
            cardsRef.current.querySelectorAll(".card")
        );

        const handleMouseMove = (e) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        cardsRef.current.addEventListener("mousemove", handleMouseMove);

        return () => {
            cardsRef.current?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div id="cards" ref={cardsRef}>
            {/* Instagram */}
            <div className="card">
                <div className="card_content">
                    <i className="fa-brands fa-instagram"></i>
                    <h2>Instagram</h2>
                    {/*<p>Followers : <span>625k</span></p>*/}

                    <a href="https://www.instagram.com/_praveen.salamuthu_?igsh=dzJyeXEybTl0Y2g2&utm_source=qr" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-link"></i>
                        <span>Follow me</span>
                    </a>
                </div>
            </div>

            {/* Github */}
            <div className="card">
                <div className="card_content">
                    <i className="fa-brands fa-github"></i>
                    <h2>Github</h2>
                    {/*<p>Followers : <span>150k</span></p>*/}

                    <a href="https://github.com/Salamuthu" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-link"></i>
                        <span>Follow me</span>
                    </a>
                </div>
            </div>

            {/* LinkedIn */}
            <div className="card">
                <div className="card_content">
                    <i className="fa-brands fa-linkedin"></i>
                    <h2>Linkedin</h2>
                    {/*<p>Connection : <span>100k</span></p>*/}

                    <a href="https://www.linkedin.com/in/praveen-jayathilake-31aab2358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-link"></i>
                        <span>Connect</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
