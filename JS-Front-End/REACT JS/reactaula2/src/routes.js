import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu  from 'components/menu'
import Footer from 'components/Footer'
import PaginaPadrao from 'components/PaginaPadrao'
import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Sobre from 'pages/Sobre'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'


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
                <Route path='*' element={<NotFound />} />
                <Route path='prato/:id' element={<Prato/>}/>
             </Routes>
             <Footer/>
          </Router>
        </main>
    )
}