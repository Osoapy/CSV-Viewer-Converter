function convertToSQLInsert() {
    // Obter os valores do editor de entrada (inputEditor)
    const inputText = inputEditor.getValue();  // Usando o editor inputEditor
    const lines = inputText.split('\n');  // Dividindo o texto em linhas

    if (lines.length < 2) {
        alert('Por favor, forneça pelo menos duas linhas: uma para colunas e outras para valores.');
        return;
    }

    // Obter a primeira linha (colunas)
    const columns = lines[0].split(',').map(col => col.trim());
    
    // Perguntar ao usuário qual tabela será utilizada
    const tableName = prompt('Digite o nome da tabela:', 'TA110');

    if (!tableName) {
        alert('Tabela não fornecida.');
        return;
    }

    // Variável para armazenar todos os inserts gerados
    let sqlInserts = '';

    // Iterar sobre as linhas de dados (ignorando a primeira linha de colunas)
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(val => val.trim());
        
        // Criar a string de colunas e valores para a instrução SQL
        const columnsString = columns.join(', ');
        const valuesString = values.map(val => `'${val}'`).join(', ');

        // Criar a instrução SQL
        const sqlInsert = `INSERT INTO ${tableName} (${columnsString}) VALUES (${valuesString});\n`;
        
        // Adicionar ao resultado
        sqlInserts += sqlInsert;
    }

    // Definir o resultado no outputEditor
    outputEditor.setValue(sqlInserts);
}