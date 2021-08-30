export const checkRut = (rut) => {
    // Obtiene el valor ingresado quitando puntos y guión.
    let valor = clean(rut);

    // Divide el valor ingresado en dígito verificador y resto del RUT.
    let cuerpo = valor.slice(0, -1);
    let dv = valor.slice(-1).toUpperCase();

    // Separa con un Guión el cuerpo del dígito verificador.
    //let rut_limpio = formatRut(rut);

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
        return false;
    }

    // Calcular Dígito Verificador "Método del Módulo 11"
    let suma = 0;
    let multiplo = 2;

    // Para cada dígito del Cuerpo
    for (let i = 1; i <= cuerpo.length; i++) {
        // Obtener su Producto con el Múltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) {
            multiplo = multiplo + 1;
        } else {
            multiplo = 2;
        }
    }

    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = dv === "K" ? 10 : dv;
    dv = dv === 0 ? 11 : dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (parseInt(dvEsperado) !== parseInt(dv)) {
        return false;
    } else {
        return true;
    }
}
export const formatRut = async (rut) => {
    let value = rut.replace(/\./g, '').replace('-', '');

    if (value.match(/^(\d{2})(\d{3}){2}(\w{1})$/)) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4');
    }
    else if (value.match(/^(\d)(\d{3}){2}(\w{0,1})$/)) {
        value = value.replace(/^(\d)(\d{3})(\d{3})(\w{0,1})$/, '$1.$2.$3-$4');
    }
    else if (value.match(/^(\d)(\d{3})(\d{0,2})$/)) {
        value = value.replace(/^(\d)(\d{3})(\d{0,2})$/, '$1.$2.$3');
    }
    else if (value.match(/^(\d)(\d{0,2})$/)) {
        value = value.replace(/^(\d)(\d{0,2})$/, '$1.$2');
    }
    return value;
}

const clean = (rut) => {
    return typeof rut === 'string'
        ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
        : ''
}

export const validarEmail = async (valor) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultado = re.test(String(valor).toLowerCase());
    return resultado;
}

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms || 1000));
}


export function generaFileName() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 12; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

export function generaIdPostulacion() {
    var text = "TRA";
    var possible = "0123456789";

    for (var i = 0; i < 7; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

export function generaIdSolicitud() {
    var text = "RAIN";
    var possible = "0123456789";

    for (var i = 0; i < 7; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}


export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const renderCombo = (e, i) => {
    return (
        <option key={e.codigo} value={e.codigo}>{e.nombre}</option>
    );
}

export const renderComboGraphQl = (e, i) => {
    return (
        <option key={e.id} value={JSON.stringify(e)}>{e.nombre}</option>
    );
}

export const renderComboGraphQlPorId = (e, i) => {
    return (
        <option key={e.id} value={e.id}>{e.nombre}</option>
    );
}

export const renderComboGraphQlPorIdPlusDesc = (e, i) => {
    return (
        <option key={e.id} value={e.id}>{e.nombre + ' ' + e.descripcion}</option>
    );
}


export const renderComboGraphQlCustomProv = (e, i) => {
    return (
        <option key={e.id} value={JSON.stringify(e)}>{'Nombre : ' + e.nombre + ' | Rut : ' + e.dni + ' | Contacto : ' + e.contacto + ' | Teléfono : ' + e.fono}</option>
    );
}


export const rainbowStop = (h) => {
    let f = (n, k = (n + h * 12) % 12) =>
        0.5 - 0.5 * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let rgb2hex = (r, g, b) =>
        "#" +
        [r, g, b]
            .map(x =>
                Math.round(x * 255)
                    .toString(16)
                    .padStart(2, 0)
            )
            .join("");
    return rgb2hex(f(0), f(8), f(4));
}



export function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}