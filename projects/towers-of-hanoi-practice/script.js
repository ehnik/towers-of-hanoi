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
  loc : 1
}

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
function currentPole (x) {
  if(x.loc == 1)
  {
    x.pole = pole1;
    return x.pole;
  }
  if(x.loc == 2)
  {
    x.pole = pole2;
    return x.pole;
  }
  if(x.loc == 3)
  {
    x.pole = pole3;
    return x.pole;
  }
}
currentPole (disc1);
currentPole (disc2);
currentPole (disc3);

$(function() {
   $(".discs").draggable({
   containment: $(".container"),
   cursor: "move"
 })
 //$( "#discList" ).sortable();
 $(".poles").droppable({
   drop: handleDiscDrop,

 })
})

function handleDiscDrop(event,ui){
  var discID = ui.draggable.attr("id");
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
    }
    if(discID == "disc2")
    {
      currentdisc = disc2;
      poleOrg = currentdisc.pole;
    }
    if(discID  == "disc3")
    {
      currentdisc = disc3;
      poleOrg = currentdisc.pole;
    }
    console.log(poleOrg);
    currentdisc.pole = poleNew;
    ui.draggable.position({
      at: "center",
      of: poleNew.id,
    })

 }
