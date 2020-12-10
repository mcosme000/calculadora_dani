(() => {
  let a;
  let op;
  let b;
  let isReset;
  reset();

  function updateScreen(value) {
    let screen = document.getElementById("screen");
    screen.innerText = value;
  }
  // array con valores del 1 al 9 para los números //
  let keys = [];
  for (let i = 0; i < 10; i++) {
    const id = "key" + i;
    const elem = document.getElementById(id);
    keys.push(elem);

    // cuando pulsamos key //
    keys[i].addEventListener("click", () => {
      if (isReset) {
        a = i;
        updateScreen(a);
        isReset = false;
      } else {
        if (op === undefined) {
          a = a * 10 + i;
          updateScreen(a);
        } else {
          b = b * 10 + i;
          updateScreen(b);
        }
      }
    });
  }

  document.getElementById("keyReset").addEventListener("click", reset);

  function reset() {
    a = 0;
    b = 0;
    op = undefined;
    isReset = true;
    updateScreen(0);
  }

  document.getElementById("keyEqual").addEventListener("click", () => {
    add();
    op = undefined;
    isReset = true;
  });

  // FUNCIONES DE OPERADORES //

  // 1. Función de suma //
  function add() {
    if (op !== undefined) {
      a = a + b;
      updateScreen(a);
      b = 0;
    }
    isReset = false;
  }

  document.getElementById("keyAdd").addEventListener("click", () => {
    add();
    op = "add";
  });

  // 2. Función de resta //

  // 3. Función de multiplicación //

  // 4. Función de división //
})();
