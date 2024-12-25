import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoSeis = () => {
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
                <h1 className='font-semibold text-xl text-center'>PASO 6: EL CAMBIO DE CORAZÓN</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Prepárese por completo para que Dios erradique todas las debilidades de su carácter. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Tras la rigurosa purificación emocional y espiritual de los pasos 4 y 5, a la mayoría nos sorprendió la trasformación que se produjo en nosotros. Oramos con más intensidad, meditamos en las Escrituras con regularidad y escribimos con mayor constancia en nuestro diario. Nos preparamos para efectuar y observar convenios sagrados asistiendo a la reunión sacramental.

                    </p>
                    <p className='text-justify'>
                        Al dar el paso 5, muchos de nosotros nos reunimos con nuestros obispos y buscamos ayuda para arrepentirnos. La mayor parte de nosotros se dio cuenta de que nuestras adicciones nos tentaban con menor intensidad y frecuencia. Algunos ya estábamos libres de ellas. Habiendo experimentado tan poderoso cambio en nuestra conducta y nuestra vida, algunos nos preguntábamos por qué era necesario seguir más pasos.

                    </p>
                    <p className='text-justify'>
                        Sin embargo, con el paso del tiempo nos percatamos de que la abstinencia parecía poner más de manifiesto las debilidades de nuestro carácter, especialmente ante nosotros mismos. Intentamos controlar nuestros pensamientos y sentimientos negativos, pero continuaban resurgiendo, obsesionándonos y amenazando nuestra nueva vida de abstinencia y actividad en la Iglesia. Quienes comprendían las implicaciones espirituales de la recuperación nos instaron a reconocer que, si bien los cambios externos eran maravillosos, el Señor deseaba bendecirnos mucho más. Nuestros amigos nos ayudaron a ver que si deseábamos no sólo evitar nuestras adicciones, sino finalmente erradicar todo deseo de volver a ellas, debíamos experimentar un cambio de corazón. Ese cambio de corazón, o deseo, es el propósito del paso 6.

                    </p>
                    <p className='text-justify'>
                        Tal vez se pregunte: “¿Cómo? ¿Cómo puedo siquiera iniciar semejante cambio?”. No permita que esos sentimientos le desanimen. Como sucedió con los pasos anteriores, el paso 6 puede antojársele un desafío imposible. A pesar de lo doloroso que pueda ser, admita, como hicimos nosotros, que reconocer y confesar sus debilidades de carácter en los pasos 4 y 5 no equivale necesariamente a estar preparado para abandonarlas. Tal vez se percate de que todavía se halla aferrado a los antiguos modos de reaccionar y de hacer frente a las tensiones de la vida, incluso es probable que se manifiesten con más intensidad ahora que ha dejado sus adicciones.

                    </p>
                    <p className='text-justify'>
                        Probablemente, el aspecto más humillante sea tener que reconocer que todavía alberga un deseo orgulloso de cambiar sin la ayuda de Dios. El paso 6 implica rendir a Dios todo resto de orgullo y egoísmo. Como sucedió en los pasos 1 y 2, el 6 requiere que usted se humille y admita su necesidad del poder redentor y transformador de Cristo. Después de todo, Su sacrificio expiatorio le ha permitido dar todos los pasos hasta este punto, y el paso 6 no es una excepción.

                    </p>
                    <p className='text-justify'>
                        No le decepcionará acudir a Cristo en busca de ayuda para dar este paso. Si confía en Él y es paciente durante el proceso, verá como su orgullo es gradualmente reemplazado por la humildad. Él esperará pacientemente hasta que usted se canse de sus infructuosos esfuerzos personales por cambiar, y tan pronto como se vuelva a Él, presenciará una vez más el amor y poder que le tiene reservados. Su resistencia a dejar atrás los viejos hábitos de comportamiento será reemplazada por una mente abierta, a medida que el Espíritu le sugiera dulcemente una mejor manera de vivir. Su miedo a cambiar disminuirá conforme se dé cuenta de que el Señor comprende el dolor y el arduo trabajo requerido.

                    </p>
                    <p className='text-justify'>
                        A medida que el proceso de ir a Cristo se asiente en su corazón, verá como las falsas nociones que alimentaban los pensamientos y los sentimientos negativos son reemplazadas gradualmente por la verdad. Su fortaleza aumentará al seguir estudiando la palabra de Dios y reflexionando en su aplicación personal. El Señor, por medio del testimonio de otras personas, le hará ver la verdad de que usted no está fuera del alcance de Su poder sanador. El deseo de culpar a otras personas por la condición de su carácter o de racionalizar su negativa a un cambio de corazón será sustituido por el deseo de ser responsable ante el Señor y sumiso a Su voluntad. El Señor declaró por medio del profeta Ezequiel: “Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne” (Ezequiel 36:26).

                    </p>
                    <p className='text-justify'>
                        El Señor desea bendecirle con un cambio de disposición que le una a Él en mente y corazón, así como Él está unido con el Padre. Desea librarle de su separación de Dios el Padre, separación que originó los miedos que contribuyeron a su adicción. Él desea que la Expiación surta efecto en su vida de manera inmediata.
                    </p>

                    <p className='text-justify'>

                        A medida que ceda a las impresiones del Espíritu y acuda al Salvador en busca de salvación, no solamente de su adicción, sino de sus debilidades de carácter, tenga la certeza de que su voluntarioso corazón albergará una nueva disposición de carácter. El deseo creciente de ser santificado por Dios le preparará para un cambio en lo más recóndito de su naturaleza. Las siguientes palabras del presidente Ezra Taft Benson encierran una de las mejores descripciones de ese proceso:
                    </p>
                    <p className='text-justify'>
                        “El Señor ejerce Su poder desde el interior del hombre hacia afuera. Por el contrario, el mundo lo ejerce desde afuera hacia dentro. El mundo trata de sacar a la gente de los barrios bajos; Cristo saca la bajeza social del corazón de las personas y ellos mismos salen de los barrios bajos. El mundo trata de reformar al hombre cambiando su entorno; Cristo cambia al hombre, y éste cambia su entorno. El mundo trata de amoldar el comportamiento del hombre, pero Cristo puede cambiar la naturaleza humana...
                    </p>

                    <p className='text-justify'>
                        “Convenzámonos de que Jesús es el Cristo, decidamos seguirlo, cambiemos por Él, permitamos que nos guíe, consumámonos en Él y nazcamos de nuevo” (véase “Nacidos de Dios”, Liahona, enero de 1986, pág. 2).

                    </p>


                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Anhele que el Salvador convierta su corazón; asóciese con Jesucristo asistiendo a la Escuela Dominical y a las reuniones de la Sociedad de Socorro o del sacerdocio
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Cuando nos bautizamos, pocos comprendimos el proceso de la verdadera conversión, que dura toda la vida. Sin embargo, el presidente Marion G. Romney, de la Primera Presidencia, lo explicó muy llanamente: “Para uno que está realmente convertido, el deseo de hacer cosas contrarias al Evangelio de Jesucristo muere, y en su lugar nace el amar a Dios con la firme e imperante determinación de guardar Sus mandamientos” (en Conference Report, Guatemala Area Conference, 1977, pág. 8).

                        </p>
                        <p className='text-justify'>
                            A medida que experimente el milagro de una recuperación continua (primero, de los destructivos hábitos de la adicción, y luego de las debilidades del carácter), experimentará la verdadera conversión. Comenzará a despertar, a volver en sí, como el hijo pródigo (véase Lucas 15:17). Comenzará a darse cuenta de que para volver al reino del Padre Celestial, no solamente debe usted despertar, sino levantarse y permitir que Jesucristo sea su Redentor.
                        </p>

                        <p className='text-justify'>
                            Al entregar su corazón a Dios y fortalecerse en la humildad, su determinación de no repetir los comportamientos del pasado será cada vez más firme. Liberado del cautiverio del pasado, cada vez se sentirá más cómodo entre los hermanos de la Iglesia. Sentirá en su interior el deseo de volver y ser contado como hijo de Dios en completa hermandad entre las ovejas de Su redil (véase 1 Nefi 22:24–26; Mosíah 27:25–26;
                            Mosíah 29:20; Helamán 3:35).


                        </p>

                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Esté dispuesto a cambiar para que el poder de Dios erradique sus imperfecciones

                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Tanto si su adicción tuviera que ver con el alcohol, las drogas, el juego, la pornografía, los desórdenes alimenticios, la realización compulsiva de compras o cualquier otro tipo de conducta que representa su necesidad de huir y esconderse de las tensiones o los problemas de la vida, podrá darse cuenta de que todo comenzó en su mente y en su corazón. Según aumente su deseo de cambiar durante el proceso de llegar a Jesucristo, llegará a conocer Su poder para sanarle.

                        </p>
                        <p className='text-justify'>
                            Con el paso 6 aumentará su compromiso de abstenerse de las adicciones del pasado a través de una relación más profunda con el Padre, y con el Salvador, Jesucristo, a quien Él envió. Usted es quien decide adoptar un carácter serio, como el del joven profeta Mormón (véase Mormón 1:15). Siga aceptando el hecho de que Dios verdaderamente debe serlo todo para usted a fin de salvarle de las debilidades del pensamiento, la palabra y las obras.
                        </p>


                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras y las citas de los líderes de la Iglesia pueden ayudarle a dar el paso 6. Válgase de ellos para meditarlos, estudiarlos y para realizar anotaciones.
                </p>

                <h2 className='font-semibold text-lg' >
                    Abandone todos sus pecados
                </h2>
                <p className='text-justify'>
                    “Dijo el rey:... ¿qué haré para nacer de Dios, desarraigando de mi pecho este espíritu inicuo, y recibir el Espíritu de Dios para que sea lleno de gozo?... daré cuanto poseo... a fin de poder recibir este gran gozo...

                </p>
                <p className='text-justify'>
                    “... El rey se humilló de rodillas ante el Señor, sí, se postró hasta el polvo, y clamó fuertemente diciendo: “¡Oh Dios!... abandonaré todos mis pecados para conocerte, y para que sea levantado de entre los muertos y sea salvo en el postrer día” (Alma 22:15, 17–18).

                </p>

                <h2>
                    Vuelva a leer Alma 22:15, 17–18 con detenimiento. ¿Qué obstáculos (actitudes y sentimientos incluidos) le impiden abandonar “todos [sus] pecados” y recibir más plenamente el Espíritu
                    del Señor?


                </h2>
                <textarea onChange={(e) => saveResponse(64, e.target.value)} defaultValue={localStorage.getItem('pre64')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p64" id="p64" />

                <h2 className='font-semibold text-lg'>
                    Aprenda a ser humilde
                </h2 >
                <p className='text-justify'>
                    “Y si los hombres vienen a mí, les mostraré su debilidad. Doy a los hombres debilidad para que sean humildes; y basta mi gracia a todos los hombres que se humillan ante mí; porque si se humillan ante mí, y tienen fe en mí, entonces haré que las cosas débiles sean fuertes para ellos” (Éter 12:27).

                </p>

                <h2>
                    Al ser mortales e imperfectos, estamos sujetos a muchas debilidades. En este versículo, el Señor explica que nos permite experimentar la mortalidad y tales debilidades para ayudarnos a ser humildes. Sin embargo, fíjese en que somos nosotros los que escogemos ser humildes.
                    ¿Cómo se relaciona la preparación del paso 6 con la elección de ser humilde?
                </h2>
                <textarea onChange={(e) => saveResponse(65, e.target.value)} defaultValue={localStorage.getItem('pre65')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p65" id="p65" />

                <h2>
                    Anote algunas de sus debilidades de carácter y a su lado escriba los puntos fuertes en los que pueden convertirse durante el proceso de llegar a Cristo.
                </h2>
                <textarea onChange={(e) => saveResponse(66, e.target.value)} defaultValue={localStorage.getItem('pre66')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p66" id="p66" />


                <h2 className='font-semibold text-lg'>
                    Participe de la hermandad de la Iglesia
                </h2>
                <p className='text-justify'>
                    “Por esta causa doblo mis rodillas ante el Padre de nuestro Señor Jesucristo,
                </p>
                <p className='text-justify'>
                    “de quien toma nombre toda familia en los cielos y en la tierra,
                </p>
                <p className='text-justify'>
                    “para que os dé, conforme a las riquezas de su gloria, el ser fortalecidos con poder en el hombre interior por su Espíritu;
                </p>
                <p className='text-justify'>
                    “para que habite Cristo por la fe en vuestros corazones, a fin de que, arraigados y cimentados en amor,
                </p>
                <p className='text-justify'>
                    “seáis plenamente capaces de comprender con todos los santos cuál sea la anchura, la longitud, la profundidad y la altura,
                </p>
                <p className='text-justify'>
                    “y de conocer el amor de Cristo, que excede a todo conocimiento, para que seáis llenos de toda la plenitud de Dios” (Efesios 3:14–19).
                </p>
                <h2>
                    Al tomar sobre sí el nombre de Cristo y ser fortalecido por Su Espíritu, comienza a identificarse con los santos, es decir, los hermanos que se han bautizado y han entrado a formar parte de Su familia en la tierra (véase Mosíah 5:7). Tras conocer mejor a los santos, ¿siente más deseos de participar más plenamente en las reuniones del sacerdocio, la Sociedad de Socorro y la Escuela Dominical?
                </h2>

                <textarea onChange={(e) => saveResponse(67, e.target.value)} defaultValue={localStorage.getItem('pre67')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p67" id="p67" />


                <h2 className='font-semibold'>
                    Redención
                </h2>
                <p className='text-justify'>
                    “Porque el hombre natural es enemigo de Dios, y lo ha sido desde la caída de Adán, y lo será para siempre jamás, a menos que se someta al influjo del Santo Espíritu, y se despoje del hombre natural, y se haga santo por la expiación de Cristo el Señor, y se vuelva como un niño: sumiso, manso, humilde, paciente, lleno de amor” (Mosíah 3:19).

                </p>

                <h2>
                    En el bautismo, muchos de nosotros nos convertimos en santos sólo de nombre y pasamos el resto de nuestra vida luchando por despojarnos “del hombre natural” y desarrollar las características que se mencionan en este versículo. ¿Cómo le ha preparado esa lucha para aceptar que solamente por medio de la expiación de Cristo, siendo uno con Él y con el Padre, puede experimentar la redención?
                </h2>

                <textarea onChange={(e) => saveResponse(68, e.target.value)} defaultValue={localStorage.getItem('pre68')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p68" id="p68" />


                <h2 className='font-semibold text-lg'>
                    Venir a Cristo
                </h2>
                <p className='text-justify'>
                    “Cualquiera que sea el origen de la dificultad y la forma en que busques alivio por medio de un profesional cualificado, de un médico, de un líder del sacerdocio, de un amigo, de un padre dedicado o de otro ser querido; sea cual fuere el comienzo, esas soluciones nunca te darán la respuesta completa. Se sana finalmente por medio de la fe en Jesucristo y en Sus enseñanzas, del corazón quebrantado y el espíritu contrito y de la obediencia a Sus mandamientos” (véase Richard G. Scott, “Para ser sanado”, Liahona, julio de 1994, pág. 7).
                </p>

                <h2>
                    El élder Richard G. Scott, del Quórum de los Doce Apóstoles, enseñó que ninguna medida de apoyo o hermandad, incluso entre los grupos de recuperación o las congregaciones de la Iglesia, le brindará la salvación. Habrá personas que le apoyen y sean una bendición en su trayectoria, pero al final será usted el que deba llegar ante Jesucristo mismo. Escriba cómo comenzó su recuperación.

                </h2>
                <textarea onChange={(e) => saveResponse(69, e.target.value)} defaultValue={localStorage.getItem('pre69')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p69" id="p69" />


                <h2>
                    ¿Quién fue el artífice de que usted se halle en el camino del arrepentimiento y la recuperación?
                    ¿Cómo le orientó el ejemplo de esa persona hacia el Salvador?
                </h2>
                <textarea onChange={(e) => saveResponse(70, e.target.value)} defaultValue={localStorage.getItem('pre70')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p70" id="p70" />

                <h2>

                    ¿Qué ha aprendido sobre el Salvador que le haya ayudado o influido en su deseo o capacidad para modificar su conducta?
                </h2>
                <textarea onChange={(e) => saveResponse(71, e.target.value)} defaultValue={localStorage.getItem('pre71')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p71" id="p71" />

                <h2 className='font-semibold text-lg'>
                    Paciencia en el proceso
                </h2>
                <p className='text-justify'>
                    “Sois niños pequeños y no podéis soportar todas las cosas por ahora; debéis crecer en gracia y en el conocimiento de la verdad.
                </p>
                <p className='text-justify'>
                    “No temáis, pequeñitos, porque sois míos, y yo he vencido al mundo...
                </p>
                <p className='text-justify'>
                    “y ninguno de los que el Padre me ha dado se perderá” (D. y C. 50:40–42).
                </p>
                <h2>
                    A veces somos impacientes o nos desanimamos porque la recuperación es un proceso continuo. Estos versículos confirman la paciencia que el Salvador y nuestro Padre Celestial tienen con nosotros, Sus “pequeñitos”. Aplique esos versículos a sí mismo escribiéndolos como si fueran dirigidos a usted.

                </h2>
                <textarea onChange={(e) => saveResponse(72, e.target.value)} defaultValue={localStorage.getItem('pre72')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p72" id="p72" />

                <h2>
                    ¿Cómo pueden fortalecerle las promesas de este pasaje cuando se encuentre desanimado?
                </h2>
                <textarea onChange={(e) => saveResponse(73, e.target.value)} defaultValue={localStorage.getItem('pre73')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p73" id="p73" />

                <h2 className='font-semibold text-lg'>

                    La ayuda del Señor
                </h2>
                <p className='text-justify'>
                    “Y ahora bien, amados hermanos míos, después de haber entrado en esta estrecha y angosta senda, quisiera preguntar si ya quedó hecho todo. He aquí, os digo que no; porque no habéis llegado hasta aquí sino por la palabra de Cristo, con fe inquebrantable en él, confiando íntegramente en los méritos de aquel que es poderoso para salvar.

                </p>
                <p className='text-justify'>
                    “Por tanto, debéis seguir adelante con firmeza en Cristo, teniendo un fulgor perfecto de esperanza y amor por Dios y por todos los hombres. Por tanto, si marcháis adelante, deleitándoos en la palabra de Cristo, y perseveráis hasta el fin, he aquí, así dice el Padre: Tendréis la vida eterna” (2 Nefi 31:19–20).
                </p>
                <h2>
                    Medite en cómo le ayuda el Señor a lo largo del camino estrecho y angosto, y escriba al respecto.
                    ¿Cómo puede su amor creciente por Dios y por su prójimo sacarle de la adicción, ayudarle a proseguir con la abstinencia y restaurar en usted la esperanza de la vida eterna?

                </h2>
                <textarea onChange={(e) => saveResponse(74, e.target.value)} defaultValue={localStorage.getItem('pre74')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p74" id="p74" />

                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/5')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/7')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
