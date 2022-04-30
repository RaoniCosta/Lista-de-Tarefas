const input = document.getElementById('input-text');
const myList = document.getElementById('lista-tarefas');
const adicionaBtn = document.getElementById('adiciona-btn');
const removeBtn = document.getElementById('remove-btn');
const editarBtn = document.getElementById('editar-btn');
const sairBtn = document.getElementById('sair-btn');
const classLista = document.getElementsByClassName('classLista');
const sairACabou = document.querySelector('.boa-sorte');
const tarefa = document.querySelector('.tarefa');
const destruction = document.querySelector('.destruction');

const myJson = {
    primeTarefa: {
        priorizar: 'Visitar a Mãe',
        irrelevante: 'Assistir TV'
    },
    secondTarefa: {
        priorizar: 'Visitar o Pai',
        irrelevante: 'jogar videogame'
    }
}

function requisicao() {
  let listItem = document.createElement('li');
  listItem.className = 'classLista';
  myList.appendChild(listItem);
  listItem.innerText = myJson.primeTarefa.priorizar;
  let listItemtwo = document.createElement('li');
  listItemtwo.className = 'classLista';
  myList.appendChild(listItemtwo);
  listItemtwo.innerText = myJson.primeTarefa.irrelevante;
  let listItemThree = document.createElement('li');
  listItemThree.className = 'classLista';
  myList.appendChild(listItemThree);
  listItemThree.innerText = myJson.secondTarefa.priorizar;
  let listItemFour = document.createElement('li');
  listItemFour.className = 'classLista';
  myList.appendChild(listItemFour);
  listItemFour.innerText = myJson.secondTarefa.irrelevante;
}

requisicao();

function addTarefa() {
  let listItem = document.createElement('li');
  listItem.innerText = input.value;
  listItem.className = 'classLista';
  myList.appendChild(listItem);
  input.value = '';
};

adicionaBtn.addEventListener('click', addTarefa);

function removeLista() {
    if (classLista.length > 0) {
        document.getElementById('lista-tarefas').innerHTML = '';
    }
  }
  
removeBtn.addEventListener('click', removeLista);

function Tarefa() {
    for (let i = 0; i < classLista.length; i += 1) {
       let li = document.getElementsByClassName('classLista')[i];
       console.log(li);
      }

}

editarBtn.addEventListener('click', function onClickEdit(e){
    function selectList(event) {
        for (let i = 0; i < classLista.length; i += 1) {
          document.getElementsByClassName('classLista')[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
        let li = document.querySelector('.selected');
        if(li.classList.contains("selected")) {
            input.value = li.innerText;
            li.remove();  
        }
        
      };
    document.getElementById('lista-tarefas').addEventListener('click', selectList);
})

sairBtn.addEventListener("click", function onClick(e) {
    destruction.innerHTML = 'Boa-sorte. Volte logo', destruction.style.fontSize = '40px';
    
});