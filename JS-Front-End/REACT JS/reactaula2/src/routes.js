import Menu  from 'components/menu'
import Footer from 'components/Footer'
import PaginaPadrao from 'components/PaginaPadrao'
import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Sobre from 'pages/Sobre'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFoud from 'pages/NotFound'


export default function AppRouter(){
    return(
        <main className='container'>
          <Router>
              <Menu/>
              <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
									<Route index element={<Inicio/>}/>
                 	<Route path='cardapio' element={<Cardapio/>}/>
                  <Route path='sobre' element={<Sobre/>}/>
								</Route>
                <Route path='*' element={<NotFoud/>} />
             </Routes>
             <Footer/>
          </Router>
        </main>
    )
}