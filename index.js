import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    console.log(chalk.bgGreenBright(erro))
    throw new Error(chalk.red(erro.code, 'nao tem arquivos'));
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
       if(erro){
        trataErro(erro);
       }
       console.log(chalk.bgMagentaBright(texto))
    })
}


pegaArquivo('./arquivos/textos.md');