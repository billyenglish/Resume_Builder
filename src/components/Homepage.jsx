import "../styles/homepages.scss";
import Button from "../subcomponents/Button";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigation = useNavigate();

    return (
        <>
            <section className="homepage">
                <div className="homepage_main_content">
                    <h1 id="homepage_title">Resume Builder</h1>
                    <h2 id="homepage_subtitle">Let's Build Together !</h2>
                    <div>
                        <Button
                            buttonText="Get Started"
                            fontSize=".9rem"
                            fontWeight="600"
                            height="2.5rem"
                            width="8rem"
                            id="homepage_button"
                            onClick={() => navigation('/personal_details')}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Homepage;