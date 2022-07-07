import Cardapio from 'pages/Cardapio'
import Inicio from 'pages/Inicio'
import Menu  from 'components/menu'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function AppRouter(){
    return(
        <Router>
            <Menu/>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/cardapio' element={<Cardapio/>}/>
            </Routes>
        </Router>
    )
}