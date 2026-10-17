const RAMAS={et:"Ética",po:"Política y sociedad",co:"Conocimiento",me:"Metafísica",lo:"Lógica y ciencia",mn:"Mente y lenguaje",es:"Estética y cultura",re:"Religión",ed:"Educación"};
const RAMA_DE={
 tales:"me lo",anaximandro:"me lo",anaximenes:"me lo",pitagoras:"me lo re",jenofanes:"re co",heraclito:"me co",parmenides:"me lo",
 zenon_elea:"lo me",meliso:"me",empedocles:"me lo",anaxagoras:"me lo",arquelao:"et me",leucipo:"me lo",democrito:"me et co",
 protagoras:"co et ed",gorgias:"co es ed",socrates:"et co ed",platon:"me co et po es ed",jenofonte:"et po ed",antistenes:"et",
 aristipo:"et",euclides_megara:"lo me et",aristoteles:"lo me et po es mn",teofrasto:"lo et",alejandro:"po",diogenes:"et po",
 crates:"et",zenon_citio:"et lo me",cleantes:"et re",crisipo:"lo et",epicuro:"et me",pirron:"co et",epicteto:"et",
 plotino:"me re es",porfirio:"lo re me",agustin:"re me et po",boecio:"lo re et",avicena:"me lo mn re",anselmo:"re me",
 abelardo:"lo et",averroes:"me re mn",maimonides:"re me et",alberto:"lo me re",tomas:"me re et po",escoto:"me re",ockham:"lo me po",
 maquiavelo:"po",montaigne:"et co ed",bacon:"lo co",hobbes:"po co",descartes:"me co mn",spinoza:"me et po re",locke:"co po mn ed",
 leibniz:"me lo",berkeley:"co me",hume:"co et re mn",rousseau:"po ed et",kant:"co et me es po",bentham:"et po",
 hegel:"me po es re",schopenhauer:"me et es",mill:"et po lo",kierkegaard:"re et",marx:"po",nietzsche:"et es re",comte:"lo po",
 husserl:"co mn",russell:"lo mn co",ortega:"me po es",wittgenstein:"mn lo",heidegger:"me es",popper:"lo po",sartre:"me et po",
 arendt:"po et",beauvoir:"et po",foucault:"po co",benjamin:"es po",gadamer:"co es",adorno:"es po",levinas:"et re",quine:"lo mn",
 weil:"et re po",camus:"et po",morin:"co ed",rawls:"po et",kuhn:"lo",deleuze:"me es",bauman:"po",habermas:"po et",derrida:"mn es",
 rorty:"co po",searle:"mn",agamben:"po",dennett:"mn",singer:"et",nussbaum:"et po ed",zizek:"po",hooks:"ed po",sandel:"po et",
 butler:"po et",han:"po",chalmers:"mn",
 las_casas:"po et re",sor_juana:"co re es",vasconcelos:"ed es po",caso:"et re",mariategui:"po",ramos:"es po",gaos:"me co",zea:"po",
 sanchez_vazquez:"po es et",freire:"ed po",villoro:"co po",dussel:"et po",bello:"ed co po",barreda:"ed lo",marti:"po ed",rodo:"es ed",
 reyes:"es ed",ardao:"po",zambrano:"me es re",paz:"es po",castellanos:"et es"
};
// Nombres con que se busca a cada autor dentro de tus PDF (sensible a mayúsculas)
const ALIAS={
 tales:["Tales","Thales"],meliso:["Meliso","Melissus"],zenon_elea:["Zenón de Elea","Zeno of Elea"],aristipo:["Aristipo","Aristippus"],
 euclides_megara:["Euclides de Mégara","Euclid of Megara"],diogenes:["Diógenes de Sinope","Diógenes el Cínico","Diogenes of Sinope"],
 crates:["Crates"],zenon_citio:["Zenón de Citio","Zeno of Citium"],pirron:["Pirrón","Pyrrho"],porfirio:["Porfirio de Tiro","Porphyry"],
 agustin:["Agustín","Augustine","Augustinus"],anselmo:["Anselmo","Anselm"],tomas:["Tomás de Aquino","Aquino","Aquinas"],
 escoto:["Escoto","Scotus"],ockham:["Ockham","Occam"],alberto:["Alberto Magno","Albertus Magnus"],alejandro:["Alejandro Magno","Alexander the Great"],
 abelardo:["Abelardo","Abelard"],maquiavelo:["Maquiavelo","Machiavelli"],avicena:["Avicena","Avicenna","Ibn Sina","Ibn Sīnā"],
 averroes:["Averroes","Averroes","Ibn Rushd"],boecio:["Boecio","Boethius"],maimonides:["Maimónides","Maimonides"],
 las_casas:["Las Casas"],sor_juana:["Sor Juana"],paz:["Octavio Paz"],bello:["Andrés Bello"],caso:["Antonio Caso"],reyes:["Alfonso Reyes"],
 ramos:["Samuel Ramos"],han:["Byung-Chul Han"],singer:["Peter Singer"],butler:["Judith Butler"],hooks:["bell hooks"],bacon:["Francis Bacon","Bacon"],
 mill:["Stuart Mill"],ortega:["Ortega y Gasset","Ortega"],marti:["José Martí","Martí"],castellanos:["Rosario Castellanos"],
 sanchez_vazquez:["Sánchez Vázquez"],weil:["Simone Weil"],benjamin:["Walter Benjamin"],berkeley:["George Berkeley"],
 levinas:["Levinas","Lévinas"],zizek:["Žižek","Zizek"],beauvoir:["Beauvoir"],rodo:["Rodó"],mariategui:["Mariátegui"]
};
