disc1 =
{
  id: $("#disc1"),
  value: 1,
  loc : 1
}

disc2 =
{
  id: $("#disc2"),
  value: 2,
  loc : 1
}

disc3 =
{
  id: $("#disc3"),
  value: 3,
  loc : 1,
}

pole1 =
{
  discs : [disc3,disc2,disc1],
  id : $("#pole1"),
  numID: 1
}

pole2 =
{
  discs : [],
  id : $("#pole2"),
  numID: 2
}

pole3 =
{
  discs : [],
  id : $("#pole3"),
  numID: 3
}
function currentPole (disc) {
  if(disc.loc == 1)
  {
    disc.pole = pole1;
    console.log("convert function")
  }
  if(disc.loc == 2)
  {
    disc.pole = 2;
    console.log("convert function")
  }
  if(disc.loc == 3)
  {
    disc.pole = 3;
    console.log("convert function")
  }
}
currentPole (disc1);
currentPole (disc2);
currentPole (disc3);
/////////////////////////////////////////////
//game moves

function emptyPole (pole){                        //evaluates if pole is empty
  if ((pole.discs.length==0)) {
  //console.log(pole.numID + " is empty")
  return true
  }
  if(pole.discs.length > 0)  {
  //console.log(pole.numID + " is not empty")
  return false
  }
}

function win() {
  if(pole3.discs[0]==disc3 && pole3.discs[1]== disc2 && pole3.discs[2] == disc1)
  {
  //alert("You win!");
  //console.log("win!")
  $("footer").prepend("You won!");
  return true;
  }
  else {
  //console.log("keep playing!")
  }
}

function moveLegal (poleOrg, poleNew, disc) {
  if ((emptyPole(poleNew) || poleNew.discs[poleNew.discs.length-1].value >
  poleOrg.discs[poleOrg.discs.length-1].value == true) && (emptyPole(poleOrg) ==
  false && poleOrg!=poleNew && disc.id.prev().length == 0))
  {
  //console.log("legal move")
  return true;
  }
else
  {
  //console.log("illegal move")
  if (disc.id.prev().length > 0){
      console.log("you have a sibling!")
  }
  return false;
  }
}

function move (poleOrg, poleNew, disc) {
  if (moveLegal (poleOrg, poleNew, disc) == true)
  {
  poleNew.discs.push(poleOrg.discs.pop());
  poleNew.discs[poleNew.discs.length-1].id.prependTo(poleNew.id);
  disc.pole = poleNew;
  console.log(poleOrg,poleNew,disc)
  win();
  //console.log("Pole 1: " + pole1.discs,"Pole 2: " + pole2.discs,"Pole 3: " + pole3.discs);
  }
  else
  {
  $( ".discs" ).draggable({ revert: true });
  //alert("You can't do that!");
  }
}

$(function() {
   $(".discs").draggable({
   containment: $(".container"),
   cursor: "move",
   snap: $(".poles")
 })
 $(".poles").droppable({
   hoverClass: "highlight",
   drop: handleDiscDrop
 })
})

function handleDiscDrop(event,ui){
  var thisDisc = ui.draggable;
  var discID = thisDisc.attr("id");
  var poleID = $(this).attr("id");
  var currentdisc;
  var poleOrg;
  var poleNew;
    if(poleID == "pole1")
    {
      poleNew = pole1;
    }
    if(poleID == "pole2")
    {
      poleNew = pole2;
    }
    if(poleID  == "pole3")
    {
      poleNew = pole3;
    }

    if(discID == "disc1")
    {
      currentdisc = disc1;
      poleOrg = currentdisc.pole;
      console.log(discID)
    }
    if(discID == "disc2")
    {
      currentdisc = disc2;
      poleOrg = currentdisc.pole;
      console.log(discID)
    }
    if(discID  == "disc3")
    {
      currentdisc = disc3;
      poleOrg = currentdisc.pole;
      console.log(discID)

    }
    move (poleOrg, poleNew, currentdisc, thisDisc);
    if(poleNew.discs.length == 1) {
    ui.draggable.position({
      at: "bottom-16",
      of: poleNew.id,
    })
    }
    if(poleNew.discs.length == 2) {
    ui.draggable.position({
      at: "top+85%",
      of: poleNew.id,
    })
    }
    if(poleNew.discs.length == 3) {
    ui.draggable.position({
      at: "top+75%",
      of: poleNew.id,
    })
    }
 }
