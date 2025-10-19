import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button";
import InputText from "../subcomponents/InputText";

const Education = () => {

    return (
        <>
            <Nav />
            <section className="section">
                <form className="form">
                    <div className="form_container">
                        <div className="form_header">
                            <h2 className="form_title">
                                Education
                            </h2>

                            <div className="form_control_panel">
                                <Button buttonText="Back" />
                                <Button buttonText="Next" />
                            </div>
                        </div>

                        <div className="form_rows">
                            <label className="form_label">
                                University Name:
                                <InputText
                                    placeholder="University Name"
                                />
                            </label>

                            <label className="form_label">
                                Degree
                                <InputText />
                            </label>
                        </div>

                        <div className="form_rows">
                            <label className="form_label">
                                Graduation:
                                <InputText
                                />
                            </label>

                            <label className="form_label">
                                University Address:
                                <InputText
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Education;