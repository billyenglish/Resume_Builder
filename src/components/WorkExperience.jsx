import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button";

const WorkExperience = () => {

    return (
        <>
            <Nav />
            <section className="section">
                <form>
                    <h2 className="form_title">
                        Work Experience
                    </h2>

                    <div className="form_control_panel">
                        <Button
                            buttonText="Back"
                        />
                        <Button
                            buttonText="Next"
                        />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default WorkExperience;