dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

/*
* Recieves a terrarium element 
* sets local positions for the element when dragged
* the terrarium element is assigned a pointerdown event on click
*/
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag; //invokes pointerDrag function

    /*
    * Receives an event from pointerdrag call in dragElement function
    */
    function pointerDrag(e) {
        e.preventDefault();   //prevents the default events from ocurring on the click/pointerdown event
        console.log(e);
        pos3 = e.clientX;  //tracks X and Y position of mouse/element on click
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;

    } 

    /*
    * Allows for drag of element
    * Recalculates position of plant/mouse
    */
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    /*
    * This small function resets the onpointerup and
    * onpointermove events so that you can either restart your plant's progress
    *  by starting to drag it again, or start dragging a new plant.
    */
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

