import React, { useState } from 'react'
import { Aside } from '../components/Aside'

export const Home = () => {
    const [modal, setModal] = useState(false)

    return (
        <section className="w-full h-full bg-cover bg-center bg-[url('/images/fondo2.jpg')]" >
            <section className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.2)]"></section>
            <section className="relative z-10 ">
                <section className='flex flex-col p-8 gap-4' >
                    <header className='flex flex-row items-center text-[#0067A5] gap-2'>
                        <section className='flex flex-col justify-center'>
                            <h2 className='text-[2.4vh] font-poppins'>SERVICIOS</h2>
                            <h2 className='text-[2.4vh] font-poppins text-right'>PARA</h2>
                        </section>

                        <section className='flex flex-col '>
                            <h1 className='text-[8.5vh] font-script bottom-0'>La Familia</h1>
                            <h2 className='text-[2.4vh] font-poppins text-right'>SUD</h2>
                        </section>
                    </header>

                    <section className='flex flex-row w-full justify-end '>
                        <button onClick={() => { (setModal(!modal)) }} className='flex flex-row bg-white hover:bg-yellow-200 w-fit px-4 rounded-lg font-semibold text-xl'>
                            Secciones
                        </button>
                        {
                            modal && <Aside 
                            setModal={setModal}
                            />
                        }

                    </section>

                    <h2 className='px-4 text-center text-[4vh] font-semibold'>PROGRAMA PARA LA RECUPERACION DE ADDICIONES</h2>
                    <section className='bg-black text-white bg-opacity-45 shadow-2xl py-4 px-8 flex flex-col gap-4'>
                        <h2 className='text-[4vh] text-center'>Guía para la recuperación y curación de adicciones</h2>
                        <div className='h-[1px] w-full bg-yellow-400'></div>
                        <span>Escrito con el apoyo de lideres de la Iglesia y de asesores profesionales por personas que han sido adictas y han experimentado el milagro de la recuperación por medio de la expiación de Jesucristo</span>
                    </section>
                </section>
            </section>
        </section>
    )
}
