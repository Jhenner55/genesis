// Fase 3: conceptos, debates, experimentos mentales, citas e historias
const CONCEPTOS = [
 {id:"arje",n:"Arjé",d:"El principio originario del que todo procede y al que todo vuelve. Es la primera pregunta de la filosofía griega.",a:[
  ["tales","El agua: todo surge de lo húmedo."],["anaximandro","El ápeiron, lo indefinido e ilimitado."],["anaximenes","El aire, que al condensarse y rarificarse genera todo."],["heraclito","El fuego, siempre vivo, que se enciende y se apaga con medida."]]},
 {id:"ser",n:"Ser",d:"Lo que significa que algo exista. Es la pregunta central de la metafísica.",a:[
  ["parmenides","El ser es uno, eterno e inmóvil; el no ser no puede pensarse."],["aristoteles","El ser se dice de muchas maneras, y la principal es la sustancia."],["tomas","En las criaturas se distinguen la esencia y el acto de ser; en Dios coinciden."],["heidegger","La filosofía olvidó la pregunta por el sentido del ser y hay que replantearla desde el Dasein."]]},
 {id:"logos",n:"Logos",d:"Razón, palabra y medida: el orden racional que estructura el mundo y el pensamiento.",a:[
  ["heraclito","Ley común que rige el cambio y une a los opuestos."],["zenon_citio","Razón divina que impregna y gobierna el cosmos; vivir bien es vivir conforme a ella."],["crisipo","Sistematizó el logos estoico en la lógica, la física y la ética."]]},
 {id:"ideas",n:"Ideas o Formas",d:"Modelos inteligibles, eternos e inmutables, de los que las cosas sensibles serían copias o participaciones.",a:[
  ["platon","Son la realidad verdadera; conocer es elevarse hacia ellas."],["aristoteles","Las formas no están separadas: existen en las cosas mismas, unidas a la materia."],["plotino","Las Ideas habitan en el Intelecto, la primera emanación del Uno."],["agustin","Las Ideas son pensamientos eternos en la mente de Dios."]]},
 {id:"virtud",n:"Virtud",d:"La excelencia de carácter que permite obrar bien y vivir una vida lograda.",a:[
  ["socrates","La virtud es conocimiento: nadie hace el mal a sabiendas."],["aristoteles","Es un hábito que se adquiere practicando y consiste en el término medio entre dos extremos."],["confucio","El ser humano ejemplar cultiva el ren (humanidad) y el respeto a los ritos."],["maquiavelo","Su virtù es la capacidad política de dominar a la fortuna."],["anscombe","Pidió volver a una ética de las virtudes en lugar de una ética del deber."]]},
 {id:"felicidad",n:"Felicidad",d:"El fin último de la vida humana, entendido de maneras muy distintas.",a:[
  ["aristoteles","La eudaimonía: vivir realizando la propia naturaleza racional con virtud."],["epicuro","La ataraxia: ausencia de dolor en el cuerpo y de turbación en el alma."],["seneca","Vivir conforme a la razón, sin depender de la fortuna."],["mill","El criterio moral es la mayor felicidad para el mayor número."]]},
 {id:"sustancia",n:"Sustancia",d:"Aquello que existe por sí mismo y sostiene las cualidades que cambian.",a:[
  ["aristoteles","El individuo concreto, compuesto de materia y forma."],["descartes","Hay dos sustancias creadas: la que piensa y la que ocupa espacio."],["spinoza","Solo existe una sustancia: Dios o la Naturaleza."],["leibniz","La realidad está hecha de mónadas, sustancias simples sin partes."],["locke","Es un «no sé qué» que suponemos debajo de las cualidades que percibimos."]]},
 {id:"mente",n:"Mente y cuerpo",d:"Cómo se relacionan el pensamiento y la materia: ¿son una sola realidad o dos?",a:[
  ["platon","El alma es inmortal y está como prisionera en el cuerpo."],["descartes","Dualismo: son dos sustancias distintas que interactúan."],["spinoza","Son dos atributos de una misma sustancia."],["dennett","La conciencia se explica por procesos cerebrales; no hay un «teatro» interior."],["chalmers","Aun explicando el cerebro, queda el problema difícil de la experiencia."]]},
 {id:"duda",n:"Duda y escepticismo",d:"La sospecha de que quizá no podemos conocer nada con certeza.",a:[
  ["pirron","Hay que suspender el juicio para alcanzar la tranquilidad."],["montaigne","«¿Qué sé yo?»: la duda como forma de conocerse con humildad."],["descartes","La duda metódica conduce a una certeza: pienso, luego existo."],["hume","La causalidad y el yo no se perciben: son hábitos de la mente."]]},
 {id:"experiencia",n:"Experiencia",d:"El conocimiento que llega a través de los sentidos, frente al que procede solo de la razón.",a:[
  ["bacon","La ciencia debe partir de la observación y la inducción, no de autoridades."],["locke","La mente nace como una tabla rasa que la experiencia llena."],["berkeley","Ser es ser percibido: no hay materia independiente de la percepción."],["hume","Todas las ideas derivan de impresiones."],["kant","Todo conocimiento empieza con la experiencia, pero no todo procede de ella."]]},
 {id:"contrato",n:"Contrato social",d:"La idea de que el poder político legítimo nace de un acuerdo entre individuos.",a:[
  ["hobbes","Por miedo a la guerra de todos contra todos, cedemos el poder a un soberano."],["locke","El gobierno protege derechos naturales previos y puede ser depuesto si los viola."],["rousseau","El pacto crea una voluntad general en la que cada uno se obedece a sí mismo."],["rawls","Los principios justos son los que elegiríamos tras un velo de ignorancia."]]},
 {id:"autonomia",n:"Autonomía",d:"Darse a uno mismo la ley: la base de la dignidad moral.",a:[
  ["kant","La voluntad autónoma obedece el imperativo categórico que ella misma reconoce."],["habermas","Las normas valen si todos los afectados podrían aceptarlas en un diálogo libre."],["rawls","Su teoría de la justicia retoma la idea kantiana de personas libres e iguales."]]},
 {id:"dialectica",n:"Dialéctica",d:"Un pensamiento que avanza mediante contradicciones y su superación.",a:[
  ["platon","El diálogo que, por preguntas y respuestas, asciende hacia las Ideas."],["hegel","La realidad y el pensamiento se desarrollan negando y superando sus contradicciones (Aufhebung)."],["marx","La dialéctica aplicada a las condiciones materiales y a la lucha de clases."],["engels","Extendió la dialéctica materialista a la naturaleza."],["adorno","Dialéctica negativa: pensar lo que no encaja en el sistema."]]},
 {id:"alienacion",n:"Alienación",d:"Volverse extraño a uno mismo: no reconocerse en lo que uno hace o produce.",a:[
  ["hegel","El espíritu se exterioriza y se extraña de sí antes de reconciliarse."],["feuerbach","En la religión el ser humano proyecta su propia esencia en Dios."],["marx","El trabajador se aliena del producto, del trabajo, de los demás y de sí mismo."],["marcuse","La sociedad de consumo produce un ser humano «unidimensional»."]]},
 {id:"voluntad",n:"Voluntad",d:"La fuerza que impulsa la acción y, para algunos, el fondo mismo de la realidad.",a:[
  ["agustin","El mal procede de la voluntad que se aparta de Dios."],["schopenhauer","El mundo es una voluntad ciega e insaciable que nos hace sufrir."],["nietzsche","La voluntad de poder: impulso de crecer, crear y afirmarse."]]},
 {id:"existencia",n:"Existencia",d:"La vida humana concreta, que se pregunta por su sentido y debe elegirse.",a:[
  ["kierkegaard","El individuo ante la angustia y la decisión; la verdad es subjetividad."],["jaspers","Las situaciones límite revelan la existencia."],["heidegger","El Dasein es un ser-para-la-muerte arrojado en el mundo."],["sartre","La existencia precede a la esencia: somos lo que hacemos."],["camus","El absurdo: el choque entre nuestra búsqueda de sentido y el silencio del mundo."],["beauvoir","La libertad se realiza en situación y con los demás."]]},
 {id:"intencionalidad",n:"Intencionalidad",d:"La propiedad de la mente de estar dirigida a algo: toda conciencia es conciencia de algo.",a:[
  ["brentano","Es lo que distingue los fenómenos psíquicos de los físicos."],["husserl","La fenomenología describe cómo la conciencia se dirige a sus objetos."],["merleau","La intencionalidad primera es la del cuerpo que percibe y se mueve."],["searle","Es un rasgo biológico del cerebro, que los programas por sí solos no tienen."]]},
 {id:"lenguaje",n:"Lenguaje",d:"Cómo las palabras significan y qué límites pone el lenguaje al pensamiento.",a:[
  ["frege","Hay que distinguir el sentido de una expresión de su referencia."],["russell","El análisis lógico de las descripciones disuelve falsos problemas."],["wittgenstein","Primero, el lenguaje figura los hechos; después, el significado es el uso en juegos de lenguaje."],["gadamer","Comprender es dialogar: el ser que puede ser comprendido es lenguaje."],["searle","Hablar es actuar: prometer, ordenar o afirmar son actos de habla."]]},
 {id:"ciencia",n:"Método científico",d:"Qué hace que un conocimiento sea científico y cómo progresa la ciencia.",a:[
  ["bacon","Inducción a partir de experimentos, libre de prejuicios (los «ídolos»)."],["carnap","Los enunciados con sentido se pueden verificar con la experiencia o la lógica."],["popper","Una teoría es científica si puede refutarse: falsabilidad."],["kuhn","La ciencia avanza por paradigmas y revoluciones."],["bunge","Realismo científico: la ciencia conoce, de forma aproximada, un mundo real."]]},
 {id:"poder",n:"Poder",d:"Qué es el poder, de dónde viene y cómo se ejerce sobre las personas.",a:[
  ["maquiavelo","El arte de conquistar y conservar el Estado, más allá de la moral privada."],["hobbes","El soberano concentra el poder para garantizar la paz."],["nietzsche","La voluntad de poder está detrás de los valores y las morales."],["arendt","El poder surge cuando las personas actúan juntas; la violencia lo destruye."],["foucault","El poder no solo reprime: circula, disciplina y produce saberes."],["han","Hoy el poder seduce: nos explotamos a nosotros mismos creyéndonos libres."]]},
 {id:"justicia",n:"Justicia",d:"Qué se debe a cada quien y cómo organizar una sociedad justa.",a:[
  ["platon","Cada parte del alma y de la ciudad cumple su función propia."],["aristoteles","Dar a cada uno lo que le corresponde, según igualdad o proporción."],["rawls","Justicia como equidad: libertades iguales y desigualdades solo si benefician a los peor situados."],["sandel","La justicia no puede separarse de las preguntas por el bien común."],["nussbaum","Garantizar a cada persona capacidades humanas básicas."]]},
 {id:"vacuidad",n:"Vacuidad y no-yo",d:"La idea de que nada tiene un ser propio y fijo, ni siquiera el yo.",a:[
  ["buda","No hay un yo permanente (anatman); aferrarse a él causa sufrimiento."],["nagarjuna","Todo es vacío de existencia propia porque todo surge en dependencia."],["dogen","Estudiar el camino es estudiarse a uno mismo y olvidarse de sí."],["nishida","La realidad última es el «lugar de la nada absoluta»."]]},
 {id:"tao",n:"Tao (el Camino)",d:"El curso natural de las cosas y la manera correcta de vivir en armonía con él.",a:[
  ["laozi","El Tao que puede nombrarse no es el Tao eterno; se sigue con el no-forzar (wu wei)."],["zhuangzi","Seguir el Tao es fluir con los cambios y desconfiar de las distinciones rígidas."],["confucio","El Camino se cultiva en las relaciones humanas, los ritos y la virtud."],["zhu_xi","Todo está formado por principio (li) y energía (qi)."],["wang_yangming","Conocer y actuar son uno: el principio está en el propio corazón-mente."]]},
 {id:"identidad",n:"Identidad latinoamericana",d:"La pregunta por lo propio de América Latina y por una filosofía desde aquí.",a:[
  ["marti","«Nuestra América» debe pensarse con ideas propias."],["vasconcelos","La raza cósmica, fruto de la mezcla de pueblos."],["ramos","El sentimiento de inferioridad como clave del carácter mexicano."],["uranga","El modo de ser del mexicano es la zozobra, un oscilar entre dos posibilidades."],["zea","La historia de las ideas latinoamericanas como conciencia de sí."],["dussel","Pensar desde la exterioridad de los excluidos: filosofía de la liberación."]]},
 {id:"otro",n:"El Otro",d:"La alteridad: el otro ser humano que me interpela y no puedo reducir a mí.",a:[
  ["levinas","El rostro del otro me ordena «no matarás»; la ética es la filosofía primera."],["beauvoir","La mujer ha sido construida como el Otro del varón."],["dussel","El pobre y el colonizado son la exterioridad que la modernidad excluyó."],["derrida","La diferencia nunca se cierra; la hospitalidad debe ser incondicional."]]},
 {id:"genero",n:"Género y feminismo",d:"Cómo las sociedades han construido lo femenino y lo masculino, y cómo cuestionarlo.",a:[
  ["pizan","En La ciudad de las damas defendió la dignidad y la capacidad de las mujeres."],["wollstonecraft","Las mujeres no son inferiores; lo parecen por falta de educación."],["beauvoir","«No se nace mujer: se llega a serlo»."],["hooks","El género se entrelaza con la raza y la clase."],["butler","El género es performativo: se produce al repetir normas."]]},
 {id:"critica",n:"Teoría crítica",d:"Una filosofía que analiza la sociedad para transformarla, no solo describirla.",a:[
  ["horkheimer","La teoría tradicional describe; la crítica busca emancipar."],["adorno","La industria cultural fabrica conformidad."],["benjamin","Hay que leer la historia a contrapelo, desde los vencidos."],["marcuse","La sociedad avanzada absorbe incluso la oposición."],["habermas","La emancipación pasa por una comunicación libre de dominación."]]}
];

