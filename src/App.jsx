import MainContents from './components/MainContent'
import Sidebar from './components/Sidebar'



function App() {
    return (
      <div id="flex flex-wrap gap-2 bg-black m-0 h-screen sm:h-auto overflow-x-hidden">
        <Sidebar/>
        <MainContents/>
      </div>
    )
}
export default App