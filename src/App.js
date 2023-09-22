import './App.css';
import Firstpage from "./pages/firstpage"
import Secondpage from "./pages/secondpage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Firstpage/>} />
          <Route exact path="/secondpage" element={<Secondpage/>} />
          {/* <Redirect to="/" /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
