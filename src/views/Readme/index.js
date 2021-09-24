import Markdown from "markdown-to-jsx";
import {Container} from "react-bootstrap";


const Readme = ({readme}) => {
  return (
    <div>
      <Container>
        <Markdown>
          {readme}
        </Markdown>
      </Container>
    </div>
  );
};

export default Readme;