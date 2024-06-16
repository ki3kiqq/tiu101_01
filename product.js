document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const counter = document.getElementById('counter');
    
    decrementButton.addEventListener('click', () => {
        let value = parseInt(counter.textContent, 10);
        value = value > 0 ? value - 1 : 0; // Ensure the value does not go below 0
        counter.textContent = value;
    });
    
    incrementButton.addEventListener('click', () => {
        let value = parseInt(counter.textContent, 10);
        counter.textContent = value + 1;
    });
});