const DEBATES = [
 {id:"cambio",h:false,q:"¿Todo cambia o nada cambia?",ctx:"No dialogaron en persona, pero sus posturas opuestas marcaron toda la metafísica posterior.",
  a:["heraclito","Todo fluye: no te bañas dos veces en el mismo río. La realidad es tensión de opuestos ordenada por el logos."],
  b:["parmenides","El ser es y el no ser no es. El cambio implicaría que algo surja de la nada: es apariencia de los sentidos."],
  juego:"Si los sentidos o la razón deben guiar el conocimiento de lo real."},
 {id:"ideas",h:true,q:"¿Dónde están las Ideas: fuera del mundo o en las cosas?",ctx:"Aristóteles estudió veinte años en la Academia de Platón y luego criticó a su maestro: «Amigo de Platón, pero más amigo de la verdad».",
  a:["platon","Las Ideas existen separadas, son eternas y más reales que las cosas sensibles, que solo las imitan."],
  b:["aristoteles","Separar las Ideas duplica el mundo sin explicarlo. La forma está en las cosas, unida a la materia."],
  juego:"Si la realidad verdadera está más allá de este mundo o en él."},
 {id:"naturaleza",h:true,q:"¿La naturaleza humana es buena o mala?",ctx:"Ambos eran confucianos. Xunzi escribió un capítulo entero para refutar a Mencio.",
  a:["mencio","Es buena: todos tenemos brotes de compasión. Basta cultivarlos, como se cuida una planta."],
  b:["xunzi","Es mala: nacemos con deseos egoístas. La bondad es fruto del esfuerzo, de los ritos y de la educación."],
  juego:"Si la moral se descubre dentro de uno o se construye desde fuera."},
 {id:"razonfe",h:true,q:"¿Puede la filosofía demostrar verdades sobre Dios y el mundo?",ctx:"Algacel escribió La incoherencia de los filósofos; Averroes le respondió casi un siglo después con La incoherencia de la incoherencia.",
  a:["algacel","No: los filósofos afirman más de lo que pueden probar. Ni siquiera la conexión entre causa y efecto es necesaria; depende de Dios."],
  b:["averroes","Sí: la razón demostrativa es el camino más alto hacia la verdad, y no contradice a la revelación bien entendida."],
  juego:"Los límites de la razón y su relación con la fe."},
 {id:"hobbesrousseau",h:true,q:"¿Somos buenos o peligrosos por naturaleza?",ctx:"En su Discurso sobre la desigualdad, Rousseau acusa a Hobbes de atribuir al ser natural los vicios de la sociedad.",
  a:["hobbes","Sin un poder común viviríamos en guerra de todos contra todos; la vida sería «solitaria, pobre, brutal y corta»."],
  b:["rousseau","El ser humano natural es bueno y libre; es la sociedad, con la propiedad y la desigualdad, la que lo corrompe."],
  juego:"Para qué sirve el Estado: para contenernos o para liberarnos."},
 {id:"causalidad",h:true,q:"¿La causalidad está en el mundo o en nuestra mente?",ctx:"Kant escribió que Hume lo despertó de su «sueño dogmático».",
  a:["hume","Nunca percibimos la conexión necesaria; solo vemos que un hecho sigue a otro y la costumbre hace el resto."],
  b:["kant","La causalidad es una forma que el entendimiento impone a toda experiencia posible; por eso vale universalmente."],
  juego:"Si la ciencia puede tener un fundamento seguro."},
 {id:"historia",h:true,q:"¿Las ideas mueven la historia, o la mueven las condiciones materiales?",ctx:"Marx dijo que en Hegel la dialéctica «está de cabeza» y había que ponerla sobre sus pies.",
  a:["hegel","La historia es el despliegue del Espíritu hacia la conciencia de la libertad."],
  b:["marx","No es la conciencia la que determina la vida, sino la vida material la que determina la conciencia."],
  juego:"Cómo cambiar la sociedad: transformando ideas o estructuras económicas."},
 {id:"ciencia",h:true,q:"¿Cómo avanza la ciencia?",ctx:"Se enfrentaron en un célebre coloquio en Londres en 1965.",
  a:["popper","Por conjeturas y refutaciones: los científicos deben intentar falsar sus teorías."],
  b:["kuhn","Casi siempre se trabaja dentro de un paradigma que no se cuestiona; solo las crisis desatan revoluciones."],
  juego:"Si la ciencia es plenamente racional o también histórica y social."},
 {id:"absurdo",h:true,q:"¿Rebelión o revolución?",ctx:"Fueron amigos hasta 1952, cuando la revista de Sartre criticó duramente El hombre rebelde de Camus.",
  a:["camus","Frente al absurdo, la rebelión que dice «no» sin justificar el asesinato en nombre de la historia."],
  b:["sartre","No hay manos limpias: el compromiso político exige elegir bando en la historia concreta."],
  juego:"Si un fin justo puede justificar medios violentos."},
 {id:"maquinas",h:true,q:"¿Puede pensar una máquina?",ctx:"Debatieron durante décadas en artículos y reseñas sobre la conciencia y la inteligencia artificial.",
  a:["searle","Manipular símbolos según reglas no es comprender; la mente requiere los poderes causales del cerebro."],
  b:["dennett","Si un sistema se comporta en todo como si entendiera, negarle comprensión es apelar a una magia interior."],
  juego:"Qué es comprender y si la inteligencia artificial puede tener mente."},
 {id:"justicia",h:true,q:"¿La justicia es neutral ante las ideas del bien?",ctx:"En 1982 Sandel publicó una crítica a la Teoría de la justicia de Rawls que abrió el debate entre liberales y comunitaristas.",
  a:["rawls","Una sociedad plural necesita principios justos que no dependan de ninguna visión particular de la vida buena."],
  b:["sandel","No somos individuos sin raíces: la justicia exige razonar juntos sobre el bien común."],
  juego:"Qué puede compartir una sociedad donde se piensa distinto."}
];

