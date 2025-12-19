import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" p_bg  container  rounded  text-white ">
      <div className='p_bg  rounded p-5'>

        <Row className="g-4">
          <Col lg={4} md={6}>
            <img 
              src="https://cdn.clipond.com/CareHaven/logo.png" 
              alt="Care Haven Logo" 
              className="mb-3 rounded"
              style={{ 
                height: '60px', 
                width: 'auto',
                backgroundColor: 'white',
                padding: '10px',
                objectFit: 'contain'
              }}
            />
            <h5 className="text-secondary-custom mb-4">Care Haven</h5>
            <p className="text-light opacity-75 mb-4">
              Where Compassion Lives. Professional nurse aide services in Zimbabwe, 
              providing compassionate, person-centered care in the comfort of your home.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/CareHavenZim" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/CareHavenZim" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6}>
            <h6 className="text-secondary-custom mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-light opacity-75 text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light opacity-75 text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="#values" className="text-light opacity-75 text-decoration-none">Our Values</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light opacity-75 text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="text-secondary-custom mb-4">Our Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2 text-light opacity-75">Home-Based Nurse Aide Services</li>
              <li className="mb-2 text-light opacity-75">Elderly and Dementia Care</li>
              <li className="mb-2 text-light opacity-75">Post-Hospital Recovery Support</li>
              <li className="mb-2 text-light opacity-75">Palliative and Hospice Care</li>
              <li className="mb-2 text-light opacity-75">Companionship Services</li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="text-secondary-custom mb-4">Contact Info</h6>
            <div className="text-light opacity-75">
              <p className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@carehaven.co.zw
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +263 78 726 0030
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Mobile
              </p>
              <p className="mb-0">Available 24/7</p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-5 opacity-25" />
        
        <Row>
          <Col md={6}>
            <p className="text-light opacity-75 mb-0">
              © 2024 Care Haven. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-light opacity-75 mb-0">
              Professional Nurse Aide Services | Zimbabwe
            </p>
          </Col>
        </Row>
              </div>

    </footer>
  );
};

export default Footer;
