import 'normalize.css'
import './styles/index.scss'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from './components/pages/Profile';
import { ROUTES } from './utils/constants';
import Layout from './components/organisms/Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.profile} element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App