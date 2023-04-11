import { useContext } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Details from './Components/Details/Details';
import Layout from './Components/Layout/Layout';
import DetailContext from './context/details-context';

function App() {
  const detailctx = useContext(DetailContext);
  return (
    <Layout>
      <div className='body'>
        <CardList />
        {detailctx.showDetail && <Details />}
      </div>
    </Layout>
  );
}

export default App;
