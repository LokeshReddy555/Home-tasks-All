//Can you keep a secret?
// https://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
  var obj = {
    setSecret : function(sec){secret = sec; }, 
    getSecret : function(){ return secret; }
  };
  return obj;
}