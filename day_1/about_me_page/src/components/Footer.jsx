function Footer() {
    const year = new Date().getFullYear

    return(
        <footer>
            <div className="social">
                <a href="">Twitter</a>
                <a href="">Linkedin</a>
                <a href="">GitHub</a>
                <a href="">Tiktok</a>
            </div>
            <p>© {year} Prince. All Right Reserved.</p>
        </footer>
    );
}

export default Footer