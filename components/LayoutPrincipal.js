import Head from "next/head"
import Image from "next/image";
import Sidebar from "./Sidebar"
import Nav from "./Nav";

export default function LayoutPrincipal({children, title = '', description = ''}) {



    return (
      <>
          <Head>
              <title>{`Portafolio RodrigoDev - ${title}`}</title>
              <meta name="description" content={description} />
          </Head>

          <div className=" py-8 lg:py-16">
            <div className="bg-white dark:bg-zinc-700 w-11/12 max-w-6xl m-auto rounded-lg p-2 lg:p-8 shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                    <Sidebar />
                    <div className="lg:flex-1 px-8 lg:px-0">
                        <Nav />
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div>

            <footer className="lg:max-w-6xl lg:m-auto px-8 py-7">
                <div className="lg:flex justify-between items-center">
                    <Image 
                        width={130}
                        height={130}
                        src={'/img/2-transparente.png'}
                        alt="Imagen Logo"
                        className="dark:invert"
                    />
                    <p className=" text-gray-700 dark:text-gray-200 font-bold text-xl">&copy; {new Date().getFullYear()} Todos los Derechos Reservados </p>
                </div>
                <div className="flex mt-2">
                    <div className=" bg-red-700 w-1/4 py-[0.35rem] "></div>
                    <div className=" bg-amber-600 w-1/4 py-[0.35rem] "></div>
                    <div className=" bg-amber-200 w-1/4 py-[0.35rem] "></div>
                    <div className=" bg-cyan-900 w-1/4 py-[0.35rem] "></div>
                </div>
            </footer>
          </div>
      </>
    )
  }
