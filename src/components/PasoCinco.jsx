import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoCinco = () => {
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
            <section className="relative z-10  h-full p-6 flex flex-col gap-3 font-roboto">
                <h1 className='font-semibold text-xl text-center'>PASO 5: LA CONFESIÓN</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Admita la naturaleza exacta de sus errores ante usted mismo, ante su Padre Celestial en el nombre de Jesucristo, ante la debida autoridad del sacerdocio y ante cualquier otra persona. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        La sensación de aislamiento es un elemento común para muchos de los que han padecido una adicción.
                        Aunque nos halláramos entre una multitud o realizando actividades con otras personas que se sentían vinculadas entre sí, nosotros percibíamos que no encajábamos allí. Al asistir a las reuniones de recuperación, comenzamos a salir del aislamiento emocional en el que se cultiva la adicción. Al principio, muchos nos limitábamos a sentarnos y escuchar, pero finalmente nos sentimos lo suficientemente seguros como para hablar y compartir. Sin embargo, aún nos guardábamos muchas cosas (cosas vergonzosas, penosas, dolorosas, cosas que nos hacían sentir vulnerables).

                    </p>
                    <p className='text-justify'>
                        En el paso 4 realizamos un inventario sincero y minucioso, pero ésa fue una experiencia privada. Aún nos acompañaba la vergüenza del pasado. Tuvimos que aguardar hasta el paso 5 para despojarnos de los grilletes que constituían los secretos de nuestro aislamiento y captar la perspectiva adecuada sobre nosotros mismos y nuestro pasado. La confesión dio comienzo a un proceso de apertura que nos permitió compartir expresiones de remordimiento con los amigos, con nuestra familia y con otras personas. Era omitir una parte de un esfuerzo continuado por reparar y restablecer las relaciones interrumpidas. La confesión también incluía el buscar el perdón del Señor por medio de la oración y a través de cualquier canal pertinente del sacerdocio.
                    </p>
                    <p className='text-justify'>
                        Vimos que lo mejor era dar el paso 5 apenas hubiéramos completado el 4. Retrasarlo habría sido como tener una herida infectada y no limpiarla. El paso 5 parecía sobrecogedor, pero pedimos ayuda al Señor
                        y Él nos dio coraje y fuerza. Tras revisar nuestros inventarios, confesamos a nuestros obispos cualquier cosa ilegal, un pecado o un delito que nos hubiera impedido obtener una recomendación para el templo.
                        Esa apertura a la adecuada autoridad del sacerdocio constituyó una parte esencial de nuestra recuperación y curación.


                    </p>
                    <p className='text-justify'>
                        Además, escogimos a otra persona de confianza a la que poder explicar la naturaleza exacta de nuestros errores. Intentamos seleccionar a alguien que hubiera
                        pasado por los pasos 4 y 5 y que estuviera bien versado en el Evangelio. Comenzamos la reunión con una oración para invitar al Espíritu y a continuación leímos los inventarios en voz alta. Las personas que escuchaban nuestros inventarios a menudo nos ayudaban a identificar áreas persistentes de autoengaño, y nos ayudaron a poner nuestra vida en perspectiva y a evitar el exagerar o minimizar nuestra responsabilidad.


                    </p>
                    <p className='text-justify'>
                        Escribir los inventarios se asemejaba a registrar cientos de escenas diferentes de nuestra vida. En el paso 5 pudimos ver cómo nuestra vida se desdoblaba episodio tras episodio en una narración fluida. Al hacerlo, comenzamos a reconocer modelos de debilidades que habían influido en nuestras decisiones. Empezamos a comprender nuestra inclinación hacia el negativismo de nuestros pensamientos y emociones (obstinación, miedo, orgullo, autocompasión, celos, santurronería, ira, resentimiento, pasiones y deseos desbocados, etc.). Esos pensamientos y emociones eran en realidad la naturaleza exacta de nuestros males.

                    </p>
                    <p className='text-justify'>
                        Al completar el paso 5, demostramos ante Dios, ante nosotros mismos y ante otros testigos, nuestro compromiso de vivir una nueva vida firmemente basada en decir y vivir la verdad. Aunque el paso 5 fue uno de los más difíciles, recibimos aliento del consejo del presidente Spencer W. Kimball: “El arrepentimiento no se alcanza mientras uno no desnuda su alma y admite sus acciones sin excusas ni racionalizaciones... Las personas que han escogido encarar el asunto y transformar sus vidas descubren al principio que el arrepentimiento es el camino más duro, pero al probar sus frutos verán que es el sendero infinitamente más deseable” (“The Gospel of Repentance”, Ensign, octubre de 1982, pág. 4).

                    </p>
                    <p className='text-justify'>
                        Experimentamos la enseñanza del presidente Kimball. Al completar sincera y concienzudamente el paso 5, nos quedamos sin nada que esconder.
                        Mostramos abiertamente nuestro deseo de abandonar “todos [nuestros] pecados” (Alma 22:18) para poder recibir un mayor conocimiento del amor de Dios, y del amor y apoyo de muchas personas buenas que nos respaldaban.


                    </p>

                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Comience a buscar el perdón; busque el consejo de su obispo siempre que sea necesario; sea sincero con Dios, consigo mismo y con los demás
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            “Toda persona tiene el deber de confesar sus pecados al Señor para obtener Su perdón” (Guía para el Estudio de las Escrituras, “Confesar, Confesión”, pág. 36). Las transgresiones más serias deben confesarse a los líderes pertinentes del sacerdocio, por lo general al obispo: “Aunque sólo el Señor puede perdonar los pecados, estos líderes del sacerdocio tienen un papel vital en el proceso del arrepentimiento. Ellos mantendrán la naturaleza confidencial de tu confesión y te ayudarán en el proceso del arrepentimiento. Sé completamente honrado con ellos. Si sólo confiesas parcialmente, mencionando sólo errores menores, no podrás resolver una transgresión más seria que no se haya divulgado. Cuanto antes comiences el proceso, antes hallarás la paz y el gozo del milagro del perdón” (véase Leales a la fe: Una referencia del Evangelio, 2004, págs. 21–22).

                        </p>
                        <p className='text-justify'>
                            Tenga mucho cuidado y prudencia al seleccionar a alguien que no sea un líder del sacerdocio a quien revelar sus errores. No comparta información confidencial con personas de las que sospeche que pueden darle guía inadecuada, información errónea o que tengan dificultad para guardar una confidencia. Las personas con las que comparta su inventario, deben ser extraordinariamente dignas de confianza, tanto en palabra como en hechos.
                        </p>

                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Deje que la paz llegue a su vida

                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            El presidente Brigham Young aconsejó a los miembros que no revelaran innecesariamente sus pecados: “Cuando solicitamos a los hermanos, como hacemos con frecuencia, que hablen en las reuniones sacramentales, deseamos que, si han ofendido a su prójimo, confiesen sus faltas; pero no deben hablar de su conducta sin sentido que nadie más conoce, a excepción de
                            ellos mismos. Declaren en público lo que pertenezca al público. Si han pecado en contra del pueblo, confiésenselo. Si han pecado en contra de una familia o del vecindario, vayan a ellos y confiésenlo. Si han pecado en contra de su barrio, confiésenlo a su barrio. Si han pecado en contra de una persona, háblenle en privado y confiésenselo. Si han pecado en contra de Dios o de sí mismos, confiésenlo a Dios y guarden el asunto para ustedes, porque yo no quiero saber nada de ello”(Discourses of Brigham Young, selecciones de John A. Widtsoe, 1954, pág. 158).

                        </p>
                        <p className='text-justify'>
                            De vez en cuando verá a personas en las reuniones de recuperación o en otros lugares que repiten continuamente sus pecados y faltas o los pecados que otros han cometido contra ellos. Siempre están confesando, pero nunca hallan paz.
                        </p>
                        <p className='text-justify'>
                            No confunda el paso 5 con un deseo obsesivo de deleitarse en lo negativo. El propósito de este paso es precisamente lo contrario: lo damos no para asirnos a lo que confesamos, sino para comenzar a discernir por nosotros mismos el bien del mal y elegir el bien.
                        </p>


                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras y las citas de los líderes de la Iglesia pueden ayudarle a dar el paso 5. Válgase de ellos para meditarlos, estudiarlos y para realizar anotaciones. Recuerde ser sincero y específico con lo que escriba.
                </p>

                <h2 className='font-semibold text-lg' > Confesar ante Dios </h2>
                <p className='text-justify'>
                    “Yo, el Señor, perdono los pecados de aquellos que los confiesan ante mí y piden perdón” (D. y C 64:7).
                </p>

                <h2>
                    ¿Cómo le ayuda el confesar sus pecados a Dios a efectuar cambios positivos en su vida?

                </h2>
                <textarea onChange={(e) => saveResponse(54, e.target.value)} defaultValue={localStorage.getItem('pre54')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p54" id="p54" />
                <h2>
                    La mayoría de nosotros siente miedo y no desea dar el paso 5. ¿Cómo puede el confesar sus pecados a Dios darle valor y fuerza para finalmente confesarlos a otra persona?
                </h2>

                <textarea onChange={(e) => saveResponse(55, e.target.value)} defaultValue={localStorage.getItem('pre55')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p55" id="p55" />

                <h2 className='font-semibold text-lg'>
                    Confesar ante otras personas
                </h2 >
                <p className='text-justify'>
                    “Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados” (Santiago 5:16).

                </p>

                <h2>
                    Tal vez tema el rechazo por parte de alguien que pueda conocer sus debilidades y fracasos, pero un líder del sacerdocio o un amigo de confianza que comprenda el proceso de recuperación, generalmente reacciona con comprensión y compasión.
                    ¿Cómo puede tal reacción ayudarle a curarse?

                </h2>
                <textarea onChange={(e) => saveResponse(56, e.target.value)} defaultValue={localStorage.getItem('pre56')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p56" id="p56" />


                <h2 className='font-semibold text-lg'>
                    El mostrar una buena apariencia ante los demás
                </h2>
                <p className='text-justify'>
                    “Que ningún hombre dé a conocer su propia rectitud… antes bien confiese sus pecados, y entonces será perdonado y dará más fruto” (José Smith, en History of the Church, tomo IV, pág. 479).
                </p>
                <h2>
                    Una gran obsesión de quienes padecen alguna adicción es el gran deseo de mostrar una buena apariencia ante los demás. ¿Cómo puede ese deseo impedirle que mejore y dé “más fruto”
                    (o buenas obras)?

                </h2>

                <textarea onChange={(e) => saveResponse(57, e.target.value)} defaultValue={localStorage.getItem('pre57')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p57" id="p57" />

                <h2>
                    ¿Cómo cambiaría su conducta si se preocupara sólo de su apariencia ante Dios?
                </h2>
                <textarea onChange={(e) => saveResponse(58, e.target.value)} defaultValue={localStorage.getItem('pre58')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p58" id="p58" />



                <h2 className='font-semibold'>
                    Sinceridad
                </h2>
                <p className='text-justify'>
                    “Al que transgrediere contra mí, lo juzgarás de acuerdo con los pecados que haya cometido; y si confiesa sus pecados ante ti y mí, y se arrepiente con sinceridad de corazón, a éste has de perdonar, y yo lo perdonaré también” (Mosíah 26:29).

                </p>

                <h2>
                    Sea sincero al confesar sus pecados. Piense que el retener alguna parte de su confesión, socava la sinceridad de sus esfuerzos. ¿Qué parte de su inventario, si es que hay alguna, se siente usted tentado a ocultar?
                </h2>

                <textarea onChange={(e) => saveResponse(59, e.target.value)} defaultValue={localStorage.getItem('pre59')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p59" id="p59" />


                <h2>
                    ¿Qué gana usted al seguir escondiendo esa parte de su inventario? ¿Qué tiene usted que perder?
                </h2>
                <textarea onChange={(e) => saveResponse(60, e.target.value)} defaultValue={localStorage.getItem('pre60')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p60" id="p60" />


                <h2 className='font-semibold text-lg'>
                    Confiese sus pecados en cuanto los reconozca
                </h2>
                <p className='text-justify'>
                    “En este mismo año se les hizo saber su error, y confesaron sus faltas” (3 Nefi 1:25).

                </p>
                <h2>
                    Ese versículo ejemplifica a las personas que no demoraron la confesión de sus pecados apenas tienen conocimiento de ellos. ¿Qué beneficios encierra el dar el paso 5 inmediatamente después de concluido el 4?

                </h2>
                <textarea onChange={(e) => saveResponse(61, e.target.value)} defaultValue={localStorage.getItem('pre61')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p61" id="p61" />


                <h2>
                    ¿Qué devastadores efectos podría generar una demora en el paso 5?
                </h2>
                <textarea onChange={(e) => saveResponse(62, e.target.value)} defaultValue={localStorage.getItem('pre62')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p62" id="p62" />



                <h2 className='font-semibold text-lg'>
                    Mitigue su estrés y halle paz
                </h2>
                <p className='text-justify'>
                    “No persistiría en hablar de tus delitos, para atormentar tu alma, si no fuera para tu bien” (Alma 39:7).

                </p>
                <h2>
                    Algunos dirían que con los pasos 4 y 5 nos detenemos demasiado en los aspectos negativos de la vida y que eso no hace sino aumentar nuestro estrés. Este versículo nos enseña que el afrontar nuestras faltas puede beneficiarnos y no sólo “atormentarnos” (o angustiarnos). ¿Cómo pueden los pasos 4 y 5 aliviarle de su estrés y brindarle más paz?

                </h2>


                <h2 className='font-semibold text-lg'>
                    Abandone el pecado
                </h2>
                <p className='text-justify'>
                    “Por esto sabréis si un hombre se arrepiente de sus pecados: He aquí, los confesará y los abandonará” (D. y C. 58:43).
                </p>
                <h2>
                    Abandonar algo significa dejarlo por completo.
                    Al dar el paso 5, ¿cómo demuestra usted su deseo de abandonar sus antiguas costumbres?

                </h2>
                <textarea onChange={(e) => saveResponse(63, e.target.value)} defaultValue={localStorage.getItem('pre63')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p63" id="p63" />

                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/4')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/6')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>
            </section>

        </section>
    )
}
