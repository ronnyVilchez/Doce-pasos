import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoDiez = () => {
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
                <h1 className='font-semibold text-xl sm:text-3xl text-center'>PASO 10: LA RESPONSABILIDAD DIARIA</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Prosiga con su inventario personal y cada vez que cometa un error, admítalo sin dilación. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Al llegar al paso 10 ya está usted preparado para un nuevo modo de vida. Los primeros nueve pasos
                        le han ayudado a aprender un modelo de vida basado en principios espirituales. Ahora, esos principios se convierten en la base del resto de su vida.

                    </p>
                    <p className='text-justify'>
                        Al dar los primeros nueve pasos, usted ha aplicado principios del Evangelio como la fe en el Señor Jesucristo y el arrepentimiento, y ha visto milagrosos cambios en su vida. Ha experimentado amor y tolerancia, y ha cultivado el deseo de tener paz. Sus deseos hacia la adicción casi han desaparecido y al sentir la tentación, suele huir de ella en vez de ceder a ella. Siente humildad y reverencia por lo que nuestro Padre Celestial ha hecho por usted, cosa que hubiera sido imposible hacer por sí mismo.

                    </p>
                    <p className='text-justify'>
                        Los tres pasos finales le ayudarán a mantener su nueva orientación espiritual en la vida, por lo que a menudo se les define como pasos de mantenimiento.
                    </p>

                    <p className='text-justify'>
                        La autoevaluación durante toda la vida no es un concepto nuevo. En el Libro de Mormón, Alma enseñó que mantener un poderoso cambio de corazón requiere esfuerzo; versículo tras versículo nos indica que una autoevaluación sincera y concienzuda, así como un arrepentimiento inmediato, deben formar parte continua de la vida (véase Alma 5:14–30). Para conservar lo que usted ha obtenido es preciso mantenerse en la adecuada forma espiritual, lo cual se lleva a cabo por medio de las preguntas que Alma sugiere sobre sus sentimientos, pensamientos, motivos y conducta. La autoevaluación diaria impedirá que caiga en la negatividad y la autocomplacencia.

                    </p>
                    <p className='text-justify'>
                        Como aprendió en los pasos 4 y 5, un inventario sólo de conductas no basta para cambiar su corazón; es preciso examinar sus pensamientos y sentimientos. Este principio es igual de válido en el paso 10. Continúe cuidándose del orgullo en todas sus formas y entregue humildemente todas sus debilidades a nuestro Padre Celestial, tal como aprendió en los pasos 6 y 7. Si siente preocupación, autocompasión, inquietud, ansiedad, resentimiento, orientación carnal o miedo en cualquiera de sus manifestaciones, vuélvase inmediatamente a su Padre Celestial y permítale que reemplace esos sentimientos con paz.

                    </p>
                    <p className='text-justify'>
                        Al prestar atención a sus pensamientos y sentimientos podrá descubrir cualquier resto de negativismo que aún albergue y pedirle a su Padre Celestial que lo elimine. Con el paso 10 ya no volverá a necesitar recurrir a la justificación o la racionalización, ni a culpar a nada o a nadie. Su meta consistirá en mantener su corazón abierto y su mente centrada en las lecciones que el Salvador le ha enseñado.
                    </p>
                    <p className='text-justify'>
                        La mayoría de nosotros sigue el paso 10 realizando un inventario diario. Cuando planee su día, examine cuidadosamente sus motivaciones. ¿Se está excediendo en su labor? o, ¿lo que hace es demasiado poco? ¿Atiende a sus necesidades espirituales, emotivas y físicas básicas?
                        ¿Brinda servicio a su prójimo?

                    </p>
                    <p className='text-justify'>
                        Plantéese estas y otras preguntas mientras busca equilibrio y serenidad en su diario vivir. A medida que pase el día tendrá la capacidad de detener rápidamente los pensamientos o sentimientos negativos que amenacen con abrumarle. En las situaciones especialmente tensas, preste suma atención a antiguos comportamientos o formas de pensar.
                    </p>

                    <p className='text-justify'>

                        Algunos consideran este inventario como momento de descanso. Durante el mismo, resérvese algunos momentos y aplique a su situación actual cada principio aprendido en los pasos. Pronto recordará lo importante que es confiar en el Señor en todos los esfuerzos que haga por recuperarse. En un momento de crisis puede preguntarse: “¿Qué debilidad de carácter se ha manifestado en mí? ¿Qué he hecho para desencadenar tal problema? ¿Puedo decir o hacer algo, sin ser pretencioso, que conduzca a una solución respetable para mí y para la otra persona? El Señor tiene todo poder. Me tranquilizaré y confiaré en Él”.
                    </p>
                    <p className='text-justify'>

                        Si ha hecho algo negativo hacia otra persona, repare el agravio lo antes posible. Erradique de sí el orgullo y recuerde que decir sinceramente “Estaba equivocado” suele ser tan importante en la curación de una relación como decir “Te quiero”.
                    </p>

                    <p className='text-justify'>
                        Antes de irse a dormir, evalúe el día por completo y pregúntese si todavía necesita recibir consejo del Señor sobre cualquier comportamiento, pensamiento o sentimiento negativo. Además de aconsejarse con el Señor, puede hablar con un asesor o un amigo del programa; alguien que sea objetivo en cuanto a la forma de pensar de usted.
                    </p>
                    <p className='text-justify'>
                        Al relacionarse con otras personas, seguirá cometiendo errores, pero el compromiso adquirido en el paso 10 es el de aceptar la responsabilidad de los propios errores. Si cada día examina y aclara sus pensamientos y hechos, los pensamientos y sentimientos negativos no crecerán al punto de constituir un peligro para su abstinencia. Ya no tiene que vivir aislado del Señor y de los demás. Tendrá fuerza y fe para afrontar sus dificultades y superarlas. Podrá regocijarse en su progreso y confiar en que la práctica y la paciencia le asegurarán una recuperación continua.
                    </p>


                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Como parte de su compromiso de autoevaluación, participe en las entrevistas del sacerdocio y continúe fortaleciendo su relación con otros miembros de la Iglesia
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Todos podemos recordar alguna ocasión en la que sentimos miedo de contemplar sinceramente nuestro propio comportamiento. Evitar esos momentos fue una de las razones que limitaron nuestra participación en la Iglesia. Sin embargo, al progresar en este programa de rigurosa sinceridad, comenzamos a comprender el valor de la autoevaluación.
                        </p>
                        <p className='text-justify'>
                            Ahora no tememos el momento de la autoevaluación que nos propicia la actividad en la Iglesia. Somos capaces de apreciar la verdad que abriga la siguiente enseñanza del élder Joseph B. Wirthlin, del Quórum de los Doce:
                        </p>
                        <p className='text-justify'>
                            “Las entrevistas de dignidad, las reuniones sacramentales, la asistencia al templo y otras reuniones de la Iglesia son una parte del plan que el Señor nos ofrece para educar nuestra alma y ayudarnos a cultivar el saludable hábito de verificar siempre nuestra situación a fin de conservarnos en el camino de la fe. Un frecuente examen espiritual nos ayudará a transitar por las carreteras de la vida...
                        </p>
                        <p className='text-justify'>

                            “...todos podemos beneficiarnos de igual manera si contemplamos íntimamente nuestro corazón en los momentos reverentes en que adoramos y oramos, mediante esta simple pregunta: ‘¿Soy fiel?’
                        </p>
                        <p className='text-justify'>

                            “La pregunta resulta poderosamente benéfica si somos completamente sinceros al responderla y si nos inspira a adoptar medidas correctivas de arrepentimiento que nos permitan mantenernos en el sendero de la fe” (véase “Firmes creced en la fe”, Liahona, julio de 1997, pág. 16).
                        </p>
                        <p>
                            A medida que participe en esas oportunidades de autoevaluación, notará como su amor por los miembros de la Iglesia crece.
                        </p>
                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Examine sus pensamientos, palabras y hechos diariamente; rectifique cualquier error sin dilación alguna
                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            El paso 10 representa su aceptación de la verdad de que su vida debe ceñirse a principios espirituales. Si se aparta de ellos, arrepiéntase inmediatamente y pida a Dios que restaure la paz por medio de Su Espíritu. La honradez y la humildad pueden fortalecerle y será más consciente de la presencia de nuestro Padre Celestial en su vida cuando acuda a Él en busca de ayuda para conservarse espiritualmente puro. Aprenderá a valorar el progreso y a perdonar las imperfecciones propias y de otras personas, y perderá el deseo de estar en desacuerdo. La autoevaluación se convertirá en un modo de vida a medida que usted, día tras día, abandone sus miedos y supere las tentaciones.
                        </p>

                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Estudie los siguientes pasajes de las Escrituras y declaraciones de líderes de la Iglesia y válgase de ellos y de las preguntas para meditarlos, estudiarlos y para realizar anotaciones. Recuerde ser sincero y específico.
                </p>

                <h2 className='font-semibold text-lg' > Controle sus pensamientos, palabras y hechos </h2>
                <p className='text-justify'>
                    “Si no os cuidáis a vosotros mismos, y vuestros pensamientos, y vuestras palabras y vuestras obras, y si no observáis los mandamientos de Dios ni perseveráis en la fe de lo que habéis oído concerniente a la venida de nuestro Señor, aun hasta el fin de vuestras vidas, debéis perecer. Y ahora bien, ¡oh hombre!, recuerda, y no perezcas” (Mosíah 4:30).
                </p>

                <h2>
                    No prestar atención a lo que hace mientras conduce un automóvil podría ser peligroso o causarle la muerte. ¿Qué hace el paso 10 para mantenerle despierto y alerta en cuanto al curso que toma su vida?
                </h2>
                <textarea onChange={(e) => saveResponse(114, e.target.value)} defaultValue={localStorage.getItem('pre114')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p114" id="p114" />
                <h2>
                    Escriba sobre ser observador de sí mismo. ¿Cómo le ayuda la autoevaluación a evitar que caiga nuevamente en sus adicciones (y perezca)?
                </h2>
                <textarea onChange={(e) => saveResponse(115, e.target.value)} defaultValue={localStorage.getItem('pre115')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p115" id="p115" />

                <h2 className='font-semibold text-lg'>
                    Humildad y autocontrol
                </h2 >
                <p className='text-justify'>
                    “Benditos son aquellos que se humillan sin verse obligados a ser humildes” (Alma 32:16).
                </p>

                <h2>
                    El estar dispuesto a eliminar los pensamientos negativos antes de que se conviertan en un comportamiento dañino es una manera de humillarse sin ser obligado a ello. Escriba sobre su disposición a humillarse y dedique un día a experimentar la erradicación de pensamientos negativos. ¿Qué bendiciones recibe usted?
                </h2>
                <textarea onChange={(e) => saveResponse(116, e.target.value)} defaultValue={localStorage.getItem('pre116')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p116" id="p116" />



                <h2 className='font-semibold text-lg'>

                    Viva en el presente
                </h2>
                <p className='text-justify'>
                    “Cuanto mayor luz tenga la persona, tanto más busca el don del arrepentimiento, y más se esfuerza por liberarse del pecado tantas veces como desobedezca la voluntad divina... Es lógico suponer que los pecados de los que temen a Dios y de los justos son perdonados continuamente porque se arrepienten y buscan al Señor de nuevo cada día y cada hora” (Bruce R. McConkie, Doctrinal New Testament Commentary, 3 tomos, 1966–1973, tomo III, págs.342–343).
                </p>
                <h2>
                    Uno de los efectos más beneficiosos (para la salud mental, emocional y espiritual) de vivir los principios descritos en estos pasos es que usted aprende a vivir en el presente. ¿Cómo le ayuda el paso 10 a afrontar la vida hora tras hora, cuando es necesario?
                </h2>

                <textarea onChange={(e) => saveResponse(117, e.target.value)} defaultValue={localStorage.getItem('pre117')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p117" id="p117" />

                <h2>
                    ¿Cómo le ayuda saber que no tiene que vivir todos estos principios de una sola vez sino día tras día?
                </h2>
                <textarea onChange={(e) => saveResponse(118, e.target.value)} defaultValue={localStorage.getItem('pre118')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p118" id="p118" />


                <h2 className='font-semibold'>
                    Prosiga con el arrepentimiento y el perdón
                </h2>
                <p className='text-justify'>
                    “Cuantas veces se arrepentían y pedían perdón, con verdadera intención, se les perdonaba” (Moroni 6:8).
                </p>

                <h2>
                    Saber que el Señor está dispuesto a perdonarle tan a menudo como usted se arrepienta con verdadera intención puede darle ánimo para empezar de nuevo cada vez que falle. Escriba sobre el significado que tiene para usted el arrepentirse y buscar el perdón con verdadera intención.
                </h2>

                <textarea onChange={(e) => saveResponse(119, e.target.value)} defaultValue={localStorage.getItem('pre119')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p119" id="p119" />



                <h2 className='font-semibold text-lg'>
                    Prosiga con su crecimiento espiritual
                </h2>
                <p className='text-justify'>
                    “Y ahora quisiera que fueseis humildes, que fueseis sumisos y dóciles; fáciles de persuadir; llenos de paciencia y longanimidad, siendo moderados en todas las cosas” (Alma 7:23).
                </p>
                <h2>
                    Quien acuñó el antiguo dicho “La práctica conduce a la perfección” no mencionó la paciencia que hace falta para seguir practicando. ¿Qué garantías le ofrecen la autoevaluación y la reparación diaria de agravios de que seguirá siendo humilde y continuará adelante con su desarrollo espiritual?
                </h2>
                <textarea onChange={(e) => saveResponse(120, e.target.value)} defaultValue={localStorage.getItem('pre120')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p120" id="p120" />
                <p>

                    “Mas he aquí que en los últimos días... tanto los que vengan a esta tierra como los que se hallen sobre otras tierras, sí, sobre todas las tierras del mundo, he aquí, estarán ebrios de iniquidad y de toda clase de abominaciones...

                </p>
                <p>
                    “Porque he aquí, todos vosotros que obráis iniquidad, deteneos y asombraos; porque gritaréis y clamaréis; sí, estaréis ebrios, mas no de vino; titubearéis, mas no de licor” (2 Nefi 27:1, 4).
                </p>
                <p>
                    “Y cuando llegó la noche, estaban ebrios de ira, así como el hombre que está borracho de vino; y de nuevo durmieron sobre sus espadas” (Éter 15:22).
                </p>

                <h2>
                    En esos versículos se describe a la gente como ebria, pero no de vino. Los adictos en fase de recuperación se refieren a ese tipo de situación como estar “ebrio seco” o con una “cogorza emocional”. Escriba sobre cualquier tendencia que pueda tener respecto a albergar ira u otros sentimientos dañinos.
                </h2>
                <textarea onChange={(e) => saveResponse(121, e.target.value)} defaultValue={localStorage.getItem('pre121')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p121" id="p121" />

                <h2>
                    ¿Cómo le ayuda la realización de un inventario al final de cada día a superar esas tendencias?
                </h2>
                <textarea onChange={(e) => saveResponse(122, e.target.value)} defaultValue={localStorage.getItem('pre122')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p122" id="p122" />

                <h2 className='font-semibold text-lg'>
                    Un perfeccionamiento para toda la vida
                </h2>
                <p className='text-justify'>
                    “Deseo señalarles a los Santos de los Últimos Días la necesidad de aplicar cabalmente los principios del Evangelio en nuestra vida, en nuestra conducta, en nuestras palabras y en todo lo que hacemos; y se requiere que dediquemos todo nuestro ser, la vida completa a nuestro mejoramiento para alcanzar el conocimiento de la verdad tal como se halla en Jesucristo” (Brigham Young, Discourses of Brigham Young, selecciones de John A. Widtsoe, 1954, pág. 11).

                </p>
                <h2>
                    Dar estos pasos podría describirse definitivamente como una “estricta aplicación” de los principios del Evangelio. ¿De qué modo el estar dispuesto a evaluarse a sí mismo en todos los aspectos (acciones, palabras, pensamientos y creencias) le permite dedicarse a mejorar continuamente durante toda la vida?
                </h2>
                <textarea onChange={(e) => saveResponse(123, e.target.value)} defaultValue={localStorage.getItem('pre123')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p123" id="p123" />


                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/9')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/11')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
