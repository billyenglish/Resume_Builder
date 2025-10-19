import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button";
import InputText from "../subcomponents/InputText";

const TechnicalSkills = () => {

    return (
        <>
            <Nav />
            <section className="section">
                <form className="form">
                    <div className="form_container">
                        <div className="form_header">
                            <h2 className="form_title">
                                Technical Skills
                            </h2>

                            <div className="form_control_panel">
                                <Button buttonText="Back" />
                                <Button buttonText="Next" />
                            </div>
                        </div>

                        <div>
                            <InputText
                                width="30rem"
                            />
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default TechnicalSkills;