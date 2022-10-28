const form = document.getElementById('formLogin')

/* form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formulario = e.target;
    const inputs = formulario.querySelector('input');
    const inpustList = Array.from(inputs);
    const values = inpustList.reduce((prev,acc) => {
        prev[acc.name] = acc.value;
        return prev;
    }, {});
}); */

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    console.log(values);
});