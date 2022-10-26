const div = document.getElementById('test-event');

div.addEventListener('click', (event) => {
    event.preventDefault();
    event.target;
    console.log('Ejecutaste el evento', event);
    
});

/* 
function añadirEvento (eventType, callback){
    // Registra el evento
    callback(evento);
};

añadirEvento('click',(argumento1) => {
    console.log(argumento1);
}) */