function excludeLines() {
    // Exibe um prompt para o usuário inserir o texto a ser excluído
    const userInput = prompt("Digite a sequência de caracteres para excluir linhas que a contenham:");

    // Verifica se o usuário cancelou ou deixou o campo vazio
    if (!userInput) {
        alert("Nenhuma sequência fornecida. Operação cancelada.");
        return;
    }

    // Obter o texto do editor de entrada ou saída
    const inputText = inputEditor.getValue();
    const outputText = outputEditor.getValue();

    // Determina qual editor usar como base
    const sourceText = inputText !== '' ? inputText : outputText;

    // Divide o texto em linhas e filtra as que não contêm o texto fornecido
    const filteredLines = sourceText.split('\n').filter(line => !line.includes(userInput));

    // Atualiza o editor de saída com o texto filtrado
    outputEditor.setValue(filteredLines.join('\n'));

    alert(`Linhas contendo "${userInput}" foram excluídas.`);
}
