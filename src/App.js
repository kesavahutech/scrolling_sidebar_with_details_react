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
        <div className='detail-div'>
        {detailctx.showDetail && <Details />}
        </div>
      </div>
    </Layout>
  );
}

export default App;
