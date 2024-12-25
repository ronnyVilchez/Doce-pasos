import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoTres = () => {
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
                <h1 className='font-semibold text-xl text-center'>PASO 3: CONFIAR EN DIOS</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Decida entregar su voluntad y su vida a Dios, el Padre Eterno, y a Su Hijo Jesucristo </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        El paso 3 es el de la decisión. En los dos primeros pasos tomamos conciencia de lo que no podíamos hacer por nosotros mismos y de lo que necesitábamos que Dios hiciera por nosotros. Ahora, en el paso 3, se nos presenta la única cosa que podemos hacer por Dios: someter nuestra voluntad a Él y entregarle nuestra vida por completo, junto con el pasado, el presente y el futuro. El paso 3 constituye un ejercicio deliberado del albedrío y es la decisión más importante que llegaremos a tomar.

                    </p>
                    <p className='text-justify'>
                        El élder Neal A. Maxwell del Quórum de los Doce Apóstoles, declaró lo siguiente sobre esta decisión tan sumamente significativa: “La sumisión de nuestra
                        voluntad es la única cosa exclusivamente personal que tenemos para colocar sobre el altar de Dios. Es una doctrina difícil, pero es verdadera. Todo lo demás que le ‘damos’, por muy bonito que sea de nuestra parte, es en realidad lo que Él nos ha dado o prestado. Mas cuando nos sometemos dejando que nuestra voluntad sea absorbida en la voluntad de Dios, entonces, verdaderamente le estamos dando algo” (“Insights from My Life”, Ensign, agosto de 2000, pág. 9).

                    </p>
                    <p className='text-justify'>
                        El presidente Boyd K. Packer, del Quórum de los Doce Apóstoles, describió así su decisión de entregar su voluntad a Dios y la libertad que tal decisión le proporcionó: “Tal vez, el mayor descubrimiento de mi vida, sin duda el mayor compromiso, se produjo cuando finalmente conté con la suficiente confianza en Dios para prestarle o cederle mi albedrío, sin compulsión ni presión, sin coacción alguna, yo solo, como individuo, sin falsedad, sin esperar a cambio más que ese privilegio. En sentido figurado, es tomar nuestro albedrío, ese don preciado que las Escrituras claramente explican que es esencial para la vida misma, y decir: ‘Haré como me indiques’, aprendemos más tarde que, por haberlo hecho, se posee aún más” (Obedience, Brigham Young University Speeches of the Year, 7 de diciembre de 1971, pág. 4).

                    </p>
                    <p className='text-justify'>
                        Al dar el paso 3, nos percatamos de la verdad de que la recuperación era un resultado más propio del Señor que nuestro. Él obró el milagro cuando le invitamos a formar parte de nuestra vida. El paso 3 fue la decisión de permitir al Señor que nos curara y nos redimiera. Decidimos permitirle que dirigiera nuestra vida, recordando, naturalmente, que Él siempre respeta nuestro albedrío. Así pues, decidimos depositar nuestra vida en Sus manos y proseguir con el programa de recuperación tan espiritual.

                    </p>
                    <p className='text-justify'>
                        Puede que las primeras veces que acudimos a las reuniones de recuperación nos sintiéramos presionados, o incluso forzados por otros a estar allí, pero dar el paso 3 suponía que debíamos decidir hacerlo por nosotros mismos. Nos dimos cuenta de que un cambio así en nuestra vida debía ser decisión nuestra. Nada tenía que ver con lo que hicieron nuestros padres, lo que estaban haciendo ni con lo que ellos querían. Tampoco se trataba de lo que nuestros cónyuges, nuestras familias o nuestras amistades pensaban, sentían, hacían o dejaban de hacer. Aprendimos que debíamos estar dispuestos a permanecer limpios y sobrios, independientemente de lo que opinaran o decidieran los demás. Nuestra decisión constituía la sólida base sobre la que descansaba el equilibrio de la recuperación. Al leer en el Libro de Mormón, en Alma 5:13 descubrimos una poderosa validación del paso 3: “Se humillaron, y pusieron su confianza en el Dios verdadero y viviente”.

                    </p>
                    <p className='text-justify'>
                        Cuando dimos ese paso, nos aterraba lo desconocido.
                        ¿Qué iba a suceder si nos humillábamos y cedíamos completamente nuestra vida y voluntad a Dios? Para muchos de nosotros la infancia había sido muy dura y nos asustaba la idea de volver a ser nuevamente tan vulnerables como un niño. Las experiencias pasadas nos convencían de que alcanzar un compromiso definitivo era casi imposible, dada la insensatez que nos rodeaba en este mundo. Habíamos visto muchos compromisos rotos; nosotros mismos habíamos roto muchos. Lo mejor que algunos podíamos hacer era intentar lo que nuestros compañeros de recuperación nos habían sugerido: “No recaigan. Vayan a las reuniones. Pidan ayuda”. Nuestros predecesores en los pasos de la recuperación nos invitaban a experimentar este nuevo modo de vida y aguardaron pacientemente a que estuviéramos dispuestos a abrir la puerta a Dios aunque sólo fuera un poquito.

                    </p>
                    <p className='text-justify'>
                        El Señor nos extiende la misma invitación: “He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo” (Apocalipsis 3:20).

                    </p>
                    <p className='text-justify'>
                        Al principio, nuestros esfuerzos eran ansiosos y vacilantes. Depositábamos nuestra confianza en el Señor y después se la quitábamos. Nos preocupaba que le disgustara nuestra incoherencia y que nos retirara Su apoyo y Su amor. Pero no lo hizo.
                    </p>

                    <p className='text-justify'>

                        Poco a poco le permitimos que nos demostrara Su poder sanador y la seguridad de seguir Su camino; finalmente, cada uno de nosotros se percató de que no sólo tenía que zanjar sus adicciones, sino que también debía entregar completamente su voluntad y vida al Señor. Al hacerlo, descubrimos Su paciencia y la aceptación de nuestros vacilantes esfuerzos por someternos a Él en todas las cosas.
                    </p>
                    <p className='text-justify'>

                        En la actualidad, nuestra capacidad para resistir la tentación se fundamenta en nuestra continua sumisión a la voluntad del Señor. Expresamos la necesidad que tenemos del poder que recibimos a través de la expiación de nuestro Salvador y comenzamos a sentirlo dentro de nosotros, fortaleciéndonos contra la siguiente tentación. Hemos aprendido a aceptar la vida en los términos del Señor.
                    </p>

                    <p className='text-justify'>
                        Como mencionó el élder Maxwell, esa sumisión al Señor es una doctrina difícil, pues requiere que renovemos nuestra dedicación a Su voluntad al comienzo de cada día y, a veces, a cada hora o incluso, de un instante para otro. Pero esta disposición nos brinda la gracia o el poder que nos faculta para hacer aquello que no podríamos hacer por nosotros mismos.

                    </p>
                    <p className='text-justify'>
                        La sumisión continua a la voluntad de Dios reduce el conflicto y otorga más sentido a nuestra vida. Cosas pequeñas como los atascos de tráfico ya no harán
                        que nos enojemos; ya no temeremos a nuestros acreedores. Aceptamos la responsabilidad por nuestras acciones. Aceptamos y tratamos a los demás como deseamos que se nos trate, como el Salvador lo haría. Finalmente tenemos los ojos, la mente y el corazón abiertos a la verdad de que la vida terrenal es todo un reto y que siempre existirá la posibilidad de que nos produzca pesar y frustración, pero también felicidad.

                    </p>
                    <p className='text-justify'>
                        Cada día renovamos nuestra entrega al Señor y a Su voluntad. Eso es lo que la mayoría de nosotros expresa cuando dice: “Primero un paso y luego otro”. Hemos decidido dejar atrás nuestra obstinación y nuestro egoísmo, que constituían la base de nuestra adicción, para disfrutar otras 24 horas de la serenidad y la fuerza que se reciben al confiar en el Señor y en Su bondad, Su poder y Su amor.

                    </p>

                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Asista a la reunión sacramental; analice y renueve los convenios bautismales
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
                            El bautismo y la Santa Cena simbolizan su amor por Jesucristo y su entrega a Él. Usted concierta un convenio de tomar Su nombre sobre sí, recordarle siempre, seguirle y guardar Sus mandamientos “para que siempre [pueda] tener su espíritu consigo” (Moroni 4:3; véase también Moroni 5:2; D. y C. 20:77, 79).
                        </p>
                        <p className='text-justify'>
                            Hable con su obispo o presidente de rama sobre su adicción y su decisión de obedecer la voluntad de Dios. Esfuércese por asistir semanalmente a la reunión sacramental. Durante la ordenanza de la Santa Cena, preste suma atención a las oraciones sacramentales y considere los dones que le ofrece nuestro Padre Celestial.

                        </p>
                        <p className='text-justify'>

                            Después renueve su compromiso de aceptar y seguir Su voluntad en su vida participando de la Santa Cena si su obispo o presidente de rama le da permiso para ello.
                        </p>
                        <p className='text-justify'>
                            Al avanzar en su recuperación, usted mismo se sentirá más dispuesto a estar entre quienes honran el sacrificio del Salvador y comenzará a experimentar
                            la realidad de que “nada hay imposible para Dios” (Lucas 1:37).
                        </p>
                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Decida confiar en Dios y obedecerle; cambie lo que pueda cambiar y acepte lo que no puede cambiar

                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Esas palabras, adaptadas de una oración de Reinhold Niebuhr y conocidas como la “Oración de la serenidad”, pueden ayudarle cuando decida obedecer a Dios y confiar en Él: “Dios, concédeme la serenidad de aceptar las cosas que no puedo cambiar, el valor para cambiar aquello que sí puedo modificar, y la sabiduría para discernir”.

                        </p>
                        <p className='text-justify'>
                            Acepte la realidad actual de su condición y confíe en la capacidad de Dios para ayudarle. Usted puede aceptar con serenidad que, si bien no es posible controlar las decisiones y las acciones de los demás, sí puede decidir cómo actuar en cada situación.
                        </p>
                        <p className='text-justify'>
                            Puede decidir confiar con valor en su Padre Celestial y actuar según Su voluntad. Usted puede entregarle su voluntad y su vida. Puede decidir hacer lo que Él le pida y obedecer Sus mandamientos.
                        </p>
                        <p className='text-justify'>
                            Tal vez no pueda cambiar ciertas cosas en su vida, pero sí puede cambiar su disposición para confiar en Dios y obedecerle. A medida que aprenda a confiar en Él, verá que el plan que Él tiene para usted consiste en ceñirse a lo que Alma denominó “el gran plan de felicidad” (Alma 42:8). Aprenderá que, aun en medio de aflicciones y dificultades, “a los que aman a Dios” y obedecen Sus mandamientos, “todas las cosas les ayudan a bien” (Romanos 8:28; véase también D. y C. 90:24; 98:3; 100:15; 105:40).

                        </p>

                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras pueden ayudarle a dar el paso 3. Válgase de ellos y de las preguntas para su análisis y estudio, y para realizar anotaciones. Recuerde ser sincero y específico con lo que escriba.
                </p>

                <h2 className='font-semibold text-lg' > En armonía con la voluntad de Dios </h2>
                <p className='text-justify'>
                    “Reconciliaos con la voluntad de Dios, y no con la voluntad del diablo y la carne; y recordad, después de haberos reconciliado con Dios, que tan sólo en la gracia de Dios, y por ella, sois salvos” (2 Nefi 10:24).

                </p>

                <h2>
                    Reflexione en el significado que tiene para su vida el vivir en armonía con la voluntad de Dios.
                    Piense cómo puede recibir Su poder al volverse a Él. ¿Cómo se siente en cuanto a dejar que Dios dirija su vida?

                </h2>
                <textarea onChange={(e) => saveResponse(24, e.target.value)} defaultValue={localStorage.getItem('pre24')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p24" id="p24" />
                <h2>
                    ¿Qué le impide permitirle que dirija su vida?

                </h2>
                <textarea onChange={(e) => saveResponse(25, e.target.value)} defaultValue={localStorage.getItem('pre25')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p25" id="p25" />

                <h2 className='font-semibold text-lg'>
                    Sumisión a la voluntad de Dios
                </h2 >
                <p className='text-justify'>
                    “Las cargas que se imponían sobre Alma y sus hermanos fueron aliviadas; sí, el Señor los fortaleció de modo que pudieron soportar sus cargas con facilidad, y se sometieron alegre y pacientemente a toda la voluntad del Señor” (Mosíah 24:15).

                </p>

                <h2>
                    El Señor habría podido retirar las cargas de Alma y su pueblo; en cambio, los fortaleció para que llevaran “sus cargas con facilidad”. Fíjese en que no se quejaron, sino que se sometieron alegre y pacientemente a la voluntad del Señor. Escriba sobre la humildad necesaria para desear el alivio inmediato y aun así estar dispuesto a aceptar que la carga se aligere gradualmente.
                </h2>
                <textarea onChange={(e) => saveResponse(26, e.target.value)} defaultValue={localStorage.getItem('pre26')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p26" id="p26" />

                <h2>
                    ¿Qué significa someterse a Dios? ¿Cómo se somete usted a Él?
                </h2>
                <textarea onChange={(e) => saveResponse(27, e.target.value)} defaultValue={localStorage.getItem('pre27')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p27" id="p27" />

                <h2>
                    ¿Cómo se siente en cuanto a someterse deseosamente y con paciencia a los planes de cambio del Señor?
                </h2>
                <textarea onChange={(e) => saveResponse(28, e.target.value)} defaultValue={localStorage.getItem('pre28')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p28" id="p28" />
                <h2>
                    ¿Cómo se consigue el valor para seguir adelante hasta hallarse libre de sus cargas?
                </h2>


                <textarea onChange={(e) => saveResponse(29, e.target.value)} defaultValue={localStorage.getItem('pre29')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p29" id="p29" />

                <h2 className='font-semibold text-lg'>
                    Ayuno y oración
                </h2>
                <p className='text-justify'>
                    “Ayunaron y oraron frecuentemente, y se volvieron más y más fuertes en su humildad, y más y más firmes en la fe de Cristo, hasta henchir sus almas de gozo y de consolación; sí, hasta la purificación y santificación de sus corazones, santificación que viene de entregar el corazón a Dios” (Helamán 3:35).
                </p>
                <h2>
                    Este versículo describe a un pueblo que entregó su corazón a Dios. ¿Cómo puede el ayuno fortalecer su capacidad para entregar su corazón a Dios y abstenerse de la adicción?
                </h2>

                <textarea onChange={(e) => saveResponse(30, e.target.value)} defaultValue={localStorage.getItem('pre30')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p30" id="p30" />

                <h2>
                    Considere la importancia de orar en el momento de la tentación y escriba cómo la oración fortalecerá su humildad y su fe en Cristo.
                </h2>
                <textarea onChange={(e) => saveResponse(31, e.target.value)} defaultValue={localStorage.getItem('pre31')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p31" id="p31" />

                <h2>
                    ¿Cuán fuerte es su disposición de entregar su corazón a Dios en lugar de ceder a la adicción en el momento de la tentación?
                </h2>
                <textarea onChange={(e) => saveResponse(32, e.target.value)} defaultValue={localStorage.getItem('pre32')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p32" id="p32" />

                <h2 className='font-semibold'>
                    Humíllese ante Dios
                </h2>
                <p className='text-justify'>
                    “Los libró porque se humillaron ante él; y porque clamaron a él poderosamente, los libró del cautiverio; y así es como en todos los casos el Señor obra con su poder entre los hijos de los hombres, extendiendo su brazo de misericordia hacia aquellos que ponen su confianza en él” (Mosíah 29:20).

                </p>

                <h2>
                    ¿Qué le impide “clamar poderosamente” a Dios para que lo libre según Su voluntad?
                </h2>

                <textarea onChange={(e) => saveResponse(33, e.target.value)} defaultValue={localStorage.getItem('pre33')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p33" id="p33" />


                <h2>
                    ¿Qué le ha impedido en el pasado solicitar este tipo de liberación?
                </h2>
                <textarea onChange={(e) => saveResponse(34, e.target.value)} defaultValue={localStorage.getItem('pre34')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p34" id="p34" />

                <h2>
                    ¿Cómo puede usted aprender a confiar en Dios?
                </h2>
                <textarea onChange={(e) => saveResponse(35, e.target.value)} defaultValue={localStorage.getItem('pre35')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p35" id="p35" />
                <h2>
                    Ser humilde es una decisión personal. Satanás intentará hacerle creer que aunque Dios ha ayudado a otros, no lo ayudará porque usted está indefenso y desesperado. Reconozca que eso es mentira. Ciertamente, usted es un hijo de Dios.
                    ¿Cómo puede ese conocimiento ayudarle a ser humilde?
                </h2>
                <textarea onChange={(e) => saveResponse(36, e.target.value)} defaultValue={localStorage.getItem('pre36')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p36" id="p36" />
                <h2 className='font-semibold text-lg'>
                    La decisión de iniciar la recuperación
                </h2>
                <p className='text-justify'>
                    “Quisiera que fueseis humildes, que fueseis sumisos y dóciles; fáciles de persuadir; llenos de paciencia y longanimidad; siendo moderados en todas las cosas; siendo diligentes en guardar los mandamientos de Dios en todo momento; pidiendo las cosas que necesitéis, tanto espirituales como temporales; siempre dando gracias a Dios por las cosas que recibís” (Alma 7:23).

                </p>
                <h2>
                    El paso 3 es una elección. La recuperación es fruto del poder de Dios, pero solamente después de que usted decida solicitar Su ayuda. Esta decisión permite que el poder de Dios fluya en su vida.
                    Reconozca que la humildad, la paciencia, la docilidad y otras virtudes son decisiones que tomamos. La gratitud es la última cualidad mencionada en el pasaje. ¿Cómo le ayuda la gratitud a ser humilde?

                </h2>
                <textarea onChange={(e) => saveResponse(37, e.target.value)} defaultValue={localStorage.getItem('pre37')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p37" id="p37" />


                <h2>
                    ¿Qué otras cualidades incluyó Alma en esta lista?
                </h2>
                <textarea onChange={(e) => saveResponse(38, e.target.value)} defaultValue={localStorage.getItem('pre38')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p38" id="p38" />

                <h2>
                    ¿Qué cualidades le faltan a usted?
                </h2>
                <textarea onChange={(e) => saveResponse(39, e.target.value)} defaultValue={localStorage.getItem('pre39')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p39" id="p39" />
                <h2>
                    ¿En cuáles puede trabajar hoy? ¿Qué puede hacer para empezar ahora mismo?
                </h2>
                <textarea onChange={(e) => saveResponse(40, e.target.value)} defaultValue={localStorage.getItem('pre40')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p40" id="p40" />

                <h2 className='font-semibold text-lg'>
                    Vuélvase como un niño                </h2>
                <p className='text-justify'>
                    “Porque el hombre natural es enemigo de Dios, y lo ha sido desde la caída de Adán, y lo será para siempre jamás, a menos que se someta al influjo del Santo Espíritu, y se despoje del hombre natural, y se haga santo por la expiación de Cristo el Señor, y se vuelva como un niño: sumiso, manso, humilde, paciente, lleno de amor y dispuesto a someterse a cuanto el Señor juzgue conveniente imponer sobre él, tal como un niño se somete a su padre” (Mosíah 3:19).

                </p>
                <h2>
                    Muchos de nosotros hemos experimentado la falta de amor en el trato recibido de nuestros padres o tutores, y por lo tanto, volverse “como un niño” es algo desafiante, o incluso aterrador. Si tiene problemas pendientes de resolución con alguno de sus progenitores, ¿qué puede hacer para diferenciar sus sentimientos por sus padres de sus sentimientos por Dios?

                </h2>
                <textarea onChange={(e) => saveResponse(41, e.target.value)} defaultValue={localStorage.getItem('pre41')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p41" id="p41" />

                <h2>
                    Aunque tal vez tenga problemas que resolver con sus padres terrenales, confíe en que nuestro Padre Celestial y el Salvador son como unos padres perfectos. ¿Por qué puede usted confiar en su Padre Celestial y en el Salvador al entregarles su vida?

                </h2>
                <textarea onChange={(e) => saveResponse(42, e.target.value)} defaultValue={localStorage.getItem('pre42')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p42" id="p42" />

                <h2 className='font-semibold text-lg'>
                    Comunión con Dios
                </h2>
                <p className='text-justify'>
                    “Y puesto [Jesús] de rodillas oró, diciendo: Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya” (Lucas 22:41– 42).
                </p>
                <h2>
                    En esta oración, el Salvador mostró Su disposición para someterse al Padre. Primero expresó sus deseos, pero luego, con humildad, obedeció al Padre. Considere qué gran bendición es poder expresar sus deseos a Dios. ¿Cómo le ayuda el conocimiento de que Él comprende su vacilación, su dolor o lo que usted sienta al poder decir de corazón: “Hágase Tu voluntad”?
                </h2>
                <textarea onChange={(e) => saveResponse(43, e.target.value)} defaultValue={localStorage.getItem('pre43')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p43" id="p43" />

                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/2')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/4')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
