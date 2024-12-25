import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoDoce = () => {
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
                <h1 className='font-semibold text-xl sm:text-3xl text-center'>PASO 12: EL SERVICIO</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Tras haber logrado un despertar espiritual gracias a la expiación de Jesucristo, comparta este mensaje con otras personas y viva estos principios en todo momento. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        El servicio le ayudará a crecer en la luz del Espíritu por el resto de sus días. En el paso 10 aprendió a
                        evaluar su vida diariamente y a responsabilizarse por sus acciones. En el paso 11 aprendió a recordar al Salvador en cada momento a fin de contar con la guía del Espíritu Santo tan continuamente como le fuera posible. El paso 12 (el brindar servicio al prójimo) constituye el tercer ancla que nos asegura una recuperación continua y la remisión de nuestros pecados.

                    </p>
                    <p className='text-justify'>
                        Para seguir libre de la adicción, debe salir de sí mismo y servir. El deseo de ayudar a otros es una consecuencia natural del despertar espiritual.
                    </p>
                    <p className='text-justify'>
                        Usted tiene un mensaje de esperanza para otros adictos, para toda persona afligida o atormentada que esté dispuesta a considerar un enfoque espiritual para cambiar su vida, y para cualquiera que busque la verdad y la rectitud. Este mensaje nos dice que Dios es un Dios de milagros, como siempre lo ha sido (véase Moroni 7:29), y su vida es una prueba de ello. Usted se está convirtiendo en una persona nueva gracias a la expiación de Jesucristo. El servicio a su prójimo constituirá la mejor manera de compartir este mensaje, y a medida que lo haga, su comprensión y conocimiento de este proceso se reforzarán y profundizarán.
                    </p>
                    <p className='text-justify'>
                        Compartir el testimonio que usted tiene de Su misericordia y Su gracia es uno de los servicios más importantes que puede brindar. Llevar las cargas de su prójimo a través de actos de bondad y servicio desinteresado es parte de su nueva vida como seguidor de Jesucristo (véase Mosíah 18:8).
                    </p>
                    <p className='text-justify'>
                        El presidente Ezra Taft Benson enseñó: “Aquellos que le entregan su vida al Señor verán que Él puede hacer con ella algo mucho más productivo que ellos mismos. Él hará que su gozo sea mucho más profundo, su visión más amplia, su mente más alerta, su cuerpo más fuerte; elevará su espíritu, multiplicará sus bendiciones, aumentará sus oportunidades, reconfortará su alma y derramará sobre ellos su paz. Quienquiera que pierda su vida en el servicio al Señor, encontrará vida eterna” (“Los dones del Señor”, LiaPona, abril de 1977, pág. 25).
                    </p>
                    <p className='text-justify'>
                        Al considerar cómo puede usted servir, ore siempre para recibir la guía del Espíritu Santo. Con la disposición correcta, hallará numerosas oportunidades de compartir los principios espirituales que ha aprendido. Tendrá ocasión de compartir su testimonio con otras personas y oportunidades de servirles de diversas maneras. Al servir a su prójimo conservará su humildad ya que se mantendrá centrado en los principios y las prácticas del Evangelio que haya aprendido. Sólo entonces tendrá la certeza de que sus motivos e intenciones son buenos. Asegúrese de dar libremente, sin esperar un resultado especial. Respete el albedrío de los demás y recuerde que la mayoría de nosotros tuvo que “tocar fondo” antes de estar preparado para estudiar y aplicar esos principios, y lo mismo sucederá con la mayoría de las personas a las que desee ayudar.
                    </p>
                    <p className='text-justify'>
                        Cuando sepa de otras personas que se enfrentan a la adicción en su vida o en la de sus seres queridos, tal vez desee darles a conocer esta guía y el Programa para la Recuperación de Adicciones de los LDS Family Services [Servicios SUD para la Familia]. Si tuvieran la necesidad de hablar, deje que lo hagan y comparta alguna experiencia personal para que sepan que entiende sus circunstancias. No les dé consejos ni intente arreglar esa situación; simplemente limítese a informarles del programa y de los principios espirituales que han bendecido su vida.

                    </p>
                    <p className='text-justify'>
                        Tal vez descubra que si un adicto no está preparado para abrazar esos principios espirituales, quizás un familiar o un amigo del mencionado adicto se muestre receptivo. Prácticamente cualquier persona que vive en estos tiempos tan peligrosos podría beneficiarse del aprendizaje y de la aplicación de los principios del Evangelio. En ocasiones se sentirá inspirado a compartir una copia de esta guía con alguien junto con un ejemplar del Libro de Mormón. Cuando así sea, estará compartiendo las herramientas que le han ayudado a reconstruir su vida en Cristo.
                    </p>

                    <p className='text-justify'>
                        Cuando haga algo por otra persona o comparta el mensaje de esperanza y recuperación, no permita que esa persona dependa excesivamente de usted. Su responsabilidad se limita a animar a otras personas que estén luchando por volverse a nuestro Padre Celestial y al Salvador en busca de guía y poder. Además, no deje de instarles a que acudan también a los siervos autorizados del Señor, pues los poseedores de las llaves del sacerdocio pueden ser una fuente de grandes bendiciones del Señor.
                    </p>
                    <p className='text-justify'>

                        Al tratar de ayudar a otras personas, entienda que les resultará difícil permanecer en la fase de recuperación si no cuentan con el apoyo de sus familiares o no comprenden que la recuperación requiere tiempo. Sin embargo, cualquier persona puede recuperarse, independientemente de la reacción de los demás, incluidos sus seres más queridos.
                    </p>

                    <p className='text-justify'>
                        Cuando comparta con otras personas el mensaje de la recuperación por medio de los principios del Evangelio, sea paciente y manso. En su nueva vida no hay lugar para el ego ni otro sentimiento de superioridad. Nunca olvide su origen y cómo fue rescatado por la gracia de Dios. Jesucristo hará lo mismo “en todos los casos” por los que se arrepientan y vuelvan a Él (Mosíah 29:20).
                    </p>
                    <p className='text-justify'>
                        En su entusiasmo por ayudar a su prójimo, asegúrese de guardar un equilibrio entre compartir el mensaje y seguir trabajando en su propio programa. Su enfoque principal debe continuar dirigido a la aplicación de esos principios en su vida. Sus intentos por compartir esas ideas con otras personas sólo serán eficaces si usted sigue adelante con su propia recuperación.
                    </p>
                    <p className='text-justify'>
                        Los principios que usted ha aprendido y puesto en práctica para superar su adicción son los mismos que le guiarán en todos los aspectos de su vida para obrar según el plan del Salvador. Válgase de ellos para perseverar hasta el fin, como el Señor ha mandado, y hacerlo con gozo.
                    </p>

                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Comparta su testimonio en público; magnifique sus llamamientos y talentos al servir a su prójimo; lleve a cabo la noche de hogar y la oración familiar; prepárese para asistir al templo y adorar en él
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Su testimonio del amor y la misericordia de nuestro Padre Celestial y Su Amado Hijo, Jesucristo, ya no es algo teórico, sino que se ha convertido en una realidad viva. Usted lo ha experimentado por sí mismo. Al ser consciente de Su amor por usted también lo ha sido de Su amor por las demás personas.                        </p>
                        <p className='text-justify'>

                            El presidente Howard W. Hunter enseñó: “Aquellos que hemos participado de la Expiación estamos bajo la obligación de dar un fiel testimonio de nuestro Señor y Salvador,” (“The Atonement and Missionary Work”, seminario para nuevos presidentes de misión, 21 de junio de 1994, pág. 2).
                        </p>
                        <p className='text-justify'>
                            Testifique a su familia con palabras y hechos en la intimidad de su hogar. Comparta su testimonio con frecuencia en las noches de hogar, las oraciones familiares y durante el estudio familiar de las Escrituras. Testifique durante los proyectos familiares de servicio y al llevar una vida cristiana. También puede dar su testimonio en la Iglesia, al servir en ella, en las reuniones de ayuno y testimonio o en las clases.
                        </p>
                        <p className='text-justify'>

                            Magnifique sus llamamientos en la Iglesia. Si no tiene responsabilidades en su barrio o estaca, manifieste a su obispo su disponibilidad para servir. Usted puede ser una bendición para su prójimo al tomar parte en la obra de historia familiar o preparándose para adorar y servir en el templo y hacer convenios con el Señor. El presidente Gordon B. Hinckley enseñó: “El servicio que se presta en el templo es el resultado final de toda nuestra enseñanza y actividad” (“Discurso de apertura”, LiaPona, noviembre de 2005, pág. 4). Los principios que se imparten en esta guía le encaminarán al templo y aumentarán su deseo de servir en él.
                        </p>
                        <p className='text-justify'>
                            Aunque antes le hubiera parecido imposible, ahora puede imaginarse entrando por las puertas del santo templo, respirando profundamente la paz que allí reina y sintiéndose cerca del Señor en Su casa. El templo le proporcionará poder espiritual para seguir adelante con su recuperación. El élder Joseph B. Wirthlin, del Quórum de los Doce, testificó: “El participar de la obra del templo con regularidad nos da fortaleza espiritual. Puede ser un apoyo en nuestra vida diaria, una fuente de guía, protección, seguridad, paz y revelación” (véase “Busquemos lo bueno”, LiaPona, julio de 1992, pág. 96).
                        </p>
                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Sirva a los que luchan con la adicción compartiendo los principios de la recuperación; aplíquelos en todos los aspectos de la vida
                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            El Programa para la Recuperación de Adicciones de los LDS Family Services [Servicios SUD para la Familia], brinda numerosas oportunidades de servicio. Usted puede servir, apoyar y fortalecer a otras personas con su presencia en las reuniones y compartiendo su experiencia, su fe y su esperanza.
                        </p>
                        <p className='text-justify'>
                            Al haber puesto en práctica los principios del Evangelio, ha aprendido que la Expiación se aplica a cada aspecto de la vida. El presidente Boyd K. Packer, del Quórum de los Doce Apóstoles, testificó: “Por alguna razón pensamos que la expiación de Cristo se aplica solamente al final de la vida mortal para redimirnos de la Caída, de la muerte espiritual, pero es mucho más que eso. Se trata de un poder en constante vigencia al que podemos recurrir a diario. Cuando estamos siendo atormentados, atribulados o torturados por la culpa o agobiados por las tribulaciones, Él puede sanarnos” (“El toque de la mano del maestro”, LiaPona, julio de 2001, pág. 26).
                        </p>
                        <p className='text-justify'>
                            Comparta este mensaje con otras personas a través de su ejemplo y sus palabras de aliento. Salude con una sonrisa a las personas con las que se relacione a lo largo del día y exprese gratitud por lo que hacen. Cuando se presente la oportunidad, comparta su testimonio de la esperanza que se obtiene por medio de la expiación de Jesucristo.
                        </p>


                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras y las enseñanzas de los líderes de la Iglesia le ayudarán en el proceso de su recuperación. Estudie los pasajes y las citas siguientes y válgase de ellos para sus meditaciones, su estudio personal y los análisis en grupo.
                </p>

                <h2 className='font-semibold text-lg' > Conversión y recuperación </h2>
                <p className='text-justify'>
                    “Conversión significa volverse de una creencia o de una acción a otra. La conversión es un cambio tanto espiritual como moral. La conversión implica no solamente la aceptación intelectual de Jesús y Sus enseñanzas, sino también una fe motivadora en Él y en Su Evangelio; una fe que efectúa una transformación; un cambio real en cuanto a la comprensión que la persona tiene del significado de la vida y de la fidelidad a Dios, en interés, pensamiento y conducta” (Marion G. Romney, en Conference Report, Guatemala Area Conference, 1977, pág. 8).

                </p>

                <h2>
                    El Salvador aconsejó a Pedro que, tras su conversión, fortaleciera a sus hermanos (véase Lucas 22:32). Escriba sobre la definición que el presidente Romney da de la conversión y cómo se aplica a su experiencia en la recuperación.
                </h2>
                <textarea onChange={(e) => saveResponse(131, e.target.value)} defaultValue={localStorage.getItem('pre131')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p131" id="p131" />
                <h2>
                    ¿Qué piensa sobre el fortalecer a otras personas que se recuperan de una conducta adictiva?
                </h2>
                <textarea onChange={(e) => saveResponse(132, e.target.value)} defaultValue={localStorage.getItem('pre132')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p132" id="p132" />

                <h2 className='font-semibold text-lg'>
                    Gran progreso por medio de pequeños pasos
                </h2 >
                <p className='text-justify'>
                    “No os canséis de hacer lo bueno, porque estáis poniendo los cimientos de una gran obra. Y de las cosas pequeñas proceden las grandes” (D. y C. 64:33).

                </p>

                <h2>
                    Escriba cómo se siente al pensar en vivir estos principios en todos los aspectos de su vida ¿Cómo le ayuda a darse cuenta de que las grandes obras se llevan a cabo mediante pequeños pasos?
                </h2>
                <textarea onChange={(e) => saveResponse(133, e.target.value)} defaultValue={localStorage.getItem('pre133')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p133" id="p133" />



                <h2 className='font-semibold text-lg'>
                    Fortalezca a su prójimo
                </h2>
                <p className='text-justify'>
                    “Ésta es mi gloria, que quizás sea un instrumento en las manos de Dios para conducir a algún alma al arrepentimiento, y éste es mi gozo.
                </p>
                <p>
                    “Y he aquí, cuando veo a muchos de mis hermanos verdaderamente arrepentidos, y que vienen al Señor su Dios, mi alma se llena de gozo; entonces recuerdo lo que el Señor ha hecho por mí, sí, que ha oído mi oración; sí, entonces recuerdo su misericordioso brazo que extendió hacia mí” (Alma 29:9–10).
                </p>
                <h2>
                    Hemos aprendido que la disposición para testificar de estos principios desempeña un papel crítico en la recuperación. ¿Cómo le ayudará el compartir su experiencia a mantenerse firme en su recuperación?
                </h2>

                <textarea onChange={(e) => saveResponse(134, e.target.value)} defaultValue={localStorage.getItem('pre134')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p134" id="p134" />
                <p>
                    “[Si] estáis dispuestos a llorar con los que lloran; sí, y a consolar a los que necesitan de consuelo, y ser testigos de Dios en todo tiempo, y en todas las cosas y en todo lugar en que estuvieseis, aun hasta la muerte, para que seáis redimidos por Dios y seáis contados con los de la primera resurrección, para que tengáis vida eterna;
                </p>
                <p>
                    “os digo ahora, si éste es el deseo de vuestros corazones, ¿qué os impide ser bautizados en el nombre del Señor, como testimonio ante él de que habéis concertado un convenio con él de que lo serviréis y guardaréis sus mandamientos, para que Él derrame su Espíritu más abundantemente sobre vosotros?” (Mosíah 18:9–10).
                </p>
                <h2>

                    Su experiencia con la adicción le ayuda a identificarse con los que luchan contra ella y su experiencia en el proceso de la recuperación le permite confortarles. Escriba sobre su creciente deseo y su capacidad para ser un testigo de Dios desde que comenzó con los pasos de la recuperación.
                </h2>
                <textarea onChange={(e) => saveResponse(135, e.target.value)} defaultValue={localStorage.getItem('pre135')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p135" id="p135" />



                <h2 className='font-semibold'>

                    Sirva con la ayuda del Señor
                </h2>
                <p className='text-justify'>
                    “El Redentor escogió a hombres imperfectos para enseñar el camino que conduce a la perfección. Lo hizo entonces y lo hace en la actualidad” (Thomas S. Monson, “Su influencia personal”, Liahona, mayo de 2004, pág. 20).

                </p>

                <h2>
                    A veces nos preguntamos si estamos preparados para compartir nuestra recuperación con otras personas porque aún no somos perfectos en la aplicación de estos principios. ¿Cómo calma sus temores el conocimiento de que el Salvador obra por medio de gente imperfecta?
                </h2>

                <textarea onChange={(e) => saveResponse(136, e.target.value)} defaultValue={localStorage.getItem('pre136')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p136" id="p136" />



                <h2 className='font-semibold text-lg'>
                    El poder de Dios para salvación
                </h2>
                <p className='text-justify'>
                    “Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree” (Romanos 1:16).
                </p>
                <h2>
                    Escriba sus pensamientos y sentimientos al mirar atrás y considerar que fue necesaria una experiencia espiritual para ayudarle a superar su adicción. Escriba sobre cualquier sentimiento de renuencia a decir a otras personas que fue sanado al aplicar los principios del Evangelio de Jesucristo.
                </h2>
                <textarea onChange={(e) => saveResponse(137, e.target.value)} defaultValue={localStorage.getItem('pre137')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p137" id="p137" />

                <p>
                    “Sigue tu camino, doquier que sea mi voluntad, y el Consolador te indicará lo que has de hacer y adónde has de ir.
                </p>
                <p>
                    “Ora siempre, para que no entres en tentación y pierdas tu galardón.
                </p>
                <p>
                    “Sé fiel hasta el fin y, he aquí, estoy contigo. Estas palabras no son de hombre ni de hombres, sino mías, sí, de Jesucristo, tu Redentor, por la voluntad del Padre” (D. y C. 31:11–13).

                </p>
                <h2>
                    Las Escrituras rebosan de orientación para quienes deseen tener un modo de vida espiritual que les guíe de regreso a Dios. ¿Qué instrucción específica halla usted en estos versículos?
                </h2>
                <textarea onChange={(e) => saveResponse(138, e.target.value)} defaultValue={localStorage.getItem('pre138')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p138" id="p138" />



                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/11')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        INICIO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
