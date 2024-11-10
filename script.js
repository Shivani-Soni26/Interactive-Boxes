
function toggleBox(boxId) {
    const boxes = document.querySelectorAll('.box');
   
    boxes.forEach(box=>{
        const checkbox = box.querySelector(".unit-checkbox");
        if(box.id === boxId){
            box.classList.toggle('expanded');
            checkbox.checked = box.classList.contains('expanded');
        }else{
            box.classList.remove('expanded');
            checkbox.checked = false;
        
        }
        
    });
    
    
}



