
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {


  return (
    
      <UserContextProvider>
        <div>Hello World</div>
          <Login/>
          <Profile/>
      </UserContextProvider>
      
      // <div>HI</div>
  )
}

export default App
