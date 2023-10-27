var field1 = document.getElementById('discordName');
var field2 = document.getElementById('twitterHandle');
var field3 = document.getElementById('followingTravelers');
var field4 = document.getElementById('tweets');
var field5 = document.getElementById('aboutYourself');
var field6 = document.getElementById('contributeProject');
var field7 = document.getElementById('knowAboutWeb3');
var field8 = document.getElementById('roles');
var field9 = document.getElementById('worksOfMembers');
var field10 = document.getElementById('whyOG');
var btn = document.getElementById('btnEnviar');
var btn2 = document.getElementById('btnEnviar2');
btnEnviar2.disabled = true;
btnEnviar.disabled = true;
var btn3 = document.getElementById('btnEnviar3');
btnEnviar3.disabled = true;
var btn4 = document.getElementById('btnEnviar4');
btnEnviar4.disabled = true;
function verificar(valor) {
  if (field1.value.length>=1){
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("disabled");
  } else {
      btnEnviar.disabled = true;
  }
  
}

function verificar2(valor) {
  if (field2.value.length>=1 && field3.value.length>=1 && field4.value.length>=1){
    btnEnviar2.disabled = false;
    btnEnviar2.classList.remove("disabled");
  } else {
      btnEnviar2.disabled = true;
  }
  
}
function verificar3(valor) {
  if (field5.value.length>=1 && field6.value.length>=1 && field7.value.length>=1){
    btnEnviar3.disabled = false;
    btnEnviar3.classList.remove("disabled");
  } else {
      btnEnviar3.disabled = true;
  }
  
}
function verificar4(valor) {
  if (field8.value.length>=1 && field9.value.length>=1 && field10.value.length>=1){
    btnEnviar4.disabled = false;
    btnEnviar4.classList.remove("disabled");
  } else {
      btnEnviar4.disabled = true;
  }
  
}

