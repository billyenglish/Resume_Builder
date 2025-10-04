const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Resume Builder. All rights reserved.</p>
            <p className="footer_terms">
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;