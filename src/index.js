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

  // CUANDO PULSAMOS = ... hay que elegir entre los 4 operadores //
  // Las funciones de op solo se ejecutan cuando pulso el botón = //
  document.getElementById("keyEqual").addEventListener("click", () => {
    if (op === "add") {
      add();
      op = undefined;
      isReset = true;
    } else {
      if (op === "less") {
        less();
        op = undefined;
        isReset = true;
      } else {
        if (op === "multi") {
          multi();
          op = undefined;
          isReset = true;
        } else {
          if (op === "div") {
            div();
            op = undefined;
            isReset = true;
          }
        }
      }
    }
  });

  // -*-*-*-*-*-*- FUNCIONES DE OPERADORES -*-*-*-*-*-*- //

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
    // cuando pulsamos el botón de +, el op es add,
    // así que no está undefined //

    // este string "add" lo uso para añadir condicionales y distinguir
    // entre los cuatro tipos de operadores!! //
  });

  // 2. Función de resta //
  function less() {
    if (op !== undefined) {
      a = a - b;
      updateScreen(a);
      b = 0;
    }
    isReset = false;
  }

  document.getElementById("keyLess").addEventListener("click", () => {
    less();
    op = "less";
  });

  // 3. Función de multiplicación //
  function multi() {
    if (op !== undefined) {
      a = a * b;
      updateScreen(a);
      b = 0;
    }
    isReset = false;
  }

  document.getElementById("keyMulti").addEventListener("click", () => {
    multi();
    op = "multi";
  });

  // 4. Función de división //
  function div() {
    if (op !== undefined) {
      a = a / b;
      updateScreen(a);
      b = 0;
    }
    isReset = false;
  }

  document.getElementById("keyDiv").addEventListener("click", () => {
    div();
    op = "div";
  });
})();
