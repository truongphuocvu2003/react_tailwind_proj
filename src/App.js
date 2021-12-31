import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import DefaultRouter from './Cores/Routes/DefaultRouter'
import store from './Cores/Stores/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <DefaultRouter></DefaultRouter>
      </Router>
    </Provider>
  )
}

export default App
