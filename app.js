"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Cpatián América',
        poder: 'Droga'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    //extraer( avenger );
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    /*

    const [martillo, hierro, araña] = avengers;
    //const [ , , araña] = avengers;

    console.log(martillo);
    console.log(hierro);
    console.log(araña); */
    var extraerArr = function (_a) {
        var martillo = _a[0], hierro = _a[1], araña = _a[2];
        console.log(martillo);
        console.log(hierro);
        console.log(araña);
    };
    extraerArr(avengers);
})();
