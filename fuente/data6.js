// Críticas: [criticado, crítico, "c"] — mismo sentido temporal que la influencia
[["aristoteles","bacon"],["hegel","kierkegaard"],["descartes","dennett"],["descartes","morin"],["rawls","sandel"],
 ["popper","kuhn"],["aristoteles","las_casas"],["barreda","caso"],["hobbes","rousseau"],["dennett","chalmers"]
].forEach(([a,b])=>{ const e=E.find(x=>x[0]===a&&x[1]===b); if(e) e[2]="c"; });
E.push(
 ["platon","popper","c"],["hegel","popper","c"],["marx","popper","c"],["hegel","schopenhauer","c"],
 ["locke","leibniz","c"],["sartre","camus","c"],["heraclito","parmenides","c"],["protagoras","platon","c"],
 ["gorgias","platon","c"],["socrates","nietzsche","c"],["searle","dennett","c"]
);
