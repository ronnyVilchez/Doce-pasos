import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoOnce = () => {
    const navigate = useNavigate();
    const [mod1, setmod1] = useState(false)
    const [mod2, setmod2] = useState(false)
    const [mod3, setmod3] = useState(false)
    const [mod4, setmod4] = useState(false)
    const [mod5, setmod5] = useState(false)
    const [mod6, setmod6] = useState(false)
    const [mod7, setmod7] = useState(false)
    const [mod8, setmod8] = useState(false)

    function saveResponse(questionNumber, response) {
        localStorage.setItem(`pre${questionNumber}`, response);
    }

    return (
        <section className=" relative bg-cover bg-center bg-fixed min-h-screen bg-[url('/images/fondo1.jpg')] ">
            <section className="absolute inset-0  h-full bg-white bg-opacity-65"></section>
            <section className="relative z-10 sm:px-24 sm:py-12 sm:gap-5 sm:text-[1.5vw] h-full p-6 flex flex-col gap-3 font-roboto">
                <h1 className='font-semibold text-xl sm:text-3xl text-center'>PASO 11: LA REVELACIÓN PERSONAL</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Válgase de la oración y la meditación para conocer la voluntad del Seúor y tener fuerzas para aplicarla en su vida. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Al estudiar y practicar los pasos de la recuperación, nos familiarizamos con una vida basada en la humildad y la aceptación de la voluntad de Dios, y nos acomodamos a ella. Atrás quedaron los momentos de confusión y enojo cuando, si orábamos, lo hacíamos con una actitud de obstinado egoísmo o de quejumbrosa autocompasión. Comenzamos a vivir de modo que nuestra vida reflejara el profético consejo del presidente Ezra Taft Benson: “La pregunta que siempre debemos tener presente y hacer constantemente, la que debe guiarnos en todos nuestros pensamientos y acciones, es: ‘Señor, ¿qué quieres que yo haga?’ (Hechos 9:6). La respuesta sólo nos puede llegar por medio de la luz de Cristo y el Espíritu Santo. Afortunados son los que viven de modo tal que son llenos de ambos” (“Los dones del Señor”, LiaPona, abril de 1977, pág. 23).

                    </p>
                    <p className='text-justify'>
                        En el paso 11 concertamos un compromiso para toda la vida de conocer día tras día la voluntad del Señor y tener el poder de llevarla a la práctica. Nuestro mayor deseo era mejorar nuestra capacidad para recibir la guía del Espíritu Santo y conducir nuestras vidas en consonancia. Este deseo contrastaba enormemente con las actitudes que teníamos cuando nos hallábamos perdidos en nuestras adicciones.
                    </p>
                    <p className='text-justify'>
                        Si usted es como éramos nosotros, antes de comenzar la recuperación pensaría que la esperanza, el gozo, la paz y la realización personal tenían un origen terrenal. Tanto si ese origen era el alcohol, las drogas, el sexo, el juego, el derroche, los desórdenes alimenticios o la codependencia, cualquiera que fuera su adicción, usted se limitaba a arreglárselas en un mundo en el que se sentía confundido, perdido y solo. Cuando las personas intentaban amarle, tal vez usted no lo percibía, pues su amor nunca resultaba suficiente; nada satisfacía sus anhelos. Sin embargo, al vivir los principios de la recuperación, su vida y su corazón han cambiado.

                    </p>
                    <p className='text-justify'>
                        Ahora ha comenzado a comprender y a apreciar la necesidad del Salvador, Jesucristo, y Su papel en su vida, y a atesorar la Luz de Cristo. Ha comenzado a darse cuenta de que no es usted el que habla para sí cuando siente la guía de su conciencia. Aunque al principio se haya sentido torpe e inexperto, ahora usted ora al Padre en el nombre de Cristo para tener una relación más íntima con Él, y busca deliberadamente “a este Jesús de quien han escrito los profetas y apóstoles” (Éter 12:41).

                    </p>
                    <p className='text-justify'>
                        Usted estudia las Escrituras porque testifican de Él en todo momento, especialmente el Libro de Mormón. Testimonio tras testimonio, los profetas de ese libro describen cómo buscar y lograr una mejor comprensión del Padre a través del Espíritu Santo. Usted ha experimentado con las Escrituras y ha sentido que son verdaderas. La oración y la meditación son ahora la savia de su nueva vida. Antes, la oración y la meditación constituían una obligación descuidada; ahora, su corazón abriga el deseo de arrodillarse ante su Padre, por lo menos por la mañana y por la noche, y derramar su corazón con gratitud por Jesucristo y el Espíritu Santo.

                    </p>
                    <p className='text-justify'>
                        Con el paso 11 se dará aún más cuenta de que recibirá conocimiento o revelación de la voluntad del Padre para usted por medio del Espíritu Santo, y que mediante la Expiación recibirá el poder (o la gracia) para ponerla en práctica. Sabrá que será bendecido y contará con el respaldo de tres seres glorificados y exaltados (Dios el Padre, Jesucristo y el Espíritu Santo) que son uno en poder y propósito: llevar a cabo su inmortalidad y vida eterna.
                    </p>
                    <p className='text-justify'>
                        Aumentará su capacidad para resistir la tentación a medida que estudie las Escrituras, ore y medite en ellas. Aprender a recibir revelación requiere tiempo y paciencia y usted puede prepararse para ello estudiando las palabras de los profetas y apóstoles e intentando vivir de acuerdo con sus enseñanzas. Dispóngase a recibir, escribir, pensar y seguir la guía que reciba. Cuando dé gracias al Señor por las bendiciones que ha recibido, aumentará su capacidad para recibir orientación.

                    </p>
                    <p className='text-justify'>
                        Al mantenerse libre de sus adicciones, estará más capacitado para recibir la guía del Espíritu Santo.
                        El élder Dallin H. Oaks, del Quórum de los Doce Apóstoles, enseñó: “El Espíritu Santo nos protegerá de ser engañados, pero a fin de recibir esa maravillosa bendición, siempre debemos hacer lo necesario para retener ese Espíritu. Debemos guardar los mandamientos, orar pidiendo guía, asistir a la Iglesia y tomar la Santa Cena todos los domingos. Y nunca debemos hacer nada que aleje al Espíritu. En particular, tenemos que eludir la pornografía, el alcohol, el tabaco y las drogas, y evitar siempre, siempre, las violaciones de la ley de castidad. Nunca debemos tomar en nuestro cuerpo ni hacer con él nada que aleje al Espíritu del Señor y nos deje sin protección espiritual del engaño” (“No se dejen engañar”, LiaPona, noviembre de 2004, pág. 46).
                    </p>

                    <p className='text-justify'>

                        La oración y la meditación son poderosos antídotos contra el miedo y la depresión. Usted “no [ha] llegado hasta aquí sino por la palabra de Cristo, con fe inquebrantable en él, confiando íntegramente en los méritos de aquel que es poderoso para salvar” (2 Nefi 31:19). Su progreso y crecimiento espiritual están supeditados a que usted acuda al Padre por medio de Jesucristo, en Su nombre y con Su Espíritu en usted. El paso 11 representa el compromiso vitalicio de mejorar su rela-
                        ción con Dios a través de la búsqueda diaria de Su guía y la obediencia a los mandamientos.
                    </p>


                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Acuda al Padre en el nombre de Jesucristo por medio de la oración personal y la meditación para recibir orientación y poder; obtenga su bendición patriarcal y estúdiela
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Durante el proceso de la recuperación, muchos de nosotros aprendimos a levantarnos temprano y a buscar un momento de quietud para estudiar y orar. Si aún no lo ha hecho, aparte un momento para orar y meditar, quizás por la mañana, durante el cual pueda poner a Dios en primer lugar, antes que a ninguna otra persona o cosa de ese día. Si no tiene un impedimento físico, arrodíllese; ore a menudo y en voz alta al Padre con la guía del Espíritu (véase Romanos 8:26).
                            Entonces estudie, valiéndose de las Escrituras y las enseñanzas de los profetas actuales como guía para su meditación. Repase su bendición patriarcal a menudo y, valiéndose de la oración, medite en la guía que halle en ella. (Si aún no ha recibido su bendición patriarcal, hable con su obispo para obtenerla.)
                        </p>
                        <p className='text-justify'>
                            Dejar constancia por escrito de sus pensamientos y sentimientos en su diario volverá a ser un poderoso instrumento de autoexpresión y evaluación. Asimismo, puede escribir el consejo, el consuelo y la sabiduría que reciba a través de las impresiones del Espíritu Santo.
                        </p>
                        <p className='text-justify'>

                            Una vez concluidos esos preciados momentos de meditación en privado, no deje de orar. La oración silenciosa en lo más recóndito de su corazón y de su mente se convertirá en una manera constante de pensar. Busque el consejo del Señor cada vez que se relacione con otras personas, cuando tenga que tomar decisiones o al enfrentarse a sus emociones y tentaciones. Busque e invite a Su Espíritu para que esté siempre con usted y le guíe para hacer lo justo (véase Salmos 46:1; Alma 37:36–37; 3 Nefi 20:1).

                        </p>

                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Medite a lo largo del día en las Escrituras y otra literatura inspirada; siga orando
                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            En muchos aspectos, el paso 11 es la continuación natural de los esfuerzos realizados en el paso 10 para estar al tanto de la verdad de su vida. Al programar sus días, al llevar a cabo sus actividades y al retirarse por la noche, permita que en su corazón repose continuamente una oración a Dios. Una opción podría ser el tomar un pensamiento de su estudio matutino y meditarlo con frecuencia durante sus actividades diarias. Esta práctica le ayudará a mantener la mente en sintonía con la verdad.

                        </p>
                        <p className='text-justify'>
                            Todos tendemos, por naturaleza, a ser indisciplinados, pero al acudir a Jesucristo y al contemplar Su ejemplo, hallará la humildad que precisa para seguir sometiéndose al Padre y cada día podrá decir con toda sinceridad, al igual que el Salvador: “Hágase tu voluntad” (Mateo 26:42). La luz de Cristo le guiará y preparará para recibir la compañía del Espíritu Santo, que será cada vez más constante, con lo que aumentará su capacidad para reconocer la verdad y testificar de ella.
                        </p>


                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Estudie los siguientes pasajes de las Escrituras y las citas de los líderes de la Iglesia, pues contribuirán a su comprensión y le ayudarán a aprender. Válgase de los pasajes, de las citas y de las preguntas para sus meditaciones, su estudio personal y los análisis en grupo.
                </p>

                <h2 className='font-semibold text-lg' > Alléguese al Señor </h2>
                <p className='text-justify'>
                    “Allegaos a mí, y yo me allegaré a vosotros: buscadme diligentemente, y me hallaréis; pedid, y recibiréis; llamad, y se os abrirá” (D. y C. 88:63).
                </p>

                <h2>
                    El Señor respeta su voluntad y su albedrío, y le permite decidir acercarse a Él libremente. Él se acerca a usted cuando usted le invita a hacerlo. Escriba sobre cómo va a acercarse hoy a Él.
                </h2>
                <textarea onChange={(e) => saveResponse(124, e.target.value)} defaultValue={localStorage.getItem('pre124')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p124" id="p124" />

                <h2 className='font-semibold text-lg'>
                    La gratitud
                </h2 >
                <p className='text-justify'>
                    “Orad sin cesar. Dad gracias en todo porque esta es la voluntad de Dios para con vosotros en Cristo Jesús. No apaguéis al Espíritu” (1 Tesalonicenses 5:17–19).
                </p>

                <h2>
                    Cuando recuerde sentir gratitud por todas las cosas de su vida, incluso por aquellas que no comprende, podrá mantenerse en contacto continuo con Dios, orando “sin cesar”, como dijo Pablo. Intente dar gracias a Dios durante todo el día.
                    ¿Qué relación hay entre esta práctica y su proximidad al Espíritu?
                </h2>
                <textarea onChange={(e) => saveResponse(125, e.target.value)} defaultValue={localStorage.getItem('pre125')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p125" id="p125" />



                <h2 className='font-semibold text-lg'>

                    Deléitese en las palabras de Cristo
                </h2>
                <p className='text-justify'>
                    “Los ángeles hablan por el poder del Espíritu Santo; por lo que declaran las palabras de Cristo. Por tanto, os dije: Deleitaos en las palabras de Cristo; porque he aquí, las palabras de Cristo os dirán todas las cosas que debéis hacer” (2 Nefi 32:3).                </p>
                <h2>
                    •	Nefi enseñó en este versículo que cuando usted se deleita en las palabras de Cristo, ellas le guían en todo lo que precisa saber y hacer. Imagínese cómo sería tener a Jesucristo hablándole y caminando a su lado durante todo el día. Escriba sobre los sentimientos que tiene al meditar en esa idea.
                </h2>

                <textarea onChange={(e) => saveResponse(126, e.target.value)} defaultValue={localStorage.getItem('pre126')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p126" id="p126" />



                <h2 className='font-semibold'>
                    La revelación personal
                </h2>
                <p className='text-justify'>
                    “El Salvador dijo: ‘Hablaré a tu mente y a tu corazón por medio del Espíritu Santo’ (D. y C. 8:2; cursiva agregada)... Una impresión a la mente es algo muy específico. Se pueden sentir, oír y escribir palabras concretas como si las estuvieran dictando. La comunicación al corazón es una impresión más general” (Richard G. Scott, “Helping Others to Be Spiritually Led”, Doctrine and Covenants and Church history symposium, 11 de agosto de 1998, pág. 2).
                </p>

                <h2>
                    A medida que aumente su comprensión de la revelación personal, la reconocerá con más frecuencia y en una mayor variedad de formatos. Escriba sobre cómo ha recibido impresiones y revelaciones del Señor.
                </h2>

                <textarea onChange={(e) => saveResponse(127, e.target.value)} defaultValue={localStorage.getItem('pre127')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p127" id="p127" />
                <p>
                    “He aquí, os digo que el Santo Espíritu de Dios me... hace saber [las cosas de las que he hablado]. He aquí, he ayunado y orado muchos días para poder saber estas cosas por mí mismo. Y ahora sé por mí mismo que son verdaderas; porque el Señor Dios me las ha manifestado por su Santo Espíritu; y éste es el espíritu de revelación que está en mí” (Alma 5:46).
                </p>

                <h2>
                    Alma testificó que el ayuno y la oración aumentaron su capacidad para recibir revelación. La abstinencia de su adicción puede considerarse una especie de ayuno. Escriba sobre cómo dicha abstención ha fomentado su capacidad para tener el espíritu de revelación.
                </h2>
                <textarea onChange={(e) => saveResponse(128, e.target.value)} defaultValue={localStorage.getItem('pre128')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p128" id="p128" />
                <p>

                    “La idea de que la lectura de las Escrituras conduce a la inspiración y la revelación, abre la puerta a la verdad de que un pasaje de Escritura no se limita a su significado original, sino que también puede incluir otro para el lector actual. Es más, la lectura de las Escrituras puede conducir hacia una revelación actual sobre cualquier cosa que el Señor desee comunicar al lector. No exageramos cuando decimos que las Escrituras pueden ser un Urim y Tumin para ayudarnos a recibir revelación personal” (Dallin H. Oaks, “Scripture Reading and Revelation”, Ensign, enero de 1995, pág. 8).

                </p>
                <h2>
                    Aprender el idioma de las Escrituras es muy parecido a aprender una lengua extranjera: la mejor manera de aprenderlo es sumergirse en él, leerlo y estudiarlo cada día. Escriba sobre un pasaje de las Escrituras cuyo significado se haya desplegado ante usted, convirtiéndose en una revelación personal.
                </h2>
                <textarea onChange={(e) => saveResponse(129, e.target.value)} defaultValue={localStorage.getItem('pre129')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p129" id="p129" />

                <h2 className='font-semibold text-lg'>
                    Acepte el consejo del Señor
                </h2>
                <p className='text-justify'>
                    “No procuréis aconsejar al Señor, antes bien aceptad el consejo de su mano. Porque he aquí, vosotros mismos sabéis que él aconseja con sabiduría, con justicia y con gran misericordia sobre todas sus obras” (Jacob 4:10).
                </p>
                <h2>
                    Puede que nuestras oraciones no hayan tenido eficacia en el pasado debido al tiempo que pasamos aconsejando al Señor, diciéndole lo que queríamos, en vez de procurar Su voluntad sobre nuestras decisiones y nuestra conducta. Piense en alguna experiencia reciente con la oración. ¿Estuvo repleta de consejos al Señor o del Señor? Escriba sobre su voluntad de escucharle y recibir Su consejo.

                </h2>
                <textarea onChange={(e) => saveResponse(130, e.target.value)} defaultValue={localStorage.getItem('pre130')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p130" id="p130" />




                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/10')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/12')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
