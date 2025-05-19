function clearElementContent(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = "";
  }
}

window.clearElementContent = clearElementContent;
