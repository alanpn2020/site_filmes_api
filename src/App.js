import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/react-toastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={300}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