const EXPERIMENTOS = [
 {id:"caverna",n:"La caverna",a:"platon",f:"República, libro VII",s:"Unos prisioneros viven encadenados desde niños en una caverna. Solo ven sombras proyectadas en la pared y creen que son la realidad. Uno de ellos es liberado, sale y ve el sol.",
  q:"Si fueras tú quien salió, ¿volverías a la caverna a contarlo, aunque se burlaran de ti?",
  o:[["Sí, volvería","Crees que quien conoce la verdad tiene el deber de compartirla."],["No, me quedaría fuera","Para ti, la verdad es un bien personal y no vale la pena el riesgo."]],
  c:"Platón sostiene que el filósofo debe volver para gobernar, aunque arriesgue la vida: como Sócrates."},
 {id:"giges",n:"El anillo de Giges",a:"platon",f:"República, libro II",s:"Un pastor encuentra un anillo que lo vuelve invisible. Con él seduce a la reina, mata al rey y se queda con el trono.",
  q:"Si tuvieras ese anillo y nadie pudiera verte jamás, ¿seguirías siendo justo?",
  o:[["Sí","Para ti, la justicia vale por sí misma y no por la reputación."],["Probablemente no","Piensas, como Glaucón, que somos justos sobre todo por miedo al castigo."]],
  c:"Glaucón plantea el reto; el resto de la República intenta mostrar que el alma justa es más feliz aunque nadie la vea."},
 {id:"hombre_volante",n:"El hombre volante",a:"avicena",f:"El libro de la curación, sobre el alma",s:"Imagina que eres creado de golpe, suspendido en el aire, con los ojos cubiertos y los miembros separados, sin tocar nada ni sentir tu propio cuerpo.",
  q:"En esa situación, ¿sabrías que existes?",
  o:[["Sí, sabría que existo","Coincides con Avicena: el alma se conoce a sí misma sin pasar por el cuerpo."],["No, sin sensaciones no habría un yo","Piensas que la conciencia de uno mismo depende del cuerpo y de los sentidos."]],
  c:"Avicena concluye que afirmarías tu existencia sin afirmar la de tu cuerpo: el alma es distinta del cuerpo. Seis siglos después, Descartes razonó de forma parecida."},
 {id:"genio",n:"El genio maligno",a:"descartes",f:"Meditaciones metafísicas, I",s:"Supón que un genio poderoso y engañador dedica todo su ingenio a engañarte: el cielo, tu cuerpo y hasta las matemáticas podrían ser ilusiones.",
  q:"¿Hay algo de lo que no puedas dudar?",
  o:[["Sí: de que estoy pensando","Llegas a la certeza cartesiana: si dudo, pienso; si pienso, existo."],["No, todo es dudoso","Llevas el escepticismo más lejos que Descartes; el problema es cómo vivir así."]],
  c:"Descartes encuentra una primera certeza: «pienso, luego existo». Desde ahí intenta reconstruir el conocimiento."},
 {id:"teseo",n:"El barco de Teseo",a:"hobbes",f:"Sobre el cuerpo (De corpore), II, 11",s:"Los atenienses conservan el barco de Teseo cambiando cada tabla podrida por una nueva hasta que no queda ninguna original. Hobbes añade una vuelta: alguien guarda las tablas viejas y arma con ellas otro barco.",
  q:"¿Cuál es el verdadero barco de Teseo?",
  o:[["El restaurado","Para ti, la identidad depende de la continuidad de la forma y la historia."],["El armado con las tablas viejas","Para ti, la identidad depende de la materia original."],["Ninguno o ambos","Piensas que «el mismo» depende de lo que nos interese al preguntar."]],
  c:"Hobbes responde que depende del criterio: identidad de materia, de forma o de origen. La pregunta sigue abierta en los debates sobre la identidad personal."},
 {id:"mariposa",n:"El sueño de la mariposa",a:"zhuangzi",f:"Zhuangzi, capítulo 2",s:"Zhuangzi soñó que era una mariposa que revoloteaba feliz, sin saber que era Zhuangzi. Al despertar se preguntó si era Zhuangzi que había soñado ser mariposa o una mariposa que soñaba ser Zhuangzi.",
  q:"¿Cómo sabes ahora mismo que no estás soñando?",
  o:[["Lo sé: la vigilia es más coherente","Confías en la coherencia de la experiencia despierta como criterio."],["No puedo saberlo con certeza","Aceptas la duda; para Zhuangzi eso no angustia, libera."]],
  c:"Zhuangzi no lo resuelve: habla de la «transformación de las cosas» y desconfía de las fronteras rígidas entre el yo y el mundo."},
 {id:"apuesta",n:"La apuesta",a:"pascal",f:"Pensamientos",s:"La razón no puede demostrar si Dios existe o no. Aun así, hay que apostar: no apostar ya es elegir.",
  q:"Si apostar por Dios cuesta poco y puede ganarlo todo, ¿apostarías?",
  o:[["Sí, es la apuesta sensata","Sigues el cálculo de Pascal: ganancia infinita frente a pérdida finita."],["No, la fe no se elige por cálculo","Objetas, como muchos críticos, que creer por conveniencia no es fe auténtica."]],
  c:"Pascal concluye que hay que apostar por Dios y propone actuar como creyente para que la fe llegue."},
 {id:"retorno",n:"El eterno retorno",a:"nietzsche",f:"La gaya ciencia, § 341",s:"Un demonio se acerca en tu soledad más honda y te dice: esta vida, tal como la has vivido, tendrás que vivirla otra vez e innumerables veces, con cada dolor y cada alegría.",
  q:"¿Maldecirías al demonio o lo bendecirías?",
  o:[["Lo bendeciría","Afirmas la vida entera tal como es: el ideal de Nietzsche."],["Lo maldeciría","Hay algo en tu vida que no querrías repetir; quizá eso indica qué cambiar."]],
  c:"Para Nietzsche es una prueba: ¿cómo tendrías que vivir para desear que todo se repita?"},
 {id:"velo",n:"El velo de ignorancia",a:"rawls",f:"Teoría de la justicia (1971)",s:"Debes elegir las reglas de tu sociedad sin saber qué lugar ocuparás en ella: rico o pobre, sano o enfermo, de qué sexo, religión o talento.",
  q:"¿Qué tipo de sociedad elegirías?",
  o:[["Una que proteja a los peor situados","Razonas como Rawls: aseguras lo mínimo por si te toca lo peor."],["Una de libre competencia, aunque haya grandes desigualdades","Prefieres arriesgar por la posibilidad de estar arriba."]],
  c:"Rawls cree que elegiríamos libertades iguales y aceptaríamos desigualdades solo si benefician a los más desfavorecidos."},
 {id:"habitacion",n:"La habitación china",a:"searle",f:"«Mentes, cerebros y programas» (1980)",s:"Alguien que no sabe chino está encerrado con un manual de reglas. Le pasan preguntas en chino y, siguiendo el manual, devuelve respuestas perfectas. Desde fuera parece que entiende chino.",
  q:"¿Esa persona entiende chino?",
  o:[["No, solo sigue reglas","Coincides con Searle: manipular símbolos no basta para comprender."],["El sistema completo sí entiende","Das la «respuesta del sistema», defendida por críticos como Dennett."]],
  c:"Searle concluye que un programa, por sí solo, no basta para tener mente ni comprensión."},
 {id:"zombi",n:"El zombi filosófico",a:"chalmers",f:"La mente consciente (1996)",s:"Imagina un ser idéntico a ti átomo por átomo, que habla y actúa igual, pero sin experiencia interior: no siente nada.",
  q:"¿Es concebible ese zombi?",
  o:[["Sí, puedo imaginarlo","Para Chalmers, eso muestra que la conciencia no se reduce a lo físico."],["No, sería consciente","Piensas, como los fisicalistas, que reproducir el cerebro es reproducir la mente."]],
  c:"Chalmers lo usa para mostrar el «problema difícil»: explicar la experiencia vivida, no solo las funciones."},
 {id:"escarabajo",n:"El escarabajo en la caja",a:"wittgenstein",f:"Investigaciones filosóficas, § 293",s:"Cada persona tiene una caja con algo que llama «escarabajo». Nadie puede ver la caja de otro; cada uno sabe qué es un escarabajo solo mirando el suyo.",
  q:"¿La palabra «escarabajo» se refiere a lo que hay en cada caja?",
  o:[["Sí, a lo que cada quien tiene","Crees que las palabras sobre la mente nombran objetos privados."],["No: lo de adentro no cuenta","Llegas a la idea de Wittgenstein: el significado está en el uso compartido."]],
  c:"Wittgenstein concluye que lo que hay en la caja no forma parte del juego de lenguaje: el significado de las palabras sobre la mente es público."}
];

