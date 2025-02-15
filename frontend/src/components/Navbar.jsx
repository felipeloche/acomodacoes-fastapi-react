import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar(){
    return (
        <nav className='bg-white'>
            <div className='flex justify-between items-center'>
                <img className='h-12' src={logo} alt='Anfitriões de Aluguel'/>
                <div>                    
                    <Link to="/">Página Inicial</Link>
                    <Link to="/alocacoes">Alocações</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar