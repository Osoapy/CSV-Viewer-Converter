function convertCommasToComma() {
    // Obter o texto do editor
    const inputText = inputEditor.getValue();
    const outputText = outputEditor.getValue();
    const sourceText = inputText !== '' ? inputText : outputText;

    // Processar as linhas e aplicar as transformações
    const convertedText = sourceText
        .split('\n')
        .map(line => line.replace(/,{2,}/g, ',').replace(/^,/, ''))
        .join('\n');

    // Definir o texto convertido no editor de saída
    outputEditor.setValue(convertedText);
}