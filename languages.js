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

let index
function openPopup(index) {
  if(index==1){
    document.getElementById('popupContainer(1)').style.display = 'block';
  } else if(index==2){
    document.getElementById('popupContainer(2)').style.display = 'block';
  }else if(index==3){
    document.getElementById('popupContainer(3)').style.display = 'block';
  }
  else if(index==4){
    document.getElementById('popupContainer(4)').style.display = 'block';
  } else if(index==5){
    document.getElementById('popupContainer(5)').style.display = 'block';
  } else if(index==6){
    document.getElementById('popupContainer(6)').style.display = 'block';
  } else if(index==7){
    document.getElementById('popupContainer(7)').style.display = 'block';
  } else if(index==8){
    document.getElementById('popupContainer(8)').style.display = 'block';
  } else if(index==9){
    document.getElementById('popupContainer(9)').style.display = 'block';
  } else if(index==10){
    document.getElementById('popupContainer(10)').style.display = 'block';
  } else if(index==11){
    document.getElementById('popupContainer(11)').style.display = 'block';
  } else if(index==12){
  document.getElementById('popupContainer(12)').style.display = 'block';
} 
  };
  
  function closePopup(index) {
    if(index==1){
    document.getElementById('popupContainer(1)').style.display = 'none';
  }else if(index==2){
    document.getElementById('popupContainer(2)').style.display = 'none';
  } else if(index==3){
    document.getElementById('popupContainer(3)').style.display = 'none';
  } else if(index==4){
    document.getElementById('popupContainer(4)').style.display = 'none';
  }else if(index==5){
    document.getElementById('popupContainer(5)').style.display = 'none';
  }else if(index==6){
    document.getElementById('popupContainer(6)').style.display = 'none';
  }else if(index==7){
    document.getElementById('popupContainer(7)').style.display = 'none';
  }else if(index==8){
    document.getElementById('popupContainer(8)').style.display = 'none';
  }else if(index==9){
    document.getElementById('popupContainer(9)').style.display = 'none';
  }else if(index==10){
    document.getElementById('popupContainer(10)').style.display = 'none';
  }else if(index==11){
    document.getElementById('popupContainer(11)').style.display = 'none';
  }  else if(index==12){
    document.getElementById('popupContainer(12)').style.display = 'none';
  }
}