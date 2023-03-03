import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import ProgressBar from "react-scroll-progress-bar";

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
        <div>
          <ProgressBar className='w-20'/>
        </div>
    </div>
  );
}

export default App;
