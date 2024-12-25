import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoNueve = () => {
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
                <h1 className='font-semibold text-xl sm:text-3xl text-center'>PASO 9: RESTITUCIÓN  Y
                    RECONCILIACIÓN
                </h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> En lo posible, realice una restitución directa a todas las personas a las que haya ofendido. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Al llegar al paso 9, estábamos preparados para buscar el perdón. Al igual que los arrepentidos
                        hijos de Mosíah, que viajaron “esforzándose celosamente por reparar todos los daños que habían causado” (Mosíah 27:35), también nosotros deseábamos reparar nuestros agravios. Sin embargo, al dar el paso 9 sabíamos que no podíamos llevar a cabo nuestros deseos
                        a menos que Dios nos bendijera con Su Espíritu. Necesitábamos valor, buen juicio, tacto, prudencia y actuar en el momento adecuado; y éstas no eran cualidades que la mayor parte de nosotros poseía en aquel entonces. Nos dimos cuenta de que el paso 9 pondría a prueba una vez más nuestra disposición para humillarnos ante el Señor y buscar Su ayuda y Su gracia.

                    </p>
                    <p className='text-justify'>
                        Permítanos ofrecerle algunas sugerencias extraídas de nuestra experiencia en ese desafiante proceso. Es de suma importancia que no sea impulsivo ni descuidado en su intento de reparar los agravios. Igualmente importante es que no posponga tales restituciones.
                        Muchas personas en fase de recuperación recayeron al permitir que el miedo les impidiera dar el paso 9. Ore al Señor para recibir Su guía y asesórese con un consejero de confianza para salvar estos escollos.

                    </p>
                    <p className='text-justify'>
                        A veces puede verse tentado a evitar el encuentro con una persona de su lista; sin embargo, le recomendamos que no ceda a esa tentación, a menos que, naturalmente, exista algún elemento legal que se lo impida. El espíritu de humildad y el sentimiento de sinceridad pueden reparar las relaciones dañadas cuando usted realiza los intentos razonables por reunirse con las personas en cuestión. Haga saber a dichas personas que su intención es la de reparar el daño causado, pero respete sus deseos si le indican que prefieren no tratar el tema. Si le dan la oportunidad de excusarse, sea breve y específico sobre lo que recuerde de los hechos. No es necesario entrar en detalles. El objeto de esa reunión no es explicar o describir su percepción de lo sucedido, sino admitir los errores que haya cometido, ofrecer sus excusas y, en la medida de lo posible, efectuar una restitución. No discuta con las personas ni las critique, aun en el caso de que no reaccionen favorablemente ni le acepten. Acérquese a cada persona con un espíritu de humildad, tendiendo una mano reconciliadora y jamás justifique sus actos.
                    </p>
                    <p className='text-justify'>
                        Disculparse por algunas acciones puede resultar particularmente complejo. Por ejemplo, tal vez tenga que abordar asuntos que podrían acarrearle consecuencias legales, como falta de honradez o algún pecado sexual grave. Es posible que se sienta tentado a reaccionar de forma exagerada o a buscar excusas para no reparar el daño causado. Tras haber orado, busque consejo eclesiástico o profesional antes de seguir acción alguna en esos casos tan graves.
                    </p>
                    <p className='text-justify'>
                        En otras circunstancias, quizás no tenga modo de efectuar reparaciones directas, como cuando la persona ha muerto o no es posible saber dónde vive.
                        En tales casos, todavía puede subsanar el daño indirectamente. Escriba una carta a dicha persona manifestando su pesar y su deseo de reconciliación, aunque no pueda ser entregada al destinatario.
                        Puede hacer un obsequio a la organización caritativa preferida de esa persona, hacer algo por alguien que le recuerde a esa persona, o bien puede ayudar de forma anónima a un miembro de la misma.

                    </p>
                    <p className='text-justify'>
                        Habrá ocasiones en las que acercarse a alguien o tratar de efectuar una restitución resulte doloroso o hasta perjudicial para dicha persona. Si cree que éste pudiera ser el caso, asesórese al respecto con un consejero de su confianza antes de proceder. Esta parte de la recuperación nunca debe producir más daño a ninguna persona. Puede darse el caso de que haya causado daños cuyo desagravio escape a nuestra capacidad humana. El élder Neal A. Maxwell habló de esa realidad: “A veces no es posible hacer una restitución real... como [cuando] se ha contribuido a la pérdida de la fe o de la virtud de una persona. A cambio de ello, dar ejemplo de absoluta rectitud de ahí en adelante es una forma compensadora de restitución” (véase “El arrepentimiento”, LiaPona, enero de 1992, pág. 34). Desde el momento en que decida adoptar esos principios verdaderos como su nueva forma de vida, habrá empezado a reparar sus agravios.

                    </p>
                    <p className='text-justify'>
                        Tras reparar la mayor parte de sus acciones pasadas, todavía puede que haya una o dos personas con las que no se sienta cómodo. No se desespere por ello. Muchos de nosotros tuvimos que encarar esa idéntica realidad. Le recomendamos que lleve sus sentimientos al Señor a través de la oración sincera. Si aun así siente gran miedo o ira por alguien, tal vez deba posponer el encuentro con esa persona. Para superar los sentimientos negativos, ore pidiendo recibir caridad para ver a esa persona como el Señor la ve. Busque razones positivas que respalden la ayuda que le brindarán la reconciliación y la restitución. Si hace esas cosas y tiene paciencia, el Señor, a Su manera y en Su debido tiempo, le concederá la capacidad y las milagrosas oportunidades de reconciliarse con cada persona de su lista.

                    </p>
                    <p className='text-justify'>
                        Al completar el paso 9 como mejor pueda, ha hecho todo lo posible para estar en armonía con los mandamientos del Señor. Ha comenzado a experimentar una nueva vida de esperanza, no gracias a usted, sino al amor de Dios. Ha descendido hasta las profundidades de la humildad y se ha encontrado con el Señor que le aguardaba con los brazos abiertos. Ha hecho todo lo posible para sanar sus relaciones y reconciliarse con su prójimo. Ha entrado, al menos en parte, en Su reposo, y permanecer allí se ha convertido en su mayor deseo. Está aprendiendo a reconocer y seguir mejor la revelación personal, lo cual le lleva a vivir en armonía con las enseñanzas de los profetas de Dios antiguos y actuales. Incluso en los momentos más difíciles, siente un nuevo tipo de paz. Ha aprendido a recibir la bendición que describe Pablo cuando escribió: “Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús” (Filipenses 4:7).
                    </p>



                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Ame a su prójimo; absténgase de juzgar a los demás; dispóngase a aceptar un llamamiento en la Iglesia y a pagar sus diezmos y ofrendas
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Si en el pasado usted era una persona religiosamente activa, quizá su motivación para obrar era fruto del miedo a los juicios de Dios o a lo que los demás pudieran pensar de usted. Tal vez actuara guiado por su sentido del deber, pero ahora usted entiende que el servicio es un modo de llegar a Cristo y una manera de expresar su amor por Dios. Manifiesta una necesidad continua de Su poder y de gratitud por Su ayuda. Analice si su actividad en la Iglesia sigue motivada por el miedo o la obligación, o si se debe al crecimiento natural de su renacida fe en Cristo.
                        </p>
                        <p className='text-justify'>
                            Busque cómo servir allí donde se encuentre. Sea digno de servir en un llamamiento de la Iglesia o de cualquier otra manera. Al servir a sus hermanos y hermanas y enseñarles por la palabra y el ejemplo, compartirá con ellos Su realidad viviente en la vida de usted. (Véase Mateo 25:40; Juan 13:34–35; Juan 15:15; Mosíah 2:17.)
                        </p>

                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Dispóngase a hacer todo lo necesario para reparar sus agravios
                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Durante el paso 9, evite desanimarse si las personas no aceptan sus excusas o no creen que usted haya cambiado. La reparación de agravios lleva tiempo y requiere paciencia. Concédales el tiempo necesario para darse cuenta de que esta vez es diferente, de que ahora sus promesas no son vanas; usted está viviendo para recibir una remisión completa de su adicción y otras debilidades de carácter. Al final, la abstinencia y el cambio de conducta hablarán por sí mismos.
                        </p>


                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras y las citas de los líderes de la Iglesia pueden ayudarle a dar el paso 9. Válgase de ellos para meditarlos, estudiarlos y para realizar anotaciones. Recuerde ser sincero y específico con lo que escriba.
                </p>

                <h2 className='font-semibold text-lg' > Sea una buena influencia para los demás </h2>
                <p className='text-justify'>
                    “El Espíritu del Señor me dice: Manda a tus hijos que hagan lo bueno, no sea que desvíen el corazón de muchos hasta la destrucción. Por tanto, hijo mío, te mando, en el temor de Dios, que te abstengas de tus iniquidades;
                </p>
                <p>
                    “que te vuelvas al Señor con toda tu mente, poder y fuerza; que no induzcas más el corazón de los demás a hacer lo malo, sino más bien, vuelve a ellos, y reconoce tus faltas y la maldad que hayas cometido” (Alma 39:12–13).
                </p>

                <h2>
                    El daño más grave que causamos a otras personas lo produjo nuestra influencia para que se convirtieran en adictos. Escriba sobre las personas a las que usted ha influido en ese aspecto.
                </h2>
                <textarea onChange={(e) => saveResponse(102, e.target.value)} defaultValue={localStorage.getItem('pre102')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p102" id="p102" />
                <h2>
                    Según las enseñanzas de Alma en los versículos de referencia, ¿dónde puede usted hallar el valor necesario para encarar a esas personas?
                </h2>
                <textarea onChange={(e) => saveResponse(103, e.target.value)} defaultValue={localStorage.getItem('pre103')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p103" id="p103" />

                <h2 className='font-semibold text-lg'>
                    Persuasión o coacción
                </h2 >
                <p className='text-justify'>
                    “El que quiera venir, puede venir a beber libremente de las aguas de la vida; y quien no quiera venir, no está obligado a venir; pero en el postrer día le será restaurado según sus hechos” (Alma 42:27).
                </p>

                <h2>
                    A pesar de las muchas y poderosas razones para dar el paso 9, no caiga jamás en la racionalización o la mentira de que no tiene otra elección. El Programa para la Recuperación de Adicciones es un programa de persuasión, no de coacción. Escriba sobre si se siente persuadido o coaccionado para dar el paso 9. ¿Qué razones da el versículo para la persuasión?
                </h2>
                <textarea onChange={(e) => saveResponse(104, e.target.value)} defaultValue={localStorage.getItem('pre104')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p104" id="p104" />


                <h2 className='font-semibold text-lg'>

                    Prepárese para comparecer ante Dios
                </h2>
                <p className='text-justify'>
                    “Sí, quisiera que vinieseis y no endurecieseis más vuestros corazones; porque he aquí, hoy es el tiempo y el día de vuestra salvación; y por tanto, si os arrepentís y no endurecéis vuestros corazones, inmediatamente obrará para vosotros el gran plan de redención.
                </p>
                <p>
                    “Porque he aquí, esta vida es cuando el hombre debe prepararse para comparecer ante Dios; sí, el día de esta vida es el día en que el hombre debe ejecutar su obra” (Alma 34:31–32).

                </p>
                <h2>
                    ¿Qué otras cosas consigue cuando ablanda su corazón y procede a reparar sus agravios?
                </h2>

                <textarea onChange={(e) => saveResponse(105, e.target.value)} defaultValue={localStorage.getItem('pre105')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p105" id="p105" />

                <h2>
                    ¿Cómo aumenta su disposición para reparar sus agravios al darse cuenta de que también se está preparando para comparecer ante Dios?
                </h2>
                <textarea onChange={(e) => saveResponse(106, e.target.value)} defaultValue={localStorage.getItem('pre106')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p106" id="p106" />



                <h2 className='font-semibold'>
                    La actividad en la Iglesia
                </h2>
                <p className='text-justify'>
                    “[Los hijos de Mosíah] viajaron por toda la tierra... esforzándose celosamente por reparar todos los daños que habían causado a la iglesia, confesando todos sus pecados, proclamando todas las cosas que habían visto y explicando las profecías y las Escrituras a cuantos deseaban oírlos” (Mosíah 27:35).
                </p>

                <h2>
                    A causa de las adicciones, muchas personas dejaron de asistir a la iglesia. Algunos justificaron su limitada participación con los errores de los demás. Escriba sobre sus experiencias personales con la actividad en La Iglesia de Jesucristo de los Santos de los Últimos Días.
                </h2>

                <textarea onChange={(e) => saveResponse(107, e.target.value)} defaultValue={localStorage.getItem('pre107')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p107" id="p107" />


                <h2>
                    ¿Cómo le ha ayudado el acercarse al Salvador por medio de la recuperación a reintegrarse a Su Iglesia?
                </h2>
                <textarea onChange={(e) => saveResponse(108, e.target.value)} defaultValue={localStorage.getItem('pre108')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p108" id="p108" />

                <h2>

                    ¿Cómo le ayuda el ser activo en la Iglesia a reparar sus agravios y recuperarse más plenamente?
                </h2>

                <textarea onChange={(e) => saveResponse(109, e.target.value)} defaultValue={localStorage.getItem('pre109')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p109" id="p109" />

                <h2 className='font-semibold text-lg'>

                    La restitución voluntaria
                </h2>
                <p className='text-justify'>
                    “Debes restaurar en todo lo posible lo que hayas robado, dañado o manchado. La restitución voluntaria demuestra al Señor que estás dispuesto a hacer todo lo que puedas por arrepentirte” (Richard G. Scott, “Busquemos el perdón”, Liahona, julio de 1995, pág. 85).
                </p>
                <h2>
                    Escriba sobre cómo el dar el paso 9 demuestra ante el Señor, ante usted mismo y ante los demás que se ha comprometido a vivir una vida de humildad y honradez.
                </h2>
                <textarea onChange={(e) => saveResponse(110, e.target.value)} defaultValue={localStorage.getItem('pre110')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p110" id="p110" />




                <h2 className='font-semibold text-lg'>
                    Los propósitos de su corazón
                </h2>
                <p className='text-justify'>
                    “El que se arrepienta y cumpla los mandamientos del Señor será perdonado” (D. y C. 1:32).
                </p>
                <h2>
                    Al tratar de reparar sus agravios, tal vez se encuentre con personas que no le perdonen. Quizás sus corazones aún se hallen enojados con usted o puede que no crean en la sinceridad de sus propósitos. ¿Cómo le ayuda el saber que el Señor comprende la verdadera intención de su corazón y que Él aceptará su ofrenda de arrepentimiento y de ofrecer restitución aunque los demás lo rechacen?
                </h2>
                <textarea onChange={(e) => saveResponse(111, e.target.value)} defaultValue={localStorage.getItem('pre111')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p111" id="p111" />



                <h2 className='font-semibold text-lg'>
                    ¿Qué puede hacer el Salvador por usted?
                </h2>
                <p className='text-justify'>
                    “Los hombres no pueden perdonarse sus propios pecados; no pueden limpiarse de las consecuencias de sus pecados. Pueden dejar de pecar y pueden actuar rectamente en el futuro, y hasta ese punto sus hechos serán aceptables ante el Señor y dignos de consideración. Pero, ¿quién reparará los agravios que se hayan ocasionado a sí mismos y a otras personas, los cuales parece imposible que ellos mismos reparen? Mediante la expiación de Jesucristo serán lavados los pecados de aquel que se arrepienta, y aunque fueren rojos como el carmesí, vendrán a ser como blanca lana. Ésa es la promesa que se les ha hecho.” (Joseph F. Smith, Gospel Doctrine, 5ª edición, 1939, págs. 98–99).
                </p>
                <h2>
                    Al disponerse a reparar sus agravios, no se desanime por pensamientos tales como: “¡Es imposible! ¡No puedo compensar el mal que le he causado a esa persona!”. Aunque fuera así, reflexione en el poder de Jesucristo para reparar aquello que usted no puede. Escriba sobre la necesidad de confiar en que Él hará lo que usted no puede hacer.

                </h2>
                <textarea onChange={(e) => saveResponse(112, e.target.value)} defaultValue={localStorage.getItem('pre112')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p112" id="p112" />
                <h2>
                    ¿Cómo puede usted mostrarle al Señor que confía en Él? ¿Cómo puede incrementar esa confianza?
                </h2>
                <textarea onChange={(e) => saveResponse(113, e.target.value)} defaultValue={localStorage.getItem('pre113')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p113" id="p113" />

                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/8')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/10')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
