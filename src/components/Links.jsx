import Nav from "./Nav"
import Footer from "./Footer"
import Button from "../subcomponents/Button"
import InputText from "../subcomponents/InputText";

const Links = () => {

    return (
        <>
            <Nav />
            <section className="links_section section">
                <form>
                    <div className="form_container">
                        <div className="form_header">
                            <h2 className="form_title">
                                Links
                            </h2>
                            
                            <div className="form_control_panel">
                                <Button
                                    buttonText="Back"
                                />
                                <Button
                                    buttonText="Next"
                                />
                            </div>
                        </div>
                        <div className="form_rows form_links">
                            <h3 className="category_title">Website:</h3>
                            <div className="form_catergory">
                                <label
                                    htmlFor="url"
                                    className="form_label"
                                >
                                    URL:
                                    <InputText
                                        id="url"
                                    />
                                </label>
                            
                                <label
                                    htmlFor="website_username"
                                    className="form_label"
                                >
                                    Username:
                                    <InputText />
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Links;