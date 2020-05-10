import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from '@/components/ErrorBoundary'
import BasisLayout from '@/layout/BasisLayout'
import App from './layout/App'

import * as serviceWorker from './serviceWorker'

import '@/styles/index.scss'

ReactDOM.render(
  <ErrorBoundary>
    <BasisLayout>
      <App />
    </BasisLayout>
  </ErrorBoundary>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
