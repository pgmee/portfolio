let sec
    function show(sec){
      if(sec==1){
      document.getElementById('ae').style.display = 'block'; 
      document.getElementById('lang').style.display = 'none'; 
    }
    if(sec==2){
      document.getElementById('ne').style.display = 'block';
      document.getElementById('lang').style.display = 'none';  
    }
  }
  function hide(){
      document.getElementById('ae').style.display = 'none';  
      document.getElementById('ne').style.display = 'none';    
      document.getElementById('lang').style.display = 'block'; 
  }
function openPopup(index) {
    for (let i = 1; i <= 50; i++) {
      let popupId = `popupContainer(${i})`;
      if (index === i) {
        document.getElementById(popupId).style.display = 'block';
      } else {
        document.getElementById(popupId).style.display = 'none';
      }
    }
  }
  
  function closePopup(index) {
    for (let i = 1; i <= 50; i++) {
      let popupId = `popupContainer(${i})`;
      if (index === i) {
        document.getElementById(popupId).style.display = 'none';
      }
    }
  }
  