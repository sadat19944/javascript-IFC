"use strict";
// --------------------------DOM-------------------------------------
// Document Objet Model
const h = document.createElement("header");
/* je fais appelle a la méthode (fonction)
createElement de l'objet document celle ci prendra le nom d'une balise html en argument.  */
console.log(h);
/* on obtien un objet "balise header" qui contient de propriété et méthode
 celles ci sont accessible de la méme facon que n'importe quel objet js. */
 const m = document.createElement("main");
 const f = document.createElement("footer");
 h.innerHTML = "<h1> super site en js<h1>"
// Sans utiliser create Element , on a modifié le HTML de notre header avec innerHTML
 console.log(h);
 f.innerHTML = "<ul><li>MENU 1</li><li>MENU 2 </li><li>MENU 3</li></ul>";
 console.log(f);

 for(let i = 0 ; i<5; i++){
    // a chaque itération de notre boucle, on creé un nouveau p
    const p = document.createElement("p");
    // on lui ajout notre texte
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    m.appendChild(p);
 }
 console.log(m);
console.log(document.body);
if(document.body){
    document.body.append(h,m,f);
}