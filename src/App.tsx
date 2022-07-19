// import Card, {CardVariant} from './components/Card'
// import EventsExample from './components/EventsExample'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Menu from './components/Menu'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <AppRouter />
        {/* <Card
          width={'200px'}
          height={'200px'}
          variant={CardVariant.primary}
          onClick={num => console.log('first', num)}
        >
          <button>Good</button>
        </Card>
  
        <EventsExample /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
