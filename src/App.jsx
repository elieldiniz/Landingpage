
import Sidebar from './components/apresentacao/Sidebar'
import Tecnologia from './components/tecnologias/TechnologiesConteiner'



function App() {
    return (
      <div id="flex flex-wrap gap-2 bg-black m-0 h-screen sm:h-auto overflow-x-hidden">
        <Sidebar/>
        <Tecnologia/>
      </div>
    )
}
export default App