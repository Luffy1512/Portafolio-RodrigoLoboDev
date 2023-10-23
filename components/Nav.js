import Image from "next/image";
import useDev from "@/hook/useDev";
import { useState } from 'react';


export default function Nav() {

    const { darkMode, toggleDarkMode, t } = useDev();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className=" mt-5 ">
        <div className="flex justify-end">
            <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleMenu}
            >
            <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isOpen ? (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 12H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0 5H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0-10H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"
                />
                ) : (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 7h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 7h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
                />
                )}
            </svg>
            </button>
        </div>
        <div className={`lg:block transition ease-in-out delay-150 ${isOpen ? 'block' : 'hidden'}`}>
            <nav className={`flex flex-col lg:flex-row items-center gap-4`}>   
                <div className="lg:w-1/2 flex lg:justify-between justify-center items-center">
                    <a className="hidden lg:flex gap-2 hover:-rotate-6 p-1 hover:shadow-xl transition-all hover:bg-red-400 hover:text-white dark:text-white">
                        <Image 
                            width={25}
                            height={25}
                            src={'/img/email.svg'}
                            alt="Imagen Email"
                            className="dark:invert"
                        />
                        rolobo2812@gmail.com
                    </a>
                    <button
                        type="button"
                        onClick={toggleDarkMode}
                        className="lg:mr-20 flex lg:gap-2 dark:invert"
                    >
                        <Image 
                            width={25}
                            height={25}
                            src={`${darkMode ? '/img/sun.svg' : '/img/moon.svg'}`}
                            alt="Imagen Dark Mode"
                        />
                        {darkMode ? t("navegacion.modoclaro") : t("navegacion.modooscuro")}
                    </button>
                </div>
                <div className="lg:w-1/2 flex flex-col lg:flex-row justify-center gap-4">
                    <a
                        className="enlace flex hover:-rotate-6 p-1 hover:shadow-xl transition-all hover:bg-red-400 hover:text-white dark:invert"
                        href="#acercademi"
                    >
                        <Image 
                            width={25}
                            height={25}
                            src={'/img/acercademi.svg'}
                            alt="Imagen Acerca de Mi"
                        />
                        {t("navegacion.acercademi")}
                    </a>
                    <a
                        className="enlace flex hover:-rotate-6 p-1 hover:shadow-xl transition-all hover:bg-red-400 hover:text-white dark:invert"
                        href="#proyecto"
                    >
                        <Image 
                            width={25}
                            height={25}
                            src={'/img/proyectos.svg'}
                            alt="Imagen Proyectos"
                        />
                        {t("navegacion.proyectos")}
                    </a>
                    <a
                        className="enlace flex hover:-rotate-6 p-1 hover:shadow-xl transition-all hover:bg-red-400 hover:text-white dark:invert"
                        href="#contacto"
                    >
                        <Image 
                            width={25}
                            height={25}
                            src={'/img/contacto.svg'}
                            alt="Imagen Contacto"
                        />
                        {t("navegacion.contacto")}
                    </a>
                </div>
            </nav>
        </div>
    </div>
  )
}
