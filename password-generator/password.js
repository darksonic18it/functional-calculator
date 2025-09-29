const result = document.getElementById('result');
const generateBtn = document.getElementById('generate');

const length = 12;
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
  let allChars = uppercase + lowercase + numbers + symbols;
  let finalPassword = '';
  for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      finalPassword += allChars[randomIndex];
  }

  let iterations = 0;
  let scramble = setInterval(() => {
      let temp = '';
      for (let i = 0; i < length; i++) {
          temp += allChars[Math.floor(Math.random() * allChars.length)];
      }
      result.value = temp; 
      iterations++;
      if (iterations > 10) {
          clearInterval(scramble);
          result.value = finalPassword;
      }
  }, 80);
}

generateBtn.onclick = generatePassword;
generatePassword();

result.onclick = function() {
    navigator.clipboard.writeText(result.value).then(() => { // ✅ works with input
        alert('Password copied to clipboard');
    });
};
