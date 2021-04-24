//import components
import Header from '../../components/header/Header';

//import routing stuff
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header mensagem="Seja bem-vindo!"></Header>
      <Link to="/membros">Membros</Link>
      <p>Home</p>
    </div>
  );
}

export default Home;
