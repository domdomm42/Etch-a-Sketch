gridContainer = document.getElementsByClassName('grid-container')[0];

let isMouseDown = false;
let mouseType = null;

gridContainer.addEventListener('mousedown', function (e) {
  e.preventDefault();
  isMouseDown = true;
  mouseType = e.button;
});

document.addEventListener('mouseup', function (e) {
  e.preventDefault();
  isMouseDown = false;
});

function main(n) {
  for (let i = 0; i < n; i++) {
    let gridRow = document.createElement('div');
    for (let j = 0; j < n; j++) {
      let gridElement = document.createElement('div');
      gridElement.style.width = '2rem';
      gridElement.style.height = '2rem';
      gridElement.addEventListener('mousemove', function () {
        if (isMouseDown) {
          if (mouseType == 0) {
            gridElement.style.backgroundColor = 'black';
          } else if (mouseType == 2) {
            gridElement.style.backgroundColor = 'white';
          }
        }
      });

      gridElement.addEventListener('mousedown', function (e) {
        e.preventDefault();
        // left click
        if (e.button == 0) {
          gridElement.style.backgroundColor = 'black';
        }

        // right click
        else if (e.button == 2) {
          gridElement.style.backgroundColor = 'white';
        }
      });
      gridRow.appendChild(gridElement);
    }
    gridContainer.appendChild(gridRow);
  }

  gridContainer.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
}

main(16);
