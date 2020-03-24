(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Cpatián América',
        poder: 'Droga'
    }

    const extraer = ({ nombre, poder }: any) => {

        console.log(nombre);
        console.log(poder);
    }

    //extraer( avenger );

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
    /* 

    const [martillo, hierro, araña] = avengers;
    //const [ , , araña] = avengers;

    console.log(martillo);
    console.log(hierro);
    console.log(araña); */

    const extraerArr = ([martillo, hierro, araña]: string[]) => {
        console.log(martillo);
        console.log(hierro);
        console.log(araña);
    }

    extraerArr(avengers);

















})();



