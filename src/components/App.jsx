import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import ProgressBar from "./ProgressBar.jsx";
import Input from "./UI/Input.jsx";

function App() {

  return (
      <div className='max-w-sm w-full px-5 py-6 bg-pattern bg-right-top bg-no-repeat'>
          <Nav/>
          <Header/>
          <ProgressBar/>
          <Input placeholder={'What do you want to create?'}/>
      </div>
  )
}

export default App
