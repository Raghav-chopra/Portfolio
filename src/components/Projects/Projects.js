import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chess from "../../Assets/Projects/chess.jpg";
import employee from "../../Assets/Projects/Employee.jpg"
import gemini from "../../Assets/Projects/Gemini.jpg"
import suvidha from "../../Assets/Projects/Suvidha.jpg"
import password from "../../Assets/Projects/Password.jpg"
import shopper from "../../Assets/Projects/shopper.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Management System"
              description="I developed an efficient Employee Management System with separate admin and employee dashboards. Admins can assign tasks, track progress, and manage employees seamlessly. The system uses local storage for both task management and user authentication, ensuring smooth and responsive performance."
              ghLink="https://github.com/Raghav-chopra/Employee_Management_System"
              demoLink="https://employee-management-system-gold.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="My Gemini"
              description="I developed a real-time chatbot application using the Gemini API, allowing users to interact seamlessly. The app includes a sidebar to display recent prompts, enhancing usability. The intuitive UI ensures smooth navigation and efficient prompt management for an enhanced user experience."
              ghLink="https://github.com/Raghav-chopra/My_Gemini"
              demoLink="https://my-gemini-snowy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="PassOP - Your Password Manager"
              description="I developed a Password Manager using React and Tailwind CSS, featuring a responsive and intuitive interface. The app allows users to add, view, edit, and delete passwords, with all data securely stored in local storage. It offers smooth functionality and a clean design for efficient password management."
              ghLink="https://github.com/Raghav-chopra/PassOp"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="CheckMate-A Multiplayer Chess Game"
              description="I developed a real-time multiplayer chess game using Socket.IO to enable seamless live gameplay between users. The game logic and move validation were powered by Chess.js, ensuring accurate and rule-based interactions. EJS was used for server-side rendering, providing a dynamic and responsive user interface for an engaging experience."
              ghLink="https://github.com/Raghav-chopra/CheckMate-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopper}
              isBlog={false}
              title="Shopper"
              description="I developed a responsive e-commerce platform featuring a dynamic user interface using React.js,express.js and CSS. The application includes secure login/logout functionality, as well as key shopping features such as add-to-cart, remove-from-cart, and real-time cart updates. For backend data management, I used MongoDB to ensure scalability and efficient performance."
               ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suvidha}
              isBlog={false}
              title="Suvidha Foundation"
              description="As a Web Development Intern at Suvidha Foundation, I designed the homepage and all inner pages of their PhD assistance website using HTML, CSS, and JavaScript. I focused on creating a responsive, user-friendly design to enhance the overall user experience. My work was recognized with a Letter of Recommendation for outstanding performance."
              ghLink="https://github.com/SidM24/SuvidhaPHD"
              demoLink="https://sidm24.github.io/SuvidhaPHD/"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
