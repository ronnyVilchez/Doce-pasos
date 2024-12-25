import React, { useState } from 'react'
import { Aside } from '../components/Aside'

export const Home = () => {
    const [modal, setModal] = useState(false)

    return (
        <section className="relative w-full min-h-screen bg-cover bg-center bg-[url('/images/fondo2.jpg')]" >
            <section className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.2)]"></section>
            <section className="relative z-10 sm:px-28 sm:py-8 h-full font-roboto">
                <section className='flex flex-col p-8 gap-4' >
                    <header className='flex flex-row items-center justify-center text-[#0067A5] gap-2'>
                        <section className='flex flex-col justify-center'>
                            <h2 className='text-[5vw] sm:text-[3vw]  font-poppins'>SERVICIOS</h2>
                            <h2 className='text-[5vw] sm:text-[3vw] font-poppins text-right'>PARA</h2>
                        </section>

                        <section className='flex flex-col '>
                            <h1 className='text-[13vw] sm:text-[8vw] font-script bottom-0'>La Familia</h1>
                            <h2 className='text-[2.4vh] sm:text-[2vw] font-poppins text-right'>SUD</h2>
                        </section>
                    </header>

                    <section className='flex flex-col w-full items-end '>
                        <button onClick={() => { (setModal(!modal)) }} className='flex flex-row bg-white hover:bg-[#f0a06a] w-fit px-4 rounded-lg border-[1px] border-[#AA5922] font-kanit text-xl'>
                            Ver Doce Pasos 
                        </button>
                        {
                            modal && <Aside 
                            setModal={setModal}
                            />
                        }

                    </section>

                    <h2 className='px-4 text-center text-[4vh] sm:text-3xl font-kanit'>PROGRAMA PARA LA RECUPERACIóN DE ADICCIONES</h2>
                    <section className='bg-black text-white sm:w-[60%] sm:mx-auto  bg-opacity-45 shadow-2xl py-4 px-8 sm:py-12 flex flex-col gap-4'>
                        <h2 className='text-[4vh] text-center'>Guía para la recuperación y curación de adicciones</h2>
                        <div className='h-[1px] w-full bg-yellow-400'></div>
                        <span className='sm:text-2xl sm:text-justify'>Escrito con el apoyo de lideres de la Iglesia y de asesores profesionales por personas que han sido adictas y han experimentado el milagro de la recuperación por medio de la expiación de Jesucristo</span>
                    </section>
                </section>
            </section>
        </section>
    )
}
