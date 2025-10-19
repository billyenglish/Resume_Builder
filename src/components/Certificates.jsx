import Nav from "./Nav";
import Footer from "./Footer"
import Button from "../subcomponents/Button";
import InputText from "../subcomponents/InputText";

const Certificate = () => {

    return (
        <>
            <Nav />
            <section className="section">
                <form className="form">
                    <div className="form_header">
                        <h2 className="form_title">
                            Certificates &amp; Awards
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
                    <div className="form_rows">
                        <select>
                            <option>Certificate</option>
                            <option>Award</option>
                        </select>

                        <label className="label_form">Certificate/Award
                            <InputText
                                width="30rem"
                                placeholder="Add Certificate Or Award"
                            />
                        </label>
                    </div>
                    
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Certificate;