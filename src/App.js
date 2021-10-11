import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Routes } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Layout>
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
