import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoSiete = () => {
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
                <h1 className='font-semibold text-xl text-center'>PASO 7: LA HUMILDAD</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Pida humildemente a su Padre Celestial que le libre de sus debilidades. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>

                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        La humildad es necesaria en todos los pasos, pero el paso 7 la requiere de un modo más explícito: “Pida humildemente a su Padre Celestial que le libre de sus debilidades”. La humildad desarrollada en nuestro corazón durante el paso 6 hace que nos arrodillemos en el 7 para pedir al Señor que nos libre de nuestras debilidades. Al progresar hasta este punto, nos sentimos preparados para orar sin otra motivación que el deseo de ser uno en corazón y mente con nuestro Padre Celestial y el Señor Jesucristo. Ya no nos conformamos con un cambio de costumbres o de nuestro modo de vida. Finalmente estábamos preparados para que Dios cambiara nuestra propia naturaleza.

                    </p>
                    <p className='text-justify'>
                        El paso 7 representaba para cada uno de nosotros una rendición tan completa al Salvador, que muchos no pudimos evitar gritar en nuestro corazón, como Alma: “Oh Jesús, Hijo de Dios, ten misericordia de mí” (Alma 36:18). Nuestro corazón se consumía por los remordimientos, no sólo porque habíamos sufrido o hecho sufrir a otras personas, sino porque lamentábamos que, aun en pleno proceso de recuperación, no éramos capaces de desechar nuestras imperfecciones.

                    </p>
                    <p className='text-justify'>
                        Tras haber sentido una parte del amor de Dios, deseábamos abandonar todos nuestros pecados; es más, cualquier inclinación a pecar, a fin de conocerle mejor. Al final, voluntariamente y de todo corazón, entregamos a Dios toda nuestra alma y le pedimos que nos perdonara y que nos hiciera a Su imagen.
                        Habíamos concluido que ningún otro nombre, ningún otro camino ni medio podía redimir completamente nuestros pecados. Sin ocultarle nada, le suplicamos al Padre que, en Su infinita misericordia, perdonara nuestro orgullo, nuestras transgresiones y nuestros defectos, que nos concediera la gracia y que por medio de Él pudiéramos conservar este nuevo modo de vida.

                    </p>
                    <p className='text-justify'>
                        El Señor no propició un cambio tan revolucionario de nuestro carácter mientras no se lo permitimos.
                        El paso 7 fue el de la decisión. Debíamos volvernos humildes deliberadamente; debíamos rendir cada partícula de orgullo y admitir que nuestros esfuerzos por salvarnos a nosotros mismos habían resultado insuficientes. Teníamos que sentir y vivir la verdad enseñada por el rey Benjamín: Que todos somos mendigos ante Dios y que no podemos abrigar esperanza alguna de salvarnos por nuestros propios esfuerzos, sino sólo por medio de la misericordia y la gracia de Jesucristo (véase Mosíah 2:21; 4:19–20).
                    </p>

                    <p className='text-justify'>
                        El paso 7 supuso para cada uno de nosotros el momento en que finalmente nos entregamos sin reserva a la verdad eterna que se enseña en Mosíah 16:4: “De modo que toda la humanidad estaba perdida; y he aquí, se habría perdido eternamente si Dios no hubiese rescatado a su pueblo de su estado caído y perdido”. La experiencia nos enseñó que dar el paso 7 no nos excusaba del esfuerzo que debíamos realizar, pues aún debíamos ser pacientes y “seguir adelante con firmeza en Cristo” (2 Nefi 31:20).
                    </p>

                    <p className='text-justify'>
                        Aún no nos habíamos liberado por completo del deseo de pecar. Teníamos que aprender a aceptar la vida en los términos establecidos por el Señor y aguardar a que se cumplieran Sus designios en Su debido tiempo, incluso para librarnos de nuestras imperfecciones. Al dar el paso 7, aprendimos a vivir con la misma humildad y paciencia ante Dios que mostraron Alma y sus hermanos cuando sus cargas les fueron aliviadas, pero no quitadas: “se sometieron alegre y pacientemente a toda la voluntad del Señor” (Mosíah 24:15). Al final abandonamos la idea de que podríamos perfeccionarnos por nosotros mismos y aceptamos la verdad de que Dios desea que conquistemos nuestras debilidades en esta vida al acudir a Cristo y perfeccionarnos en Él. Vimos que Su gracia nos facultó para abstenernos de toda impiedad y para comprender que la salvación no viene por medio de nuestro propio poder, sino por el Suyo (véase Moroni 10:32).
                    </p>

                    <p className='text-justify'>
                        Sin embargo, cada paso incluye una advertencia, y el 7 no es una excepción. Nosotros, que hemos abrazado esos principios, debemos advertirle de que este paso no está exento de un sacrificio, lo cual es justo. En Doctrina y Convenios 59:8, el Señor manda: “Ofrecerás un sacrificio al Señor tu Dios en rectitud, sí, el de un corazón quebrantado y un espíritu contrito”. Esta ofrenda constituye la esencia del paso 7. Aun cuando sienta los dolores de su propio renacer, recuerde que es el sufrimiento del Salvador y no el suyo, el que le asegura la redención del pecado. El sacrificio de usted no es más que un humilde recordatorio del “gran y postrer sacrificio” del Señor por usted (Alma 34:14).
                    </p>

                    <p className='text-justify'>
                        Al dejarlo todo en las manos de Dios, ha hecho todo lo posible por recibir Su inconfundible testimonio de que sus pecados son perdonados y relegados realmente al pasado. Al igual que las personas del Libro de Mormón que fueron convertidas, usted puede testificar que ha sido “visitado [por] el poder y el Espíritu de Dios que [hay] en Jesucristo” (3 Nefi 7:21). Puede exclamar con Alma: “Ya no me pude acordar más de mis dolores; sí, dejó de atormentarme el recuerdo de mis pecados. Y ¡oh qué gozo, y qué luz tan maravillosa fue la que vi! Sí, mi alma se llenó de un gozo tan profundo como lo había sido mi dolor” (Alma 36:19–20).
                    </p>


                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Válgase del poder de la expiación del Salvador para ser eficaz en su vida personal mediante la meditación de las oraciones sacramentales
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Una manera eficaz de meditar es pensar en un versículo o una frase de las Escrituras mientras ora para comprender su significado y aplicación en su vida.
                            Dado que cada uno de nosotros debe hacer el convenio que se repite en las oraciones sacramentales, podría meditar en ellas.
                        </p>

                        <p className='text-justify'>
                            Siguiendo la invitación de los profetas de aplicar las Escrituras a su vida, tal vez desee leer Moroni 4:3 y 5:2 y considerar humildemente esas sagradas palabras en primera persona, por ejemplo: “Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, [te pido] que bendigas y santifiques este pan para [mi alma al participar] de él... y guardar sus mandamientos que él [me ha dado], para que [yo] siempre [pueda] tener su Espíritu [conmigo]”.
                        </p>


                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Ore humildemente a Dios para que Él haga lo que usted no puede hacer por sí mismo

                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Al ofrecer una sencilla oración en su corazón, como por ejemplo: “Señor, ¿qué quieres que haga?” o “Hágase tu voluntad”, tendrá un recordatorio continuo de su plena dependencia del Señor. El amor que Dios siente por usted y el que usted siente por Él, le ayudará a establecer una relación en la que poder entregarse sin reservas. Usted buscó ese amor todos los años que estuvo atrapado en su adicción. En el paso 7 hallará el modo de obtener paz al entrar en el “reposo del Señor” (Moroni 7:3; véase también Alma 58:11; Ezra Taft Benson, “Los dones del Señor”, Liahona, abril de 1977, pág. 22).
                        </p>


                    </section>
                </section>

                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <p className='text-justify'>
                    Los siguientes pasajes de las Escrituras y las citas de los líderes de la Iglesia pueden ayudarle a dar el paso 7. Válgase de ellos para meditarlos, estudiarlos y para realizar anotaciones. Recuerde ser sincero y específico con lo que escriba.
                </p>

                <h2 className='font-semibold text-lg' > Decida ser humilde </h2>
                <p className='text-justify'>
                    “Y como ya os he dicho, que por haber sido obligados a ser humildes, fuisteis bendecidos, ¿no suponéis que son más bendecidos aún aquellos que se humillan verdaderamente a causa de la palabra?” (Alma 32:14).
                </p>

                <h2>
                    La mayoría de nosotros fuimos a las reuniones de recuperación desesperados, impulsados por las consecuencias de nuestras adicciones; se nos obligó a ser humildes. Sin embargo, la humildad descrita en el paso 7 tiene un origen diferente: es voluntaria, es el resultado de nuestra decisión de humillarnos. ¿Cómo han cambiado sus sentimientos de humildad desde que empezó la recuperación?
                </h2>
                <textarea onChange={(e) => saveResponse(75, e.target.value)} defaultValue={localStorage.getItem('pre75')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p75" id="p75" />

                <h2 className='font-semibold text-lg'>
                    Lleno de gozo
                </h2 >
                <p className='text-justify'>
                    “Se habían visto a sí mismos en su propio estado carnal, aún menos que el polvo de la tierra. Y todos a una voz clamaron, diciendo: ¡Oh, ten misericordia, y aplica la sangre expiatoria de Cristo para que recibamos el perdón de nuestros pecados, y sean purificados nuestros corazones; porque creemos en Jesucristo, el Hijo de Dios, que creó el cielo y la tierra y todas las cosas; el cual bajará entre los hijos de los hombres!
                </p>
                <p>
                    “Y aconteció que después de que hubieron hablado estas palabras, el Espíritu del Señor descendió sobre ellos, y fueron llenos de gozo, habiendo recibido la remisión de sus pecados, y teniendo paz de conciencia a causa de la gran fe que tenían en Jesucristo que había de venir, según las palabras que el rey Benjamín les había hablado” (Mosíah 4:2–3).
                </p>
                <h2>
                    El pueblo del rey Benjamín ofreció el tipo de oración que nosotros ofrecemos al dar el paso 7. Sintieron paz y gozo cuando el Espíritu del Señor reposó sobre ellos y les otorgó la remisión de sus pecados. Reflexione en experiencias que haya tenido con estos sentimientos y escriba sobre cómo sería que la paz y el gozo formaran parte de su vida.
                </h2>

                <textarea onChange={(e) => saveResponse(76, e.target.value)} defaultValue={localStorage.getItem('pre76')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p76" id="p76" />


                <h2 className='font-semibold text-lg'>
                    Crea en Dios
                </h2>
                <p className='text-justify'>
                    “Creed en Dios; creed que él existe, y que creó todas las cosas, tanto en el cielo como en la tierra; creed que él tiene toda sabiduría y todo poder, tanto en el cielo como en la tierra; creed que el hombre no comprende todas las cosas que el Señor puede comprender.
                </p>
                <p>
                    “Y además, creed que debéis arrepentiros de vuestros pecados, y abandonarlos, y humillaros ante Dios, y pedid con sinceridad de corazón que él os perdone; y ahora bien, si creéis todas estas cosas, mirad que las hagáis.
                </p>
                <p>
                    “Y otra vez os digo, según dije antes, que así como habéis llegado al conocimiento de la gloria de Dios, o si habéis sabido de su bondad, y probado su amor, y habéis recibido la remisión de vuestros pecados, lo que ocasiona tan inmenso gozo en vuestras almas, así quisiera que recordaseis y retuvieseis siempre en vuestra memoria la grandeza de Dios, y vuestra propia nulidad, y su bondad y longanimidad para con vosotros, indignas criaturas, y os humillaseis aun en las profundidades de la humildad, invocando el nombre del Señor diariamente, y permaneciendo firmes en la fe de lo que está por venir, que fue anunciado por boca del ángel.

                </p>
                <p>
                    “...si hacéis esto, siempre os regocijaréis, y seréis llenos del amor de Dios y siempre retendréis la remisión de vuestros pecados; y aumentaréis en el conocimiento de la gloria de aquel que os creó, o sea, en el conocimiento de lo que es justo y verdadero” (Mosíah 4:9–12).

                </p>
                <h2>
                    Con espíritu de oración, escriba una lista de las cosas que el rey Benjamín dijo que debemos hacer. ¿Cómo se relacionan con el paso 7?
                </h2>

                <textarea onChange={(e) => saveResponse(77, e.target.value)} defaultValue={localStorage.getItem('pre77')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p77" id="p77" />

                <h2>
                    ¿Qué promesas se reciben al hacer lo aconsejado por el rey Benjamín? (Lea el último versículo.)
                </h2>
                <textarea onChange={(e) => saveResponse(78, e.target.value)} defaultValue={localStorage.getItem('pre78')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p78" id="p78" />

                <h2>
                    •	¿Qué cambiaría en su vida si recibiera esas promesas?
                </h2>
                <textarea onChange={(e) => saveResponse(79, e.target.value)} defaultValue={localStorage.getItem('pre79')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p79" id="p79" />

                <h2 className='font-semibold'>
                    Obedezca la ley y los mandamientos
                </h2>
                <p className='text-justify'>
                    “Pues para este fin se dio la ley; por tanto, para nosotros la ley ha muerto, y somos vivificados en Cristo a causa de nuestra fe; guardamos, empero, la ley, a causa de los mandamientos” (2 Nefi 25:25).

                </p>

                <h2>
                    “Somos vivificados en Cristo a causa de nuestra fe” en Él. ¿Qué significado tiene el que para nosotros la ley haya muerto? ¿Por qué seguimos observando la ley u obedeciendo los mandamientos?
                </h2>

                <textarea onChange={(e) => saveResponse(80, e.target.value)} defaultValue={localStorage.getItem('pre80')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p80" id="p80" />


                <h2>
                    ¿Cómo se siente en la actualidad en cuanto a observar la ley?
                </h2>
                <textarea onChange={(e) => saveResponse(81, e.target.value)} defaultValue={localStorage.getItem('pre81')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p81" id="p81" />

                <h2>
                    ¿De qué manera la obediencia a los mandamientos es una manifestación de su amor por Dios?
                </h2>
                <textarea onChange={(e) => saveResponse(82, e.target.value)} defaultValue={localStorage.getItem('pre82')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p82" id="p82" />


                <h2 className='font-semibold text-lg'>
                    El amor de Dios
                </h2>
                <p className='text-justify'>
                    “Cuando concedemos a Dios el lugar de preferencia, todos los demás aspectos de nuestra vida pasan a ocupar la posición que les corresponde o, de lo contrario, dejan de tener valor. Nuestro amor por el Señor dirigirá nuestros afectos, la forma en que empleemos nuestro tiempo, los intereses que tengamos y el orden de prioridad que demos a las cosas” (véase Ezra Taft Benson, “El Señor en primer lugar”, Liahona, julio de 1988, pág. 4).
                </p>
                <h2>
                    Tras haber conocido la misericordia y la bondad de Dios, probablemente haya comenzado a sentir el amor de Dios (de Él por usted y de usted por Él). Reflexione al respecto y escriba sobre cualquier aumento de amor que haya sentido mientras trabajaba en los diferentes pasos.
                </h2>
                <textarea onChange={(e) => saveResponse(83, e.target.value)} defaultValue={localStorage.getItem('pre83')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p83" id="p83" />


                <h2>
                    ¿De qué modo el paso 7 puede considerarse, de momento, su acto de amor más grande?
                </h2>
                <textarea onChange={(e) => saveResponse(84, e.target.value)} defaultValue={localStorage.getItem('pre84')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p84" id="p84" />



                <h2 className='font-semibold text-lg'>
                    Tome sobre usted el nombre de Cristo
                </h2>
                <p className='text-justify'>
                    “Y sucederá que quien hiciere esto, se hallará a la diestra de Dios, porque sabrá el nombre por el cual es llamado; pues será llamado por el nombre de Cristo” (Mosíah 5:9).
                </p>
                <h2>
                    Muchos pensamos en tomar el nombre de Cristo sobre nosotros dentro de los límites del bautismo y la Santa Cena, lo cual es correcto. Considere por un momento lo que podría significar ser llamado por Su nombre y gozar de Su reputación como si fuera la suya propia.
                </h2>
                <textarea onChange={(e) => saveResponse(85, e.target.value)} defaultValue={localStorage.getItem('pre85')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p85" id="p85" />

                <h2>
                    ¿Qué precisa hacer para ser hallado a la diestra de Dios? ¿Qué convenio se concierta en el bautismo y al participar de la Santa Cena?
                </h2>
                <textarea onChange={(e) => saveResponse(86, e.target.value)} defaultValue={localStorage.getItem('pre86')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p86" id="p86" />

                <h2>
                    Escriba sobre los sentimientos que tiene al pensar en Su disposición para otorgarle Su nombre o reputación a cambio de todas sus imperfecciones
                </h2>
                <textarea onChange={(e) => saveResponse(87, e.target.value)} defaultValue={localStorage.getItem('pre87')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p87" id="p87" />

                <h2 className='font-semibold text-lg'>

                    Renuncie a sus debilidades
                </h2>
                <p className='text-justify'>
                    “Una religión que no requiera el sacrificio de todas las cosas jamás tendrá el poder suficiente para producir la fe necesaria para vida y salvación” (José Smith, Lectures on Faith, 1985, pág. 69).
                </p>
                <h2>
                    •	Hay quienes leen esas palabras y piensan que “todas las cosas” se refiere a todas las pertenencias. ¿De qué modo el haber renunciando a todas sus debilidades por el Señor ha aumentado su comprensión de lo que significa sacrificar todas las cosas?
                </h2>
                <textarea onChange={(e) => saveResponse(88, e.target.value)} defaultValue={localStorage.getItem('pre88')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p88" id="p88" />

                <section className='flex flex-row w-full gap-6'>
                    <button onClick={() => navigate('/6')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        {"<"} PASO ANTERIOR
                    </button>
                    <button onClick={() => navigate('/8')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-semibold font-kanit' >
                        SIGUIENTE PASO {">"}
                    </button>
                </section>


            </section>

        </section>
    )
}
