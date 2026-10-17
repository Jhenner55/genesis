// Pensamiento de frontera: psicología profunda (Freud y Jung)
P.push(
 {id:"freud",n:"Sigmund Freud",g:"Sigmund Freud",l:"de",en:"Sigmund Freud",y:1856,d:"1856 – 1939",e:"con",s:"Psicoanálisis",
  b:"Médico vienés, fundador del psicoanálisis. En su juventud asistió a los cursos de Brentano. Sostuvo que buena parte de la vida psíquica es inconsciente y que los deseos reprimidos reaparecen en los sueños, los lapsus y los síntomas. En 1938 huyó del nazismo a Londres, donde murió al año siguiente.",
  o:["La interpretación de los sueños","Tres ensayos sobre teoría sexual","Más allá del principio de placer","El yo y el ello","El porvenir de una ilusión","El malestar en la cultura"]},
 {id:"jung",n:"Carl Gustav Jung",g:"Carl Gustav Jung",l:"de",en:"Carl Jung",y:1875,d:"1875 – 1961",e:"con",s:"Psicología analítica",
  b:"Psiquiatra suizo. Entre 1907 y 1913 fue el colaborador más cercano de Freud, que lo veía como su heredero, hasta que rompieron por sus diferencias sobre la libido y la religión. Fundó la psicología analítica y propuso el inconsciente colectivo, los arquetipos y el proceso de individuación. Estudió mitos, alquimia y textos de Oriente.",
  o:["Símbolos de transformación","Tipos psicológicos","Los arquetipos y lo inconsciente colectivo","Psicología y alquimia","Respuesta a Job","Recuerdos, sueños, pensamientos"]}
);
E.push(
 ["brentano","freud","m"],["schopenhauer","freud","i"],["nietzsche","freud","i"],
 ["freud","jung","m"],["freud","jung","c"],
 ["kant","jung","i"],["schopenhauer","jung","i"],["nietzsche","jung","i"],["laozi","jung","i"],
 ["freud","marcuse","i"],["freud","ricoeur","i"]
);
Object.assign(RAMA_DE,{freud:"mn re es",jung:"mn re es"});
Object.assign(ALIAS,{freud:["Freud","Sigmund Freud"],jung:["Jung","Carl Jung","C. G. Jung"]});
Object.assign(ESENCIA,{
 freud:["¿Qué fuerzas ocultas mueven nuestra vida psíquica?","Describió el inconsciente como una fuerza activa: deseos reprimidos que se expresan en sueños, lapsus y síntomas. Creó el psicoanálisis para interpretarlos.","Ricoeur lo llamó «maestro de la sospecha» junto con Marx y Nietzsche; marcó la filosofía de la mente, la teoría crítica y la hermenéutica."],
 jung:["¿Qué imágenes compartidas habitan en lo profundo del alma humana?","Propuso un inconsciente colectivo poblado de arquetipos y entendió la vida como un proceso de individuación hacia la totalidad de la persona.","Influyó en el estudio de los mitos, las religiones y el arte, y abrió un diálogo entre la psicología occidental y el pensamiento de Oriente."]
});
CITAS.freud=["El yo no es dueño en su propia casa.","Una dificultad del psicoanálisis (1917)"];
CITAS.jung=["Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta.","Carta a Fanny Bowditch (1916)"];
HISTORIAS.jung="Tras romper con Freud en 1913 vivió una crisis profunda, que llamó su «confrontación con el inconsciente». Durante años registró sus visiones en un gran libro ilustrado a mano, el Libro rojo, que permaneció inédito hasta 2009.";
CONCEPTOS.push({id:"inconsciente",n:"El inconsciente",d:"La parte de la vida psíquica que actúa sin que lo sepamos y, aun así, orienta lo que pensamos, sentimos y hacemos.",a:[
 ["schopenhauer","Bajo la conciencia actúa una voluntad ciega que nos impulsa sin que la elijamos."],
 ["nietzsche","La conciencia es apenas la superficie; debajo, los impulsos luchan por imponerse."],
 ["freud","Guarda deseos reprimidos que regresan disfrazados en sueños, lapsus y síntomas."],
 ["jung","Además del personal, existe un inconsciente colectivo con arquetipos comunes a toda la humanidad."],
 ["ricoeur","Interpretar al ser humano exige una «hermenéutica de la sospecha» ante lo que la conciencia cree de sí."]]});
DEBATES.push({id:"inconsciente",h:true,q:"¿Qué mueve al inconsciente: el deseo o el sentido?",ctx:"Colaboraron de 1907 a 1913 y Freud vio en Jung a su heredero. Rompieron tras la publicación de Símbolos de transformación (1912).",
 a:["freud","La libido es energía sexual. El inconsciente guarda deseos reprimidos, y la religión es una ilusión que nace del deseo de protección."],
 b:["jung","La libido es energía psíquica en general. Más allá de lo personal hay un inconsciente colectivo cuyos arquetipos buscan sentido, y lo religioso es una función real del alma."],
 juego:"Si los mitos y la religión son ilusiones que hay que explicar o expresiones de algo verdadero del ser humano."});
