// Pega os elementos da tela uma única vez
const btn = document.getElementById("analisar-btn");
const resultadoDiv = document.getElementById("resultado");
const textoPerfil = document.getElementById("texto-perfil");
const inputs = document.querySelectorAll(".form-box input");

// Adiciona o evento de clique ao botão
btn.addEventListener("click", analisarPerfil);

function analisarPerfil() {
    // Se o resultado já estiver visível, o clique significa "resetar"
    if (!resultadoDiv.classList.contains("hidden")) {
        // Limpa todos os campos de input
        inputs.forEach(input => {
            input.value = "";
        });

        resultadoDiv.classList.add("hidden"); // Esconde o resultado
        formBox.classList.remove("hidden"); // Mostra o formulário novamente
        btn.innerText = "Descobrir Meu Perfil"; // Restaura o texto do botão
        return; // Para a execução da função aqui
    }

    const respostasArray = [];
    let todosPreenchidos = true;

    // Itera sobre os inputs para pegar os valores e validar
    inputs.forEach(input => {
        if (!input.value) {
            todosPreenchidos = false;
        }
        respostasArray.push(input.value);
    });

    if (!todosPreenchidos) {
        alert("Por favor, preencha todas as perguntas!");
        return;
    }

    btn.innerText = "A 7Q está pensando...";
    btn.disabled = true;

    setTimeout(() => {
        // TODO: Substituir este bloco pela chamada real à API da IA
        const respostasFormatadas = respostasArray.map((resposta, index) => `${index + 1}. ${resposta}`).join('\n');
        
        // Exemplo de como seria a análise fictícia
        const perfilFicticio = "✨ Você é um EXPLORADOR NATO! ✨\n\nSua mente busca novidades e você não tem medo de arriscar. As pessoas admiram sua coragem, mas cuidado para não esquecer de descansar.\n\nSuas respostas:\n" + respostasFormatadas;

        // Mostra o resultado
        textoPerfil.innerText = perfilFicticio;
        resultadoDiv.classList.remove("hidden");
        
        btn.innerText = "Descobrir Novamente";
        btn.disabled = false;
    }, 2000);
}