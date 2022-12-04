

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from 'chalk-animation';


const sleep = ()=>{
    return new Promise((res) =>{
        setTimeout(res, 2000)
    })
}

async function  welcome(){
 let rainbowTitle = chalkAnimation.rainbow('Lets Start Calcultion');//start

await sleep();
rainbowTitle.stop();

}
welcome();