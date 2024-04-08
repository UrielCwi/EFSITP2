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
        fechaAñadida: new Date(),
        fechaTachado: null,
    }
   // Lista += Lista2;
   Lista.push(objeto);
   CrearLista();
   iterador++;
}

function MostrarMasRapido(){
    for (let index = 0; index < Lista.length; index++) {
            if(Lista[index].fechaTachado != null) {
            resta = (Lista[index].fechaTachado - Lista[index].fechaAñadida);
            if(fechaRapida == null && resta != null || resta < fechaRapida) { //si tienen fecha de tachado Y es mas rapido que el mas rapido de los anteriores, entonces remplazarlo
                fechaRapida = resta;
                nombreTarea = Lista[index].informacion;
            }
        }   
    }         //si NO tiene fecha de tachado, entonces no cambiar nada
    if (fechaRapida != null) {
        document.getElementById("Fecha").innerHTML = "La tarea completada mas rapidamente fue " + nombreTarea + " con " + fechaRapida + " milisegundos";
    }
    else {
        document.getElementById("Fecha").innerHTML = "No hay tareas completadas";
    }
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
        ListaHTML += '<li><del>' + item.informacion + '</del></li> <li>Fecha Añadido:' + item.fechaAñadida + '</li> <li>Fecha Tachado:' + item.fechaTachado + '</li>'  
    }
    else{
        ListaHTML += '<input type="checkbox" onclick="Tachado(' + item.id + ')"></input> <li>' + item.informacion + '</li> <li>Fecha Añadido:' + item.fechaAñadida + '</li>'
    }
}

function Tachado(id) {
    Lista[id - 1].tachado = true;
    Lista[id - 1].fechaTachado = new Date();
    CrearLista();
}
