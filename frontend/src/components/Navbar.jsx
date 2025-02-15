import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar(){
    return (
        <nav className='bg-white p-4 shadow-md'>
            <div className='flex justify-between items-center'>
                <img className='h-12 w-auto hover:opacity-90' src={logo} alt='Anfitriões de Aluguel'/>
                <div className='space-x-8 font-medium'>                    
                    <Link to="/" className='text-gray-600 hover:text-gray-900 transition-colors'>Página Inicial</Link>
                    <Link to="/alocacoes" className='text-gray-600 hover:text-gray-900 transition-colors'>Alocações</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar