// homeWork6. Escribir un programa que almacene una cadena de caracteres (contraseña) en una variable, pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

let password = prompt('Indique aquí su contraseña buena persona: ');
let passwordtry;

do{
    passwordtry = prompt('Su contraseña cual era?');
    if(password!=passwordtry) console.log('No mms esa no es wey... de nuevo');
        else console.log('Very well Mr. Pancho!!')

} while (password!=passwordtry);