import Layout from './containers/Layout';
import {store} from './Store/store';
import {Provider} from 'react-redux';
import './static/css/styles.css';

function App() {
  return (
    <Provider store = {store}>
    <Layout>
    </Layout>
    </Provider>
  );
}

export default App;
