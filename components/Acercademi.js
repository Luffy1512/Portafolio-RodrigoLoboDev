import useDev from '@/hook/useDev'
import Image from 'next/image'


export default function Acercademi() {

  const { frontend, backend, otrasTecnologias, handleChangeModal } = useDev()

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
          <div>
            <p className=' resumen italic text-base lg:text-lg text-gray-800 '> <span className='font-bold'>"¡Impulsa tu éxito en el mundo digital con un desarrollador frontend excepcional!"</span> Soy un apasionado desarrollador frontend con más de 2 años de experiencia, creando aplicaciones web de manera independiente. He perfeccionado mis habilidades de programación a través de cursos en línea de plataformas de renombre como Udemy, lo que me ha permitido alcanzar un nivel avanzado en el arte del desarrollo web. Pero eso no es todo. También tengo el privilegio de ser profesor universitario en el campo de la computación, dentro de una prestigiosa Tecnicatura Superior en Desarrollo de Software. Compartir mi conocimiento y experiencia con futuros talentos es una de las cosas que más me apasiona. Cuando no estoy inmerso en líneas de código o en el aula, disfruto de un estilo de vida equilibrado. Me encanta mantenerme en forma en el gimnasio, compartir momentos inolvidables jugando al fútbol con mi hijo, explorar nuevas series y descubrir lugares fascinantes. Si estás buscando un desarrollador frontend creativo, comprometido y con habilidades de enseñanza, estás en el lugar correcto. ¡Juntos podemos llevar tu visión digital al siguiente nivel! No dudes en contactarme para comenzar a hacer realidad tus proyectos web más ambiciosos.
            </p>
            <button
              className='mt-2 font-bold text-cyan-700'
              type='button'
              onClick={() => handleChangeModal()}
            >Leer Más</button>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className=' text-xl lg:text-2xl text-slate-700 font-bold my-2'>Tecnologías Que Uso</h3>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1 '></div>
              <div className=' bg-orange-600 pt-1 w-2/6 lg:w-1/6 rounded-lg '></div>
          </div>
          
          <div className='mt-4 bg-white shadow-lg p-5 rounded-md'>
            <p className='text-slate-600 italic text-sm lg:text-base'>Estas son las Tecnologías que utilizo para crear aplicaciones del lado del Cliente:</p>
            <div className='md:flex md:justify-around py-4 md:items-center grid grid-cols-4 gap-3'>
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
            <div className='md:flex md:justify-around py-4 md:items-center grid grid-cols-4 gap-3'>
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
            <div className='md:flex md:justify-around py-4 md:items-center grid grid-cols-4 gap-3'>
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
