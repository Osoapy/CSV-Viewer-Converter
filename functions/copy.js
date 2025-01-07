function copyToClipboard() {
    // Get the output value from CodeMirror editor
    let outputText = outputEditor.getValue();  // Usando o editor outputEditor

    // Usando a API de Clipboard moderna para copiar
    navigator.clipboard.writeText(outputText).then(function() {
        alert("O texto foi copiado para sua área de transferência!");
    }).catch(function(err) {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });
}