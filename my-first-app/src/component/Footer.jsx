function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>© {year} Naija Tech Hub. all right reserved.</p>
        </footer>
    );
}

export default Footer;