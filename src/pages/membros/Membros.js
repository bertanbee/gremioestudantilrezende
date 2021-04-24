//import components
import Header from '../../components/header/Header';
 
//import routing stuff
import { Link } from 'react-router-dom';

function Membros() {
  return (
    <div>
      <Header></Header>
      <Link to="/">Home</Link>
      <p>Membros</p>
    </div>
  );
}

export default Membros;
