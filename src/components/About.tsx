import Bg from "./BgImg";

const About = () => {
    return (
        <section id="about" className="mb-5 text-center container">
            <div className=''>
                <h1 className="fw-bold display-2 mb-4">
                  About Us
                </h1>
                <p className="lead mb-5">Care Haven — Where Compassion Lives</p>
                
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="rounded overflow-hidden" style={{ ...Bg("https://cdn.clipond.com/CareHaven/2149117843.jpg"), height: "400px", minHeight: "400px" }}>
                        </div>
                    </div>
                    <div className="col-md-6 text-start d-flex align-items-center">
                        <div>
                            <h3 className="mb-4">Who We Are</h3>
                            <p className="mb-3">At Care Haven, we believe that every person deserves to be cared for with dignity, respect and genuine compassion. Founded with the vision to transform the caregiving landscape in Zimbabwe, we provide professional nurse aide services to individuals in the comfort of their homes, in hospitals, retirement communities or wherever care is needed.</p>
                            <p className="mb-3">Whether recovering from surgery, managing chronic illness or simply needing everyday assistance, our clients rely on us for trusted, person-centred support that brings peace of mind to families and restores independence to those we serve.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row g-3 mb-5">
                    <div className="col-lg-4 p_bg rounded p-5 text-white text-start">
                        <h3 className="mb-4">
                          <i className="bi bi-bullseye me-2"></i>Our Mission
                        </h3>
                        <p className="mb-0">To enhance the quality of life for our clients by delivering respectful, person-centered nurse aide services with empathy, reliability and excellence.</p>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="rounded overflow-hidden h-100" style={{ ...Bg("https://cdn.clipond.com/CareHaven/2149741230.jpg"), height: "100%", minHeight: "300px" }}>
                        </div>
                    </div>
                    <div className="col-lg-4 s_bg rounded p-5 text-white text-start">
                        <h3 className="mb-4">
                          <i className="bi bi-star-fill me-2"></i>Our Vision
                        </h3>
                        <p className="mb-0">To be Zimbabwe's most trusted provider of compassionate, professional and dignified nurse aide services — where every individual feels safe, valued and cared for.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
