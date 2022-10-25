const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fomulario = e.target;
    const inputs = fomulario.querySelectorAll('input');
    const values = Array.from(inputs).map((input) => {
        return {
            [input.name]: input.value
        };
    });
    console.log(values)
});

// document.querySelector('input').addEventListener('change', (e) => {
//     console.log(e.target.value)
// })