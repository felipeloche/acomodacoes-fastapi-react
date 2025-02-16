//Barra de navegação superior do site
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar(){
    return (
        //Container principal
        <nav className='bg-white p-4 shadow-md'>
            {/* Alinha logo e links */}
            <div className='flex justify-between items-center'>
                {/* Logo Anfitriões */}
                <img className='h-12 w-auto hover:opacity-90' src={logo} alt='Anfitriões de Aluguel'/>
                {/* Container dos links de navegação */}
                <div className='space-x-8 font-medium'>                    
                    <Link to="/" className='text-gray-600 hover:text-gray-900 transition-colors'>Página Inicial</Link>
                    <Link to="/alocacoes" className='text-gray-600 hover:text-gray-900 transition-colors'>Alocações</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar