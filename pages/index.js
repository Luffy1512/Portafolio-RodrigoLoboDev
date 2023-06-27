import Acercademi from "@/components/Acercademi"
import Contacto from "@/components/Contacto"
import LayoutPrincipal from "@/components/LayoutPrincipal"
import Proyectos from "@/components/Proyectos"
import Image from "next/image"

import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  
  return (
    <>
      <LayoutPrincipal
        title={`Inicio`}
        description={'Portafolio, frontend developer'}
      >
        <div className="mt-10 lg:flex">
          <div className="lg:w-2/3">
            <p
              className="text-gray-500 dark:text-gray-200 font-semibold"
            >Hola soy,</p>
            <h1
              className=" text-4xl lg:text-6xl lg:w-6/7 font-black text-gray-600 dark:text-gray-400 leading-tight"
            >Lobo, Jesús Luis Rodrigo</h1>
            <p 
              className=" text-xl lg:text-2xl font-bold text-gray-500 dark:text-gray-300 mt-5"
            >Soy: <span className="font-black text-gray-700 dark:text-gray-200 text-2xl lg:text-4xl">
                <Typewriter 
                  words={['Profesor en Computación', '&', 'Frontend Developer']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={80}
                />
              </span>
            </p>
            <p className="mt-5 text-gray-400 dark:text-gray-200 text-sm lg:text-lg">Soy un apasionado de la tecnología, inicie aprendiendo habilidades en programación de los cursos de la Plataforma Udemy.</p>
          </div>
          <div className="flex lg:w-2/3 justify-center items-center mt-5 lg:mt-0">
            <div className=" rounded-full h-80 w-80 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500">
              <Image 
                width={950}
                height={950}
                src={'/img/avatar.jpg'}
                alt="Imagen avatar"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <Acercademi />
        <Proyectos />
        <Contacto />
      </LayoutPrincipal>
    </>
  )
}
