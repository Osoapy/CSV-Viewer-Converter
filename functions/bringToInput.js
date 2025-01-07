function bringToInput() {
    // Get the output value from CodeMirror editor
    const value = outputEditor.getValue();
    outputEditor.setValue(""); 
    inputEditor.setValue(value);
}