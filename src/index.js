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

  let keys = [];
  for (let i = 0; i < 10; i++) {
    const id = "key" + i;
    const elem = document.getElementById(id);
    keys.push(elem);

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
})();
