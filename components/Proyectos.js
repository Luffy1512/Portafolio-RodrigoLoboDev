import useDev from '@/hook/useDev'
import Image from 'next/image'

export default function Proyectos() {

  const {proyectos} = useDev()

  // console.log(proyectos);
  
  return (
    <div id='proyecto' className='mt-20'>
        <div className='space-y-1'>
          <h2 className='font-black text-xl lg:text-2xl text-gray-600 dark:text-gray-300'>Mis Proyectos</h2>
          <p className=' text-gray-400 dark:text-gray-200 italic'>Algunos de mis proyectos</p>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1 '></div>
              <div className=' bg-orange-600 pt-1 lg:w-1/6 w-2/6 rounded-lg '></div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
          {proyectos ? proyectos.map(proyecto => (
            <div key={proyecto.id} className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/70 transition-shadow">
              <div className='h-50 w-70'>
                <Image 
                  width={900}
                  height={960}
                  src={proyecto.src}
                  alt='Imagen clima app'
                  className='w-full h-full rounded-lg shadow-xl object-cover group-hover:scale-125 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                <h3 className='text-lg lg:text-3xl font-bold text-white'>{proyecto.nombre}</h3>
                <p className=' text-xs lg:text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{proyecto.descripcion}</p>
                <a href={`${proyecto.url}`} target='_blank' className='rounded-full shadow-sm shadow-black/60 bg-neutral-900 py-2 px-3.5 text-xs lg:text-sm capitalize text-white'>Ir al Proyecto</a>
              </div>
            </div>
          )) : (
            <p>Aun no Tienes Proyectos Agregados</p>
          )}
        </div>
    </div>
  )
}
