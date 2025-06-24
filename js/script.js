//Masks
$("#inputTelefone").mask("(00) 00000-0000");


var alunos = [
  {
    id: 1,
    name: "Ana Silva",
    email: "ana.silva@email.com",
    telefone: "11999999999",
    curso: 1,
    turno: "Manhã",
  },
  {
    id: 2,
    name: "Bruno Souza",
    email: "bruno.souza@email.com",
    telefone: "11988888888",
    curso: 1,
    turno: "Noite",
  },
  {
    id: 3,
    name: "Carla Pereira",
    email: "carla.pereira@email.com",
    telefone: "11977777777",
    curso: 2,
    turno: "Tarde",
  },
  {
    id: 4,
    name: "Diego Costa",
    email: "diego.costa@email.com",
    telefone: "11966666666",
    curso: 3,
    turno: "Manhã",
  },
];

var cursos = [
  {
    id: 1,
    nome: "Java",
  },
  {
    id: 2,
    nome: "Angular",
  },
  {
    id: 3,
    nome: "HTML",
  },
];


//save
function save(){
    console.log(document.getElementById("selectCurso").value);
    var alun ={
        id: alunos.length + 1,
        name: document.getElementById("inputNome").value,
        email: document.getElementById("inputEmail").value,
        telefone: document.getElementById("inputTelefone").value,
        curso: document.getElementById("selectCurso").value,
        turno: document.querySelector("input[name='turnoRadios']:checked").value

    }
    addNewRow(alun);
    alunos.push(alun);
    document.getElementById("formAlunos").reset();
}


//on load
loadAlunos();

function loadAlunos(){
    for( let alu of alunos){
        addNewRow(alu);
    }
}


function addNewRow(alu) {
    var table = document.getElementById("alunosTable");

    var row = table.insertRow();

    //insert id
    var idNode = document.createTextNode(alu.id);
    row.insertCell().appendChild(idNode);

    //insert nome
    var nameNode = document.createTextNode(alu.name);
    row.insertCell().appendChild(nameNode);

    //insert email
    var emailNode = document.createTextNode(alu.email);
    var emailCell = row.insertCell();
    emailCell.className="d-none d-md-table-cell";
    emailCell.appendChild(emailNode);

    //insert telefone
    var telefoneNode = document.createTextNode(alu.telefone);
    var telefoneCell = row.insertCell();
    telefoneCell.className="d-none d-md-table-cell";
    telefoneCell.appendChild(telefoneNode);

    //insert curso
    var cursoNode = document.createTextNode( cursos[alu.curso - 1].nome );
    var cursoCell = row.insertCell();
    cursoCell.className="d-none d-md-table-cell";
    cursoCell.appendChild(cursoNode);

    //insert turno
    var turnoNode = document.createTextNode(alu.turno);
    var turnoCell = row.insertCell();
    turnoCell.className="d-none d-md-table-cell";
    turnoCell.appendChild(turnoNode);
}