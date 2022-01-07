import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App (){
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
 
  const [progress, setProgress] = useState(0);

  return(
    <div>
      <Router>
          <Navbar />
          <LoadingBar color='#0000FF' height={4} progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general"/>} />

          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category="business"/>} />

          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category="entertainment"/>} />

          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category="health"/>} />

          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category="science"/>} />

          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category="sports"/>} /> 

          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category="technology"/>} />

          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general"/>} />

        </Routes>
      </Router>
    </div>
    
  )

}


// export default class App extends Component {
  
//   pageSize = 6;
//   apiKey = process.env.REACT_APP_NEWS_API

//   state = {
//     progress: 0
//   }

//   setProgress = (progress) =>{
//     setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar color='#0000FF' height={4} progress={progress} />
//         <Routes>
//           <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general"/>} />

//           <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category="business"/>} />

//           <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category="entertainment"/>} />

//           <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category="health"/>} />

//           <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category="science"/>} />

//           <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category="sports"/>} /> 

//           <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category="technology"/>} />

//           <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general"/>} />

//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }




export default App;

