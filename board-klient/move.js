const move = (element) => {
  let newX = 0;
  let newY = 0;
  let oldX = 0;
  let oldY = 0;

  const closeDragElement = (e) => {
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', moveElement);
  };

  const moveElement = (e) => {
    e.preventDefault();
    newX = oldX - e.clientX;
    newY = oldY - e.clientY;
    oldX = e.clientX;
    oldY = e.clientY;
    const newTop = element.offsetTop - newY;
    const newLeft = element.offsetLeft - newX;
    if ((newTop >= 0) && (newTop <= 445)) {
      element.style.top = (element.offsetTop - newY) + 'px';
    }
    if ((newLeft >= 0) && (newLeft <= 250)) {
      element.style.left = (element.offsetLeft - newX) + 'px';
    }
  };

  const dragMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    oldX = e.clientX;
    oldY = e.clientY;
    document.addEventListener('mouseup', closeDragElement);
    document.addEventListener('mousemove', moveElement);
  };

  element.addEventListener('mousedown', dragMouseDown);
};