// Frases célebres (traducciones propias) con su fuente
const CITAS = {
 tales:["Todo está lleno de dioses.","Atribuida por Aristóteles, Sobre el alma, I, 5"],
 heraclito:["No es posible bañarse dos veces en el mismo río.","Fragmento B91 (Diels-Kranz)"],
 parmenides:["Lo mismo es pensar y ser.","Poema, fragmento B3"],
 protagoras:["El hombre es la medida de todas las cosas.","Citado por Platón, Teeteto 152a"],
 democrito:["Por convención lo dulce, por convención lo amargo; en realidad, átomos y vacío.","Fragmento B9"],
 socrates:["Una vida sin examen no merece ser vivida.","Platón, Apología 38a"],
 platon:["El principio es la parte más importante de toda obra.","República, II, 377a"],
 aristoteles:["Todos los seres humanos desean por naturaleza saber.","Metafísica, I, 1"],
 epicuro:["La muerte no es nada para nosotros: mientras existimos, ella no está; cuando ella llega, ya no existimos.","Carta a Meneceo"],
 epicteto:["No nos perturban las cosas, sino las opiniones que tenemos sobre ellas.","Enquiridión, 5"],
 seneca:["No es que tengamos poco tiempo, sino que perdemos mucho.","Sobre la brevedad de la vida, I"],
 marco_aurelio:["Pronto lo habrás olvidado todo; pronto todos te habrán olvidado.","Meditaciones, VII, 21"],
 agustin:["Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.","Confesiones, I, 1"],
 anselmo:["No busco entender para creer, sino que creo para entender.","Proslogion, 1"],
 bacon:["El conocimiento mismo es poder.","Meditaciones sagradas"],
 hobbes:["La vida del hombre es solitaria, pobre, desagradable, brutal y corta.","Leviatán, cap. 13"],
 descartes:["Pienso, luego existo.","Discurso del método, IV"],
 spinoza:["No reír, no llorar ni detestar, sino entender.","Tratado político, I, 4"],
 pascal:["El corazón tiene razones que la razón no conoce.","Pensamientos"],
 leibniz:["Este es el mejor de los mundos posibles.","Teodicea (idea central)"],
 hume:["La razón es, y solo debe ser, esclava de las pasiones.","Tratado de la naturaleza humana, II, 3, 3"],
 rousseau:["El hombre nace libre, y en todas partes está encadenado.","El contrato social, I, 1"],
 kant:["¡Ten el valor de servirte de tu propio entendimiento!","¿Qué es la Ilustración? (1784)"],
 hegel:["El búho de Minerva solo levanta el vuelo al caer el crepúsculo.","Filosofía del derecho, prefacio"],
 schopenhauer:["El mundo es mi representación.","El mundo como voluntad y representación, § 1"],
 kierkegaard:["La vida solo puede comprenderse hacia atrás, pero debe vivirse hacia adelante.","Diarios (1843)"],
 marx:["Los filósofos no han hecho más que interpretar el mundo; de lo que se trata es de transformarlo.","Tesis sobre Feuerbach, XI"],
 mill:["Sobre sí mismo, sobre su propio cuerpo y su mente, el individuo es soberano.","Sobre la libertad, I"],
 nietzsche:["Dios ha muerto, y nosotros lo hemos matado.","La gaya ciencia, § 125"],
 ortega:["Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo.","Meditaciones del Quijote (1914)"],
 wittgenstein:["De lo que no se puede hablar, hay que callar.","Tractatus logico-philosophicus, 7"],
 heidegger:["El lenguaje es la casa del ser.","Carta sobre el humanismo (1946)"],
 sartre:["El hombre está condenado a ser libre.","El existencialismo es un humanismo (1946)"],
 beauvoir:["No se nace mujer: se llega a serlo.","El segundo sexo (1949)"],
 camus:["Hay que imaginarse a Sísifo feliz.","El mito de Sísifo (1942)"],
 arendt:["La banalidad del mal.","Eichmann en Jerusalén (1963), subtítulo"],
 confucio:["Lo que no quieras para ti, no lo hagas a los demás.","Analectas, 15, 24"],
 laozi:["El Tao que puede nombrarse no es el Tao eterno.","Tao Te Ching, 1"],
 marti:["Injértese en nuestras repúblicas el mundo; pero el tronco ha de ser el de nuestras repúblicas.","Nuestra América (1891)"],
 vasconcelos:["Por mi raza hablará el espíritu.","Lema de la Universidad Nacional (1921)"],
 sor_juana:["Yo no estudio para saber más, sino para ignorar menos.","Respuesta a sor Filotea de la Cruz (1691)"]
};

