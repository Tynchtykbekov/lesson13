import Counter from './components/Counter';
  
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux';
function App() {
  const {isAuth} = useSelector(state => state.auth)
  return ( 

<div className='App'>

<Header />
 {!isAuth && 
  <Auth/>     
 
 }
 
 
 <Counter />
 
</div>
  );
}

export default App;
