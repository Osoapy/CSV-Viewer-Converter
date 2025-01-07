function convertTabsToCommas() {
    // Get the input value from CodeMirror editor
    const inputText = inputEditor.getValue();  // Usando o editor inputEditor

    // Get the output value from CodeMirror editor
    let outputText = outputEditor.getValue();  // Usando o editor outputEditor

    // Determina qual editor usar como base
    const sourceText = inputText  !== '' ? inputText : outputText;
    
    // Split the text into lines
    const lines = sourceText.split('\n');

    // Process each line to replace tabs with commas and remove trailing commas
    const convertedLines = lines.map(line => {
        // Replace tabs with commas
        line = line.replace(/\t/g, ',');
        // Remove trailing commas
        return line.replace(/,+$/, '');
    });

    // Join the lines back together
    const convertedText = convertedLines.join('\n');

    // Set the converted text back into the output editor
    outputEditor.setValue(convertedText);
}