var Lista = []
var Lista2 = [];
var ListaHTML;
var objeto={};
var iterador = 1;
let resta = null;
let fechaRapida = null;
let nombreTarea = null;
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

function MostrarMasRapido(){
    for (let index = 0; index < Lista.length; index++) {
        if(fechaTachado != null){
            resta = (fechaAñadida.getTime() - Lista[index].fechaTachado.getTime());
            if(fechaRapida == null || resta < fechaRapida || resta == null) { //si tienen fecha de tachado Y es mas rapido que el mas rapido de los anteriores, entonces remplazarlo
                fechaRapida = resta;
                nombreTarea = Lista[index].informacion.value;
            }
        }
    }         //si NO tiene fecha de tachado, entonces no cambiar nada
}
    //si el numero sigue siendo null, entonces mandar un mensaje de que no hay tareas finalizadas
    //tene cuidado que creo que tenes que cambiar el formato de date.now()

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
