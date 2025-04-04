function texto() {
  setTimeout(() => {
    let texto = document.getElementById("Descripcion");

    let novo = (texto.innerText =
      "Despierta tus sensaciones bailando con tus puños");
    texto.classList.add("texto");
  }, 3000); // la funcion TimeOut()  espera el tiempo en milisegundos
}