// Historias breves (lo tradicional o dudoso se indica)
const HISTORIAS = {
 tales:"Según cuenta Platón, Tales observaba las estrellas, cayó en un pozo, y una sirvienta tracia se rió de él: quería conocer el cielo y no veía lo que tenía a sus pies.",
 socrates:"Condenado a muerte en el 399 a.C., rechazó escapar de prisión y bebió la cicuta conversando con sus amigos sobre la inmortalidad del alma, según el Fedón de Platón.",
 diogenes:"La tradición cuenta que Alejandro Magno se le acercó y le ofreció lo que quisiera. Diógenes le respondió: «Apártate, que me tapas el sol».",
 hipatia:"Enseñó matemáticas y filosofía en Alejandría hasta que en el 415 fue asesinada por una turba en medio de conflictos políticos y religiosos de la ciudad.",
 boecio:"Escribió La consolación de la filosofía en prisión mientras esperaba su ejecución. En el libro, la Filosofía se le aparece como una mujer para consolarlo.",
 spinoza:"Expulsado de la comunidad judía de Ámsterdam en 1656, se ganaba la vida puliendo lentes para microscopios y telescopios. Rechazó una cátedra en Heidelberg para conservar su libertad.",
 descartes:"Invitado por la reina Cristina de Suecia, debía darle clases a las cinco de la mañana en pleno invierno. Murió en Estocolmo pocos meses después, en 1650.",
 kant:"Nunca se alejó mucho de Königsberg. Se dice que sus paseos diarios eran tan puntuales que los vecinos ajustaban sus relojes al verlo pasar; es una anécdota tradicional.",
 sor_juana:"Hacia el final de su vida, presionada por las autoridades eclesiásticas, se deshizo de su biblioteca y de sus instrumentos científicos, según sus primeros biógrafos.",
 nietzsche:"La tradición cuenta que en enero de 1889, en Turín, abrazó a un caballo maltratado y se derrumbó. Pasó sus últimos once años sin recuperar la lucidez.",
 wittgenstein:"Heredero de una de las familias más ricas de Viena, regaló su fortuna. Tras el Tractatus creyó haber resuelto la filosofía y se fue a enseñar a escuelas rurales de Austria.",
 sartre:"En 1964 rechazó el Premio Nobel de Literatura: dijo que un escritor no debe dejarse convertir en institución.",
 arendt:"Cubrió en 1961 el juicio al criminal nazi Adolf Eichmann en Jerusalén. Esperaba un monstruo y encontró a un burócrata incapaz de pensar: de ahí la «banalidad del mal».",
 buda:"Siddhartha Gautama era un príncipe. Según la tradición, al ver a un anciano, a un enfermo y un cadáver, abandonó el palacio para buscar el fin del sufrimiento."
};
