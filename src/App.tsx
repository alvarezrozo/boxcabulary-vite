import 'normalize.css'
import './styles/index.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from './components/pages/Profile';
import { ROUTES } from './utils/constants';
import Layout from './components/organisms/Layout/Layout';
import { Provider } from 'react-redux'
import { store } from './state/store';
import Translating from './components/templates/Translating/Translating';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.profile} element={<Profile />} />
            <Route path={ROUTES.translating} element={<Translating />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App