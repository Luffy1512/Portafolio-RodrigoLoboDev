import Image from "next/image"

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
