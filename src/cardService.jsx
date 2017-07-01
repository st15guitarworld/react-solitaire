
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

export default function getShuffledDeck() {
   let cards=[
       { isDraggable:false,isShowing:true, suit:"H",value:"A", image:"/cards/AH.png" },
       { isDraggable:false,isShowing:true, suit:"H",value:"2" ,image:"/cards/2H.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"3" ,image:"/cards/3H.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"4" ,image:"/cards/4H.png" },
       { isDraggable:false,isShowing:true, suit:"H",value:"5",image:"/cards/5H.png" },
       { isDraggable:false,isShowing:true, suit:"H",value:"6" ,image:"/cards/6H.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"7" ,image:"/cards/7H.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"8" ,image:"/cards/8H.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"9" ,image:"/cards/9H.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"0" ,image:"/cards/0H.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"J" ,image:"/cards/JH.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"Q" ,image:"/cards/QH.png"},
       { isDraggable:false,isShowing:true, suit:"H",value:"K" ,image:"/cards/KH.png"},
       
       { isDraggable:false,isShowing:true, suit:"S",value:"A", image:"/cards/AS.png" },
       { isDraggable:false,isShowing:true, suit:"S",value:"2" ,image:"/cards/2S.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"3" ,image:"/cards/3S.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"4" ,image:"/cards/4S.png" },
       { isDraggable:false,isShowing:true, suit:"S",value:"5",image:"/cards/5S.png" },
       { isDraggable:false,isShowing:true, suit:"S",value:"6" ,image:"/cards/6S.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"7" ,image:"/cards/7S.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"8" ,image:"/cards/8S.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"9" ,image:"/cards/9S.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"0" ,image:"/cards/0S.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"J" ,image:"/cards/JS.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"Q" ,image:"/cards/QS.png"},
       { isDraggable:false,isShowing:true, suit:"S",value:"K" ,image:"/cards/KS.png"},
       
       { isDraggable:false,isShowing:true, suit:"D",value:"A", image:"/cards/AD.png" },
       { isDraggable:false,isShowing:true, suit:"D",value:"2" ,image:"/cards/2D.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"3" ,image:"/cards/3D.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"4" ,image:"/cards/4D.png" },
       { isDraggable:false,isShowing:true, suit:"D",value:"5",image:"/cards/5D.png" },
       { isDraggable:false,isShowing:true, suit:"D",value:"6" ,image:"/cards/6D.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"7" ,image:"/cards/7D.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"8" ,image:"/cards/8D.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"9" ,image:"/cards/9D.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"0" ,image:"/cards/0D.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"J" ,image:"/cards/JD.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"Q" ,image:"/cards/QD.png"},
       { isDraggable:false,isShowing:true, suit:"D",value:"K" ,image:"/cards/KD.png"},
       
       { isDraggable:false,isShowing:true, suit:"C",value:"A", image:"/cards/AC.png" },
       { isDraggable:false,isShowing:true, suit:"C",value:"2" ,image:"/cards/2C.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"3" ,image:"/cards/3C.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"4" ,image:"/cards/4C.png" },
       { isDraggable:false,isShowing:true, suit:"C",value:"5",image:"/cards/5C.png" },
       { isDraggable:false,isShowing:true, suit:"C",value:"6" ,image:"/cards/6C.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"7" ,image:"/cards/7C.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"8" ,image:"/cards/8C.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"9" ,image:"/cards/9C.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"0" ,image:"/cards/0C.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"J" ,image:"/cards/JC.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"Q" ,image:"/cards/QC.png"},
       { isDraggable:false,isShowing:true, suit:"C",value:"K" ,image:"/cards/KC.png"}
   ];
    
   shuffle(cards);
   shuffle(cards);
   shuffle(cards);
   return cards; 
};