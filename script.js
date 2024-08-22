    import { io } from 'socket.io-client'

    const socket = io('http://localhost:3000')
    
    const buyButton = document.getElementById('buyButton');
    const sellButton = document.getElementById('sellButton');
    const closeAllButton = document.getElementById('closeAllButton');
    const numericInput = document.getElementById('numericInput');
    const resultSpan = document.getElementById('result');

    const ws = new WebSocket('ws://localhost:8082');
    ws.addEventListener('open', ()=>{
        console.log('We are connected!');
    })

    let result = "";

    function updateResult(newValue) {
        result = newValue;
        resultSpan.textContent = result;
    }


    buyButton.addEventListener('click', function() {
        const inputValue = numericInput.value;
        /*if (!isNaN(inputValue)) {
            fetch(BASE_URL+"?type=cwrite&command="+inputValue+"_buy")
			.then(res=>res.json())
            .then(pos=>{
                console.log(pos);
                result=pos;
            })
			.then(data=>{
				data.forEach(dt => {
					elemnt.insertAdjacentHTML("beforeend","<option value='"+dt.login+"'>"+dt.login+"</option>");
				});
            updateResult(result);
        }*/
    });

    sellButton.addEventListener('click', function() {
        const inputValue = numericInput.value;
        /*if (!isNaN(inputValue)) {
            fetch(BASE_URL+"?type=cwrite&command="+inputValue+"_sell","content-type:application/json")
			.then(res=>res.json())
            .finally(pos=>{
                result=pos;
            })
			.then(data=>{
				data.forEach(dt => {
					elemnt.insertAdjacentHTML("beforeend","<option value='"+dt.login+"'>"+dt.login+"</option>");
				});
            updateResult(result);
        }*/
    });

    closeAllButton.addEventListener('click', function() {
        const inputValue = numericInput.value;
        /*if (!isNaN(inputValue)) {
            fetch(BASE_URL+"?type=cwrite&command="+inputValue+"_closeall","content-type:application/json")
			.then(res=>res.json())
            .finally(pos=>{
                result=pos;
            })
			.then(data=>{
				data.forEach(dt => {
					elemnt.insertAdjacentHTML("beforeend","<option value='"+dt.login+"'>"+dt.login+"</option>");
				});
            updateResult(result);
        }*/
    });

