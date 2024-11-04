import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PasoUno = () => {
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
                <h1 className='font-semibold text-xl text-center'>PASO 1: LA SINCERIDAD</h1>
                <h2 className='text-center'><strong>PRINCIPIO CLAVE:</strong> Admita la incapacidad para superar sus adicciones por sí mismo y que ha perdido el control de su vida. </h2>
                <section onClick={() => { setmod1(!mod1) }}>
                    {
                        mod1 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>


                <section className={`${mod1 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Muchos de nosotros caímos en la adicción movidos por la curiosidad. Algunos quedamos atrapados
                        en ella por la justificable necesidad de consumir un medicamento con prescripción médica o bien como acto consciente de rebeldía. Muchos inician ese camino apenas entran en la adolescencia. Cualesquiera que fueran los motivos o las circunstancias que nos convirtieron en adictos, no tardamos en descubrir que la adicción ali- viaba más que el mero dolor físico, pues proporcionaba estimulación o anulaba los sentimientos y las emociones que generaban dolor. Evitaba que nos enfrentáramos a nuestros problemas, o eso creíamos. Durante un tiempo nos sentimos libres del miedo, de las preocupaciones, de la soledad, del desánimo, del pesar o del aburrimiento. Pero como la vida está repleta de situaciones que provocan ese tipo de sentimientos, cada vez recurrí- amos más a nuestras adicciones. Aun así, la mayoría de nosotros no reconocía ni admitía que hubiéramos per- dido la capacidad de resistir y abstenernos. El élder Russell M. Nelson, del Quórum de los Doce, observó: “Con el tiempo, la adicción rinde nuestra libertad de elección. A través de medios químicos, uno puede lite- ralmente privarse a sí mismo de su albedrío” (“Vicio o libertad”, Liahona, enero de 1989, pág. 6).

                    </p>
                    <p className='text-justify'>
                        Rara vez las personas presas de una conducta adictiva admiten su adicción. Para negar la gravedad de nuestra situación y evitar ser arrestados, o sufrir las consecuencias de nuestras decisiones, intentamos res- tar importancia a nuestro comportamiento, e incluso ocultarlo, sin darnos cuenta de que al engañar a los demás y a nosotros mismos, caíamos más en nuestras adicciones. A medida que crecía nuestra impotencia sobre la adicción, muchos tratamos de culpar a nuestros familiares y amigos, a los líderes de la Iglesia e incluso a Dios. Cada vez nos aislábamos más y nos ale- jábamos de las personas y, concretamente, de Dios.
                    </p>
                    <p className='text-justify'>
                        Cuando nosotros, adictos, recurrimos a las mentiras y al secreto con la esperanza de excusarnos o de culpar a otros, nos debilitamos espiritualmente. Con cada acto de insinceridad, nos atamos a nosotros mismos con un “cordel de lino” que pronto se tornó en fuertes cadenas (véase 2 Nefi 26:22), y no tardamos en tener que encarar la realidad. Ya no podíamos ocultar por más tiempo nuestras adicciones con otra mentira o diciendo: “¡No es tan grave!”.
                    </p>
                    <p className='text-justify'>
                        Un ser querido, un doctor, un juez o un líder eclesiástico nos dijo la verdad que ya no podíamos seguir negando: la adicción estaba destruyendo nuestra vida. Al volver la mirada sinceramente hacia el pasado, admitimos que nada de lo que habíamos intentado por no- sotros mismos había tenido éxito y reconocimos que
                        la adicción simplemente había empeorado. Nos dimos cuenta de lo mucho que nuestras adicciones habían dañado nuestras relaciones y nos habían despojado de cualquier sentimiento de autoestima. En este punto, dimos el primer paso hacia la libertad y la recuperación, y hallamos valor para admitir que nos enfrentábamos a algo más que un mero problema o un mal hábito. Finalmente, admitimos la verdad de que habíamos perdido el control de nuestra vida y que necesitá- bamos ayuda para superar las adicciones. Lo sorprendente de esa sincera aceptación de la derrota es que por fin se inició la recuperación.

                    </p>
                    <p className='text-justify'>
                        Ammón, un profeta del Libro de Mormón, expresó con sencillez la verdad que nosotros descubrimos cuando finalmente fuimos sinceros con nosotros mismos:
                        “No me jacto de mi propia fuerza ni en mi propia sabiduría, mas he aquí, mi gozo es completo; sí, mi corazón rebosa de gozo, y me regocijaré en mi Dios.
                        “Sí, yo sé que nada soy; en cuanto a mi fuerza, soy débil; por tanto, no me jactaré de mí mismo, sino que me gloriaré en mi Dios, porque con su fuerza puedo hacer todas las cosas” (Alma 26:11–12).

                    </p>
                </section>

                <span className='text-center uppercase font-semibold'>Pasos a seguir</span>
                <section className='gap-4 flex flex-col' >
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod2(!mod2) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Desarrolle la voluntad de abstenerse
                        </h2>
                        {
                            !mod2 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod2 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Si bien las adicciones de las personas varían entre sí, algunas verdades, como la que se expresa a continua- ción, nunca cambian: Nada comienza sin que así lo decida la persona. La liberación de la adicción y la purificación comienzan con un pequeño impulso de voluntad. Se dice que finalmente se tiene la voluntad de abstenerse cuando el dolor del problema es peor que el de la solución. ¿Ha llegado usted a ese punto? Si no lo ha hecho y prosigue con su adicción, ciertamente llegará a él, pues la adicción es un problema progresivo. Al igual que una enfermedad degenerativa, la adicción elimina su capacidad para vivir con normalidad.
                        </p>
                        <p className='text-justify'>
                            El único requisito para comenzar la recuperación es el deseo de terminar con su participación en la adicción. Aunque en este momento su deseo sea pequeño e inconstante, no se alarme. ¡Ya crecerá
                        </p>
                        <p className='text-justify'>
                            Algunas personas reconocen la necesidad de librarse de la adicción, pero posponen su comienzo. Si usted se halla en esa situación, comience reconociendo su falta de voluntad y considerando el coste de su adicción.
                            Anote aquello que sea importante para usted. Piense en su familia, sus amistades, su relación con Dios, su fortaleza espiritual, su capacidad para ayudar y bende- cir a otras personas, o su salud. Después reflexione en las contradicciones que hay entre lo que usted cree y espera, y en su conducta. Observe cómo sus acciones minan aquello que valora. Ore para que el Señor le ayude a verse a usted mismo y a su vida tal y como Él lo ve, con todo su potencial divino, pero también con el riesgo que corre al continuar con su adicción.

                        </p>
                        <p className='text-justify'>
                            El reconocimiento de lo que pierde al proseguir con su adicción le ayudará a encontrar el deseo de erradi- carla. Aun el deseo más pequeño le permitirá comenzar con el paso 1; y cuando avance siguiendo los pasos de este programa y vea los cambios que tienen lugar en su vida, su deseo crecerá.
                        </p>
                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod3(!mod3) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Despójese del orgullo y sea humilde
                        </h2>
                        {
                            !mod3 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod3 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            El orgullo y la sinceridad no pueden coexistir. El orgullo es un espejismo, constituye un elemento esen- cial de toda adicción y manipula la verdad de las cosas como son, como han sido y como serán. Es el principal obstáculo para su recuperación. El Presidente Ezra Taft Benson definió el orgullo con las siguientes palabras:
                        </p>
                        <p className='text-justify'>
                            “El orgullo es un pecado muy mal interpretado...
                            “La mayoría de nosotros piensa en el orgullo como egoísmo, vanidad, jactancia, arrogancia o altivez; aun- que todos éstos son elementos que forman parte de ese pecado, su núcleo no está en ellos.
                        </p>
                        <p className='text-justify'>
                            “La característica principal del orgullo es la ene- mistad: enemistad hacia Dios y enemistad hacia nues- tros semejantes. Enemistad significa ‘aversión, odio, resentimiento u oposición’. Es el poder por el cual Satanás desea dominarnos.
                            “El orgullo en su naturaleza fomenta la competencia.
                            Oponemos nuestra voluntad a la de Dios. Cuando lo hacemos blanco a Él de nuestro orgullo, es con la acti- tud de decir: ‘Que se haga mi voluntad y no la tuya’...
                            “Nuestra voluntad en competencia con la de Dios deja que nuestros deseos, apetitos y pasiones corran desenfrenados (véase Alma 38:12; 3 Nefi 12:30).
                            “Los orgullosos no pueden aceptar que la autoridad de Dios dé dirección a su vida (véase Helamán 12:6).
                            Ellos oponen sus percepciones de la verdad contra el conocimiento omnisciente de Dios, su capacidad contra el poder del Sacerdocio de Dios, sus propios logros contra las obras grandiosas de Él” (“Cuidaos del orgullo”, Liahona, julio de 1989, págs. 3–4).
                            A medida que desee abstenerse y admita los proble- mas que enfrenta, la humildad reemplazará gradual- mente al orgullo.
                        </p>
                    </section>
                </section>
                <section className='gap-4 flex flex-col'>
                    <section className='flex flex-row gap-3 items-center bg-[#AA5922] rounded-lg  bg-opacity-25 p-1' onClick={() => { setmod4(!mod4) }}>
                        <h2 className='font-kanit cursor-pointer' >
                            Admita el problema; busque ayuda; asista a las reuniones
                        </h2>
                        {
                            !mod4 ? <img src="/images/down.svg" width={20} alt="down.svg" /> : <img src="/images/up.svg" width={20} alt="up.svg" />
                        }
                    </section>

                    <section className={`${mod4 ? 'flex' : 'hidden'} flex-col gap-1`}>
                        <p className='text-justify'>
                            Mientras satisfacíamos nuestras adicciones, nos engañábamos a nosotros mismos y a los demás, aun- que en realidad no lográbamos engañarnos a nosotros mismos. Fingíamos estar bien, repletos de bravucone- rías y excusas, pero en lo más recóndito de nuestro ser sabíamos la verdad. La Luz de Cristo seguía recordán- donoslo. Sabíamos que caíamos irremediablemente hacia un pesar cada vez más grande. La negación de esta verdad era algo tan arduo, que finalmente fue
                            un gran alivio admitir que teníamos un problema.
                            De repente dejamos que entrara un pequeño rayo de esperanza. Cuando decidimos admitir ante nosotros mismos que teníamos un problema y estuvimos dis- puestos a solicitar apoyo y ayuda, ofrecimos a esa esperanza lugar donde crecer. Entonces estuvimos preparados para dar el siguiente paso y asistir a una reunión de recuperación.

                        </p>
                        <p className='text-justify'>
                            Tal vez no siempre sea factible participar en un grupo de apoyo o asistir a una reunión de recuperación.
                            Aunque no pueda hacerlo, siempre es posible seguir cada uno de los pasos, con ligeras modificaciones, ayudado por su obispo o un asesor profesional seleccio- nado cuidadosamente.
                        </p>
                        <p className='text-justify'>
                            Cuando le sea posible asistir a una reunión de recuperación, reconocerá su utilidad como mínimo por dos razones. En primer lugar: Porque en esas reuniones estudiará principios específicos del Evangelio que, al vivirlos, le ayudarán a modificar su conducta. El presidente Boyd K. Packer, del Quórum de los Doce, enseñó: “El estudio de la doctrina del Evangelio mejorará el comportamiento de las personas mas fácilmente que el estudio sobre el comportamiento humano. La obsesión por una conducta indigna puede conducir a una conducta indigna, de ahí que hagamos tanto hincapié en el estudio de la doctrina del Evangelio” (“Los niños pequeños”, Liahona, enero de 1987, pág. 15). En segundo lugar: Estas reuniones constituyen un punto de encuentro con otras personas que desean recuperarse y con las que ya han seguido ese camino, y son una prueba viviente de su eficacia. En las reuniones de recuperación hallará comprensión, esperanza y apoyo.
                        </p>
                    </section>
                </section>
                <span className=' text-center uppercase font-semibold'>Estudio y comprensión</span>
                <section onClick={() => { setmod5(!mod5) }}>
                    {
                        mod5 ? <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer menos...<img src="/images/up.svg" width={20} alt="up.svg" /> </span>
                            : <span className='text-[#6d3c1b] font-semibold cursor-pointer flex justify-end' >Leer más...<img src="/images/down.svg" width={20} alt="down.svg" /> </span>
                    }
                </section>
                <section onClick={() => { setmod5(!mod5) }} className={`${mod5 ? 'flex' : 'hidden'} flex-col gap-1`}>
                    <p className='text-justify'>
                        Estudiar las Escrituras y las palabras de los líderes de la Iglesia le ayudará a comenzar su recuperación.
                        Además, este estudio aumentará su comprensión y le permitirá aprender.
                    </p>
                    <p className='text-justify'>
                        Si lo desea, puede emplear los pasajes de las Escrituras, las citas y las preguntas siguientes en su estudio personal acompañado de oración, en sus escritos o en los análisis en grupo. Tal vez le asuste la idea de escribir, pero esta actividad constituye una herramienta poderosa para su recuperación. Le dará tiempo para reflexionar; le ayudará a dirigir sus pensamientos; le permitirá ver y entender los asuntos, las ideas y los comportamientos relacionados con su adicción. Al escribir, contará con un registro de sus pensamientos. A medida que siga esos pasos, podrá constatar su progreso. Por ahora, basta con ser sin- cero al escribir sus pensamientos, sus sentimientos y sus impresiones.
                    </p>
                </section>

                <h2 className='font-semibold text-lg' > Circundado por las tentaciones.</h2>
                <p className='text-justify'>
                    “Me veo circundado a causa de las tentaciones y pecados que tan fácilmente me asedian.
                    “Y cuando deseo regocijarme, mi corazón gime a causa de mis pecados; no obstante, sé en quién he confiado.
                </p>
                <p className='text-justify'>
                    “Mi Dios ha sido mi apoyo; él me ha guiado por entre mis aflicciones en el desierto; y me ha preservado sobre las aguas del gran mar.
                    “Me ha llenado con su amor hasta consumir mi carne” (2 Nefi 4:18–21).
                </p>
                <h2>
                    ¿Se siente usted circundado o atrapado? ¿Cuándo suele sentirse así?
                </h2>
                <textarea onChange={(e) => saveResponse(1, e.target.value)} defaultValue={localStorage.getItem('pre1')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p1" id="p1" />

                <h2>
                    ¿Qué situaciones o sentimientos le debilitaron al punto de caer en su adicción?            </h2>
                <textarea onChange={(e) => saveResponse(2, e.target.value)} defaultValue={localStorage.getItem('pre2')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p2" id="p2" />
                <h2>
                    Cuando Nefi se sintió abrumado, ¿en quién depositó su confianza? ¿Qué puede usted hacer para confiar más en el Señor?            </h2>
                <textarea onChange={(e) => saveResponse(3, e.target.value)} defaultValue={localStorage.getItem('pre3')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p3" id="p3" />
                <h2 className='font-semibold text-lg'>
                    “Sé que el hombre no es nada”
                </h2>
                <p className='text-justify'>
                    “Y sucedió que por el espacio de muchas horas Moisés no pudo recobrar su fuerza natural según el hombre, y se dijo sí mismo: Por esta causa, ahora sé que el hombre no es nada, cosa que yo nunca me había imaginado” (Moisés 1:10).
                </p>
                <h2>
                    ¿Cómo se describe Moisés a sí mismo en comparación con Dios?
                </h2>
                <textarea onChange={(e) => saveResponse(4, e.target.value)} defaultValue={localStorage.getItem('pre4')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p4" id="p4" />                <h2>
                    ¿Cómo es posible que un niño pequeño tenga un valor infinito y sin embargo no sea nada en comparación con sus padres?
                </h2>
                <textarea onChange={(e) => saveResponse(5, e.target.value)} defaultValue={localStorage.getItem('pre5')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p5" id="p5" />                <h2>
                    ¿De qué manera usted no es nada sin la ayuda de Dios?
                </h2>
                <textarea onChange={(e) => saveResponse(6, e.target.value)} defaultValue={localStorage.getItem('pre6')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p6" id="p6" />
                <h2>
                    ¿De qué manera es usted de inmenso valor?
                </h2>
                <textarea onChange={(e) => saveResponse(7, e.target.value)} defaultValue={localStorage.getItem('pre7')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p7" id="p7" />
                <h2>
                    Escriba sobre cómo el reconocimiento de su impo- tencia para superar sus adicciones por sí mismo puede llevarle a admitir su propia nulidad y tornarse en un niño pequeñito.
                </h2>
                <textarea onChange={(e) => saveResponse(8, e.target.value)} defaultValue={localStorage.getItem('pre8')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p8" id="p8" />
                <h2 className='font-semibold'>
                    Hambre y sed
                </h2>
                <p className='text-justify'>
                    “Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados” (Mateo 5:6).
                    “Y mi alma tuvo hambre; y me arrodillé ante mi Hacedor, y clamé a él con potente oración y súplica por mi propia alma; y clamé a él todo el día; sí,
                    y cuando anocheció, aún elevaba mi voz en alto hasta que llegó a los cielos” (Enós 1:4).

                </p>

                <h2>
                    En estos dos pasajes de las Escrituras aprendemos que nuestras almas pueden tener hambre. ¿Se siente usted alguna vez vacío por dentro aun cuando no tiene hambre física? ¿Cuál es la causa de ese vacío?
                </h2>
                <textarea onChange={(e) => saveResponse(9, e.target.value)} defaultValue={localStorage.getItem('pre9')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p9" id="p9" />
                <h2>
                    ¿Cómo puede el hambre de cosas espirituales ayudarle a ser más sincero?
                </h2>
                <textarea onChange={(e) => saveResponse(10, e.target.value)} defaultValue={localStorage.getItem('pre10')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p10" id="p10" />

                <h2 className='font-semibold text-lg'>
                    La honradez
                </h2>
                <p className='text-justify'>
                    “Puede que algunos consideren como algo nimio la cualidad del carácter llamada honradez, pero yo la considero la esencia misma del Evangelio. Sin
                    honradez, nuestras vidas... degenerarían en fealdad y caos” (Gordon B. Hinckley, “We Believe in Being Honest”, Ensign, octubre de 1990, pág. 2).

                </p>
                <h2>
                    Escriba sobre cómo ha mentido y tratado de ocultarse su adicción a sí mismo y a otras personas. ¿De qué manera esta actitud ha generado “fealdad y caos”?
                </h2>
                <textarea onChange={(e) => saveResponse(11, e.target.value)} defaultValue={localStorage.getItem('pre11')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p11" id="p11" />
                <h2 className='font-semibold text-lg'>
                    La humildad
                </h2>
                <p className='text-justify'>
                    “Y porque sois obligados a ser humildes, benditos sois; porque en ocasiones el hombre, si se ve obli- gado a ser humilde, busca el arrepentimiento; y de seguro, el que se arrepienta hallará misericordia;
                    y quien halle misericordia y persevere hasta el fin, será salvo” (Alma 32:13).


                </p>
                <h2>
                    Escriba sobre las circunstancias que le han obli- gado a ser humilde y buscar el arrepentimiento.
                    ¿Qué esperanza le da Alma? ¿Cómo puede usted hallar o recibir esa esperanza?
                </h2>
                <textarea onChange={(e) => saveResponse(12, e.target.value)} defaultValue={localStorage.getItem('pre12')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p12" id="p12" />
                <h2 className='font-semibold text-lg'>
                    El contentamiento del Señor
                </h2>
                <p className='text-justify'>
                    “Los labios mentirosos son abominación a Jehová; pero los que hacen verdad son su contentamiento” (Proverbios 12:22).
                </p>
                <h2>
                    Escribir las respuestas a esas preguntas ha requerido de usted un mayor nivel de sinceridad consigo mismo. ¿Cómo se relaciona el pasaje con este tipo de sinceridad? ¿Cómo puede usted convertirse en el contentamiento del Señor?
                </h2>
                <textarea onChange={(e) => saveResponse(13, e.target.value)} defaultValue={localStorage.getItem('pre13')} className='rounded-xl p-2 outline-none' placeholder='Tú respuesta se guardará automaticamente' rows={4} name="p13" id="p13" />

                <button onClick={() => navigate('/2')} className='w-full h-12 rounded-xl flex justify-center items-center gap-4 bg-[#d19945] font-kanit' >
                    IR AL SIGUIENTE PASO
                </button>

            </section>

        </section>
    )
}
