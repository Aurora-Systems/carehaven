import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const Values = () => {
  const values = [
    {
      value: "Compassion",
      meaning: "We lead with heart and kindness in every interaction."
    },
    {
      value: "Dignity",
      meaning: "We honour the humanity in everyone we serve."
    },
    {
      value: "Professionalism",
      meaning: "We maintain the highest ethical and clinical standards."
    },
    {
      value: "Integrity",
      meaning: "We are transparent, honest, and dependable."
    },
    {
      value: "Excellence",
      meaning: "We continuously train and improve to serve you better."
    },
    {
      value: "Trust",
      meaning: "Your well-being is our highest commitment."
    },
    {
      value: "Community",
      meaning: "We empower families, support caregivers, and uplift lives."
    }
  ];

  return (
    <section id="values" className="section-padding container mb-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-3 fw-bold">
             Our Core Values
            </h2>
            <p className="lead">
              The principles that guide everything we do
            </p>
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col lg={10} className="mx-auto">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-0">
                <Table responsive className="mb-0">
                  <thead className="p_bg text-white">
                    <tr>
                      <th className="p-4" style={{width: '30%'}}>Value</th>
                      <th className="p-4">What it Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-light' : ''}>
                        <td className="p-4 fw-bold">{item.value}</td>
                        <td className="p-4">{item.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center mt-4">
          <Col lg={10} className="mx-auto">
            <Card className="border-0 s_bg text-white">
              <Card.Body className="p-5">
                <h3 className="mb-4">
                  <i className="bi bi-lightbulb-fill me-2"></i>Why Choose Care Haven?
                </h3>
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>Compassionate, professionally trained caregivers
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>Custom care plans tailored to individual needs
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>Available 24/7 with flexible support packages
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>Strong emphasis on safety, confidentiality, and respect
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>Transparent pricing with no hidden fees
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Values;
