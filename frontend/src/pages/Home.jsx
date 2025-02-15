import React from "react"
import logo from '../assets/Logo-Vertical.png'

function Home(){
    return(
        <div className="h-screen flex flex-col justify-between">
            <main className="p-8">
                <section className="max-w-2xl mx-auto mt-4">
                    <h1 className="text-2x1 font-bold text-gray-900 mb-4">Quem somos</h1>
                    <div className="space-y-4 text-gray-600">
                        <p>Os Anfitriões de Aluguel são uma rede colaborativa de anfitriões profissionais dedicados a proporcionar segurança, tranquilidade e rendimentos espetaculares para proprietários de imóveis que querem oferecer suas casas e apartamentos em plataformas digitais como AirBnB e Booking.</p>
                        <p>Se você busca um local para se hospedar, aqui é também o seu lugar. Criamos experiências inesquecíveis, oferecendo praticidade, conforto e segurança, em ambientes limpos, funcionais e agradáveis.</p>
                        <p>Já são mais de 5200 reservas atendidas desde agosto de 2018 em mais de 260 propriedades em múltiplas regiões.</p>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white py-4">
                <div className="container mx-auto flex justify-center items-center gap-8">
                    <div>
                        <img src={logo} alt="Anfitriões de Aluguel" className="h-25"/>
                    </div>
                    <div className="text-center">
                        <p className="mb-1">contato@anfitrioesdealuguel.com.br</p>
                        <p>© 2025 Anfitriões de Aluguel. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home