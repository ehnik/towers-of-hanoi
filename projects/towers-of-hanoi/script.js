var disc1 = 1;
var disc2 = 2;
var disc3 = 3;
//var disc4 = 4;
//var disc5 = 5;

var pole1 =
{
discs : [disc3,disc2,disc1],
loc : 1
}
var pole2 =
{
discs : [],
loc : 2
}
var pole3 =
{
discs : [],
loc : 3
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
  if(pole3.discs[0]==3 && pole3.discs[1]== 2 && pole3.discs[2] == 1)
  {
  alert("You win!");
  return true;
  }
  else {
  alert("Keep playing.")
  }
}

function moveLegal (poleOrg, poleNew) {
  if ((emptyPole(poleNew) || poleNew.discs[poleNew.discs.length-1] > poleOrg.discs[poleOrg.discs.length-1] == true) && (poleOrg.discs.length > 0))
  {
  return true;
  }
else
  {
  return poleOrg.discs[poleOrg.discs.length-1];
  }
}

function move (poleOrg, poleNew) {
  if (moveLegal (poleOrg,poleNew) == true)
  {
  poleNew.discs.push(poleOrg.discs.pop());
  win();
  console.log("Pole 1: " + pole1.discs,"Pole 2: " + pole2.discs,"Pole 3: " + pole3.discs);
  }
  else
  {
  alert("U can't do that!");
  }
  }
