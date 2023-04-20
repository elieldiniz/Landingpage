import MainContents from './components/MainContent'
import Sidebar from './components/sidebar'
import './styles/components/app.sass'


function App() {
    return (
      <div id="portfolio">
        <h1>Eliel Diniz</h1>
        <Sidebar/>
        <MainContents/>
      </div>
    )
}
export default App