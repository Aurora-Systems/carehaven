import  { useState, type FormEvent, useRef } from 'react';
import { Container, Row, Col, Card, Form,  Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [loading,set_loading] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form: any = useRef(null)
    const send_application = (e: FormEvent) => {
        e.preventDefault()
        set_loading(true)
        emailjs.sendForm("service_8t04iz4", "template_lgra1yy", form.current, {
            publicKey: "3q9n8gJSV6Zf0bl9J"
        }).then(() => {
            alert("We received your enquiry, expect a call or an email soon!")
            form.current.reset()
        }).catch(() => {
            alert("Message not sent, please try again or send us a message on our email info@carehaven.co.zw!")
        }).finally(()=>{
            set_loading(false)
        })
    }

  return (
    <section id="contact" className="section-padding p_bg container rounded  p-3 text-white mb-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-3 fw-bold">
              Get in Touch
            </h2>
            <p>
              We're here to help. Whether you need short-term support or long-term care solutions, Care Haven is just a phone call away.
            </p>
          </Col>
        </Row>
        
        <Row className="g-5">
          <Col lg={6}>
            <div className="pe-lg-4">
              <h3 className="h2 text-secondary-custom mb-4">Contact Care Haven</h3>
              <p className="mb-5 opacity-90" style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
                Whether you need short-term support or long-term care solutions, our team is ready to discuss how we can help you or your loved one.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill me-3 fs-4"></i>
                  <div>
                    <h6 className="mb-1 text-secondary-custom">Email</h6>
                    <a 
                      href="mailto:info@carehaven.co.zw" 
                      className="text-white text-decoration-none fs-5"
                    >
                      info@carehaven.co.zw
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill me-3 fs-4"></i>
                  <div>
                    <h6 className="mb-1 text-secondary-custom">Phone</h6>
                    <a 
                      href="tel:+263787260030" 
                      className="text-white text-decoration-none fs-5"
                    >
                      +263 78 726 0030
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill me-3 fs-4"></i>
                  <div>
                    <h6 className="mb-1 text-secondary-custom">Location</h6>
                    <p className="text-white mb-0 fs-5">Mobile</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-share-fill me-3 fs-4"></i>
                  <div>
                    <h6 className="mb-1 text-secondary-custom">Social Media</h6>
                    <div className="d-flex gap-3 mt-2">
                      <a href="https://www.facebook.com/CareHavenZim" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/CareHavenZim" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <h4 className="text-primary-custom mb-4">Send Us a Message</h4>
                
                {showAlert && (
                  <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
                    Thank you! Your message has been sent successfully.
                  </Alert>
                )}
                
                <Form onSubmit={send_application} ref={form}>
              
                   <Row>
                    <Col className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-primary-custom fw-semibold">
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="full_name"
                        
                          placeholder="Enter your full name"
                          required
                          className="rounded-custom"
                        />
                      </Form.Group>
                    </Col>
                    </Row>
                   <Row>
                    <Col className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-primary-custom fw-semibold">
                          Email *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Enter your full name"
                          required
                          className="rounded-custom"
                        />
                      </Form.Group>
                    </Col>
                    </Row>
                   <Row>
                    <Col className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-primary-custom fw-semibold">
                          Contact Number *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="contact_number"
                          placeholder="Enter your full name"
                          required
                          className="rounded-custom"
                        />
                      </Form.Group>
                    </Col>
                    </Row>
                  <Form.Group className="mb-4">
                    <Form.Label className="text-primary-custom fw-semibold">
                      Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                    
                      placeholder="Tell us about your care needs..."
                      required
                      className="rounded-custom"
                    />
                  </Form.Group>
                  
                  <button
                    type="submit" 
                    className="w-100 btn p-btn "
                  >
                    {loading?"Sending...":"Send Message"}
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
