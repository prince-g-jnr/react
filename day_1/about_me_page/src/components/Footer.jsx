function Footer() {
    const year = new Date().getFullYear

    return(
        <footer>
            <div className="social">
                <a href="https://github.com/prince-g-jnr">GitHub</a>
                <a href="https://x.com/prince_g_jnr">Twitter</a>
                <a href="https://www.linkedin.com/in/gbolahan-ademuyiwa-45a559382">Linkedin</a>
                <a href="https://www.tiktok.com/@prince_tk01">Tiktok</a>
            </div>
            <p>© {year} Prince. All Right Reserved.</p>
        </footer>
    );
}

export default Footer