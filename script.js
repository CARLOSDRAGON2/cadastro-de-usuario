const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    const usuario = document.getElementById('login').value;
    const tr = document.createElement('tr');
    const td1 = document.createElement('th');
    const td2 = document.createElement('td');
    td1.textContent = 'Nome';
    td2.textContent = usuario;
    tr.appendChild(td1);
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    const excluir = document.createElement('button');
    excluir.textContent = 'Excluir';
    excluir.addEventListener('click', () => {
        tr.remove();
    });
    td3.appendChild(excluir);
    tr.appendChild(td3);
    const tabela = document.querySelector('table');
    tabela.appendChild(tr);
    
});
botao.addEventListener('click', () => {
    const usuario = document.getElementById('senha').value;
    const tr = document.createElement('tr');
    const td1 = document.createElement('th');
    const td2 = document.createElement('td');
    td1.textContent = 'Senha';
    td2.textContent = usuario;
    tr.appendChild(td1);
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    const excluir = document.createElement('button');
    excluir.textContent = 'Excluir';
    excluir.addEventListener('click', () => {
        tr.remove();
    });
    td3.appendChild(excluir);
    tr.appendChild(td3);
    const tabela = document.querySelector('table');
    tabela.appendChild(tr);
    
});
botao.addEventListener('click', () => {
    const usuario = document.getElementById('data').value;
    const tr = document.createElement('tr');
    const td1 = document.createElement('th');
    const td2 = document.createElement('td');
    td1.textContent = 'Data';
    td2.textContent = usuario;
    tr.appendChild(td1);
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    const excluir = document.createElement('button');
    excluir.textContent = 'Excluir';
    excluir.addEventListener('click', () => {
        tr.remove();
    });
    td3.appendChild(excluir);
    tr.appendChild(td3);
    const tabela = document.querySelector('table');
    tabela.appendChild(tr);
    
});
botao.addEventListener('click', () => {
    const usuario = document.getElementById('telefone').value;
    const tr = document.createElement('tr');
    const td1 = document.createElement('th');
    const td2 = document.createElement('td');
    td1.textContent = 'Telefone';
    td2.textContent = usuario;
    tr.appendChild(td1);
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    const excluir = document.createElement('button');
    excluir.textContent = 'Excluir';
    excluir.addEventListener('click', () => {
        tr.remove();
    });
    td3.appendChild(excluir);
    tr.appendChild(td3);
    const tabela = document.querySelector('table');
    tabela.appendChild(tr);
    
});
botao.addEventListener('click', () => {
    const usuario = document.getElementById('email').value;
    const tr = document.createElement('tr');
    const td1 = document.createElement('th');
    const td2 = document.createElement('td');
    td1.textContent = 'E-mail';
    td2.textContent = usuario;
    tr.appendChild(td1);
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    const excluir = document.createElement('button');
    excluir.textContent = 'Excluir';
    excluir.addEventListener('click', () => {
        tr.remove();
    });
    td3.appendChild(excluir);
    tr.appendChild(td3);
    const tabela = document.querySelector('table');
    tabela.appendChild(tr);
    
});
 function mostra(el) {
    document.getElementById(el).style.display = 'flex';    
}