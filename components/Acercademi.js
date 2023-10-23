import useDev from '@/hook/useDev'
import Image from 'next/image'


export default function Acercademi() {

  const { frontend, backend, otrasTecnologias, handleChangeModal, t } = useDev()

  return (
    <>
      <div id='acercademi' className='mt-20 space-y-1'>
          <h2 className='font-black text-xl lg:text-2xl text-gray-600 dark:text-gray-300'>{t("acercademi.h2")}</h2>
          <p className=' text-gray-400 dark:text-gray-200 italic'>{t("acercademi.p1")}</p>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1'></div>
              <div className=' bg-orange-600 pt-1 lg:w-1/6 w-2/6 rounded-lg '></div>
          </div>
      </div>
      <div className='bg-[rgba(242,240,238,var(--text-opacity))] lg:w-[50rem] mx-auto mt-10 p-7 rounded-lg shadow-lg'>

        <div className='grid lg:grid-cols-2 gap-5 items-center'>
          <Image 
            width={950}
            height={950}
            src={'/img/avatar.jpg'}
            alt='Imagen Developer'
            className='mx-auto object-cover w-[12rem] h-[12rem] rounded-2xl lg:w-[15rem] lg:h-[15rem] shadow-2xl hover:scale-110 transition-transform'
          />
          <div>
            <p className=' resumen italic text-base lg:text-lg text-gray-800 '> <span className='font-bold'>"{t("acercademi.span")}"</span>{t("acercademi.p2")}</p>
            <button
              className='mt-2 font-bold text-cyan-700'
              type='button'
              onClick={() => handleChangeModal()}
            >{t("acercademi.button")}</button>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className=' text-xl lg:text-2xl text-slate-700 font-bold my-2'>{t("acercademi.h3")}</h3>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1 '></div>
              <div className=' bg-orange-600 pt-1 w-2/6 lg:w-1/6 rounded-lg '></div>
          </div>
          
          <div className='mt-4 bg-white shadow-lg p-5 rounded-md'>
            <p className='text-slate-600 italic text-sm lg:text-base'>{t("acercademi.p3")}</p>
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
            <p className='text-slate-600 italic text-sm lg:text-base'>{t("acercademi.p4")}</p>
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
            <p className='text-slate-600 italic text-sm lg:text-base'>{t("acercademi.p5")}</p>
            <div className='md:flex md:justify-around py-4 md:items-center grid grid-cols-4 gap-3 '>
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
