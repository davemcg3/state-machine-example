import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./componentsLogical/Home";
import useStateMachine from "@cassiozen/usestatemachine";
import {useDispatch, useSelector} from "react-redux";
import {anonymous, engage, register, sign_up} from "./data/slices/userSlice";

function App() {

  const [userState, userSend] = useStateMachine({
    initial: 'anonymous',
    states: {
      anonymous: { // no user data
        on: { SIGNED_UP: 'signed_up' },
      },
      signed_up: { // email
        on: { REGISTERED: 'registered' },
        effect() {
          console.log('user signed up');
          // Same cleanup pattern as `useEffect`:
          // If you return a function, it will run when exiting the state.
        },
      },
      registered: { // email, password
        on: { ENGAGED: 'engaged' },
        effect() {
          console.log('user registered');
        },
      },
      engaged: { // email, password, profile filled out
        // on: { TRANSITIONED: '' },
        effect() {
          console.log('user engaged');
        },
      },
    },
  });

  function transitionState(user){
    if (user.email !== '') userSend('SIGNED_UP');
    if (user.password !== '') userSend('REGISTERED');
    if (user.displayName !== '') userSend('ENGAGED')
    console.log('user at end of transitionState', user)
  }

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  transitionState(user)
  let userDispatchFunctions = {
    'anonymous': anonymous,
    'signed_up': sign_up,
    'registered': register,
    'engaged': engage,
  }
  dispatch({ type: userState.value, payload: { user, email: user.email, password: user.password, displayName: user.displayName }})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
