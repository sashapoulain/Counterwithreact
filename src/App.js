import { Container } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clockImage from './images/clock3.jpg'
import Counter from './components/Counter';

const bgStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${clockImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh'
}

const App = () => {
  return (
    <div>
      <Container className='p-0' fluid style={bgStyle}>
        <Counter />
      </Container>
      
    </div>
  );
}

export default App;
