import useDev from "@/hook/useDev"
import { useState } from "react"
import axios from "axios"

export default function Contacto() {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [alerta, setAlerta] = useState({
    mensaje: '',
    color: ''
  })

  const { handleDatos, datos, t } = useDev()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log('enviando...');

    const datosFormulario = {
      nombre,
      email,
      mensaje
    }

    if (Object.values(datosFormulario).includes('')) {
      setAlerta({
        mensaje: 'error, campos obligatorios', 
        color: 'red'
      });
      // console.log(alerta);
      return
    }
    setAlerta({
      mensaje: 'Enviando mensaje... espere unos segundo', 
      color: 'green'
    })

    handleDatos(datosFormulario)

    try {
      const data = await axios.post('/api/send-email', datosFormulario)
      // console.log(data);

    } catch (error) {
        console.log(error);
    }

    // Resetear Formulario
    setTimeout(() => {
      setAlerta({
        mensaje: '',
        color: ''
      })
      setNombre('')
      setEmail('')
      setMensaje('')
    }, 3000);
  }

  return (
    <div id='contacto' className=' mt-5 lg:mt-16'>
        <div className="space-y-1">
          <h2 className='font-black text-xl lg:text-2xl text-gray-600 dark:text-gray-300'>{t("contacto.h2")}</h2>
          <p className=' text-gray-400 dark:text-gray-200'>{t("contacto.p1")}</p>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1 '></div>
              <div className=' bg-orange-600 pt-1 lg:w-1/6 w-2/6 rounded-lg '></div>
          </div>
        </div>

        <form
          className="mt-5"
          onSubmit={handleSubmit}
        >
          <fieldset className=' border-solid border-2 border-slate-700 p-3 dark:border-slate-200'>
            <legend className=' italic px-1 dark:text-gray-100'>{t("contacto.legend")}</legend>
              <div className=' max-w-[90%] lg:w-96 mx-auto'>
                <div className='flex flex-col mb-3'>
                  <label htmlFor='nombre' className=' uppercase font-bold text-gray-600 dark:text-gray-200 mb-1'>{t("contacto.label1")}</label>
                  <input id='nombre' type='text' placeholder={t("contacto.placeholder1")} className=' text-gray-500 dark:text-gray-700 px-2 border py-1 rounded-sm' name="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-3'>
                  <label htmlFor='email' className=' uppercase font-bold text-gray-600 dark:text-gray-200 mb-1'>{t("contacto.label2")}</label>
                  <input id='email' type='email' placeholder={t("contacto.placeholder2")} className='text-gray-500 dark:text-gray-700 px-2 border py-1 rounded-sm w-full' name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='mensaje' className=' uppercase font-bold text-gray-600 dark:text-gray-200'>{t("contacto.label3")}</label>
                  <textarea
                    rows={10} 
                    className='text-gray-500 dark:text-gray-700 px-2 border py-1 rounded-sm'
                    name="mensaje"
                    value={mensaje}
                    onChange={e => setMensaje(e.target.value)}
                  />
                </div>
                {/* <p>{alerta.mensaje}</p> */}
                {Object.values(alerta).includes('') ? '' : (
                  <p className={`mt-3 w-full ${alerta.color == 'red' ? 'bg-red-300 border-red-950 text-red-950' : 'bg-green-300 border-green-950 text-green-950'}  border uppercase text-center py-1 font-bold`}>{alerta.mensaje}</p>
                )}
                <input 
                  type='submit'
                  value={t("contacto.submit")}
                  className='mt-5 w-full bg-cyan-700 py-1 uppercase font-bold text-xl text-white rounded-md hover:bg-cyan-900 transition-all cursor-pointer'
                />
              </div>
          </fieldset>
        </form>
    </div>
  )
}
