import fs from 'fs';
import chalk from 'chalk';


function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
  }

// const capturas = regex.exec(texto);
// const capturas = texto.match(texto);
// const capturas = texto.matchAll(texto);


function trataErro(erro){
    console.log(chalk.yellow(erro))
    throw new Error(chalk.red(erro.code, 'nao tem arquivos'));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
       console.log(extraiLinks(texto))
    } catch(erro){
        trataErro(erro)
    }
    finally{
        console.log(chalk.cyanBright('operacao finalizadaHHHHH'))
    }
}




// promises com then()
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.bgYellowBright(texto)))
//     .catch(trataErro)
// }


// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
//        if(erro){
//         trataErro(erro);
//        }
//        console.log(chalk.bgMagentaBright(texto))
//     })
// }

export default pegaArquivo;