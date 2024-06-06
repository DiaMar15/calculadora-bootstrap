// Variable para almacenar la expresión matemática actual //
let expression = '';

// Variable para almacenar el historial de operaciones //
let history = [];

function appendNumber(num) {
    // Verificar si el número es un punto decimal y si ya existe uno en la expresión //
    if (num === '.' && (expression === '' || expression.slice(-1) === '.' || /[+\-*/]$/.test(expression))) {
        return; // Evitar añadir un punto decimal adicional //
    }
    // Verificar si el número es un punto decimal y si ya hay un número con punto decimal en la expresión //
    if (num === '.' && expression.includes('.')) {
        const lastNumber = expression.split(/[+\-*/]/).pop(); // Obtener el último número en la expresión //
        if (lastNumber.includes('.')) {
            return; // Evitar añadir un punto decimal adicional en el mismo número//
        }
    }
    expression += num;
    console.log('Número añadido:', num);
    console.log('Expresión actual:', expression);
    document.getElementById('display').value = expression;
}

// Función para borrar todo el contenido del display //
function clearDisplayAll() {
    expression = '';
    console.log('Display borrado');
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter de la expresión en el display //
function clearDisplay() {
    expression = expression.slice(0, -1);
    console.log('Último carácter borrado');
    console.log('Expresión actual:', expression);
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        // Verificar si el resultado es NaN o si se divide por cero //
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Error: División por cero o resultado indefinido');
        }
        
        console.log('Resultado de la evaluación:', result);
        // Construir la operación completa para agregar al historial //
        const fullExpression = expression + ' = ' + result;
        console.log('Operación completa:', fullExpression);
        // Agregar la operación completa al historial //
        history.push(fullExpression);
        // Mostrar el historial actualizado //
        displayHistory();
        // Reiniciar la expresión y limpiar el display //
        expression = '';
        document.getElementById('display').value = '';
    } catch (error) {
        console.error('Error:', error);
        // Mostrar un mensaje de error en el display si ocurre una excepción //
        document.getElementById('display').value = 'Error';
        // Limpiar la expresión si ocurre un error //
        expression = '';
    }
}

// Función para mostrar el historial de operaciones en la página //
function displayHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Función para borrar todo el historial de operaciones //
function clearHistory() {
    history = [];
    console.log('Historial borrado');
    // Actualizar la lista de historial en la página //
    displayHistory();
}