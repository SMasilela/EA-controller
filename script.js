const io = require('socket.io-client')
    

    const socket = io('http://localhost:3000')
    const buyButton = document.getElementById('buyButton');
    const sellButton = document.getElementById('sellButton');
    const closeAllButton = document.getElementById('closeAllButton');
    const numericInput = document.getElementById('numericInput');
    const resultSpan = document.getElementById('result');

    

    let result = "";

    function updateResult(newValue) {
        result = newValue;
        resultSpan.textContent = result;
    }


    buyButton.addEventListener('click', function() {
        const inputValue = numericInput.value;
    });

    sellButton.addEventListener('click', function() {
        const inputValue = numericInput.value;
    });

    closeAllButton.addEventListener('click', function() {
        const inputValue = numericInput.value;
    });
});
