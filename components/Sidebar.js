import useDev from "@/hook/useDev";
import Image from "next/image"
import { useState } from "react"

const redesSociales = [
    {
        id: 1,
        src: 'facebook',
        link: 'https://www.facebook.com/luis.r.lobo'
    },
    {
        id: 2,
        src: 'github',
        link: 'https://github.com/Luffy1512'
    },
    {
        id: 3,
        src: 'linkedin',
        link: 'https://www.linkedin.com/in/jes%C3%BAs-luis-rodrigo-lobo-6594a81b4/'
    }
]


export default function Sidebar() {

    const { i18n } = useDev();

    const [languaje, setLanguaje] = useState(false);

    const handleChange = () => {
        if (languaje) {
            i18n.changeLanguage("es")
        } else {
            i18n.changeLanguage("en")
        }
        setLanguaje(!languaje);
    }
    
  return (
    <div className="lg:w-32 flex justify-between lg:block">
        <a href="/" className="nuxt-link-exact-active nuxt-link-active">
            <Image 
                width={100}
                height={100}
                src={'/img/2-transparente.png'}
                alt="Imagen Logo"
                className="dark:invert"
            />
        </a>

        {/* Interruptor ES - EN */}
        <div className="lg:mt-5 flex gap-2">
            <p className=" font-bold dark:text-white">{languaje ? 'EN' : 'ES'}</p>
            <label htmlFor="check" className="bg-gray-100 cursor-pointer relative w-14 h-7 rounded-full inline-block">
                <input 
                    type="checkbox" 
                    id="check" 
                    className=" sr-only peer"
                    value={languaje}
                    onClick={handleChange}
                />
                <span className="w-2/5 h-4/5 bg-green-300 dark:bg-rose-300 absolute rounded-full left-1 top-[0.15rem] peer-checked:bg-green-600  dark:peer-checked:bg-rose-600 peer-checked:left-[1.85rem] transition-all duration-500"></span>
            </label>
        </div>

        <div className="lg:mt-64 flex gap-2 lg:flex-col lg:ml-5">
            {redesSociales.map( redes => (
                <div 
                    key={redes.id}
                    className="lg:h-8 lg:w-8 lg:block mb-2">
                    <a href={`${redes.link}`} target="_blank">
                        <Image 
                            width={100}
                            height={100}
                            src={`/img/${redes.src}.svg`}
                            alt={`${redes.src}`}
                            className="dark:invert w-10"
                        />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}
