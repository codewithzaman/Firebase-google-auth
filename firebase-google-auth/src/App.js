import './App.css';
import { signInWithGoogle } from './firebaseConfig';
function App() {
  return (
    <div className="App">
    <button onClick={signInWithGoogle} >Sign in With Google</button>
    <h1>{localStorage.getItem('name')}</h1>
    <h1>{localStorage.getItem('email')}</h1>
    <img src={localStorage.getItem('profilePic')} alt="" />
    </div>
  );
}

export default App;
