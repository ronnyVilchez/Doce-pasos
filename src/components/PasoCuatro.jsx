import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoCuatro = () => {
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
                <h1 className='font-semibold text-xl text-center'>PASO 4: LA VERDAD</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Escudríñese y realice un valiente inventario moral por escrito de sí mismo. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Al dar el paso 3 decidió confiar en el Señor y le entregó su voluntad y su vida. En el paso 4 mostrará su disposición para confiar en Dios. Escudríñese y realice un valiente inventario por escrito de su vida, haciendo un estudio o un resumen de los pensamientos, los acontecimientos, las emociones y los hechos de su vida, creando un inventario lo más completo posible.

                    </p>
                    <p className='text-justify'>
                        No será fácil hacer una biografía valiente y detallada. Con valiente no queremos decir que no vaya a sentir temor. Seguramente la contemplación de su vida ahondará en muchas emociones, incluidas la pena, la vergüenza y el miedo. Valiente significa que no dejará que sus miedos le impidan llevar a cabo un inventario minucioso. El paso 4 equivale a un compromiso para ser rigurosamente sincero al centrarse en los hechos de su vida, concretamente en sus propias debilidades y no en las de los demás.

                    </p>
                    <p className='text-justify'>
                        Tal vez en el pasado justificara su mala conducta y culpara a otras personas, lugares o circunstancias de los problemas que usted había ocasionado. Ahora comenzará a aceptar la responsabilidad por sus acciones pasadas y presentes, aun cuando tenga que reconocer hechos, pensamientos, emociones o acciones dolorosas, vergonzosas o difíciles.

                    </p>
                    <p className='text-justify'>
                        Si la idea de realizar un inventario minucioso y valiente de usted mismo le abruma, sepa que no está solo. Entendemos cómo se siente. Recordamos nuestra dificultad para hallar la disposición necesaria para completar este paso. Muchos nos preguntamos si deberíamos evitar por completo el paso 4 y aun así podríamos superar nuestras adicciones; pero finalmente tuvimos que creer las palabras de quienes nos precedieron: “Sin un inventario moral minucioso y valiente... la fe que realmente funciona en el diario vivir sigue estando fuera de nuestro alcance” (Twelve Steps and Twelve Traditions, 1981, pág. 43).

                    </p>
                    <p className='text-justify'>
                        La adicción paralizaba nuestra capacidad de reflexionar sinceramente en nuestra vida y nos limitaba para comprender el daño y los estragos (las responsabilidades) que causaba en todas nuestras relaciones. Antes de llegar a confiar plenamente en el Salvador, necesitábamos una infraestructura mediante la cual Él nos ayudara a enfrentarnos a nuestro pasado con sinceridad. El paso 4 nos brindó ese marco; era el “enérgico y meticuloso esfuerzo por descubrir nuestras responsabilidades presentes y pasadas” (Twelve Steps and Twelve Traditions, pág. 42).

                    </p>
                    <p className='text-justify'>
                        El inventario también era un paso para armonizar nuestra vida con la voluntad de Dios. Por medio de él identificamos los pensamientos, las emociones y las acciones negativas que nos gobernaban. Al descubrir esos elementos destructivos en nuestra vida, dimos el primer paso para corregirlos. No fue fácil hacer el inventario, pero ese paso nos permitió recibir más fe y esperanza, necesarias para proseguir con nuestra recuperación y para superar la adicción.
                    </p>

                    <section onClick={() => { setmod2(!mod2) }}>
                        {
                            mod2 ? <span className='font-semibold cursor-pointer  flex justify-center' >Cómo se hace un inventario <img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                                : <span className='font-semibold cursor-pointer flex justify-center' >Cómo se hace un inventario <img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                        }
                    </section>
                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>

                        <p className='text-justify'>
                            Una vez admitida la necesidad del paso 4, las preguntas que surgieron fueron: “Pero, ¿cómo hago un inventario? ¿Qué se necesita?”. Un inventario es un proceso muy personal y no existe una única manera de hacerlo. Puede preguntarle a otros que ya lo hayan hecho y buscar la guía del Señor para hacer el suyo propio. Él le ayudará a ser fidedigno y amoroso al ordenar sus recuerdos y sentimientos.

                        </p>
                        <p className='text-justify'>
                            Una manera de hacer un inventario consiste en anotar recuerdos de personas, instituciones u organizaciones; principios, ideas o creencias, así como hechos, situaciones o circunstancias que provocan sentimientos positivos o negativos (tristeza, pesar, ira, resentimiento, miedo, rencor). Algunos puntos de la lista pueden aparecer múltiples veces. No importa. De momento no intente ordenarlos, juzgarlos o analizarlos. Ahora, lo importante es ser lo más minucioso posible.

                        </p>

                        <p className='text-justify'>

                            Al efectuar el inventario, mire más allá de sus comportamientos pasados y examine los pensamientos, los sentimientos y las creencias que provocaron tales conductas. En realidad, los pensamientos, los sentimientos y las creencias son la raíz de su adicción. A menos que examine sus inclinaciones hacia el miedo, el orgullo, el resentimiento, la ira, el egoísmo y la autocompasión, su abstinencia, en el mejor de los casos, será débil y continuará con su adicción original o se pasará a otra. Su adicción es un síntoma de otras “causas y condiciones” (Alcoholics Anonymous, 2001, pág. 64).

                        </p>
                        <p className='text-justify'>

                            Algunas personas organizan sus vidas según la edad, los cursos escolares, sus lugares de residencia o las relaciones que han mantenido. Otras simplemente anotan todo lo que les viene a la cabeza. Lo más probable es que no recuerde todo de inmediato.
                            Continúe apoyándose en la oración y permita que el Señor le ayude a recordar. No dé por zanjado este proceso; siga trabajando en el inventario según afloren los recuerdos.

                        </p>

                        <p className='text-justify'>
                            Una vez concluida la lista, busque la guía del Señor para aprender de cada recuerdo. Algunas personas organizan esta parte del inventario en una tabla o gráfica con columnas bajo cada uno de los encabezamientos que se indican a continuación con comentarios breves. Otros crean una página para cada entrada de su lista y entonces anotan respuestas en cada una de las cinco categorías.

                        </p>
                        <p className='text-justify'>
                            <p>
                                <strong>Incidente.</strong> ¿Qué sucedió? Aporte una breve descripción de su recuerdo de lo sucedido. Concéntrese en resumir y no tanto en redactar.
                            </p>
                            <p>
                                <strong>Efecto.</strong> ¿Qué efecto tuvo en usted y en otras personas?
                            </p>
                            <p>
                                <strong> Sentimientos.</strong> ¿Cómo se sintió durante el incidente? ¿Cómo se siente ahora al respecto? ¿Cómo han contribuido a ello sus temores?
                            </p>
                            <p>
                                <strong>Autoevaluación.</strong> ¿Qué papel desempeñaron sus puntos débiles y fuertes en la situación? ¿Puede ver restos de orgullo, autocompasión, autoengaño o egoísmo en sus actitudes y hechos? Asegúrese de anotar también las ocasiones en las que obró correctamente.
                            </p>
                            <p>
                                El Espíritu Santo puede ayudarle a ser humilde y a afrontar la verdad, aunque sea dolorosa. Con la ayuda del Señor, usted podrá reconocer sus puntos fuertes y los débiles (véase Éter 12:27). Las siguientes preguntas pueden serle útiles:
                            </p>

                            <li>¿Qué resultado deseaba en esta situación y por qué? </li>
                            <li>¿Cómo traté de controlar la situación? </li>
                            <li>¿Era algo de mi incumbencia? </li>
                            <li>¿Qué hice u omití para alcanzar lo que deseaba? </li>
                            <li>¿Ignoré la realidad? </li>
                            <li>¿Era razonable lo que esperaba de mí y de los demás</li>
                            <li>¿Engañé a otros o a mí mismo? </li>
                            <li>¿Ignoré los sentimientos de los demás y pensé sólo en mí mismo? </li>
                            <li>¿Me hice la víctima para controlar a los demás y recibir atención, simpatía, sentirme especial, etc.? </li>
                            <li>¿Insistí en tener razón?</li>
                            <li>¿Me ofendió la falta de reconocimiento o de consideración?</li>
                            <p>
                                <strong> Consejo inspirado.</strong> ¿Qué consejo ofrece el Señor sobre ese incidente? Recuerde que, cuando se somete al Señor, no tiene nada que temer. Usted está aquí para aprender a discernir el bien del mal y el Salvador puede ayudarle a perdonarse a sí mismo y a perdonar a los demás. Anote sus pensamientos e impresiones mientras medita en el consejo inspirado que obtenga de las Escrituras y de los líderes de la Iglesia.
                            </p>
                        </p>
                    </section>

                    <section onClick={() => { setmod3(!mod3) }}>
                        {
                            mod3 ? <span className='font-semibold cursor-pointer  flex justify-center' >Cuatro elementos necesarios <img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                                : <span className='font-semibold cursor-pointer flex justify-center' >Cuatro elementos necesarios <img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>

                        <p className='text-justify'>

                            Hay cuatro elementos vitales en todo inventario moral de éxito: escribir, ser sincero, buscar apoyo y orar. Estos elementos de un inventario moral le ayudarán a reconocer y superar sus pecados y faltas.
                        </p>
                        <p className='text-justify'>
                            <strong>Escribir.</strong> El inventario de su vida tendrá mayor eficacia si lo escribe. Usted puede tener en sus manos una lista escrita, revisarla y consultarla cuando sea necesario. Los pensamientos que no se escriben se olvidan fácilmente y las distracciones pueden interrumpirle.
                            Al escribir su inventario moral, podrá pensar más claramente sobre los acontecimientos de su vida y concentrarse en ellos con menor distracción.

                        </p>
                        <p className='text-justify'>
                            Algunas personas intentan evitar el escribir su inventario moral pues sienten vergüenza o temor por su destreza para escribir o temen que alguien llegue a leer lo que han escrito. No deje que esos temores le detengan. No se preocupe por su ortografía, su gramática, su caligrafía o su mecanografiado. Escriba todo en mayúsculas, si necesita hacerlo así, pero ponga su inventario por escrito. Mientras no lo refleje de manera tangible, no habrá completado el paso 4. Una vez terminado, recuerde que el perfeccionismo (el intentar que su inventario sea perfecto y agrade a los demás), puede impedirle que sea completo.


                        </p>
                        <p className='text-justify'>
                            Es posible que su temor a que alguien lea lo que ha escrito tenga una base sólida, pero puede superarlo. Todo el que ha hecho un inventario ha tenido que afrontar ese miedo. Hicimos todo lo posible por conservar la privacidad de nuestros escritos para entonces encomendar los resultados a Dios. Tuvimos que ocuparnos más de nuestra curación que del ego o la reputación. El inventario requería que solicitáramos continuamente la ayuda de Dios y le pidiéramos que nos protegiera y guiara durante su elaboración. Recuerde que el paso 4 es el abandono de cualquier atisbo de vergüenza para admitir su necesidad de arrepentirse. Si usted ora para saber en qué forma debe conservar el carácter privado de las páginas de su inventario, el Señor le guiará para hacerlo de la mejor manera posible.

                        </p>
                        <p className='text-justify'>
                            <strong>Ser sincero. </strong>Ser sincero consigo mismo sobre las facetas pecaminosas de su vida puede constituir una experiencia aterradora. La gente suele evitar dedicar tiempo a escrutarse en el espejo del pasado, pues temen que, al hacerlo, aflore la realidad de lo que es su vida. Cuando dé el paso 4, debe enfrentarse abiertamente a la verdad de su vida y a sus miedos.

                        </p>
                        <p className='text-justify'>
                            Su inventario no sólo le permitirá descubrir sus debilidades, sino comprender y apreciar mejor sus puntos fuertes. Anote en su inventario las cosas buenas y positivas que haya hecho. En realidad, usted es una combinación de puntos fuertes y puntos débiles.
                            Cuando esté dispuesto a ver toda la verdad sobre su pasado, tanto lo bueno como lo malo, permitirá que los poderes del cielo le revelen la verdad y le ayuden a poner esa época de su vida en la perspectiva adecuada. El Señor le ayudará a cambiar el curso de su vida y cumplir con su potencial divino. Aprenderá que usted es como cualquier otra persona, con puntos fuertes y puntos débiles, y así podrá verse igual a los demás.

                        </p>
                        <p className='text-justify'>
                            <strong> Buscar apoyo.</strong> El ánimo y apoyo que le brinden aquellos que comprenden la recuperación pueden ayudarle y guiarle a descubrir el método, la estructura o el acercamiento que le dé mejor resultado al revisar su pasado, y alentarle cuando se desanime.

                        </p>
                        <p className='text-justify'>
                            <strong>Orar.</strong> Al reflexionar en la magnitud del paso 4 y el desafío que representa, piense en cómo le ha ayudado el Señor en cada paso anterior. Al volverse a Dios en busca de consuelo, valor y orientación, halló la ayuda que le acompañará durante el proceso del inventario. Pablo enseñó que Dios, es el “Dios de toda consolación, el cual nos consuela en todas nuestras tribulaciones” (2 Corintios 1:3–4). Si ora cada vez que se siente a escribir su inventario, Dios le ayudará.
                            Conocerá esta realidad al dar este paso, aparentemente imposible. Dios puede estar y estará siempre con usted si se lo pide.

                        </p>
                    </section>

                    <section onClick={() => { setmod4(!mod4) }}>
                        {
                            mod4 ? <span className='font-semibold cursor-pointer  flex justify-center' >Libérese del pasado <img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                                : <span className='font-semibold cursor-pointer flex justify-center' >Libérese del pasado <img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                        }
                    </section>

                    <section className={`${mod4 ? 'flex' : 'hidden'} flex-col gap-1`}>

                        <p className='text-justify'>
                            A algunas personas les preocupa la idea de volver la vista al pasado por miedo a crear inadvertidamente un falso recuerdo a partir de impresiones vagas o exageradas. Al hacer su inventario, eche mano únicamente de aquellos recuerdos que pueda abordar con sencillez y minuciosidad. Volvemos a insistir en que la clave reside en la confianza que deposite en Dios. Si realiza el inventario orando con sinceridad, con verdadera intención, teniendo fe en Jesucristo, podrá confiar en que Él le ayudará a recordar todo lo que le vaya a ayudar en su recuperación.

                        </p>
                        <p className='text-justify'>
                            Un fruto glorioso del paso 4 es que habrá dado un paso de gigante para librarse de las conductas que definen su pasado. El reflejo que obtenga de sí mismo al completar este paso puede inspirarle, si así se lo permite, a reorientar su vida. Gracias al amor y a la gracia del Salvador, usted puede cambiar y ser mejor de lo que ha sido. Al acudir al Señor en busca de guía durante el examen de su vida, logrará considerar sus experiencias como oportunidades de aprendizaje, y se dará cuenta de que el dejar al descubierto las debilidades que durante tanto tiempo le han hecho sufrir, le permitirá encauzarse en una nueva vida.
                        </p>
                    </section>

                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod5(!mod5) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Escriba un diario personal; busque la guía del Espíritu Santo
                        </h2>
                        {
                            !mod5 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod5 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Para muchos de nosotros, el hacer un inventario suponía nuestro primer intento de escribir sobre nuestra vida. El diario personal constituye un elemento clave en el proceso de recuperación. A menudo, los profetas del Señor nos han enseñado sobre la importancia de los diarios; por ejemplo, el presidente Spencer W. Kimball aconsejó: “Escriban... sobre sus idas y venidas, sobre sus más profundos sentimientos, sobre sus logros y sus fracasos, sus relaciones y sus triunfos, sus impresiones y sus testimonios” (“The Angels May Quote from It”, New Era, octubre de 1975, pág. 5).
                        </p>
                        <p className='text-justify'>
                            Al escribir sobre su vida con espíritu de oración, tendrá la oportunidad de que el Espíritu Santo le ayude a ver las lecciones potenciales que se desprenden de cada una de sus experiencias. Si no está escribiendo un diario actualmente, le animamos a que empiece ya. Si ya lo está haciendo, le alentamos a redoblar sus esfuerzos para que el Señor, por medio de Su Espíritu, le enseñe y enriquezca su entendimiento.
                        </p>

                    </section>
                </section>

                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod6(!mod6) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Elabore un relato de su vida pasada y presente

                        </h2>
                        {
                            !mod6 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod6 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Completar un inventario requiere tiempo. No conviene apresurarse, pero sí es imperativo que lo empiece ya. No importa tanto por dónde empezar como el examinar su pasado más remoto, hasta donde su memoria y la inspiración del Señor se lo permitan. Escriba según los recuerdos vayan llegando a su mente. Sus escritos son privados y los compartirá únicamente con alguien de confianza que le apoye, a quien usted seleccionará por medio de la oración durante el paso 5. Su inventario trata de usted y de su relación consigo mismo, con Dios y con los demás. Según vaya cobrando valor para verse como es en realidad, Dios abrirá sus ojos y comenzará a verse como Él lo ve: un hijo Suyo con un linaje divino. Dé el paso y diríjase hacia ese legado.
                        </p>
                    </section>
                </section>

                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod7(!mod7) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            No recuerde más sus pecados
                        </h2>
                        {
                            !mod7 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod7 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Una vez completado el inventario por escrito, y llegado el momento adecuado, destruya las partes del mismo que contengan expresiones coléricas o negativas, relatos de transgresiones personales y cualquier otro asunto delicado que no se deba compartir con otras personas ni transmitirse a las generaciones futuras. La destrucción de esas partes de sus escritos puede ser un símbolo de su arrepentimiento y un poderoso modo de terminar con esos aspectos de su vida. El Señor prometió a Jeremías refiriéndose a Su pueblo: “Porque perdonaré la maldad de ellos, y no me acordaré más de su pecado” ( Jeremías 31:34). Sigamos el ejemplo del Señor perdonando nuestros pecados y los de los demás.
                        </p>

                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras y las citas de los líderes de la Iglesia pueden ayudarle a dar el paso 4. Válgase de ellos para meditarlos, estudiarlos y para realizar anotaciones. Recuerde ser sincero y específico con lo que escriba.
                </p>

                <h2 className='font-semibold text-lg' > Revise su vida </h2>
                <p className='text-justify'>
                    “Con todo amor y sinceridad, te invito a examinar tu vida. ¿Te has desviado de las normas de la felicidad? ¿Hay algún rincón oscuro que debas limpiar? ¿Estás haciendo algo que sabes que es malo? ¿Tienes pensamientos impuros? Cuando estás a solas, pensando con claridad, ¿te dice la conciencia que te arrepientas?
                </p>

                <p className='text-justify'>
                    “Te ruego que te arrepientas para lograr paz ahora y la felicidad eterna después. Abre tu corazón al Señor y pídele ayuda. Te ganarás la bendición del perdón, la paz y el conocimiento de haber sido purificado y de saber que eres íntegro otra vez. Ten el valor de pedirle al Señor que te dé fuerzas para arrepentirte ahora” (“Busquemos el perdón”, Richard G. Scott, julio de 1995, pág. 85).
                </p>

                <h2>
                    El paso 4 es una manera de seguir el consejo del élder Scott. Reserve algún momento de quietud para orar con el fin de recibir dirección y valor para revisar su vida. Ore con objeto de encontrar el tiempo para la autoevaluación y anote las ideas que reciba al considerar las preguntas del élder Scott.

                </h2>
                <textarea onChange={(e) => saveResponse(44, e.target.value)} defaultValue={localStorage.getItem('pre44')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p44" id="p44" />



                <h2 className='font-semibold text-lg'>
                    Admita el pasado
                </h2 >
                <p className='text-justify'>
                    “¡Apartaos de vuestros pecados! Sacudid de vosotros las cadenas de aquel que quiere ataros fuertemente; venid a aquel Dios que es la roca de vuestra salvación” (2 Nefi 9:45).

                </p>

                <h2>
                    Apartarse de los pecados y sacudirse las cadenas de la adicción no puede comenzar mientras no reconozca la existencia de esos pecados y cadenas. Escriba sobre la resistencia que siente al pensar en ser completamente sincero para reconocer su pasado.

                </h2>
                <textarea onChange={(e) => saveResponse(45, e.target.value)} defaultValue={localStorage.getItem('pre45')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p45" id="p45" />

                <h2 className='font-semibold text-lg'>
                    Reemplace la negación con la verdad
                </h2>
                <p className='text-justify'>
                    “Si decimos que no tenemos pecado, nos engañamos a nosotros mismos, y la verdad no está en nosotros” (1 Juan 1:8).
                </p>
                <h2>
                    La negación, o el autoengaño, constituye una de las principales características de la adicción y se produce cuando la persona niega tener un problema. ¿Qué efectos sanadores pueden verificarse cuando se reemplaza la negación con la verdad?
                </h2>

                <textarea onChange={(e) => saveResponse(46, e.target.value)} defaultValue={localStorage.getItem('pre46')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p46" id="p46" />

                <h2>
                    ¿Cómo puede el paso 4 ayudarle a cumplir con esa tarea?
                </h2>
                <textarea onChange={(e) => saveResponse(47, e.target.value)} defaultValue={localStorage.getItem('pre47')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p47" id="p47" />

                <h2 className='font-semibold'>
                    La esperanza de la recuperación
                </h2>
                <p className='text-justify'>
                    “Sí, me acordaba de todos mis pecados e iniquidades, por causa de los cuales yo era atormentado con las penas del infierno; sí, veía que me había rebelado contra mi Dios y que no había guardado sus santos mandamientos” (Alma 36:13).

                </p>

                <h2>
                    El recuerdo de sus pecados puede ser doloroso, pero también puede encauzarle hacia una nueva vida de paz (véase Alma 36:19–21). Pregunte a alguien que haya completado ese paso cómo le ayudó el hacerlo. ¿Cómo puede ayudarle la esperanza de la recuperación a pasar del dolor del remordimiento a la alegría del perdón?
                </h2>

                <textarea onChange={(e) => saveResponse(48, e.target.value)} defaultValue={localStorage.getItem('pre48')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p48" id="p48" />



                <h2 className='font-semibold text-lg'>
                    La verdad
                </h2>
                <p className='text-justify'>
                    “Por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas” (Moroni 10:5).

                </p>
                <h2>
                    A algunas personas les cuesta recordar o reconocer la dolorosa verdad de su pasado, pero el Espíritu Santo puede ayudarle a recordar y consolarle al dar el paso 4. Usted puede recibir esas bendiciones aun cuando no tenga el don del Espíritu Santo. Escriba cómo puede el Espíritu Santo guiarle en el proceso del inventario.

                </h2>
                <textarea onChange={(e) => saveResponse(49, e.target.value)} defaultValue={localStorage.getItem('pre49')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p49" id="p49" />


                <h2>
                    ¿Por qué es importante conocer la verdad sobre su situación actual?
                </h2>
                <textarea onChange={(e) => saveResponse(50, e.target.value)} defaultValue={localStorage.getItem('pre50')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p50" id="p50" />

                <h2>
                    ¿Por qué es importante conocer la verdad de que usted es un hijo de Dios?
                </h2>
                <textarea onChange={(e) => saveResponse(51, e.target.value)} defaultValue={localStorage.getItem('pre51')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p51" id="p51" />


                <h2 className='font-semibold text-lg'>
                    Puntos débiles y puntos fuertes
                </h2>
                <p className='text-justify'>
                    “Si los hombres vienen a mí, les mostraré su debilidad. Doy a los hombres debilidad para que sean humildes; y basta mi gracia a todos los hombres que se humillan ante mí; porque si se humillan ante mí, y tienen fe en mí, entonces haré que las cosas débiles sean fuertes para ellos” (Éter 12:27).


                </p>
                <h2>
                    Aplique este versículo a su vida copiándolo e insertando su nombre, como si el Señor le estuviera hablando directamente a usted. Escriba los pensamientos que tenga sobre este pasaje y su aplicación personal.

                </h2>
                <textarea onChange={(e) => saveResponse(52, e.target.value)} defaultValue={localStorage.getItem('pre52')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p52" id="p52" />



                <h2 className='font-semibold text-lg'>
                    “La verdad os hará libres”
                </h2>
                <p className='text-justify'>
                    “Conoceréis la verdad, y la verdad os hará libres” (Juan 8:32).
                </p>
                <h2>
                    Ser honrado consigo mismo y con el Señor, a quien también se conoce como el “Espíritu de verdad” (D. y C. 93:9), es la clave para liberarse de las mentiras que le esclavizan. A medida que lo conozca, el poder y la presencia del Señor en su vida le librarán de la adicción. ¿De qué modo el reconocimiento de la verdad puede mejorar su relación con Jesucristo?

                </h2>
                <textarea onChange={(e) => saveResponse(53, e.target.value)} defaultValue={localStorage.getItem('pre53')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p53" id="p53" />

                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/3')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/5')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>

            </section>

        </section>
    )
}
