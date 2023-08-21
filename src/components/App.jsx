import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import ProgressBar from "./ProgressBar.jsx";

function App() {

  return (
      <div className='max-w-sm w-full px-5 py-6 bg-pattern bg-right-top bg-no-repeat'>
          <Nav/>
          <Header/>
          <ProgressBar/>
      </div>
  )
}

export default App