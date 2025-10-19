import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button";
import InputText from "../subcomponents/InputText";

const WorkExperience = () => {

    return (
        <>
            <Nav />
            <section className="section">
                <form className="form">
                    <div className="form_container">
                        <div className="form_header">
                            <h2 className="form_title">
                                Work Experience
                            </h2>

                            <div className="form_control_panel">
                                <Button buttonText="Back" />
                                <Button buttonText="Next" />
                            </div>
                        </div>
                        <div class="form_rows">
                            <label className="form_label">
                                Company Name:
                                <InputText
                                    placeholder="Company Name"
                                />
                            </label>
                            <label className="form_label">
                                Job Title:
                                <InputText
                                    placeholder="Job Title"
                                />
                            </label>
                        </div>
                        <div className="form_rows">
                            <label className="form_label">
                                Company Tenure:
                                <InputText
                                    placeholder="Company Tenure"
                                />
                            </label>

                            <label className="form_label">
                                Address:
                                <InputText
                                    placeholder="Company Address"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="form_label">
                                Job Details
                            </label>
                        </div>
                        <div className="add_button_container form_rows">
                            <Button
                                buttonText="Add"
                            />
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default WorkExperience;