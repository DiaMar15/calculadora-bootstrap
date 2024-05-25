let expression = '';
let history = [];

// Función para añadir elementos al display con la función append
function appendNumber(num) {
    expression += num;
    console.log('Número añadido:', num);
    console.log('Expresión actual:', expression);
    document.getElementById('display').value = expression;
}

// Función para borrar todo el contenido del display
function clearDisplayAll() {
    expression = '';
    console.log('Display borrado');
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter del display
function clearDisplay() {
    expression = expression.slice(0, -1);
    console.log('Último carácter borrado');
    console.log('Expresión actual:', expression);
    document.getElementById('display').value = expression;
}

// Función para calcular la expresión y mostrar el resultado en el display
function calculate() {
    try {
        const result = eval(expression);
        console.log('Resultado de la evaluación:', result);
        const roundedResult = parseFloat(result.toFixed(2)); // Redondear el resultado a 2 decimales
        const fullExpression = expression + ' = ' + roundedResult; // Operación completa
        console.log('Operación completa:', fullExpression);
        history.push(fullExpression);
        displayHistory();
        expression = ''; // Reiniciar la expresión
        document.getElementById('display').value = ''; // Limpiar el display después de mostrar el resultado
    } catch (error) {
        console.error('Error:', error); // Mostrar mensaje de error en la consola si hay un error en la evaluación
        document.getElementById('display').value = 'Error'; // Mostrar mensaje de error en el display si hay un error en la evaluación
    }
}

// Función para mostrar el historial de operaciones
function displayHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Función para borrar todo el historial
function clearHistory() {
    history = [];
    console.log('Historial borrado');
    displayHistory();
}
