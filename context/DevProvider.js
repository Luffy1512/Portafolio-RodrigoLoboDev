import { createContext } from 'react'
import { useState, useEffect } from 'react';

const DevContext = createContext()

const DevProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);
    const [datos, setDatos] = useState({})

    const handleDatos = (datos) => {
        setDatos(datos)
    }

    useEffect(() => {
        scrollNav()
    }, [])
    
    useEffect(() => {
        const body = document.querySelector('body');
        darkMode ? body.classList.add('dark') : body.classList.remove('dark');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Smooth Scroll
    function scrollNav() {
        const enlaces = document.querySelectorAll('.enlace');
        console.log(enlaces);

        enlaces.forEach( enlace => {
            enlace.addEventListener('click', function(e) {
                e.preventDefault();

                console.log(e.target.attributes.href.value);
                const seccionScroll = e.target.attributes.href.value;
                const seccion = document.querySelector(seccionScroll);
                seccion.scrollIntoView({behavior: "smooth"});
            });
        });
    }

    // Proyectos
    const proyectos = [
        {
            id:1,
            nombre:'App Clima',
            descripcion:'Proyecto Realizado con React, Context API',
            src:'/img/proyectos/appclima.png',
            url:'https://boisterous-vacherin-30af82.netlify.app/'
        },
        {
            id:2,
            nombre:'App Cafeteria',
            descripcion:'Proyecto Realizado HTML, SASS, GULP y JAVASCRIPT',
            src:'/img/proyectos/appcafeteria.png',
            url:'https://webcafeteriasass.netlify.app/'
        },
        {
            id:3,
            nombre:'App Software',
            descripcion:'Proyecto Realizado en React con Vite, Styled Components',
            src:'/img/proyectos/appsoftware.png',
            url:'https://tssoftware.netlify.app/'
        },
        {
            id:4,
            nombre:'App Veterinaria',
            descripcion:'Administrador de Pacientes en Vite, TailwindCSS y LocalStorage',
            src:'/img/proyectos/appveterinaria.png',
            url:'https://velvety-starship-dea024.netlify.app/'
        },
        {
            id:5,
            nombre:'App Planificador de Gastos',
            descripcion:'Control de Presupuestos en React con Vite y LocalStorage',
            src:'/img/proyectos/appgastos.png',
            url:'https://controldegastosenreact.netlify.app/'
        },
        {
            id:6,
            nombre:'App Criptomonedas React',
            descripcion:'Cotizador de Criptomonedas con Vite, Styled Components, Custom Hooks, APIs',
            src:'/img/proyectos/appcriptos.png',
            url:'https://luxury-dragon-502286.netlify.app/'
        },
        {
            id:7,
            nombre:'Quiosco App',
            descripcion:'Proyecto realizado con Next js, Prisma y Tailwind CSS',
            src:'/img/proyectos/appquiosco.png',
            url:'https://quioscoapp-deployment-production-5208.up.railway.app/'
        },
        {
            id:8,
            nombre:'App GuitarLA',
            descripcion:'Proyecto realizado con Remix Run, Strapi, Tailwind CSS',
            src:'/img/proyectos/appguitarla.png',
            url:'https://guitar-la-remix-rewmb96c4-luffy1512.vercel.app/'
        },
        {
            id:9,
            nombre:'App Casas de la Era Moderna',
            descripcion:'Proyecto realizado con React Vite, APIs, Tailwind CSS',
            src:'/img/proyectos/appcasas.png',
            url:'https://glistening-souffle-530c44.netlify.app/'
        }
    ]

    // Tecnologias Frontend
    const frontend = [
        {
            id: 1,
            nombre: 'html',
            src: '/img/frontend/html.png',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            id: 2,
            nombre: 'css',
            src: '/img/frontend/css-3.png',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
            id: 3,
            nombre: 'sass',
            src: '/img/frontend/sass.png',
            url: 'https://sass-lang.com/'
        },
        {
            id: 4,
            nombre: 'tailwindcss',
            src: '/img/frontend/tailwindcss.png',
            url: 'https://tailwindcss.com/'
        },
        {
            id: 5,
            nombre: 'javascript',
            src: '/img/frontend/javascript.png',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            id: 6,
            nombre: 'next.js',
            src: '/img/frontend/next.png',
            url: 'https://nextjs.org/'
        },
        {
            id: 7,
            nombre: 'react',
            src: '/img/frontend/reactjs.png',
            url: 'https://es.react.dev/learn'
        }
    ]

    // Tecnologias Backend
    const backend = [
        {
            id: 1,
            nombre: 'cloudinary',
            src: '/img/backend/cloudinary.png',
            url: 'https://cloudinary.com/'
        },
        {
            id: 2,
            nombre: 'express',
            src: '/img/backend/express.png',
            url: 'https://expressjs.com/es/'
        },
        {
            id: 3,
            nombre: 'mongodb',
            src: '/img/backend/mongodb.png',
            url: 'https://www.mongodb.com/es'
        },
        {
            id: 4,
            nombre: 'mysql',
            src: '/img/backend/mysql.png',
            url: 'https://www.mysql.com/'
        },
        {
            id: 5,
            nombre: 'node',
            src: '/img/backend/node.png',
            url: 'https://nodejs.org/es'
        },
        {
            id: 6,
            nombre: 'php',
            src: '/img/backend/php.png',
            url: 'https://www.php.net/'
        },
        {
            id: 7,
            nombre: 'postgresql',
            src: '/img/backend/postgresql.png',
            url: 'https://www.postgresql.org/'
        },
        {
            id: 8,
            nombre: 'prisma',
            src: '/img/backend/prisma.png',
            url: 'https://www.prisma.io/'
        },
        {
            id: 9,
            nombre: 'python',
            src: '/img/backend/python.png',
            url: 'https://www.python.org/'
        },
        {
            id: 10,
            nombre: 'strapi',
            src: '/img/backend/strapi.png',
            url: 'https://strapi.io/'
        }
    ]

    // Otras Tecnologias
    const otrasTecnologias = [
        {
            id: 1,
            nombre: 'git',
            src: '/img/otros/git.png',
            url: 'https://git-scm.com/'
        },
        {
            id: 2,
            nombre: 'github',
            src: '/img/otros/github.png',
            url: 'https://github.com/'
        },
        {
            id: 3,
            nombre: 'heroku',
            src: '/img/otros/heroku.png',
            url: 'https://www.heroku.com/'
        },
        {
            id: 4,
            nombre: 'netlify',
            src: '/img/otros/netlify.png',
            url: 'https://www.mysql.com/'
        },
        {
            id: 5,
            nombre: 'npm',
            src: '/img/otros/npm.png',
            url: 'https://www.npmjs.com/'
        },
        {
            id: 6,
            nombre: 'railway',
            src: '/img/otros/railway.png',
            url: 'https://railway.app/'
        },
        {
            id: 7,
            nombre: 'vercel',
            src: '/img/otros/vercel.png',
            url: 'https://vercel.com/'
        }
    ]
    
    return (
        <DevContext.Provider
            value={{
                darkMode,
                toggleDarkMode,
                proyectos,
                frontend,
                backend,
                otrasTecnologias,
                handleDatos,
                datos
            }}
        >
            {children}
        </DevContext.Provider>
    )
}

export {
    DevProvider
}
export default DevContext