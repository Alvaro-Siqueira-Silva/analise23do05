class Carro{
    #chassi;
    constructor(cor,tipo,peso,chassi){
        this.cor = cor;
        this.tipo = tipo;
        this.peso = peso;
        this.#chassi = chassi;
        this.direcao = 0;
        this.x = 0;
        this.y = 0;
        this.velo = 0;
    }
    andar(dir,velo){
        if(typeof dir !== "string"){
            console.error("insira apenas string x ou y");
            return;
        }

        if(dir === "x"){
            this.x = this.x + velo;
        }else if(dir === "y"){
            this.y = this.y + velo;
        }else{
            console.error("insira apenas x ou y");
            return;
        }
    }
}

const fiat = new Carro("#FF0000","SUV",3,2018405);

fiat.andar("x",50);