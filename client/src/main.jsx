import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/Config.js'
import SmoothScroll from './Components/Utils/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Router>
        <SmoothScroll>
          <Routes>
            <Route path='/*' element={<App/>}/>
          </Routes>
        </SmoothScroll>
      </Router>
  </Provider>
)
