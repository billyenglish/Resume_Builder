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
                            <h2 className="form_title">
                                Certificates &amp; Awards
                            </h2>
                        </h2>

                        <div>
                            <Button
                                buttonText="Back"
                            />
                            <Button
                                buttonText="Next"
                            />
                        </div>
                    </div> 
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Certificate;