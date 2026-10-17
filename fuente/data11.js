// Lote 1: autores que cerraban huecos en la red
P.push(
 {id:"seneca",n:"Séneca",g:"Lucius Annaeus Seneca",l:"la",en:"Seneca",y:-4,d:"c. 4 a.C. – 65 d.C.",e:"imp",s:"Estoicismo romano",
  b:"Nacido en Córdoba, fue preceptor y consejero del emperador Nerón. Escribió tratados y cartas sobre la brevedad de la vida, la ira y la serenidad del ánimo. Acusado de participar en una conspiración, Nerón le ordenó quitarse la vida.",
  o:["Cartas a Lucilio","Sobre la brevedad de la vida","Sobre la ira","Sobre la tranquilidad del ánimo"]},
 {id:"marco_aurelio",n:"Marco Aurelio",g:"Marcus Aurelius",l:"la",en:"Marcus Aurelius",y:121,d:"121 – 180 d.C.",e:"imp",s:"Estoicismo romano",
  b:"Emperador romano entre 161 y 180. Durante sus campañas militares escribió en griego unas notas para sí mismo, conocidas como Meditaciones: un ejercicio estoico de examen de conciencia y de serenidad ante el poder, el dolor y la muerte.",
  o:["Meditaciones"]},
 {id:"algacel",n:"Algacel",g:"Abū Ḥāmid al-Ghazālī",l:"ar-Latn",en:"Al-Ghazali",y:1058,d:"1058 – 1111",e:"med",s:"Teología y mística islámica",
  b:"Teólogo y jurista persa, profesor en Bagdad. En La incoherencia de los filósofos criticó a Avicena y a los aristotélicos, y negó que la relación entre causa y efecto sea necesaria. Tras una profunda crisis espiritual abrazó el sufismo.",
  o:["La incoherencia de los filósofos","Las intenciones de los filósofos","El salvador del error","La revivificación de las ciencias religiosas"]},
 {id:"feuerbach",n:"Ludwig Feuerbach",g:"Ludwig Feuerbach",l:"de",en:"Feuerbach",y:1804,d:"1804 – 1872",e:"s19",s:"Izquierda hegeliana",
  b:"Estudió con Hegel en Berlín y después rompió con él. En La esencia del cristianismo sostuvo que Dios es la proyección de la esencia humana: la teología es, en el fondo, antropología. Su materialismo influyó decisivamente en el joven Marx.",
  o:["La esencia del cristianismo","Principios de la filosofía del futuro","Tesis provisionales para la reforma de la filosofía"]},
 {id:"engels",n:"Friedrich Engels",g:"Friedrich Engels",l:"de",en:"Friedrich Engels",y:1820,d:"1820 – 1895",e:"s19",s:"Materialismo histórico",
  b:"Hijo de un industrial textil, conoció de cerca la miseria obrera en Mánchester. Fue colaborador y amigo de Marx, con quien escribió el Manifiesto comunista, y tras su muerte editó los tomos II y III de El capital.",
  o:["La situación de la clase obrera en Inglaterra","Manifiesto comunista (con Marx)","Anti-Dühring","El origen de la familia, la propiedad privada y el Estado"]},
 {id:"brentano",n:"Franz Brentano",g:"Franz Brentano",l:"de",en:"Franz Brentano",y:1838,d:"1838 – 1917",e:"s19",s:"Psicología descriptiva",
  b:"Sacerdote y después profesor en Viena. Recuperó la noción escolástica de intencionalidad: todo fenómeno psíquico se dirige a un objeto. Entre sus alumnos estuvieron Husserl y Freud, y su tesis sobre el ser en Aristóteles despertó la pregunta de Heidegger.",
  o:["La psicología desde el punto de vista empírico","Sobre los múltiples significados del ente según Aristóteles"]},
 {id:"frege",n:"Gottlob Frege",g:"Gottlob Frege",l:"de",en:"Gottlob Frege",y:1848,d:"1848 – 1925",e:"s19",s:"Lógica y filosofía del lenguaje",
  b:"Matemático de la Universidad de Jena. Creó la lógica de predicados moderna con su Conceptografía (1879) e intentó fundar la aritmética en la lógica. Distinguió entre el sentido y la referencia de las expresiones. En 1902 una carta de Russell le mostró una paradoja en su sistema.",
  o:["Conceptografía","Los fundamentos de la aritmética","Sobre sentido y referencia"]},
 {id:"bergson",n:"Henri Bergson",g:"Henri Bergson",l:"fr",en:"Henri Bergson",y:1859,d:"1859 – 1941",e:"con",s:"Filosofía de la duración",
  b:"Profesor en el Collège de France y el filósofo más célebre de su tiempo. Distinguió el tiempo vivido, la duración, del tiempo medido por la física, y defendió la intuición y el impulso vital (élan vital) frente al mecanicismo. Recibió el Premio Nobel de Literatura en 1927.",
  o:["Ensayo sobre los datos inmediatos de la conciencia","Materia y memoria","La evolución creadora","Las dos fuentes de la moral y de la religión"]},
 {id:"jaspers",n:"Karl Jaspers",g:"Karl Jaspers",l:"de",en:"Karl Jaspers",y:1883,d:"1883 – 1969",e:"con",s:"Filosofía de la existencia",
  b:"Psiquiatra antes que filósofo. Pensó las «situaciones límite», como la muerte, el sufrimiento o la culpa, en las que la existencia se descubre a sí misma. Dirigió la tesis de Hannah Arendt sobre san Agustín y propuso la idea de un «tiempo eje» en la historia de las civilizaciones.",
  o:["Psicopatología general","Filosofía","La cuestión de la culpa","Origen y meta de la historia"]},
 {id:"horkheimer",n:"Max Horkheimer",g:"Max Horkheimer",l:"de",en:"Max Horkheimer",y:1895,d:"1895 – 1973",e:"con",s:"Escuela de Fráncfort",
  b:"Director desde 1930 del Instituto de Investigación Social de Fráncfort. Formuló el programa de la teoría crítica frente a la «teoría tradicional» y, en el exilio en Estados Unidos, escribió con Adorno Dialéctica de la Ilustración.",
  o:["Teoría tradicional y teoría crítica","Dialéctica de la Ilustración (con Adorno)","Crítica de la razón instrumental"]}
);
E.push(
 ["brentano","husserl","m"],["jaspers","arendt","m"],["hegel","feuerbach","m"],
 ["crisipo","seneca","i"],["epicuro","seneca","i"],["seneca","montaigne","i"],["epicteto","marco_aurelio","i"],["seneca","marco_aurelio","i"],
 ["avicena","algacel","c"],["algacel","averroes","c"],
 ["feuerbach","marx","i"],["feuerbach","engels","i"],["hegel","engels","i"],["engels","marx","i"],
 ["aristoteles","brentano","i"],["tomas","brentano","i"],["brentano","heidegger","i"],
 ["leibniz","frege","i"],["frege","russell","i"],["frege","wittgenstein","i"],["husserl","frege","c"],
 ["plotino","bergson","i"],["bergson","caso","i"],["bergson","vasconcelos","i"],["bergson","ortega","i"],["bergson","deleuze","i"],
 ["kierkegaard","jaspers","i"],["nietzsche","jaspers","i"],["kant","jaspers","i"],
 ["hegel","horkheimer","i"],["marx","horkheimer","i"],["horkheimer","adorno","i"]
);
Object.assign(RAMA_DE,{seneca:"et po",marco_aurelio:"et",algacel:"re co me",feuerbach:"re po me",engels:"po",brentano:"mn co",frege:"lo mn",bergson:"me co",jaspers:"me et po",horkheimer:"po co"});
Object.assign(ALIAS,{marco_aurelio:["Marco Aurelio","Marcus Aurelius"],algacel:["Algacel","Algazel","al-Ghazali","Al-Ghazali","Ghazali"],seneca:["Séneca","Seneca"]});
Object.assign(ESENCIA,{
 seneca:["¿Cómo vivir bien una vida breve, sin miedo a la muerte?","Llevó la ética estoica a la vida práctica con cartas y tratados sobre el tiempo, las pasiones y la muerte.","Fue el estoico más leído en Occidente: influyó en los Padres de la Iglesia, en Montaigne y en el humanismo renacentista."],
 marco_aurelio:["¿Cómo gobernarse a uno mismo cuando se gobierna un imperio?","Sus Meditaciones son el testimonio más íntimo del estoicismo como práctica diaria de examen y serenidad.","Muestra la filosofía como forma de vida; sus Meditaciones son uno de los libros de filosofía más leídos de la historia."],
 algacel:["¿Pueden los filósofos demostrar lo que afirman sobre Dios y el mundo?","Criticó la filosofía aristotélica de Avicena y sostuvo que la conexión entre causa y efecto no es necesaria, sino obra de Dios.","Su crítica de la causalidad anticipa la de Hume; su polémica con Averroes es uno de los grandes debates de la filosofía medieval."],
 feuerbach:["¿Qué es Dios sino la imagen que el ser humano hace de sí mismo?","Invirtió la teología en antropología: Dios es la proyección de las cualidades humanas.","Su crítica de la religión y su materialismo son el puente entre Hegel y Marx."],
 engels:["¿Cómo explicar la historia y la naturaleza desde el materialismo?","Desarrolló con Marx el materialismo histórico y lo extendió a la naturaleza con la dialéctica materialista.","Difundió y sistematizó el marxismo; su versión del materialismo dialéctico marcó al marxismo del siglo XX."],
 brentano:["¿Qué distingue a los fenómenos psíquicos de los físicos?","Recuperó la noción de intencionalidad: todo acto mental se dirige a un objeto.","Su idea de la intencionalidad es el punto de partida de la fenomenología de Husserl; su estudio sobre el ser en Aristóteles despertó la pregunta de Heidegger."],
 frege:["¿Cuáles son los fundamentos lógicos de la aritmética y del significado?","Creó la lógica moderna de predicados y la distinción entre sentido y referencia.","Es el padre de la filosofía analítica: Russell, Wittgenstein y Carnap construyeron sobre su obra."],
 bergson:["¿Qué es el tiempo vivido, a diferencia del tiempo del reloj?","Distinguió la duración vivida del tiempo espacializado de la física y defendió la intuición y el impulso vital frente al mecanicismo.","Fue el filósofo más influyente de su época; marcó al Ateneo mexicano, a Ortega, a la fenomenología francesa y a Deleuze."],
 jaspers:["¿Qué revela la existencia en sus situaciones límite?","Desarrolló una filosofía de la existencia centrada en las situaciones límite y en la comunicación entre personas.","Junto con Heidegger fundó la filosofía de la existencia alemana; formó a Arendt y propuso la idea del «tiempo eje»."],
 horkheimer:["¿Cómo puede la filosofía criticar la sociedad para transformarla?","Formuló el programa de la teoría crítica y, con Adorno, la crítica de la razón instrumental.","Fundó intelectualmente la Escuela de Fráncfort, de la que salieron Adorno, Marcuse y Habermas."]
});
