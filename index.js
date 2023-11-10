const btnGenerate = document.getElementById("btn-generate");
const inputText = document.getElementById("input-text");
const qrCodeDiv = document.getElementById("qrcode");
const btnClear = document.getElementById("btn-clear");

btnGenerate.addEventListener("click", () => {
  const inputValue = inputText.value; //Obtenemos el valor del input
  if (inputValue) {
    qrCodeDiv.innerHTML = ""; //Limpiamos el div del código QR
    const qrcode = new QRCode(qrCodeDiv, {
      text: inputValue,
      with: 200,
      heigth: 200,
    });
  }
});

btnClear.addEventListener("click", () => {
  inputText.value = ""; //Limpiamos el input
  qrCodeDiv.innerHTML = ""; //Limpiamos el div del codigo QR
});
