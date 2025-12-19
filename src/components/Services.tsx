import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      icon: "bi-house-heart",
      title: "Home-Based Nurse Aide Services",
      description: "Professional care in the comfort of your own home, tailored to your individual needs and preferences."
    },
    {
      icon: "bi-people", 
      title: "Elderly and Dementia Care",
      description: "Specialized support for elderly individuals and those living with dementia, with trained and compassionate caregivers."
    },
    {
      icon: "bi-hospital",
      title: "Post-Hospital Recovery Support",
      description: "Comprehensive assistance during recovery from surgery or hospitalization, ensuring a smooth transition back home."
    },
    {
      icon: "bi-heart-pulse",
      title: "Palliative and Hospice Care Assistance",
      description: "Compassionate end-of-life care support, providing comfort, dignity, and peace for patients and families."
    },
    {
      icon: "bi-person-heart",
      title: "Companionship and Daily Living Assistance",
      description: "Friendly companionship and help with daily activities to maintain independence and quality of life."
    }
  ];

  return (
    <section id="services" className="section-padding mb-5">
      <Container>
        <Row className="">
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-3 fw-bold">
              What We Offer
            </h2>
            <p className="lead">
              All our caregivers are trained, vetted and dedicated to providing care that feels like home — because healing happens where you feel safest.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 d-flex justify-content-center">
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="border-0 h-100 text-center shadow-sm" style={{borderRadius: '15px'}}>
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className={`bi ${service.icon}`} style={{fontSize: '3rem', color: 'var(--care-blue)'}}></i>
                  </div>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="text-muted" style={{lineHeight: '1.7'}}>
                    {service.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
