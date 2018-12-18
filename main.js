function abreviarNome(nome, qtdMaximaCaracteresNome = 7, qtdCortarNome = 7) {
    if (nome == "" || nome == undefined || nome == null) return null;
    let nome_explode = nome.trim().split(" ");
    if (nome_explode.length == 0) return null;
    else if (nome_explode[0].length > qtdMaximaCaracteresNome) return nome_explode[0].substr(0, qtdCortarNome) + ".";
    else return nome_explode[0];
}

function abreviarSobrenome(nome, qtdCaracteresSobrenome = 1) {
    if (nome == "" || nome == undefined || nome == null) return null;
    /*Remove monossilabas de nomes tais como: de,da,do,di,dos e das*/
    let monossilabasRemover = ['de', 'da', 'do', 'di', 'dos', 'das'];
    sobrenome_explode = nome.trim().split(" ");
    if (sobrenome_explode.length > 0) {
        let nome_abreviado = '';
        let flag = 0;
        for (let n in sobrenome_explode) {
            if (flag++ == 0) continue;
            let existeMonossilabas = monossilabasRemover.indexOf(sobrenome_explode[n]) > -1;
            if (!existeMonossilabas) nome_abreviado += (sobrenome_explode[n].substr(0, qtdCaracteresSobrenome)).toUpperCase();
            if ((flag++) + 1 < sobrenome_explode.length && !existeMonossilabas) nome_abreviado += '.';
        }
        return nome_abreviado;
    }

    return null;
}