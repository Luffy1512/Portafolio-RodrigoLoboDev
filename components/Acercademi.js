import useDev from '@/hook/useDev'
import Image from 'next/image'


export default function Acercademi() {

  const { frontend, backend, otrasTecnologias } = useDev()

  return (
    <>
      <div id='acercademi' className='mt-20 space-y-1'>
          <h2 className='font-black text-xl lg:text-2xl text-gray-600 dark:text-gray-300'>Acerca de Mi</h2>
          <p className=' text-gray-400 dark:text-gray-200 italic'>Lee acerca de mi</p>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1'></div>
              <div className=' bg-orange-600 pt-1 lg:w-1/6 w-2/6 rounded-lg '></div>
          </div>
      </div>
      <div className='bg-[rgba(242,240,238,var(--text-opacity))] lg:w-[50rem] mx-auto mt-10 p-7 rounded-lg shadow-lg'>

        <div className='grid lg:grid-cols-2 gap-5 items-center'>
          <Image 
            width={950}
            height={920}
            src={'/img/foto perfil.png'}
            alt='Imagen Developer'
            className='mx-auto w-full h-full object-cover'
          />
          <p className=' italic text-base lg:text-lg text-gray-800 '>Soy Desarrollador Frontend, con más de 2 años desarrollando aplicaciones web de manera independiente. He adquirido habilidades de programación de alto nivel de cursos en línea de plataformas de renombre como ser Udemy. Aparte de ser Desarrollador Web, tambien soy Profesor Universitario en Computación en una Tecnicatura Superior en Desarrollo de Software. Cuando no estoy programando o en la institución educativa donde enseño, me gusta ir al gimnasio, jugar con mi hijo al futbool, ver series, salir a conocer lugares de interes. Actualmente solo me desempeño como Profesor en el Instituto de Enseñanza Superior La Cocha - Tucumán - Argentina.
          </p>
        </div>

        <div className='mt-5'>
          <h3 className=' text-xl lg:text-2xl text-slate-700 font-bold my-2'>Tecnologías Que Uso</h3>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1 '></div>
              <div className=' bg-orange-600 pt-1 w-2/6 lg:w-1/6 rounded-lg '></div>
          </div>
          
          <div className='mt-4 bg-white shadow-lg p-5 rounded-md'>
            <p className='text-slate-600 italic text-sm lg:text-base'>Estas son las Tecnologías que utilizo para crear aplicaciones del lado del Cliente:</p>
            <div className='flex justify-around py-4 items-center'>
              {frontend.map(front => (
                <div key={front.id}>
                  <a 
                    href={`${front.url}`} 
                    target='_blank'
                  >
                    <Image 
                      width={60}
                      height={60}
                      src={`${front.src}`}
                      alt={`Imagen ${front.nombre}`}
                      className='grayscale hover:grayscale-0 hover:scale-125 transition-all w-10 lg:w-16'
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-4 bg-white shadow-lg p-5 rounded-md'>
            <p className='text-slate-600 italic text-sm lg:text-base'>Estas son las Tecnologías que utilizo para crear aplicaciones BackEnd:</p>
            <div className='flex justify-around py-4 items-center'>
              {backend.map(back => (
                <div key={back.id}>
                  <a 
                    href={`${back.url}`} 
                    target='_blank'
                  >
                    <Image 
                      width={60}
                      height={60}
                      src={`${back.src}`}
                      alt={`Imagen ${back.nombre}`}
                      className='grayscale hover:grayscale-0 hover:scale-125 transition-all w-6 lg:w-14'
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-4 bg-white shadow-lg p-5 rounded-md'>
            <p className='text-slate-600 italic text-sm lg:text-base'>Otras Tecnologías y más...</p>
            <div className='flex justify-around py-4 items-center'>
              {otrasTecnologias.map(tecnologia => (
                <div key={tecnologia.id}>
                  <a 
                    href={`${tecnologia.url}`} 
                    target='_blank'
                  >
                    <Image 
                      width={60}
                      height={60}
                      src={`${tecnologia.src}`}
                      alt={`Imagen ${tecnologia.nombre}`}
                      className='grayscale hover:grayscale-0 hover:scale-125 transition-all w-9 lg:w-14'
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
