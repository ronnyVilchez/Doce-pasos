import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoOcho = () => {
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
            <section className="relative z-10 sm:px-24 sm:py-12 sm:gap-5 sm:text-[1.5vw]  h-full p-6 flex flex-col gap-3 font-roboto">
                <h1 className='font-semibold text-xl sm:text-3xl  text-center'>PASO 8: LA BÚSQUEDA DEL PERDÓN</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Redacte una lista con los nombres de todas las personas a las que haya ofendido y dispóngase a reparar sus agravios. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Antes de nuestra recuperación, nuestro adictivo estilo de vida era como un tornado lleno de ener-
                        gía destructiva que afectaba nuestras relaciones y provocaba una gran destrucción. El paso 8 representó la oportunidad de establecer un plan para limpiar esas ruinas y reconstruir todo lo que pudiera salvarse.
                        Cuando sentimos el poder sanador de la misericordia del Salvador al trabajar en el paso 7, sentimos el anhelo de tender una mano amiga que reparara las relaciones rotas. Sin embargo, aprendimos que el correr impulsivamente para enmendar nuestros errores sin haber dedicado tiempo a orar y quizás también a consultar con un consejero de confianza, como un obispo u otro líder del sacerdocio, podría ser tan perjudicial como no subsanar nuestros errores. El paso 8 nos garantizaba que no haríamos daño a las personas cuando comenzáramos a ponernos en contacto con ellas en el paso 9.

                    </p>
                    <p className='text-justify'>
                        Antes de poder reconstruir relaciones era necesario detectar las que estaban dañadas. Comenzamos a anotar los nombres de las personas a las que habíamos ofendido, pero muchos no podíamos hacerlo sin que nos embargara cierto resentimiento hacia quienes nos habían ofendido a nosotros. Sinceramente, confesamos al Señor nuestros sentimientos negativos y como respuesta, Él nos indicó que nos enfrentábamos a la misma decisión que el hombre de la parábola al que, tras habérsele perdonado todas sus deudas, ahora tenía que perdonar las de los demás. Casi podíamos oír cómo el Señor nos decía: “Toda aquella deuda te perdoné porque me rogaste. ¿No debías tú también tener misericordia de tu consiervo, como yo tuve misericordia de ti?” (Mateo 18:32–33).
                    </p>
                    <p className='text-justify'>
                        Si usted se enfrenta a ese mismo problema, tal vez necesite hacer lo que hicimos muchos de nosotros. Antes de preparar la lista de las personas a las que debe pedir perdón, haga una lista de las personas a las que usted tiene que perdonar. No se sorprenda si hay nombres que aparecen en ambas listas. Con frecuencia notará que existen terribles ciclos de intercambios de ofensas, y para romper esos ciclos de resentimiento mutuo, alguien tiene que estar dispuesto a perdonar.
                    </p>
                    <p className='text-justify'>
                        Una vez más, escribir resultó ser una herramienta inestimable para iniciar el proceso del perdón. Junto a los nombres de las personas a las que necesitábamos perdonar, anotamos cómo nos sentimos cuando se registraron los dolorosos incidentes y lo que todavía teníamos inclinación a sentir. La lista nos ayudó a ser específicos en nuestras oraciones cuando compartíamos con el Padre todos nuestros asuntos pendientes. Suplicamos la gracia de Cristo, que nos ayudaría a tener con los demás la misma misericordia que Él tenía con nosotros. Si en la lista hallábamos nombres de personas a las nos costaba perdonar, seguíamos el consejo del Salvador de orar por su bienestar, pidiendo para ellos todas las bendiciones que deseábamos para nosotros mismos (véase Mateo 5:44).
                    </p>
                    <p className='text-justify'>
                        Al orar para recibir la ayuda que nos permitiera perdonar a los demás (aun cuando al principio no fuéramos del todo sinceros), finalmente fuimos bendecidos con un maravilloso sentido de compasión. Aun en casos extremos, las personas que han optado por ese tipo de acercamiento, han recibido la habilidad, más allá de su propia capacidad, para perdonar a los demás. Una hermana dedicó varias semanas a escribir sobre su infancia y a orar por su padre que había abusado de ella y ahora testifica con gozo de que el Salvador la libró de sus dolorosos y negativos sentimientos hacia su padre. Realizando un esfuerzo similar, aprendimos que redactando un inventario detallado de nuestros resentimientos y reconociéndolos ante el Salvador, finalmente dejamos de ser víctimas de quienes nos hicieron daño. Tras intentar sinceramente despojarnos de las ofensas recibidas, logramos terminar la lista de personas que esperábamos nos perdonaran a nosotros.
                    </p>
                    <p className='text-justify'>
                        Al llegar a este punto y comenzar su lista, solicite la guía del Señor. Las pautas siguientes pueden resultarle útiles. Pregúntese: “¿Hay o ha habido alguien en cuya presencia me sienta incómodo, avergonzado o violento?”. Escriba sus nombres y resista la tentación de justificar sus sentimientos o excusar sus acciones negativas hacia ellos. Incluya tanto a los que quiso herir intencionadamente como a los que no, a los que hayan fallecido y a los que no sabe cómo localizar. Estos casos especiales se abordarán en el paso 9. Por ahora, al dar el paso 8, céntrese en su disposición para ser riguroso y constante en su sinceridad.
                    </p>
                    <p className='text-justify'>
                        Para mayor exactitud, piense en las cosas que no hizo o que dejó sin terminar y que supusieron una ofensa para algunas personas. No olvide las cosas pequeñas y piense sinceramente en el daño que provocó al deleitarse en su adicción, aunque no se mostrara agresivo con las personas. Admita el daño que causó a sus seres queridos y amigos al ser irresponsable, irritable, crítico, impaciente e insincero. Busque cualquier cosa, grande
                        o pequeña, que supusiera una carga para otras personas
                        o que les apenara o causara dificultades. Busque mentiras, promesas incumplidas o indicios de manipulación de personas y anote el nombre de cada uno de los afectados. El inventario del paso 4 puede resultarle
                        una útil guía en este proceso.

                    </p>
                    <p className='text-justify'>
                        Finalmente, tras haber anotado los nombres de todas las personas a las que ha ofendido, añada un nombre más a la lista: el suyo. Mientras se deleitaba en sus adicciones, además hacer daño a otros, se dañaba a sí mismo.
                    </p>

                    <p className='text-justify'>
                        Durante el proceso del paso 8, recuerde que el objeto de este paso no es culpar ni avergonzar a nadie (ni a usted ni a nadie de las listas). El Salvador quitará las cargas de la culpa y la vergüenza a medida que usted reconozca con mayor sinceridad los problemas ocasionados en sus relaciones y su responsabilidad al respecto. Al estar dispuesto a reparar el mal hecho, recibirá la paz que le proporciona el saber que nuestro Padre Celestial está satisfecho con sus esfuerzos. Este paso le ayudará a tomar las medidas que le permitirán librarse de su pasado por medio del Salvador. Su disposición le prepara para el paso 9.
                    </p>

                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Perdónese a sí mismo y perdone a los demás; haga una lista de las personas a las que pueda haber ofendido o dañado
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Dar el paso 3 y confiar en Dios en todas las cosas puede equipararse a cambiar de anteojos y ver todo con ojos nuevos. Al tomar la decisión de rendir su voluntad a Dios, comenzará a experimentar el alivio y la dicha que se obtienen al buscar y hacer la voluntad del Padre Celestial.
                        </p>
                        <p className='text-justify'>
                            En el paso 8 comienza la sorprendente aventura de verse a sí mismo, a su prójimo y a la vida con la perspectiva de un nuevo corazón. Usted está preparado para aportar paz al mundo, en vez de contención y sentimientos negativos; está dispuesto a dejar de juzgar injustamente y de llevar un inventario de la vida y los errores de los demás; está preparado para dejar de excusar su propio comportamiento o de restarle importancia; está dispuesto a realizar otro inventario exhaustivo (esta vez el de las personas a las que ha hecho daño).
                        </p>
                        <p className='text-justify'>
                            Aunque la mera idea puede causarle pavor, puede llegar a estar dispuesto a encontrarse con las personas de esa lista cuando se presente la ocasión. Prepárese para hacer todo lo posible para reparar los daños. Viva con fe en el Señor y no tenga miedo de lo que puedan hacer los demás. El paso 8 puede ayudarle a desarrollar el deseo de vivir una vida basada en los principios y no en el miedo o la vergüenza.
                        </p>

                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Busque el don de la caridad; ore por los demás
                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Durante miles de años, la gente ha leído el gran discurso de Pablo sobre la caridad y ha tratado de adecuar su vida al mismo. Muchos se han esforzado por tener caridad, pero con frecuencia no lo han logrado.
                        </p>
                        <p className='text-justify'>
                            Los escritos del profeta Mormón aclaran el concepto de caridad y cómo obtenerla. Él definió la caridad como “el amor puro de Cristo” y enseñó que el Padre la da a los que “[oran] al Padre con toda la energía de [sus] corazones” y a “todos los que son discípulos verdaderos de su Hijo Jesucristo” (Moroni 7:47, 48).
                        </p>
                        <p className='text-justify'>
                            La caridad es un don que recibimos al aprender a seguir a Jesucristo y al amarle con todo nuestro corazón, mente y alma. Al rebosar de este amor puro de
                            Él y por Él, logramos amar a nuestro prójimo así como Él nos ha amado, y podemos perdonar las faltas de los demás y reparar nuestros errores.
                        </p>
                        <p className='text-justify'>
                            El siguiente ejercicio nos resultó útil en nuestro intento de reparar los daños cometidos por nuestros errores. Piense en alguien por quien haya tenido malos sentimientos y durante dos semanas arrodíllese y ore diariamente por esa persona. Lleve un registro de los cambios acaecidos en sus pensamientos y sentimientos por esa persona. (Véase Mateo 22:37–38; 1 Corintios 13;
                            1 Juan 4:19; Moroni 7:44–48.)

                        </p>

                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras y las citas de los líderes de la Iglesia pueden ayudarle a dar el paso 8. Válgase de ellos para meditarlos, estudiarlos y para realizar anotaciones.
                </p>

                <h2 className='font-semibold text-lg' > Sea un pacífico seguidor de Jesucristo </h2>
                <p className='text-justify'>
                    “Por tanto, quisiera hablaros a vosotros que sois de la iglesia, que sois los pacíficos discípulos de Cristo, y que habéis logrado la esperanza necesaria mediante la cual podéis entrar en el reposo del Señor, desde ahora en adelante, hasta que tengáis reposo con él en el cielo.
                </p>
                <p>
                    “Y juzgo esto de vosotros, mis hermanos, por razón de vuestra conducta pacífica para con los hijos de los hombres” (Moroni 7:3–4).
                </p>
                <h2>
                    Durante los primeros siete pasos, usted comenzó el proceso de ser un pacífico seguidor de Cristo. Al estar en paz con el Señor, está mejor preparado para estar en paz con su prójimo. ¿Qué otras cosas debe hacer para estar en paz con las personas que hay en su vida?
                </h2>
                <textarea onChange={(e) => saveResponse(89, e.target.value)} defaultValue={localStorage.getItem('pre89')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p89" id="p89" />
                <h2>
                    Escriba sobre la sabiduría que encierra el dar los pasos en orden.
                </h2>
                <textarea onChange={(e) => saveResponse(90, e.target.value)} defaultValue={localStorage.getItem('pre90')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p90" id="p90" />

                <h2 className='font-semibold text-lg'>

                    El amor perfecto del Señor
                </h2 >
                <p className='text-justify'>
                    “En el amor no hay temor, sino que el perfecto amor echa fuera el temor; porque el temor lleva en sí castigo. De donde el que teme, no ha sido perfeccionado en el amor.
                </p>
                <p>
                    “Nosotros le amamos a él, porque él nos amó primero” (1 Juan 4:18–19).
                </p>

                <h2>
                    Puede que la idea de reparar el daño causado le asuste si se obsesiona en hacerlo a la perfección.
                    ¿Cómo puede su confianza en el amor perfecto del Señor por usted y por la persona de la que desea obtener el perdón fortalecer su determinación de efectuar una restitución siempre que sea posible?
                </h2>
                <textarea onChange={(e) => saveResponse(91, e.target.value)} defaultValue={localStorage.getItem('pre91')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p91" id="p91" />



                <h2 className='font-semibold text-lg'>

                    Tienda la mano a los demás
                </h2>
                <p className='text-justify'>
                    “No juzguéis, y no seréis juzgados; no condenéis y no seréis condenados; perdonad, y seréis perdonados.
                </p>
                <p>
                    “Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir.” (Lucas 6:37–38).
                </p>
                <h2>
                    Aunque tal vez tema que haya quien rechace sus intentos por hacer las paces, no deje que ello le impida poner sus nombres en la lista y prepararse para tender una mano amiga. Las bendiciones son mucho mayores que el dolor. Estudie estos versículos y escriba sobre las bendiciones que conlleva el deseo de reparar los agravios.
                </h2>

                <textarea onChange={(e) => saveResponse(92, e.target.value)} defaultValue={localStorage.getItem('pre92')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p92" id="p92" />

                <p>
                    “Cuanto más nos acerquemos a nuestro Padre Celestial, tanto más habrá en nosotros la disposición de sentir misericordia hacia las almas que están pereciendo; sentiremos el deseo de llevarlas sobre nuestros hombros y echar sus pecados a nuestras espaldas... si queréis que Dios os tenga misericordia, sed misericordiosos los unos con los otros” (José Smith, en History of the Church, tomo V, pág. 24).
                </p>

                <h2>
                    Considere la importancia de orar en el momento de la tentación y escriba cómo la oración fortalecerá su humildad y su fe en Cristo.
                </h2>
                <textarea onChange={(e) => saveResponse(93, e.target.value)} defaultValue={localStorage.getItem('pre93')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p93" id="p93" />

                <h2>
                    Sin Jesucristo, no somos más que almas imperfectas que perecen. ¿Cómo le ayuda el saber que al dar el paso 8 es usted un alma que perece preparándose para reparar los errores que cometió contra otra alma que también perece?
                </h2>
                <textarea onChange={(e) => saveResponse(94, e.target.value)} defaultValue={localStorage.getItem('pre94')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p94" id="p94" />

                <h2 className='font-semibold'>
                    Perdone y busque el perdón
                </h2>
                <p className='text-justify'>
                    “Entonces se le acercó Pedro y le dijo: Señor, ¿cuántas veces perdonaré a mi hermano que peque contra mí?
                    ¿Hasta siete?
                </p>
                <p>
                    “Jesús le dijo: No te digo hasta siete, sino aún hasta setenta veces siete” (Mateo 18:21–22).
                </p>

                <h2>
                    Perdonar y pedir perdón por una tontería es más fácil que perdonar o pedir perdón por reiteradas situaciones repletas de ofensas. Piense en las relaciones pasadas y presentes en las que se sucedieron múltiples ofensas que requerirán el perdón. ¿Cómo puede fortalecerse para perdonar y ser perdonado?
                </h2>

                <textarea onChange={(e) => saveResponse(95, e.target.value)} defaultValue={localStorage.getItem('pre95')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p95" id="p95" />


                <h2>

                    ¿De qué modo Jesucristo constituye el mayor ejemplo de capacidad de perdón? Considere Su disposición para ayudarle a que usted perdone a su prójimo.
                </h2>
                <textarea onChange={(e) => saveResponse(96, e.target.value)} defaultValue={localStorage.getItem('pre96')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p96" id="p96" />

                <p>

                    “Os digo que debéis perdonaros los unos a los otros; pues el que no perdona las ofensas de su hermano, queda condenado ante el Señor, porque en él permanece el mayor pecado.

                </p>
                <p>
                    “Yo, el Señor, perdonaré a quien sea mi voluntad perdonar, mas a vosotros os es requerido perdonar a todos los hombres” (D. y C. 64:9–10).
                </p>
                <h2>
                    Jesús enseñó que el no perdonar a los demás es un pecado mayor que la ofensa inicial. ¿De qué modo el negarse a perdonar a su prójimo o a
                    sí mismo equivale a negar la Expiación que el Salvador efectuó por los pecados?
                </h2>
                <textarea onChange={(e) => saveResponse(97, e.target.value)} defaultValue={localStorage.getItem('pre97')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p97" id="p97" />

                <h2>
                    ¿Cómo pueden el resentimiento y la amargura dañarle física, emocional y espiritualmente?
                </h2>
                <textarea onChange={(e) => saveResponse(98, e.target.value)} defaultValue={localStorage.getItem('pre98')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p98" id="p98" />

                <h2 className='font-semibold text-lg'>
                    Rompa el ciclo de la amargura y la ofensa
                </h2>
                <p className='text-justify'>
                    “Nada tiene mayor efecto en una persona para inducirla a abandonar el pecado, que llevarla de la mano y velar por ella con ternura. Cuando las personas me manifiestan la más mínima bondad y amor, ¡oh, qué poder ejerce aquello en mi alma!; mientras que un curso contrario tiende a agitar todos los sentimientos ásperos y contristar la mente humana” (José Smith, en History of the Church, tomo V, págs. 23–24).
                </p>
                <h2>
                    El profeta José Smith describió acerca de cómo la amabilidad conduce al arrepentimiento y al perdón. Medite en su disposición para ser el que rompa el ciclo de la amargura y de la ofensa,
                    y escriba al respecto.

                </h2>
                <textarea onChange={(e) => saveResponse(99, e.target.value)} defaultValue={localStorage.getItem('pre99')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p99" id="p99" />


                <h2>
                    •	Piense en las personas que le han mostrado amabilidad y amor. ¿Cómo le inspiraron o motivaron sus acciones a obrar de otro modo?
                </h2>
                <textarea onChange={(e) => saveResponse(100, e.target.value)} defaultValue={localStorage.getItem('pre100')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p100" id="p100" />

                <h2>
                    Analice las relaciones problemáticas de su vida.
                    ¿Cómo podrían llegar a cambiar si usted tendiera a su prójimo una mano amorosa y bondadosa?
                </h2>
                <textarea onChange={(e) => saveResponse(101, e.target.value)} defaultValue={localStorage.getItem('pre101')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p101" id="p101" />


                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/7')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/9')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
