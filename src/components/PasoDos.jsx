import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoDos = () => {
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
                <h1 className='font-semibold text-xl sm:text-3xl  text-center'>PASO 2: LA ESPERANZA</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Crea que el poder de Dios puede restaurar su salud espiritual por completo </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Tras percatarnos de nuestra impotencia frente a las adicciones, la mayoría nos sentimos despojados de
                        toda esperanza. Aquellos que habían crecido sin el concepto de Dios, tenían la certeza de que se habían agotado todos los medios de ayuda. Mientras tanto, los que creían en Dios, estaban convencidos de que Él estaba demasiado disgustado para ayudarles. En ambos casos, el paso 2 nos brindó una respuesta que no habíamos considerado o que habíamos descartado: volvernos a Dios y hallar esperanza en la expiación de Jesucristo.


                    </p>
                    <p className='text-justify'>
                        Finalmente, y con humildad, solicitamos ayuda.
                        Siguiendo lo que nos parecía un pequeño rayo de esperanza, comenzamos a asistir a las reuniones de recuperación y al principio, acudimos llenos de dudas y temores. Estábamos asustados y era posible que incluso tuviéramos falta de fe, pero por lo menos hicimos nuestra parte.
                        Allí oímos a hombres y mujeres describir sinceramente lo que habían sido sus vidas, lo que sucedió para que
                        cambiaran y cómo era vivir recuperándose de la adicción. Descubrimos que muchas de las personas que conocimos en esas ocasiones se habían sentido tan desesperanzadas como nosotros, pero ahora reían, conversaban, sonreían, asistían a las reuniones, oraban, leían las Escrituras y escribían en sus diarios de recuperación.
                    </p>
                    <p className='text-justify'>
                        Gradualmente, los principios que compartían y practicaban comenzaron a sernos útiles. A medida que seguíamos asistiendo, empezamos a sentir algo que no sentíamos desde hacía años: esperanza. Si la había para quienes habían estado al borde mismo de la destrucción, ¡quizás también la hubiera para nosotros! Nos complació oír que, si regresábamos al Señor, no habría “habito, adicción, rebelión, trasgresión, apostasía ni crimen en los que no [se cumpliera] la promesa de
                        un perdón completo” (Boyd K. Packer, “La luminosa mañana del perdón”, Liahona, enero de 1996, pág. 20).

                    </p>
                    <p className='text-justify'>
                        En ese ambiente de fe y testimonio hallamos la esperanza que nos despertó a la misericordia y al poder de Dios. Comenzamos a creer que Él podría liberarnos de la esclavitud de la adicción. Seguimos el ejemplo de nuestros amigos ya recuperados. Asistimos a las reuniones, oramos, renovamos nuestra actividad en la Iglesia, y meditamos y aplicamos las Escrituras, con lo que empezamos a tener nuestros propios milagros. Fuimos bendecidos con la gracia de Jesucristo para mantener nuestra abstinencia día tras día. Al dar el paso 2 nos dispusimos a reemplazar la fe en nosotros mismos y nuestras adicciones con la fe en el amor y el poder de Jesucristo. Dimos ese paso con la mente y el corazón, y experimentamos la verdad de que la base para recuperarse de la adicción debe ser espiritual.

                    </p>
                    <p className='text-justify'>
                        A medida que dé los pasos recomendados en esta guía, experimentará esta misma verdad. Merece la pena cualquier esfuerzo. Éste es un programa espiritual y de acción. Si cumple estos principios y permite que obren en su vida, asistirá a la restauración de su salud espiritual a través de su reencontrada relación con el Señor. Su Espíritu le ayudará a atisbar sus elecciones de manera más sincera y clara, y sus decisiones estarán en consonancia con los principios del Evangelio.
                    </p>
                    <p className='text-justify'>
                        Para algunos, este milagro fue casi instantáneo; para otros, la recuperación fue más gradual. Sin embargo, llegado el momento, usted podrá decir junto con nosotros que, por medio de la “firmeza en Cristo”, ha sido rescatado de la adicción y disfruta de “un fulgor perfecto de esperanza” (2 Nefi 31:20).
                    </p>
                    <p className='text-justify'>
                        El élder David A. Bednar, del Quórum de los Doce Apóstoles, enseñó sobre el poder de Dios para ayudarle:
                        “No debemos subestimar ni pasar por alto el poder de las entrañables misericordias del Señor. La sencillez, la dulzura y la constancia de las entrañables misericordias del Señor serán de mucho provecho para fortalecernos y protegernos en los tiempos difíciles en los que actualmente vivimos y en los que aún viviremos. Cuando las palabras no pueden proporcionar el solaz que necesitamos ni expresar el gozo que sentimos, cuando es simplemente inútil intentar explicar lo inexplicable, cuando la lógica y la razón no pueden brindar el entendimiento adecuado en cuanto a las injusticias e irregularidades de la vida, cuando la experiencia y la evaluación terrenales son insuficientes para producir el resultado deseado, y cuando parezca que quizás nos encontramos totalmente solos, en verdad somos bendecidos por las entrañables misericordias del Señor que nos fortalecen hasta tener el poder de librarnos (véase 1 Nefi 1:20).

                    </p>
                    <p className='text-justify'>
                        “Es posible que algunas personas que oigan o lean este mensaje, erróneamente pasen por alto o descarten la idea de tener a su alcance las entrañables misericordias del Señor... Tal vez pensemos equivocadamente que esas bendiciones y esos dones están reservados para otras personas que parecen ser más rectas o que sirven en llamamientos de importancia en la Iglesia. Testifico que las entrañables misericordias del Señor están al alcance de todos nosotros y que el Redentor de Israel está ansioso por conferirnos esos dones” (“Las entrañables misericordias del Señor”, Liahona, mayo de 2005, págs. 100–101).
                    </p>
                    <p className='text-justify'>
                        Recibirá las tiernas misericordias del Señor en su vida al grado que aprenda a esperarlas y que llegue a creer que el poder de Dios puede en verdad ayudarle a recuperarse.
                    </p>
                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Ore y lea y medite en las Escrituras
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            A medida que se despoje de su orgullo y considere recuperar a Dios en su vida, empezará a pensar en términos más devotos. Entonces, estará preparado para arrodillarse y orar en voz alta y notará qué bien se siente al expresar a Dios sus sentimientos y necesidades. Sentirá como si hubiera reanudado una conversación con alguien que siempre le responde, no siempre afirmativamente, pero sí con amor. Finalmente, comenzará a experimentar el efecto sanador propio de la ruptura con un aislamiento autoimpuesto.
                        </p>
                        <p className='text-justify'>
                            El deseo de comunicarse con Dios le conducirá a estudiar las palabras de los profetas actuales y de la antigüedad. Al saber de otras personas que han hallado respuestas en las Escrituras, aumentará su esperanza en que también usted las puede hallar. Según escriba sus pensamientos, recibirá nuevas impresiones del Espíritu. Estudie con el espíritu de oración y el Señor atenderá a sus preguntas y necesidades.
                        </p>
                        <p className='text-justify'>
                            Una buena manera de comenzar su estudio es emplear los versículos que se hallan al final de cada capítulo de esta guía. Cada uno de ellos ha sido seleccionado pensando en su recuperación y cada pregunta se plantea con la esperanza de ayudarle a aplicar dicho versículo en su vida. Dedique unos minutos cada día a descubrir lo que el Señor desea comunicarle.

                        </p>

                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Crea en Dios, el Eterno Padre, en Su Hijo Jesucristo y en el Espíritu Santo                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            La mayoría de nosotros creció con algún concepto de Dios y, al ser miembros de la Iglesia, teníamos por lo menos algún conocimiento sobre nuestro Padre Celestial, Jesucristo y el Espíritu Santo. Puede que incluso tuviéramos una sencilla creencia en Ellos, pero a menudo no asociábamos nuestras luchas personales con la necesidad del poder de Dios en nuestra vida.
                        </p>
                        <p className='text-justify'>
                            La acción requerida en el paso 2 consiste básicamente en estar dispuestos a creer en el amor y la misericordia de nuestro Padre Celestial y de Jesucristo, así como en la accesibilidad y la bendición del Espíritu Santo. Testificamos que puede llegar a conocer el amor perfectamente unido de la Divinidad al contemplar la evidencia de ese amor y de ese poder en su propia vida y en la de los demás.
                        </p>

                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras le ayudarán a dar el paso 2. Válgase de ellos y de las preguntas
                    para su análisis y estudio, y para realizar anotaciones. Recuerde ser sincero y específico con lo que escriba.
                </p>

                <h2 className='font-semibold text-lg' > Creencia en Dios.</h2>
                <p className='text-justify'>
                    “Creed en Dios; creed que él existe, y que creó todas las cosas, tanto en el cielo como en la tierra; creed que él tiene toda sabiduría y todo poder, tanto en el cielo como en la tierra; creed que el hombre no comprende todas las cosas que el Señor puede comprender” (Mosíah 4:9).

                </p>

                <h2>
                    Muchos testimonios en el cielo y en la tierra testifican de la existencia de Dios. ¿Qué evidencias de Dios y de Su amor ha experimentado usted?
                </h2>
                <textarea onChange={(e) => saveResponse(14, e.target.value)} defaultValue={localStorage.getItem('pre14')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p14" id="p14" />

                <h2 className='font-semibold text-lg'>
                    Fe en Jesucristo
                </h2 >
                <p className='text-justify'>
                    “Predícales el arrepentimiento y la fe en el Señor Jesucristo; enséñales a humillarse, y a ser mansos y humildes de corazón; enséñales a resistir toda tentación del diablo, con su fe en el Señor Jesucristo” (Alma 37:33).
                </p>

                <h2>
                    Muchos tratamos de salir de la adicción con una voluntad débil o teniendo fe en un amigo o terapeuta, para darnos cuenta, tarde o temprano, que la fe en nosotros mismos o en los demás no nos habilitaba para superar nuestra adicción por completo. Hoy, escriba qué piensa acerca de la humildad y el deseo de creer en Cristo y en Su Evangelio como fuentes principales para su recuperación.
                </h2>
                <textarea onChange={(e) => saveResponse(15, e.target.value)} defaultValue={localStorage.getItem('pre15')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p15" id="p15" />

                <h2 className='font-semibold text-lg'>
                    La compasión del Salvador
                </h2>
                <p className='text-justify'>
                    “E inmediatamente el padre del muchacho clamó y dijo: Creo; ayuda mi incredulidad” (Marcos 9:24).
                </p>
                <h2>
                    Este hombre buscó la ayuda del Salvador y la obtuvo. Jesús no lo rechazó por su duda. Escriba sobre la compasión y paciencia del Salvador.
                </h2>
                <textarea onChange={(e) => saveResponse(16, e.target.value)} defaultValue={localStorage.getItem('pre16')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p16" id="p16" />

                <h2>
                    ¿Cómo se siente en cuanto a compartir sus sentimientos con el Señor?
                </h2>
                <textarea onChange={(e) => saveResponse(17, e.target.value)} defaultValue={localStorage.getItem('pre17')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p17" id="p17" />

                <h2 className='font-semibold'>
                    El don de la gracia
                </h2>
                <p className='text-justify'>
                    “Acerquémonos, pues, confiadamente al trono de
                    la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro” (Hebreos 4:16).
                </p>

                <h2>
                    En la Guía para el Estudio de las Escrituras, el término gracia se define como “ayuda o fortaleza divina” que procede de la generosa “misericordia y el amor de Dios” (“Gracia”, GEE, pág. 85). Este don de fortaleza divina le ayudará a lograr más de lo que haría por sí mismo. El Salvador hará lo que usted no podría hacer por sí mismo. Su gracia es el medio que le permite arrepentirse y cambiar. ¿De qué modo ha sentido usted el don de la gracia en su vida?
                </h2>
                <textarea onChange={(e) => saveResponse(18, e.target.value)} defaultValue={localStorage.getItem('pre18')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p18" id="p18" />


                <h2>
                    ¿Cómo puede el don de la fortaleza divina ayudarle a que su recuperación sea continua?
                </h2>
                <textarea onChange={(e) => saveResponse(19, e.target.value)} defaultValue={localStorage.getItem('pre19')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p19" id="p19" />

                <h2 className='font-semibold text-lg'>
                    Curación
                </h2>
                <p className='text-justify'>
                    “¿Crees en el poder de Cristo para salvar?... Si crees en la redención de Cristo, tú puedes ser sanado” (Alma 15:6, 8).

                </p>
                <h2>
                    Cuando pensamos en curar o sanar, generalmente pensamos en nuestro cuerpo. ¿Qué otro aspecto suyo puede requerir el poder sanador de Jesucristo?
                </h2>
                <textarea onChange={(e) => saveResponse(20, e.target.value)} defaultValue={localStorage.getItem('pre20')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p20" id="p20" />
                <h2>
                    Escriba sobre su necesidad de invocar el poder redentor (liberador, transformador) de Jesucristo.
                </h2>
                <textarea onChange={(e) => saveResponse(21, e.target.value)} defaultValue={localStorage.getItem('pre21')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p21" id="p21" />

                <h2 className='font-semibold text-lg'>
                    Despertar
                </h2>
                <p className='text-justify'>
                    “Mas he aquí, si despertáis y aviváis vuestras facultades hasta experimentar con mis palabras, y ejercitáis un poco de fe, sí, aunque no sea más que un deseo de creer, dejad que este deseo obre en vosotros, sí, hasta creer de tal modo que deis cabida a una porción de mis palabras” (Alma 32:27).
                </p>
                <h2>
                    Tomar conciencia (o despertar y avivar sus facultades) es una parte importante del proceso de aprender a creer. ¿De qué manera es usted más consciente del poder de Jesucristo en su vida en comparación con la semana pasada, con el mes pasado o con el año pasado?
                </h2>
                <textarea onChange={(e) => saveResponse(22, e.target.value)} defaultValue={localStorage.getItem('pre22')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p22" id="p22" />


                <h2 className='font-semibold text-lg'>
                    Liberación de la servidumbre
                </h2>
                <p className='text-justify'>
                    “Se hallaban en el cautiverio, y nuevamente el Señor los libró de la servidumbre por el poder de su palabra” (Alma 5:5).
                </p>
                <h2>
                    La palabra de Dios será poderosa en librarle del cautiverio. Usted podrá encontrar la palabra de Dios en las Escrituras y en los discursos que oiga en las conferencias o que lea en las revistas de la Iglesia. También puede recibir Su palabra directamente por medio del Espíritu Santo. Escriba algunas de las cosas que usted está dispuesto a hacer hoy para recibir Su palabra.

                </h2>
                <textarea onChange={(e) => saveResponse(23, e.target.value)} defaultValue={localStorage.getItem('pre23')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p23" id="p23" />
                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/1')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/3')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
