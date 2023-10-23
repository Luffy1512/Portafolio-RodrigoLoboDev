import Head from "next/head"
import Image from "next/image";
import Sidebar from "./Sidebar"
import Nav from "./Nav";
import ScrollButton from "./ScrollButton";
import ReactModal from "react-modal"
import useDev from "@/hook/useDev";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function LayoutPrincipal({children, title = '', description = ''}) {

    ReactModal.setAppElement('#__next');

    const {modal, handleChangeModal, t} = useDev()

    return (
      <>
          <Head>
              <title>{`Portafolio RodrigoDev - ${title}`}</title>
              <meta name="description" content={description} />
          </Head>

          <div className=" py-2 lg:py-16">
            <div className="bg-white dark:bg-zinc-700 w- w-[95%] max-w-6xl m-auto rounded-lg p-2 lg:p-8 shadow-2xl">
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
                    <p className=" text-gray-700 dark:text-gray-200 font-bold text-xl">&copy; {new Date().getFullYear() + " " + t("footer.p")}</p>
                </div>
                <div className="flex mt-2">
                    <div className=" bg-red-700 w-1/4 py-[0.35rem] "></div>
                    <div className=" bg-amber-600 w-1/4 py-[0.35rem] "></div>
                    <div className=" bg-amber-200 w-1/4 py-[0.35rem] "></div>
                    <div className=" bg-cyan-900 w-1/4 py-[0.35rem] "></div>
                </div>
            </footer>
          </div>
          <ScrollButton />
          {modal && (
            <ReactModal
              isOpen={modal}
              onRequestClose={handleChangeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 className="text-center font-black text-sm lg:text-2xl">{t("modal.h2")}</h2>
              <p className=' italic text-xs lg:text-lg text-gray-800 '> <span className='font-bold'>"{t("modal.span")}"</span> {t("modal.p")}</p>
              <div className="flex justify-end">
                <button className=" mt-2 lg:mt-5 px-3 bg-cyan-700 py-1 uppercase font-bold text-xs lg:text-lg text-white rounded-md hover:bg-cyan-900 transition-all cursor-pointer" onClick={handleChangeModal}>{t("modal.button")}</button>
              </div>
            </ReactModal>
          )}
      </>
    )
  }
