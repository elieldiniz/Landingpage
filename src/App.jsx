import MainContents from './components/MainContent'
import Sidebar from './components/sidebar'
import './styles/components/app.sass'


function App() {
    return (
      <div id="portfolio">
        <Sidebar/>
        <MainContents/>
      </div>
    )
}
export default App