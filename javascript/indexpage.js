//draggable elements
//square
const draggableSquare = document.getElementById('drag-square'); 
const dropzoneSquare = document.querySelector('#dropzone-square');

draggableSquare.addEventListener('dragstart', (event) => { 
  event.dataTransfer.setData('text/plain', event.target.id);
});

dropzoneSquare.addEventListener('dragover', (event) => { 
 event.preventDefault();
}); 

dropzoneSquare.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  console.log(draggableId); 
  const element = document.getElementById(draggableId);
  if(draggableId == "drag-square") {
    dropzoneSquare.innerText = "Correct!";
    dropzoneSquare.appendChild(element, dropzoneSquare.children[0]); 
  } else if(dropzoneSquare.children[0] != null){
      return null;
  } else {
      dropzoneSquare.innerText = "Oops, try again.";
  }
});

//triangle
const draggableTriangle = document.getElementById('drag-triangle'); 
const dropzoneTriangle = document.querySelector('#dropzone-triangle');

draggableTriangle.addEventListener('dragstart', (event) => { 
  event.dataTransfer.setData('text/plain', event.target.id);
});

dropzoneTriangle.addEventListener('dragover', (event) => { 
  event.preventDefault(); 
}); 

dropzoneTriangle.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  console.log(draggableId); 
  const element = document.getElementById(draggableId);
  if(draggableId == "drag-triangle") {
    dropzoneTriangle.innerText = "Correct!";
    dropzoneTriangle.appendChild(element, dropzoneTriangle.children[0]); 
  } else if(dropzoneTriangle.children[0] != null){
      return null;
  } else {
      dropzoneTriangle.innerText = "Oops, try again.";
  }
});

//circle
const draggableCircle = document.getElementById('drag-circle'); 
const dropzoneCircle = document.querySelector('#dropzone-circle');

draggableCircle.addEventListener('dragstart', (event) => { 
  event.dataTransfer.setData('text/plain', event.target.id);
});

dropzoneCircle.addEventListener('dragover', (event) => { 
  event.preventDefault(); 
}); 

dropzoneCircle.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  console.log(draggableId); 
  const element = document.getElementById(draggableId);
  if(draggableId == "drag-circle") {
    dropzoneCircle.innerText = "Correct!";
    dropzoneCircle.appendChild(element, dropzoneCircle.children[0]); 
  } else if(dropzoneCircle.children[0] != null){
      return null;
  } else {
      dropzoneCircle.innerText = "Oops, try again.";
  }
});