import { Container, Row, Col } from 'react-bootstrap';
import Bg from './BgImg';

const Gallery = () => {
  const images = [
    "https://cdn.clipond.com/CareHaven/2149741230.jpg",
    "https://cdn.clipond.com/CareHaven/2149741246.jpg",
    "https://cdn.clipond.com/CareHaven/2149844700.jpg"
  ];

  return (
    <section id="gallery" className="section-padding mb-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-3 fw-bold mb-3">
              Our Care in Action
            </h2>
            <p className="lead">
              See how we bring compassion and professionalism to every interaction
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {images.map((image, index) => (
            <Col key={index} lg={4} md={6}>
              <div 
                className="rounded overflow-hidden shadow-sm" 
                style={{ 
                  ...Bg(image), 
                  height: "300px",
                  minHeight: "300px",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;

