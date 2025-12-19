import Bg from "./BgImg";

const Hero = () => (
  <section id="hero" className="hero-gradient text-white container p-0  mb-5 rounded text-center d-flex justify-content-center align-items-center " style={{...Bg("https://cdn.clipond.com/CareHaven/122849.jpg"), height:"80vh"}}>
    <div className="opacity-bg h-100  d-flex justify-content-center align-items-center p-0 m-0  rounded">
        <div className="p-5">

        <h1 className="display-1 fw-bold text-white">Care Haven</h1>
        <h3 className="text-white">Where Compassion Lives</h3>
 <p className="fs-5">Professional nurse aide services to individuals in the comfort of their homes, in hospitals, retirement communities or wherever care is needed.</p>
 <a href="#contact"><button className="rounded p-btn btn ">Get In Touch</button></a>
         </div>

    </div>
  </section>
);

export default Hero;