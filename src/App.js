import './App.css';
import Nav from "./component/Navbar.jsx"
import RightSecone from "./component/Rightsec.jsx"
import Stepone from "./component/Stepone.jsx"
import Dream from "./component/DreamJob.jsx"
import Intrested from "./component/Intrested.jsx"
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
<>
<div className="container_div">
<Nav/>
<Switch>
  <Route exact path="/" component={Stepone} />
  <Route exact path="/career_path" component={RightSecone} />
  <Route exact path="/dream" component={Dream} />
  <Route exact path="/intrest" component={Intrested} />
</Switch>
</div>


</>
  );
}

export default App;
