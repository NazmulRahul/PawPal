import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/Config.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </Router>
  </Provider>
)
