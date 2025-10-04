import Nav from "../components/Nav"
import InputText from "../subcomponents/InputText";
import TextArea from "../subcomponents/Textarea";
import Button from "../subcomponents/Button";
import Footer from "../components/Footer";
import "../styles/personal_details.css";

const PersonalDetails = () => {

    return (
        <>
            <Nav />
            <section className="personal_details section">
                <form className="form">
                    <div className="form_container">
                        <div className="form_header">
                            <h2 className="form_title">
                                Personal Information
                            </h2>

                            <div>
                                <Button
                                    buttonText="Next"
                                />
                            </div>
                        </div>
                        <div className="form_rows">
                            <label
                                htmlFor="first_name"
                                className="form_label"
                            >
                                First Name:
                                <InputText
                                    placeholder="First Name"
                                    id="first_name"
                                />
                            </label>
                            <label
                                htmlFor="last_name"
                                className="form_label" 
                            >
                                Last Name:
                                <InputText
                                    placeholder="Last Name"
                                    id="last_name"
                                />
                            </label>
                        </div>
                        <div className="form_rows">
                            <label
                                htmlFor="email"
                                className="form_label"
                            >
                                Email:
                                <InputText
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </label>
                            <label
                                htmlFor="phone"
                                className="form_label"
                            >
                                Phone:
                                <InputText
                                    id="phone"
                                    placeholder="Phone"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="address"
                                className="form_label"
                            >
                                Address:
                                <InputText
                                    type="text"
                                    id="address"
                                    placeholder="Address"
                                    width="46rem"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="summary"
                                className="form_label"
                            >
                                Summary
                                <TextArea
                                    id="summary"
                                    placeholder="Summary"
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

export default PersonalDetails;