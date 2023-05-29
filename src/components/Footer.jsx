import React from 'react'

export default function Footer() {
    return (
        <>
            {/* start of footer */}
            <footer style={{ position: "relative" }}>
                <div>
                    <h2 className="text-primary text-center">Eat, Cook, Repeat</h2>
                    <p className="text-muted text-center">
                        Share your best recipe by uploading here !
                    </p>
                </div>
                <p className="footer-copyright">
                    © built by
                    <a href="https://github.com/irhamnfrnda">Irham Nofrianda</a>
                </p>
            </footer>
            {/* end of footer */}
        </>
    )
}
