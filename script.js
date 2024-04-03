var Lista = []
var Lista2 = [];
var ListaHTML;
var objeto={};
var iterador = 1;
function AgregarTODO(){
    objeto = {
        id: iterador,
        informacion: document.getElementById("informacion").value,
        tachado: false,
        fechaAñadida: Date.now(),
        fechaTachado: null,
    }
   // Lista += Lista2;
   Lista.push(objeto);
    CrearLista();
    iterador++;
}

function CrearLista(){
    ListaHTML = "";
    for (let index = 0; index < Lista.length; index++) {
        Iterar(Lista[index]);
    }
    document.getElementById("Lista").innerHTML = ListaHTML;
}

function Iterar(item){
    if (item.tachado) {
        ListaHTML += '<li><del>' + item.informacion + '</del></li>'
    }
    else{
        ListaHTML += '<input type="checkbox" onclick="Tachado(' + item.id + ')"></input> <li>' + item.informacion + '</li> '
    }
}

function Tachado(id) {
    Lista[id - 1].tachado = true;
    Lista[id - 1].fechaTachado = Date.now();
    CrearLista();
}
