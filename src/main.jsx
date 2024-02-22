import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './app/store.js'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Todo lo que este en App va a tener acceso al store */}
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>,
)
