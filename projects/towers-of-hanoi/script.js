disc1 =
{
  id: $("#disc1"),
  value: 1,
  pole: pole1
}
disc2 =
{
  id: $("#disc2"),
  value: 2,
  pole: pole1
}
disc3 =
{
  id: $("#disc3"),
  value: 3,
  pole: pole1
}

allDiscs = [
  disc1,
  disc2,
  disc3
]
//var disc4 = 4;
//var disc5 = 5;

pole1 =
{
  discs : [disc3,disc2,disc1],
  id : $("#pole1")
}

pole2 =
{
discs : [],
id : $("#pole2")
}

pole3 =
{
discs : [],
id : $("#pole3")
}

function emptyPole (pole){                        //evaluates if pole is empty
  if ((pole.discs.length==0)) {
  return true
  }
  if(pole.discs.length > 0)  {
  return false
  }
}

function win() {
  if(pole3.discs[0]==disc3 && pole3.discs[1]== disc2 && pole3.discs[2] == disc1)
  {
  alert("You win!");
  return true;
  }
  else {
  alert("Keep playing.")
  }
}

function moveLegal (poleOrg, poleNew) {
  if ((emptyPole(poleNew) || poleNew.discs[poleNew.discs.length-1].value > poleOrg.discs[poleOrg.discs.length-1].value == true) && (poleOrg.discs.length > 0))
  {
  return true;
  }
else
  {
  console.log("illegal")
  }
}

function move (poleOrg, poleNew) {
  if (moveLegal (poleOrg,poleNew) == true)
  {
  poleNew.discs.push(poleOrg.discs.pop());
  poleNew.discs[poleNew.discs.length-1].id.prependTo(poleNew.id);
  win();
  console.log("Pole 1: " + pole1.discs,"Pole 2: " + pole2.discs,"Pole 3: " + pole3.discs);
  }
  else
  {
  alert("U can't do that!");
  }
}

//$(".discs").click(function(){
/*function move(poleOrg,poleNew) {
  var poleOrg;
  if($(this).prev().length == 0)
  {                                         //current pole of disc clicked
    if($(this).parent().attr("id") == "pole1")
    {
      poleOrg = pole1;
    }
    if($(this).parent().attr("id") == "pole2")
    {
      poleOrg = pole2;
    }
    if($(this).parent().attr("id") == "pole3")
    {
      poleOrg = pole3;
    }
  move(poleOrg,pole2);
  }
  else {
  alert("inavlid move!")
  console.log($(this).length)
  }
} */

$(function() {
   $(".discs").draggable({containment: $(".container")});
   $(".discs").draggable({revert:'invalid'});
   $("#pole2").droppable({
    drop: function(event,ui) {
      var currentDisc = ui.draggable;
      var poleNew;
      var poleOrg;
      if(currentDisc.parent().attr("id") == "pole1")  //convert UI origin pole to variable pole
      {
        poleOrg = pole1;
      }
      if(currentDisc.parent().attr("id") == "pole2")
      {
        poleOrg = pole2;
      }
      if(currentDisc.parent().attr("id") == "pole3")
      {
        poleOrg = pole3;
      }

      if($(this).attr("id") == "pole1")  //equate UI destination pole to variable pole
      {
        poleNew = pole1;
      }
      if($(this).attr("id") == "pole2")
      {
        poleNew = pole2;
      }
      if($(this).attr("id") == "pole3")
      {
        poleNew = pole3;
      }

      move(poleOrg,poleNew);

    }
  })

   $("#pole3").droppable({
     drop: function(event,ui) {
         var currentDisc = ui.draggable;
         var poleNew;
         var poleOrg;
         if(currentDisc.parent().attr("id") == "pole1")  //convert UI origin pole to variable pole
         {
           poleOrg = pole1;
         }
         if(currentDisc.parent().attr("id") == "pole2")
         {
           poleOrg = pole2;
         }
         if(currentDisc.parent().attr("id") == "pole3")
         {
           poleOrg = pole3;
         }

         if($(this).attr("id") == "pole1")  //equate UI destination pole to variable pole
         {
           poleNew = pole1;
         }
         if($(this).attr("id") == "pole2")
         {
           poleNew = pole2;
         }
         if($(this).attr("id") == "pole3")
         {
           poleNew = pole3;
         }

         move(poleOrg,poleNew);
         }
      })

   $("#pole1").droppable({
     drop: function(event,ui) {
         var currentDisc = ui.draggable;
         var poleNew;
         var poleOrg;
         if(currentDisc.parent().attr("id") == "pole1")  //convert UI origin pole to variable pole
         {
           poleOrg = pole1;
         }
         if(currentDisc.parent().attr("id") == "pole2")
         {
           poleOrg = pole2;
         }
         if(currentDisc.parent().attr("id") == "pole3")
         {
           poleOrg = pole3;
         }

         if($(this).attr("id") == "pole1")  //equate UI destination pole to variable pole
         {
           poleNew = pole1;
         }
         if($(this).attr("id") == "pole2")
         {
           poleNew = pole2;
         }
         if($(this).attr("id") == "pole3")
         {
           poleNew = pole3;
         }
         move(poleOrg,poleNew);
       }
   })
})
