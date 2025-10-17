function Footer() {
    const year = new Date().getFullYear()

    return(
        <footer>
            © {year} My App
        </footer>
    )
}

export default Footer;