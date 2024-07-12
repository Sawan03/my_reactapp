
import './App.css';
import Header from './../src/components/Header/head'
import Main from './components/Main/mainn'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Clients from './components/client/ClientsSection';
import Learn from './components/Learn/LearnMoreSection'
import ReinventSection from './components/ReinventSection/ReinventSection'
import Nextcomp from './components/nextcomp/nextcomp'
import Customer from './components/CustomerMeetSection/CustomerMeetSection'
import Customer2 from './components/CustomerOverviewSection/CustomerOverviewSection'
import Foot from './components/Footer/Footer'
function App() {
  return (
       <div className='App'>
        <Header/>
        <Main/>
        <Clients/>
        <Learn/>
        <ReinventSection/>
        <Nextcomp/>
        <Customer/>
        <Customer2/>
        <Foot/>
       </div>

  
    
  );
}

export default App;
