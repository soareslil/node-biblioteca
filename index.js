import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    console.log(chalk.yellow(erro))
    throw new Error(chalk.red(erro.code, 'nao tem arquivos'));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.greenBright(texto))
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


pegaArquivo('./arquivos/text.md');