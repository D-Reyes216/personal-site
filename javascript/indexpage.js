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

//Leaflet map

//create shape button
const shapeBtn = document.getElementById('create-shape');
//event listener to create shape on button click
shapeBtn.addEventListener('click', createShape);

//connect all markers button
const connectMrks = document.getElementById('connect-markers');
//connects all markers on button click
connectMrks.addEventListener('click', connectMarkers)

//remove markers button
const rmvMarker = document.getElementById('remove-marker');
//removes all markers on button click
rmvMarker.addEventListener('click', removeMarkers);

//remove shapes button
const rmvShapes = document.getElementById('remove-shapes');
//removes all shapes on button click
rmvShapes.addEventListener('click', removeShapes);



//get each latitude/longitude element
const lat1 = document.getElementById('latitude1');
const long1 = document.getElementById('longitude1');
const lat2 = document.getElementById('latitude2');
const long2 = document.getElementById('longitude2');
const lat3 = document.getElementById('latitude3');
const long3 = document.getElementById('longitude3');
const lat4 = document.getElementById('latitude4');
const long4 = document.getElementById('longitude4');

//create map
const map = L.map('map').setView([40.689, //latitude
-74.044], //longitude
10);    //zoom

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function createShape() {
    let shape = null;   //initialize shape to null to prevent errors when removing shape when no shape exists
    if(shape != null){  //remove previous shape if it exists
        shape.remove()
    }
    let latlngs = [     //get latitudes/longitudes from user input
        [lat1.value, long1.value], 
        [lat2.value, long2.value], 
        [lat3.value, long3.value], 
        [lat4.value, long4.value]];

    shape = L.polygon(latlngs, {color: 'blue'}).addTo(map); //create shape with latitudes/longitudes given by user
    shapes.push(shape);
    map.fitBounds(shape.getBounds());   //zoom to created shape
}


let markers = [];   //array of markers to be used to make a shape
let latlngsMrks = [];   //array of coordinates for each marker
let shapes = [];    //array of shapes
 
function onMapClick(e) {
    let marker = L.marker(e.latlng).addTo(map); //adds a marker where map is clicked
    markers.push(marker);   //adds marker to array of markers;
    latlngsMrks.push(e.latlng);     //adds coordinates of markers to array of coordinates
}

map.on('click', onMapClick) //event listener for when map is clicked

//uses array of markers to make a shape
function connectMarkers() {
    mrkShape = L.polygon(latlngsMrks, {color: 'green'}).addTo(map);
    shapes.push(mrkShape);
}

function removeMarkers() {
    //loops through array of markers and removes them one by one
    for(const mrk of markers){
        mrk.remove();
    }

    markers = [];   //removes all elements from array of markers
    latlngsMrks = [];   //removes all elements from array of coordinates
}

function removeShapes() {
    for(shp of shapes){
        shp.remove();
    }
    shapes = [];
}




