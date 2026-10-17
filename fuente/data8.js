// Pensamiento a detalle (curado). Formato: temas = [[título, resumen, [[subtema, explicación], ...]], ...]
const PENS={
aristoteles:{temas:[
 ["La lógica","Aristóteles convirtió la lógica en el instrumento (órganon) de todo saber: no es una ciencia más, sino la herramienta para razonar bien en cualquier ciencia.",[
  ["Componentes esenciales","Distingue conceptos (términos), juicios (proposiciones que afirman o niegan algo) y razonamientos (encadenamientos de juicios). Clasifica los modos de decir algo de algo en categorías."],
  ["Razonamiento deductivo: el silogismo","De dos premisas se sigue necesariamente una conclusión: «Todo ser humano es mortal; Sócrates es humano; luego Sócrates es mortal». Es el modelo de demostración científica."],
  ["Razonamiento inductivo","La inducción (epagogé) va de los casos particulares a lo universal. Es el punto de partida del conocimiento, porque todo saber empieza en la experiencia."],
  ["Principio de no contradicción","Es imposible que algo sea y no sea al mismo tiempo y en el mismo sentido. Lo considera el principio más firme de todos, base de cualquier demostración."]]],
 ["La física","Estudia la naturaleza (physis): los seres que tienen en sí mismos el principio de su movimiento y de su reposo.",[
  ["Physis y techne","Lo natural se mueve y crece por sí mismo; lo artificial (techne) recibe su forma y su fin desde fuera, del artesano. Una semilla se hace árbol; la madera no se hace mesa sola."],
  ["El movimiento","Es el paso de lo que algo es en potencia a lo que es en acto. Así responde a Parménides: el cambio es real y comprensible sin negar el ser."],
  ["Potencia y acto","La potencia es la capacidad de llegar a ser algo (la semilla es árbol en potencia); el acto es la realización de esa capacidad (el árbol ya crecido)."],
  ["Teoría hilemórfica","Todo ser natural es un compuesto de materia (hyle), aquello de lo que está hecho, y forma (morphé), lo que hace que sea lo que es."],
  ["Las cuatro causas","Para conocer algo hay que saber su causa material (de qué está hecho), formal (qué es), eficiente (quién o qué lo produjo) y final (para qué existe)."],
  ["Un mundo sin principio ni fin","El cosmos es eterno, finito y geocéntrico. Distingue el mundo sublunar, de los cuatro elementos y el cambio, del supralunar, hecho de éter y con movimiento circular perfecto."]]],
 ["De la física a la metafísica","La «filosofía primera» estudia el ser en cuanto ser y culmina en la causa última del movimiento del universo.",[
  ["El ser y la analogía del ser","«El ser se dice de muchas maneras», pero todas remiten a un sentido principal: la sustancia. No es un término unívoco ni puramente equívoco, sino análogo."],
  ["Las categorías","Son los modos fundamentales de ser y de decir: sustancia, cantidad, cualidad, relación, lugar, tiempo, posición, posesión, acción y pasión."],
  ["La sustancia","La sustancia (ousía) es lo que existe por sí mismo, como este caballo o este ser humano, compuesto de materia y forma. Las demás categorías existen en ella."],
  ["El motor inmóvil","Todo movimiento requiere una causa; para no ir al infinito debe existir un primer motor que mueve sin ser movido. Es acto puro, sin materia, y mueve como objeto de deseo: «pensamiento que se piensa a sí mismo»."]]],
 ["El alma y el ser humano","El alma no es una entidad separada, como en Platón, sino la forma del cuerpo vivo.",[
  ["El alma como forma del cuerpo","El alma es al cuerpo lo que la visión al ojo: su actividad propia. Por eso alma y cuerpo no pueden separarse en los seres vivos."],
  ["Tres funciones del alma","Vegetativa (nutrición y reproducción, en plantas), sensitiva (percepción y deseo, en animales) y racional (pensamiento, solo en el ser humano)."],
  ["Animal racional","Lo propio del ser humano es la razón (logos) y el lenguaje, que le permiten deliberar sobre lo justo y lo útil."]]],
 ["La ética","La ética busca el bien humano, que todos llaman felicidad, y el modo de alcanzarlo mediante el carácter.",[
  ["El bien humano: la felicidad","La felicidad (eudaimonía) es el fin último, deseado por sí mismo. Consiste en la actividad del alma conforme a la virtud a lo largo de una vida completa; la forma más alta es la vida contemplativa."],
  ["La virtud como término medio","La virtud ética es un hábito de elegir el justo medio entre dos extremos viciosos, relativo a cada persona: la valentía está entre la temeridad y la cobardía."],
  ["Virtudes éticas y dianoéticas","Las éticas forman el carácter y se adquieren por costumbre; las dianoéticas perfeccionan la inteligencia. La prudencia (phrónesis) une ambas al saber elegir bien en cada caso."],
  ["La justicia","Es la virtud referida a los demás. Distingue la justicia distributiva (repartir según el mérito) y la correctiva (restablecer la igualdad en los intercambios y daños)."],
  ["La amistad","Ocupa dos libros de la Ética a Nicómaco. Hay amistad por utilidad, por placer y por virtud; solo esta última es plena y duradera."]]],
 ["De la ética a la política","La ética se completa en la política: el ser humano solo alcanza la vida buena en comunidad.",[
  ["Aristóteles frente a Platón","Rechaza la comunidad de bienes y de familias de la República y la separación de las Ideas. Prefiere estudiar las constituciones reales: reunió unas 158."],
  ["La ciudad-Estado","El ser humano es un «animal político» (zóon politikón). La polis es natural y anterior al individuo; existe no solo para vivir, sino para vivir bien."],
  ["Los regímenes políticos","Hay tres formas rectas, que buscan el bien común (monarquía, aristocracia y politeia), y tres desviadas, que buscan el interés de quien gobierna (tiranía, oligarquía y democracia). Recomienda un régimen mixto apoyado en la clase media."]]],
 ["Estética y retórica","También estudió la creación poética y el arte de persuadir.",[
  ["Mímesis y tragedia","El arte imita (mímesis) acciones humanas. La tragedia, al provocar compasión y temor, produce la catarsis, una purificación de esas emociones."],
  ["Ethos, pathos y logos","La persuasión depende del carácter del orador (ethos), de las emociones del público (pathos) y de los argumentos (logos)."]]],
 ["Su obra y su transmisión","Lo que hoy leemos de Aristóteles llegó por un camino largo e interrumpido.",[
  ["Obras perdidas y conservadas","Escribió diálogos para el público (exotéricos), hoy perdidos. Se conservan sus tratados de escuela (esotéricos), apuntes de sus clases en el Liceo."],
  ["La edición de Andrónico","En el siglo I a.C. Andrónico de Rodas ordenó el corpus. De ahí viene el nombre «Metafísica»: los libros colocados «después de la Física»."],
  ["Del mundo árabe a la escolástica","Avicena y Averroes lo comentaron; traducido al latín en los siglos XII y XIII, Tomás de Aquino lo integró al pensamiento cristiano. Se le llamó simplemente «el Filósofo»."]]]],
 obras:{"Órganon":"Conjunto de tratados de lógica: Categorías, Sobre la interpretación, Analíticos primeros y segundos, Tópicos y Refutaciones sofísticas.",
  "Física":"Estudio de la naturaleza, el movimiento, las causas, el lugar, el tiempo y el primer motor.",
  "Metafísica":"La «filosofía primera»: el ser en cuanto ser, la sustancia, potencia y acto, y el motor inmóvil.",
  "Acerca del alma":"Define el alma como forma del cuerpo vivo y analiza la percepción y el intelecto.",
  "Ética a Nicómaco":"Su gran obra moral: la felicidad, la virtud como término medio, la prudencia, la justicia y la amistad.",
  "Política":"La polis, la familia, la esclavitud (que justificó), la ciudadanía y los regímenes políticos.",
  "Retórica":"El arte de encontrar en cada caso los medios de persuasión disponibles.",
  "Poética":"Teoría de la tragedia y la epopeya; conservada solo en parte (se perdió el libro sobre la comedia)."}},

socrates:{temas:[
 ["El método socrático","Sócrates filosofaba conversando en la plaza pública. Su método buscaba que cada persona examinara sus propias creencias.",[
  ["La ironía","Fingía no saber para que su interlocutor expusiera lo que creía saber, y luego le hacía ver sus contradicciones."],
  ["La mayéutica","Como su madre, que era partera, decía ayudar a «dar a luz» ideas: el conocimiento no se impone desde fuera, se hace surgir con preguntas."],
  ["La refutación (élenchos)","Examinaba una definición hasta mostrar que conducía a consecuencias inaceptables, obligando a buscar una mejor."],
  ["Definiciones universales","Preguntaba «¿qué es la justicia?», «¿qué es la valentía?». No le bastaban ejemplos: buscaba lo común a todos los casos."]]],
 ["La ética","Su preocupación central fue cómo debemos vivir.",[
  ["Intelectualismo moral","La virtud es conocimiento: quien sabe qué es el bien, lo hace. Nadie obra mal a sabiendas; el mal nace de la ignorancia."],
  ["El cuidado del alma","Lo más importante no es la riqueza ni la fama, sino que el alma sea lo mejor posible. «Una vida sin examen no merece ser vivida» (Apología)."],
  ["Conocerse a sí mismo","Hizo suyo el lema del templo de Delfos, «Conócete a ti mismo», y la conciencia de la propia ignorancia, que la tradición resume en «solo sé que no sé nada»."]]],
 ["Frente a los sofistas","Compartió con ellos el interés por el ser humano y la ciudad, pero se opuso a su relativismo.",[
  ["Verdad frente a opinión","Los sofistas enseñaban a persuadir; Sócrates buscaba la verdad mediante el diálogo, convencido de que existen valores comunes a todos."],
  ["No cobraba por enseñar","A diferencia de los sofistas, no cobraba ni se presentaba como maestro de virtud."]]],
 ["Juicio y muerte","En 399 a.C. fue acusado de impiedad y de corromper a los jóvenes.",[
  ["La defensa","En la Apología de Platón se defiende sin rogar clemencia y presenta su labor como un servicio a la ciudad, como un tábano que despierta a un caballo."],
  ["Rechazo a huir","En el Critón se niega a escapar de prisión: huir sería romper el acuerdo con las leyes que lo formaron."],
  ["La muerte","El Fedón narra su último día: conversó sobre la inmortalidad del alma y bebió la cicuta con serenidad."]]],
 ["El problema socrático","Como no escribió nada, reconstruir su pensamiento es un problema histórico.",[
  ["Las fuentes","Lo conocemos por Platón, Jenofonte, Aristófanes (que lo caricaturiza en Las nubes) y Aristóteles. Cada uno ofrece una imagen distinta."],
  ["Sócrates y Platón","En los diálogos tempranos de Platón parece hablar el Sócrates histórico; en los posteriores, el personaje expone ya las ideas de Platón."]]]],
 obras:{}},

platon:{temas:[
 ["La teoría de las Ideas","El centro de su filosofía: además de las cosas que vemos existen realidades eternas e inmutables, las Ideas o Formas.",[
  ["Dos mundos","El mundo sensible es cambiante y solo permite opinión; el mundo inteligible, de las Ideas, es eterno y objeto de verdadero conocimiento."],
  ["Participación e imitación","Las cosas bellas son bellas porque participan de la Idea de Belleza; son copias imperfectas de su modelo."],
  ["La Idea del Bien","Es la Idea suprema. Como el sol hace visibles las cosas, el Bien hace inteligibles las Ideas y les da su ser."]]],
 ["El conocimiento","Conocer es elevarse de las apariencias a las Ideas.",[
  ["La reminiscencia","Conocer es recordar (anámnesis): el alma contempló las Ideas antes de nacer, y la experiencia solo despierta ese recuerdo (Menón, Fedón)."],
  ["La línea dividida","Distingue opinión (doxa: imaginación y creencia) y ciencia (epistéme: razonamiento matemático e intuición de las Ideas)."],
  ["El mito de la caverna","Prisioneros encadenados confunden sombras con la realidad. Uno es liberado, sale y ve el sol. La filosofía es ese ascenso, y el liberado debe volver a ayudar a los demás."],
  ["La dialéctica","Es el método más alto: por medio del diálogo se asciende de hipótesis en hipótesis hasta el principio de todo, el Bien."]]],
 ["El alma","El alma es inmortal y lo más valioso del ser humano.",[
  ["Inmortalidad","En el Fedón ofrece argumentos para mostrar que el alma existía antes del cuerpo y sobrevive a la muerte."],
  ["Alma tripartita","El alma tiene tres partes: racional, irascible (el ánimo, el coraje) y concupiscible (los apetitos)."],
  ["El carro alado","En el Fedro, la razón es un auriga que conduce dos caballos: uno noble y otro rebelde. La vida buena consiste en que la razón gobierne."]]],
 ["Ética y política","La justicia es la misma en el alma y en la ciudad: que cada parte cumpla su función.",[
  ["Las virtudes","Sabiduría para la razón, valentía para el ánimo, templanza para los apetitos; la justicia es la armonía de todas."],
  ["El Estado ideal","La ciudad justa de la República tiene tres clases: gobernantes, guardianes y productores, paralelas a las partes del alma."],
  ["El rey filósofo","Los males de las ciudades no cesarán hasta que gobiernen los filósofos, o los gobernantes se hagan filósofos."],
  ["Las Leyes","En su última obra propone un modelo más realista, en el que gobiernan las leyes y no solo los sabios."]]],
 ["La educación (paideia)","Platón es uno de los primeros grandes pensadores de la educación.",[
  ["Educar es girar el alma","La educación no consiste en poner conocimientos en un alma vacía, sino en orientar su mirada hacia el bien, como el prisionero que se voltea hacia la luz."],
  ["El currículo de los guardianes","Gimnasia y música en la juventud; después aritmética, geometría, astronomía y armonía, y al final la dialéctica."],
  ["La Academia","Hacia 387 a.C. fundó en Atenas la Academia, escuela que funcionó durante siglos y es antecedente de la universidad."]]],
 ["Cosmología","El Timeo explica el origen del mundo.",[
  ["El demiurgo","Un artesano divino modela la materia caótica tomando como modelo las Ideas, y hace el mundo lo más bello posible."]]]],
 obras:{"Apología de Sócrates":"Defensa de Sócrates ante el tribunal ateniense.",
  "Fedón":"Último día de Sócrates y argumentos sobre la inmortalidad del alma.",
  "Banquete":"Discursos sobre el amor (Eros) y el ascenso desde los cuerpos bellos hasta la Belleza en sí.",
  "República":"La justicia, el Estado ideal, la educación de los guardianes y el mito de la caverna.",
  "Fedro":"El amor, el alma como carro alado, la retórica y una crítica a la escritura.",
  "Teeteto":"¿Qué es el conocimiento? Discute la tesis de Protágoras de que el ser humano es la medida de todas las cosas.",
  "Timeo":"Cosmología: el demiurgo, el alma del mundo y los elementos.",
  "Leyes":"Su obra más extensa y tardía: legislación y organización de una ciudad posible."}},

agustin:{temas:[
 ["Fe y razón","Agustín une la fe cristiana con la filosofía, sobre todo con el neoplatonismo.",[
  ["Creer para entender","«Cree para entender y entiende para creer»: la fe abre el camino a la comprensión, y la razón ayuda a profundizar la fe."],
  ["El encuentro con el neoplatonismo","La lectura de Plotino le permitió pensar a Dios como realidad espiritual y el mal sin atribuirle una sustancia propia."]]],
 ["Verdad e interioridad","La verdad no se encuentra fuera, sino en el interior del alma.",[
  ["«Si me engaño, existo»","Contra los escépticos: aunque me equivoque, para equivocarme tengo que existir. Es un precedente del cogito de Descartes."],
  ["El camino interior","«No salgas fuera, vuelve a ti mismo: en el hombre interior habita la verdad». Desde el alma se asciende hasta Dios."],
  ["La iluminación","Conocemos verdades eternas, como las matemáticas, porque Dios ilumina la mente, como el sol hace visibles las cosas."]]],
 ["Dios, el mundo y el mal","Su reflexión sobre la creación y el mal marcó la teología occidental.",[
  ["Creación de la nada","Dios creó el mundo libremente y de la nada, y con él creó también el tiempo."],
  ["El mal como privación","Contra los maniqueos, sostiene que el mal no es una sustancia, sino la falta de un bien que debería estar."]]],
 ["El tiempo","El libro XI de las Confesiones es una de las grandes reflexiones sobre el tiempo.",[
  ["¿Qué es el tiempo?","«Si nadie me lo pregunta, lo sé; si quiero explicarlo a quien me lo pregunta, no lo sé»."],
  ["Distensión del alma","El pasado ya no es y el futuro aún no es. El tiempo existe en el alma como memoria del pasado, atención al presente y espera del futuro."]]],
 ["Voluntad, libertad y gracia","El ser humano es libre, pero necesita la gracia para obrar bien.",[
  ["El libre albedrío","El mal moral nace de la voluntad que se aparta del bien superior hacia bienes inferiores."],
  ["La gracia","Frente a Pelagio, sostiene que el ser humano no puede salvarse solo con su esfuerzo: necesita la gracia de Dios."]]],
 ["Historia y política","La historia es el escenario de dos ciudades.",[
  ["Las dos ciudades","«Dos amores fundaron dos ciudades»: el amor a sí mismo hasta el desprecio de Dios, la terrena; el amor a Dios hasta el desprecio de sí, la celestial."],
  ["Filosofía de la historia","La historia tiene un sentido lineal, de la creación al juicio final, frente a la visión cíclica de los griegos."]]],
 ["La educación","Su diálogo El maestro es una pequeña joya de filosofía de la educación.",[
  ["El maestro interior","Las palabras del maestro no transmiten el conocimiento por sí mismas: invitan a buscar, y la verdad se reconoce en el interior del alumno."]]]],
 obras:{"Confesiones":"Autobiografía espiritual dirigida a Dios; incluye su conversión y la reflexión sobre la memoria y el tiempo.",
  "La ciudad de Dios":"Escrita tras el saqueo de Roma en 410; responde a quienes culpaban al cristianismo y expone las dos ciudades.",
  "Sobre la Trinidad":"Busca imágenes de la Trinidad en el alma humana: memoria, inteligencia y voluntad.",
  "Sobre el libre albedrío":"Diálogo sobre el origen del mal y la libertad humana."}},

tomas:{temas:[
 ["Fe y razón","Tomás distingue fe y razón sin oponerlas: ambas vienen de la misma verdad.",[
  ["Dos fuentes de verdad","Algunas verdades se alcanzan por la razón (que Dios existe), otras solo por la revelación (la Trinidad). Entre ellas no puede haber contradicción."],
  ["Filosofía y teología","La filosofía tiene su propio método y autonomía, pero está al servicio de la comprensión de la fe."]]],
 ["Metafísica","Retoma a Aristóteles y lo transforma con una idea nueva: el acto de ser.",[
  ["Esencia y existencia","En las criaturas, lo que algo es (esencia) es distinto de que exista (existencia). Solo en Dios ambas coinciden: Dios es el Ser mismo."],
  ["Acto y potencia","Toma de Aristóteles estos conceptos y los aplica a todo lo creado: todo ser finito es mezcla de acto y potencia; Dios es acto puro."],
  ["La analogía del ser","Decimos «ser» de Dios y de las criaturas en sentido análogo: ni idéntico ni completamente distinto."]]],
 ["Las cinco vías","Cinco argumentos que parten de la experiencia del mundo para mostrar que Dios existe.",[
  ["Movimiento y causa","Todo lo que se mueve es movido por otro, y toda causa tiene una causa: debe haber un primer motor y una primera causa."],
  ["Contingencia","Las cosas pueden existir o no; si todo fuera así, en algún momento nada habría existido. Debe haber un ser necesario."],
  ["Perfección y orden","Hay grados de bondad y verdad que suponen un máximo; y los seres sin inteligencia actúan con orden hacia un fin, lo que supone una inteligencia que los dirige."]]],
 ["El ser humano y el conocimiento","El ser humano es unidad de alma y cuerpo.",[
  ["El alma como forma del cuerpo","Siguiendo a Aristóteles, el alma racional es la forma del cuerpo; pero, a diferencia de él, la considera inmortal."],
  ["El conocimiento empieza por los sentidos","«Nada hay en el intelecto que no haya pasado antes por los sentidos». El entendimiento abstrae lo universal a partir de las imágenes sensibles."]]],
 ["Ética y ley","La moral se funda en la naturaleza humana y en la razón.",[
  ["Los tipos de ley","Ley eterna (el plan de Dios), ley natural (su reflejo en la razón humana), ley humana (las leyes de cada sociedad) y ley divina (la revelada)."],
  ["La ley natural","Su primer precepto: «hay que hacer el bien y evitar el mal». Una ley humana contraria a ella no es propiamente ley."],
  ["Virtudes y felicidad","Integra las virtudes cardinales (prudencia, justicia, fortaleza y templanza) con las teologales (fe, esperanza y caridad). La felicidad plena es la contemplación de Dios."]]],
 ["Política","La sociedad es natural al ser humano.",[
  ["El bien común","La autoridad existe para procurar el bien común, no el interés de quien gobierna."]]]],
 obras:{"Suma teológica":"Su obra cumbre, inconclusa: miles de artículos que plantean una pregunta, las objeciones, una respuesta y la solución a cada objeción.",
  "Suma contra gentiles":"Defensa racional de la fe dirigida a quienes no aceptan la revelación cristiana.",
  "Sobre el ente y la esencia":"Obra juvenil y breve donde expone la distinción entre esencia y existencia."}},

descartes:{temas:[
 ["El método","Descartes busca un método tan seguro como el de las matemáticas para toda la filosofía.",[
  ["Las cuatro reglas","Evidencia (no aceptar nada que no sea claro y distinto), análisis (dividir los problemas), síntesis (ir de lo simple a lo complejo) y enumeración (revisar que nada falte)."],
  ["La matemática como modelo","La certeza de la geometría inspira su ideal de un saber único, ordenado y deductivo."]]],
 ["La duda metódica","Para encontrar algo cierto, decide dudar de todo lo que pueda ponerse en duda.",[
  ["Los sentidos engañan","Si a veces nos engañan, no podemos confiar del todo en ellos."],
  ["El argumento del sueño","No hay señales seguras para distinguir la vigilia del sueño."],
  ["El genio maligno","Imagina un ser poderoso que lo engaña incluso en las verdades matemáticas: es la duda más radical."]]],
 ["El cogito","La primera verdad indudable.",[
  ["«Pienso, luego existo»","Aunque dude de todo, mientras dudo pienso, y si pienso existo. Es la primera certeza y el punto de partida de su filosofía."],
  ["Claridad y distinción","De esta certeza obtiene el criterio de verdad: es verdadero todo lo que se percibe con la misma claridad y distinción."]]],
 ["Dios y las tres sustancias","Desde el cogito reconstruye el conocimiento del mundo.",[
  ["Las pruebas de Dios","Tenemos la idea de un ser infinito que no pudimos producir nosotros; además, existir forma parte de la idea de un ser perfecto."],
  ["Dios garantiza la verdad","Un Dios perfecto no puede engañarnos; por eso podemos confiar en lo que percibimos clara y distintamente."],
  ["Res cogitans y res extensa","La realidad tiene tres sustancias: el pensamiento, la extensión (la materia) y Dios."]]],
 ["Mente y cuerpo","El dualismo cartesiano marcó la filosofía moderna.",[
  ["Dualismo","Mente y cuerpo son sustancias distintas: una piensa y no ocupa espacio; el otro ocupa espacio y no piensa."],
  ["La glándula pineal","Situó allí la interacción entre ambos, solución que ya sus contemporáneos consideraron problemática."],
  ["Mecanicismo","La naturaleza, incluidos los animales, funciona como una máquina regida por leyes del movimiento."]]],
 ["La moral provisional","Mientras busca la verdad, propone reglas para vivir.",[
  ["Sus máximas","Obedecer las leyes y costumbres de su país, ser firme en sus decisiones y procurar vencerse a sí mismo antes que a la fortuna."]]]],
 obras:{"Discurso del método":"Publicado en 1637, en francés, como prólogo a tres ensayos científicos. Expone su método y el cogito.",
  "Meditaciones metafísicas":"Publicadas en 1641 en latín, con objeciones de otros filósofos y sus respuestas: duda, cogito, Dios y dualismo.",
  "Principios de la filosofía":"Exposición sistemática de su filosofía y su física (1644).",
  "Las pasiones del alma":"Su último libro (1649): las emociones y su relación con el cuerpo."}},

kant:{temas:[
 ["El giro copernicano","Kant invierte la relación entre sujeto y objeto.",[
  ["El sujeto ordena la experiencia","No es el conocimiento el que se ajusta a los objetos, sino los objetos a las formas de nuestro conocimiento, como Copérnico invirtió la relación entre el Sol y la Tierra."],
  ["Idealismo trascendental","Conocemos las cosas tal como se nos aparecen (fenómenos), no como son en sí mismas (noúmenos)."]]],
 ["La razón pura: qué puedo conocer","La Crítica de la razón pura examina los límites del conocimiento.",[
  ["Juicios sintéticos a priori","Son universales y necesarios, pero amplían el conocimiento, como los de la matemática y la física. La pregunta es cómo son posibles."],
  ["Espacio y tiempo","No son propiedades de las cosas, sino formas a priori de nuestra sensibilidad."],
  ["Las categorías","El entendimiento ordena los datos de los sentidos con conceptos puros, como causa o sustancia. «Pensamientos sin contenido son vacíos; intuiciones sin conceptos son ciegas»."],
  ["Los límites de la metafísica","Cuando la razón intenta conocer el alma, el mundo como totalidad o Dios, cae en contradicciones (antinomias). La metafísica no puede ser ciencia."]]],
 ["La ética: qué debo hacer","La moral se funda en la razón, no en la experiencia ni en la búsqueda de felicidad.",[
  ["La buena voluntad","Lo único bueno sin restricción es una buena voluntad, la que obra por deber."],
  ["El imperativo categórico","«Obra solo según una máxima que puedas querer que se convierta en ley universal». Y: trata a la humanidad, en ti y en los demás, siempre como un fin y nunca solo como un medio."],
  ["Autonomía","La persona moral se da a sí misma la ley; de ahí procede su dignidad."],
  ["Los postulados","La moral exige suponer la libertad, la inmortalidad del alma y la existencia de Dios, aunque no puedan demostrarse."]]],
 ["Estética","La Crítica del juicio estudia lo bello y lo sublime.",[
  ["El juicio de gusto","Lo bello agrada sin interés y sin concepto, pero pretende valer para todos."],
  ["Lo sublime","Lo que nos supera, como una tormenta o el océano, despierta la conciencia de nuestra razón."]]],
 ["Ilustración y política","Kant pensó la libertad pública y la paz.",[
  ["¡Atrévete a saber!","La Ilustración es la salida del ser humano de su minoría de edad, de la que él mismo es culpable. Su lema: sapere aude."],
  ["La paz perpetua","Propone repúblicas libres unidas en una federación de Estados: antecedente de las organizaciones internacionales."]]],
 ["La educación","Dictó lecciones de pedagogía en la universidad.",[
  ["Educar para la libertad","«El ser humano solo puede llegar a ser humano mediante la educación». Educar es disciplinar, cultivar, civilizar y, sobre todo, moralizar."]]]],
 obras:{"Crítica de la razón pura":"1781, reeditada en 1787. ¿Qué puedo conocer? Los límites del conocimiento.",
  "Crítica de la razón práctica":"1788. Fundamentos de la moral, el deber y la libertad.",
  "Crítica del juicio":"1790. Lo bello, lo sublime y la finalidad en la naturaleza.",
  "Fundamentación de la metafísica de las costumbres":"1785. Exposición breve del imperativo categórico.",
  "¿Qué es la Ilustración?":"Artículo de 1784 con el lema «¡atrévete a servirte de tu propio entendimiento!»."}},

nietzsche:{temas:[
 ["Diagnóstico de la cultura","Nietzsche analiza la crisis de los valores occidentales.",[
  ["La muerte de Dios","«Dios ha muerto, y nosotros lo hemos matado» (La gaya ciencia). Los fundamentos tradicionales de la moral y el sentido han perdido su fuerza."],
  ["El nihilismo","Cuando los valores supremos se desvalorizan aparece el nihilismo. Puede ser pasivo, de resignación, o activo, que destruye para crear."]]],
 ["La crítica","Filosofa «con el martillo» para poner a prueba las ideas heredadas.",[
  ["Crítica a la metafísica","Platón inventó un «mundo verdadero» por encima de este; el cristianismo sería un «platonismo para el pueblo»."],
  ["Genealogía de la moral","Distingue la moral de los señores, que afirma la vida, y la moral de los esclavos, nacida del resentimiento contra los fuertes."],
  ["Perspectivismo","No hay un conocimiento sin perspectiva. En un fragmento póstumo escribe: «no hay hechos, solo interpretaciones»."],
  ["Crítica a Sócrates","Ve en Sócrates el inicio de una razón que desconfía de los instintos y de la vida."]]],
 ["La propuesta","Tras la crítica, propone nuevos valores que afirmen la vida.",[
  ["La transvaloración","Crear nuevos valores, fieles a la tierra y a la vida, en lugar de los heredados."],
  ["La voluntad de poder","El impulso fundamental de la vida no es solo sobrevivir, sino crecer, superarse y expandirse."],
  ["El superhombre","El Übermensch es el ser humano que crea sus propios valores y supera al «último hombre», cómodo y conformista."],
  ["El eterno retorno","Prueba: ¿querrías vivir tu vida otra vez, infinitas veces, igual? Quien dice sí ama su destino (amor fati)."]]],
 ["El arte","El arte es para él lo que hace la vida digna de vivirse.",[
  ["Apolíneo y dionisíaco","En la tragedia griega se unían Apolo (forma, medida, sueño) y Dioniso (embriaguez, exceso, unidad con la naturaleza)."]]]],
 obras:{"El nacimiento de la tragedia":"1872. Lo apolíneo y lo dionisíaco en la tragedia griega.",
  "Así habló Zaratustra":"1883–1885. Obra poética donde Zaratustra anuncia el superhombre y el eterno retorno.",
  "Más allá del bien y del mal":"1886. Crítica de los prejuicios de los filósofos y de la moral.",
  "La genealogía de la moral":"1887. El origen de los valores morales, el resentimiento y la culpa."}},

marx:{temas:[
 ["Materialismo histórico","La historia se explica por las condiciones materiales de vida.",[
  ["Base y superestructura","La economía (fuerzas productivas y relaciones de producción) es la base; el derecho, la política, la religión y la filosofía se levantan sobre ella."],
  ["El ser social y la conciencia","«No es la conciencia la que determina el ser, sino el ser social el que determina la conciencia»."],
  ["Modos de producción","La historia atraviesa distintos modos de producción, como el esclavista, el feudal y el capitalista."]]],
 ["La alienación","En el capitalismo el trabajador se vuelve ajeno a sí mismo.",[
  ["Cuatro formas","El trabajador se enajena del producto de su trabajo, de la actividad misma, de su ser humano (su capacidad creadora) y de los demás."]]],
 ["Crítica de la economía política","El capital analiza cómo funciona el capitalismo.",[
  ["La mercancía","Tiene valor de uso (su utilidad) y valor de cambio. El valor procede del trabajo socialmente necesario para producirla."],
  ["La plusvalía","El obrero produce más valor del que recibe como salario; esa diferencia es la ganancia del capitalista."],
  ["El fetichismo de la mercancía","Las relaciones entre personas aparecen como relaciones entre cosas, entre mercancías y dinero."]]],
 ["Lucha de clases","«La historia de todas las sociedades hasta nuestros días es la historia de la lucha de clases» (Manifiesto).",[
  ["Burguesía y proletariado","En el capitalismo se enfrentan quienes poseen los medios de producción y quienes solo tienen su fuerza de trabajo."],
  ["Revolución y sociedad sin clases","Previó una revolución proletaria que conduciría a una sociedad sin clases ni Estado."]]],
 ["Ideología y praxis","Las ideas dominantes son las ideas de la clase dominante.",[
  ["La ideología","Funciona como falsa conciencia que presenta los intereses de una clase como universales."],
  ["Transformar el mundo","«Los filósofos no han hecho más que interpretar de diversos modos el mundo; de lo que se trata es de transformarlo» (Tesis XI sobre Feuerbach)."]]]],
 obras:{"Manifiesto comunista (con Engels)":"1848. Programa de la Liga de los Comunistas: lucha de clases y revolución.",
  "El capital":"Primer tomo publicado en 1867; los otros dos los editó Engels tras su muerte.",
  "Manuscritos económico-filosóficos":"Escritos en 1844 y publicados hasta 1932: el concepto de alienación.",
  "La ideología alemana":"Escrita con Engels en 1845–1846: primera exposición del materialismo histórico."}},

freire:{temas:[
 ["La educación bancaria","Freire critica la educación tradicional con una imagen célebre.",[
  ["Depositar saberes","El educador «deposita» contenidos y el educando los recibe, memoriza y repite, como en una cuenta bancaria."],
  ["Una relación vertical","El maestro sabe y el alumno no; el maestro habla y el alumno escucha. Esa educación domestica y adapta a las personas a la opresión."]]],
 ["La educación problematizadora","Su alternativa es una educación dialógica y liberadora.",[
  ["El diálogo","«Nadie educa a nadie, nadie se educa a sí mismo: los hombres se educan entre sí, mediatizados por el mundo»."],
  ["Educador-educando","Maestro y alumno aprenden juntos; ambos son sujetos del proceso educativo."],
  ["Problematizar la realidad","Se parte de los problemas de la vida de los educandos para pensarlos críticamente."]]],
 ["La concientización","El objetivo de la educación es que las personas comprendan y transformen su realidad.",[
  ["De la conciencia ingenua a la crítica","Se pasa de aceptar la realidad como algo dado a entender sus causas."],
  ["La praxis","Reflexión y acción sobre el mundo para transformarlo; una sin la otra se queda en palabrería o en activismo."]]],
 ["El método de alfabetización","Aprender a leer la palabra es aprender a leer el mundo.",[
  ["Palabras generadoras","Se investiga el vocabulario de la comunidad y se eligen palabras cargadas de sentido para ella, como «ladrillo» para albañiles, que se dividen en sílabas para formar otras."],
  ["Círculos de cultura","En lugar de escuelas con maestros y alumnos, grupos de diálogo con un coordinador."],
  ["Angicos, 1963","En esta localidad de Brasil unos 300 trabajadores aprendieron a leer y escribir en pocas semanas. La experiencia se volvió referencia mundial."]]],
 ["Oprimidos y opresores","La Pedagogía del oprimido analiza la relación de dominación.",[
  ["El opresor alojado en el oprimido","El oprimido interioriza la visión del opresor y muchas veces aspira a ocupar su lugar."],
  ["Liberación de ambos","La liberación no consiste en invertir los papeles, sino en humanizar a oprimidos y opresores."]]],
 ["Ética y saberes docentes","En sus últimos libros reflexiona sobre la práctica del maestro.",[
  ["Enseñar no es transferir conocimiento","Es crear las posibilidades para que el alumno lo produzca o construya (Pedagogía de la autonomía)."],
  ["Respeto y curiosidad","Enseñar exige respetar los saberes de los educandos, despertar la curiosidad y reconocer que somos seres inacabados."],
  ["La esperanza","La esperanza es una necesidad ontológica, pero necesita la práctica para hacerse historia (Pedagogía de la esperanza)."]]]],
 obras:{"Pedagogía del oprimido":"Escrita en el exilio en Chile (1968) y publicada en 1970. Su obra más difundida en el mundo.",
  "La educación como práctica de la libertad":"1967. Expone su método de alfabetización y la concientización.",
  "Pedagogía de la autonomía":"1996. Los saberes necesarios para la práctica educativa.",
  "Pedagogía de la esperanza":"1992. Relectura de la Pedagogía del oprimido veinte años después."}}
};
