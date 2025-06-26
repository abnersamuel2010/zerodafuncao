function calcula(){

    let a = parseFloat(document.getElementById('numero_a').value);
    let b = parseFloat(document.getElementById('numero_b').value);
    let c = parseFloat(document.getElementById('numero_c').value);

    if( a == 0){
        alert("Não é função do 2º grau!");
        return;
    }
    let delta = (b*b)-(4*a*c);
    if( delta < 0){
        document.getElementById('resultado').textContent = "Não tem raiz";
        return;
    }

    if( delta == 0){
        let bhaskara = -b/(2*a);
        document.getElementById('resultado').textContent = 'A única raiz vale: '+bhaskara;
        return;
    }

}    