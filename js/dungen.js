// Ed Allen, started November 08, 2014
// 
// utility added to Array, bad to change primitive prototypes but Array is
// hard to subclass
Array.prototype.remove= function(){
	var what, L= arguments.length, ax;
	while(L && this.length){
		what= arguments[--L];
		while((ax= this.indexOf(what))!= -1){
			this.splice(ax, 1);
		}
	}
	return this;
}
//to remove all of the elements of one array from another, apply the method:
//var a1=[1,2,3,4,5,6], a2=[5,6,7,8,9];
//a1.remove.apply(a1,a2);
// cargo culted from mrhoo answer on Sitepoint:
// http://community.sitepoint.com/t/remove-the-element-from-array-a-if-it-exists-in-array-b/5958

var DG = {
  // Arguments to the Vis.Network creation call ----------------------------------------------
  container:  document.getElementById('dungeon'),
  drawOptions: { 
    dataManipulation: true,
	onAdd: function(data,callback) {
        /** data = {id: random unique id,
        *           label: new,
        *           x: x position of click (canvas space),
        *           y: y position of click (canvas space),
        *           allowedToMoveX: true,
        *           allowedToMoveY: true
        *          };
        */
		var i = DG.data.nodes[DG.data.nodes.length - 1].id + 1;
		
        var newData = DG.makeNode(i, DG.nameNode(i+1) ); 
		                    // alter the data as you want.
                            // all fields normally accepted by a node can be used.
		console.log(newData);
		DG.nodesDataSet.add(newData);
	
        callback(newData);  // call the callback to add a node.
    },
    onEdit: function(data,callback) {
        /** data = {id:...,
        *           label: ...,
        *           group: ...,
        *           shape: ...,
        *           color: {
        *             background:...,
        *             border:...,
        *             highlight: {
        *               background:...,
        *               border:...
        *             }
        *           }
        *          };
        */
		console.log(data);
		
        var newData = data; // alter the data as you want.
                            // all fields normally accepted by a node can be used.
		bootbox.dialog({
		  title:"Edit Location",
		  message: '<div class="row">  ' +
				'<div class="col-md-12"> ' +
				'<form class="form"> ' +
				'<div class="form-group"> ' +
				'<label class="col-md-4 control-label" for="name">Name</label> ' +
				'<input id="location_name" name="location_name" type="text" placeholder="Location name" value="' + DG.nodesDataSet.get(newData.id).label + 
				  '" class="form-control input-md"/> ' +
				'</div>'+

				'<div class="form-group"> ' +
				  '<label class="col-md-4 control-label" for="description">Description</label> ' +
					'<textarea id="location_description" name="location_description" type="text"  placeholder="Location description" value="' + DG.nodesDataSet.get(newData.id).title + '" '+ 
					'class="form-control" rows="8" columns = "30">' + DG.nodesDataSet.get(newData.id).title + '</textarea>'+
				'</div> ' +
				'</form> </div>  </div>', 
		  buttons: {
			save: {
			  label: "Save",
			  className: "btn-success",
			  callback: function() {
				newData.label =  $('#location_name').val();
				newData.title =  $('#location_description').val();
				DG.nodesDataSet.update(newData);
				callback(newData); 
			  
			  }
			},

		  }
        
		
        });		 	 
    },
    onEditEdge: function(data,callback) {
        /** data = {id: edgeID,
        *           from: nodeId1,
        *           to: nodeId2,
        *          };
        */
        var newData = data; // alter the data as you want, except for the ID.
                            // all fields normally accepted by an edge can be used.a
        newData.label = DG.edgesDataSet.get(newData.id).label;	
		newData.label = window.prompt("Change label",newData.label);
        DG.edgesDataSet.update(newData);
		callback(newData);  // call the callback with the new data to edit the edge.
    },
    onConnect: function(data,callback) {
        // data = {from: nodeId1, to: nodeId2};
		 var newData = {};
         for (var attrname in data) { newData[attrname] = data[attrname]; }
		 newData.label = DG.randomEdgeLabel();
		
		 DG.edgesDataSet.add(newData);
		 // check or alter data as you see fit.
         callback(newData);       // call the callback to connect the nodes.
    },
    onDelete: function(data,callback) {
     //   data = {nodes: [selectedNodeIds], edges: [selectedEdgeIds]};
        var newData = data; // alter the data as you want.
                           //  the same data structure is required.
							// WILL NEED TO REMOVE THEM FROM THE LISTS IN DG.data
		DG.edgesDataSet.remove(newData.edges);
		DG.nodesDataSet.remove(newData.nodes);
        callback(newData);  // call the callback to delete the objects.
    },
    height: '90%'
  },
  data: { nodes:[],
          edges:[],},
  nodesDataSet:"uninitialized",
  edgesDataSet:"uninitialized",
  // Shared variables
  roomCount: 0,
  edgeCount: 0,
  minRooms: 5,
  maxRooms: 10,
  dungeonLevel: 0,
  monsterTreasureMultiplier: 1,
  initNetwork: function(){
	  DG.nodesDataSet = new vis.DataSet(DG.data.nodes);
	  DG.nodesDataSet.on('*', function (event, properties, senderId) {
        DG.data.nodes = DG.nodesDataSet.get();
	    DG.fillKey();
      });
	  DG.edgesDataSet = new vis.DataSet(DG.data.edges);
      DG.edgesDataSet.on('*', function (event, properties, senderId) {
         DG.data.edges = DG.edgesDataSet.get();
      });
	  data = {nodes: DG.nodesDataSet, edges: DG.edgesDataSet};
      DG.network = new vis.Network(DG.container, data, DG.drawOptions);
	  DG.fillKey();
  },
  
  // Randomization Utilities -----------------------------------------------------------------
  rollDie: function(start,size){ 
    var roll = Math.floor(Math.random() * (size)) + start ;
    return roll; }, 
  rollOne: function(){ return Math.random() < 0.16667; },
  rollTwo: function(){ return Math.random() < 0.3334; },
  rollThree: function(){ return Math.random() <= 0.5; },
  rollFour: function() {return Math.random() < 0.66667;},
  rollFive: function() {return Math.random() < 0.83334;},
  rollOther: function(start,size,excludedRoll){
    var roll = excludedRoll;
    while (roll == excludedRoll){ roll = DG.rollDie(start,size);}
    return roll;
  },
  drawOne: function(list){ return list[DG.rollDie(0, list.length )];},
  shufflePopOne: function(list){ var item = "";
                          list = DG.shuffle(list);
                          item = list.pop();
                          return [item,list];
						},
  shuffle: function(array) {
    // Mike Bostock's Fisher Yates shuffle implementation
    var m = array.length, t, i;
    // While there remain elements to shuffle�
    while (m) {
      // Pick a remaining element�
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  },
  // ui handlers - move to ui file?
  populateSavedSelect: function(){
    // populate the saved dungeons select
    console.log("populate");
    var dungeonSelect = document.getElementById("saved");
    dungeonSelect.innerHTML = ""
    var keys = [];
    var key = "";
    for (i = 0; i < localStorage.length; i +=1){
      key = localStorage.key(i);
      keys.push(key);
    };
    if (keys.length > 0) {console.log("adding keys to options");
      DG.addOptionsToSelect(dungeonSelect,keys);
    };
  },
  addOptionsToSelect: function(select,optionsList){
    console.log('adding opts');
    for(var i = 0; i < optionsList.length; i += 1) {
      var opt = document.createElement('option');
      opt.value = optionsList[i];
      opt.innerHTML = optionsList[i];
	  console.log(opt);
      select.appendChild(opt);
	}
  },
  saveDungeon: function(){var key = document.getElementById("dungeon_name").value;
                          var dungeonString = JSON.stringify(DG.data);
						  localStorage[key] = dungeonString;
						  var dungeonSelect = document.getElementById("saved");
						  DG.populateSavedSelect();
						  },
  loadDungeon: function(){ console.log("load function entered");
    var dungeonSelect = document.getElementById("saved");
	var selectedKey = "";
	var dungeonData = "unloaded";
	if (dungeonSelect.selectedIndex == -1) {
	    alert("No dungeon selected to load");
        return null;
	};
	selectedKey = dungeonSelect.options[dungeonSelect.selectedIndex].text;
   	dungeonData = localStorage[selectedKey];
	if (dungeonData !== "unloaded"){
	  DG.data = JSON.parse(dungeonData);
	  DG.initNetwork();
	  document.getElementById("dungeon_name").text = selectedKey;
	  document.getElementById("dungeon_name").value = selectedKey;
	}
  },  

  deleteDungeon: function(){alert("This will remove the selected dungeon from localStorage after a confirm dialog")},
  exportDungeon: function(){alert("This will export contents to a text file when done")},  // export a file with the data structure
  importDungeon: function(){alert("This will import an exported data file and draw the dungeon when done")}, //import a file previously exported

  // Nodes and Linkage ------------------------------------------------------------------------
  linkStrats: {},  // complex enough for a separate breakout below
  allNodeIds: function(){ 
     var nodeIds = [];
     DG.data.nodes.forEach(function(node){
       nodeIds.push(node.id);
     });
     return nodeIds;
  },
  makeNode: function(id,label) { return { id: id, 
                                            shape: "box",
                                            fontSize: 14,
                                            color: {
                                              background: 'lightgray',
                                              border: 'gray',
                                              highlight: {
                                                background: 'lightgray',
                                                border: 'black'
                                              }
                                            },                                          
                                            label: label, 
                                            title: DG.makeTitle(DG.dungeonLevel), 
                                            group: ""};
  },
  makeEdge: function(startNode,endNode) { 
    return {from: startNode, to: endNode, label: this.randomEdgeLabel()};
  },
  linksOnNode: function(nodeId) { return edges = DG.data.edges.filter(function( edge ) {
   return (edge.from == nodeId || edge.to == nodeId); });
  },
  linkNodes: function(a,b){DG.data.edges.push(DG.makeEdge(a,b));},
  setRandomRoomCount: function(){
    DG.roomCount = DG.rollDie(DG.minRooms, (DG.maxRooms - DG.minRooms) );
	return DG.roomCount;
  },
  setBaseMonsters: function() {
    DG.data.baseMonsters = [DG.drawOne(DG.stock.monsters[DG.dungeonLevel])];
	if (DG.rollFour()){DG.data.baseMonsters.push(DG.drawOne(DG.stock.monsters[DG.dungeonLevel]))};
	if (DG.rollFour()){DG.data.baseMonsters.push(DG.drawOne(DG.stock.monsters[DG.dungeonLevel]))};
  },
  makeRooms: function(){
    DG.setBaseMonsters();
    for(var i = 0; i < DG.roomCount; i+=1){
      DG.data.nodes[i] = DG.makeNode(i, DG.nameNode(i+1) );
    }
  },

  nameNode: function(nodeNum){ 
    return "" + (nodeNum) + ": " + DG.randomNodeLabel()},  
  randomNodeLabel: function(){
    return this.drawOne(this.stock.nodeLabels)},
  randomEdgeLabel: function(){
    return this.drawOne(this.stock.edgeLabels)},
    
  // Node Content Randomization section ---------------------------------------------
  makeTitle: function(dungeonLevel){ 
    var title = "";
    var treasureRoll = 1;
    DG.monsterTreasureMultiplier = 1;

    if (DG.rollOne()){ title += DG.randomOddity(dungeonLevel);}
    if (DG.rollOne()){ title += DG.randomTrap(dungeonLevel);
                      treasureRoll += 1;
                       }
    if (DG.rollTwo()){ title += DG.randomMonsters(dungeonLevel);
                     treasureRoll += 2;
                     }
    // More monsters, chance of bigger mixed set, with high treasure odds
    if (DG.rollTwo()){ title += DG.randomMonsters(dungeonLevel);
                     treasureRoll += 2;
                     }
    if (DG.rollDie(1,6) <= treasureRoll){title += DG.randomTreasure(dungeonLevel)};
    if (DG.rollOne()){ title += DG.randomHook();}

    if (title == "") {title = "Empty"}
    return title; 
  },
  randomOddity: function(dungeonLevel){ 
    // ignoring dungeonLevel for now
    return DG.drawOne(DG.stock.oddities) + "<br/>"; },
  randomHook: function(){ 
    var hook = "Hook: " + DG.drawOne(DG.stock.hook_items)  + "<br/>";
    return hook},
  randomMonsters: function(dungeonLevel){ 
    var monsterLevel = dungeonLevel;
    var monsterCount = 1;
    var monsterType = "";
    var newMonsterTreasureMultiplier;
    var monsters = "";
    for (var i = 0; i < 3; i +=1){
      if (DG.rollOne()){ monsterLevel += 1;}
    }
    if (monsterLevel > 5) {
       monsterLevel = 5; }
    if (monsterLevel == dungeonLevel) { monsterCount += DG.rollDie(0,8); }  
    if (monsterLevel == dungeonLevel + 1){ monsterCount += DG.rollDie(0,3); }
    if (monsterLevel == dungeonLevel + 2){ monsterCount += DG.rollDie(0,1); }
    // have a chance of a large horde of lower monsters
    if ( monsterLevel == dungeonLevel && DG.rollTwo() && monsterLevel > 0 ){ 
      monsterLevel = monsterLevel - 1; 
      monsterCount *= 2;
      // can go two steps down
      if (DG.rollThree() && (monsterLevel > 0 )){ 
        monsterLevel = monsterLevel - 1; 
        monsterCount *= 2; 
      }
    }
	if (DG.rollThree()){
      monsterType = DG.drawOne(DG.stock.monsters[monsterLevel]);
	} else {
	// will let monster count stand, which will generate some group size outliers
	  monsterLevel = dungeonLevel;
	  monsterType = DG.drawOne(DG.data.baseMonsters);
	}
    // adjusting plurals - extract to a function soon
    if (monsterCount > 1){ 
      if ( monsterType.match(/man$/) ){
        monsterType = monsterType.replace(/man$/, "men");}
      else if ( monsterType.match(/y$/) ){
         monsterType = monsterType.replace(/y$/, "ies");}      
      else {
        monsterType += "s";
      }
    }
    
    // extract this
    newMonsterTreasureMultiplier = (monsterLevel * (monsterCount^0.75));
    DG.monsterTreasureMultiplier = Math.max(DG.monsterTreasureMultiplier,newMonsterTreasureMultiplier);
    monsters = "M: " +  monsterCount + " " + monsterType + "<br/>";
  
  return monsters;
  },
  valueFraction: function(treasureValue){ 
    return DG.rollDie(1,9) * 0.1 * treasureValue 
  },
  oneTreasure: function(treasureValue){
    var treasureCount = 1;
    var treasureType = DG.drawOne(DG.stock.treasure);
    if (treasureType["value"] < treasureValue){
      treasureCount = Math.floor(treasureValue/treasureType["value"]);
    }
    return treasureCount + " " + treasureType["label"];
  },
  randomTreasure: function(dungeonLevel){
    var hoard = "Ts: ";
    var treasureType = {};
    var treasureCount = 1;
    var treasureValue = ((1+dungeonLevel)^2.5) * 10;
    if (DG.rollTwo()){ treasureValue *= DG.rollDie(2,6) }
    if (DG.rollThree()){ treasureValue *= DG.rollDie(2,6) }
    treasureValue *= DG.monsterTreasureMultiplier;
    // going simple with one type initially
    // treasureType = DG.drawOne(DG.stock.treasure);
    // if (treasureType["value"] < treasureValue){
      // treasureCount = Math.floor(treasureValue/treasureType["value"]);
    // }
    hoard += DG.oneTreasure(treasureValue);
	// second treasure
	if (DG.rollThree()){
	  hoard += ", ";
	  hoard += DG.oneTreasure(DG.valueFraction(treasureValue));
      if (DG.rollThree()){
	    hoard += ", ";
	    hoard += DG.oneTreasure(DG.valueFraction(treasureValue)); 
	  }	  
	}
    hoard += "<br/>";
	if (DG.rollOne()){ 
      hoard += "Mg: " + DG.randomMinorMagicItem(dungeonLevel) + "<br/>";
    }
    if (DG.rollDie(1,1000) < treasureValue){ 
      hoard += "Mg: " + DG.randomMagicItem(dungeonLevel) + "<br/>";
    }
	if (DG.rollDie(0,9) <= dungeonLevel){ 
      hoard += "Mg: " + DG.randomMagicItem(dungeonLevel) + "<br/>";
    }
	if (DG.rollDie(1,8000) < treasureValue){ 
      hoard += "Mg: " + DG.randomMagicItem(dungeonLevel) + "<br/>";
    }
	if (DG.rollDie(1,20000) < treasureValue){ 
      hoard += "Mg: " + DG.randomMagicItem(dungeonLevel) + "<br/>";
    }
	
    return hoard; 
  },
  randomMagicItem: function(dungeonLevel){ // will need much more detail later and more items in big hoards
    var item = DG.drawOne(DG.stock.magicItems);
	if (item === "potion") { item = "Potion of " + DG.drawOne(DG.stock.potions)};
	if (item === "sword") { item = DG.genSword()};
	if (item === "weapon") { item = DG.genWeapon(dungeonLevel)};

	if (item === "armor") { item = DG.genArmor(dungeonLevel)};

	if (item === "wand") { item = DG.genWand(dungeonLevel)};
	if (item === "ring") { item = DG.genRing(dungeonLevel)};
	if (item === "staff") { item = DG.genStaff(dungeonLevel)};
	if (item === "book") { item = DG.genBook(dungeonLevel)};
	if (item === "scroll") { item = DG.genScroll(dungeonLevel)};
    if (item === "trinket") { item = DG.genTrinket(dungeonLevel)};
	if (item === "miscellaneous") { item = DG.genMisc(dungeonLevel)};

	return item;},
  randomMinorMagicItem: function(dungeonLevel){ // will need much more detail later and more items in big hoards
    var item = DG.drawOne(DG.stock.minorMagicItems);
	if (item === "potion") { item = "Potion of " + DG.drawOne(DG.stock.potions)};
	if (item === "scroll") { item = DG.genScroll(dungeonLevel)};
    if (item === "trinket") { item = DG.genTrinket(dungeonLevel)};
	return item;},
  genSword: function(dungeonLevel){
    var sword = DG.drawOne(DG.stock.swords);
	return sword;
  },
  genWeapon: function(dungeonLevel){
    var weapon = DG.drawOne(DG.stock.weapons);
	return weapon;
  },
  genArmor: function(dungeonLevel){
    var armor = DG.drawOne(DG.stock.armor);
	return armor;
  },
  genWand: function(dungeonLevel){
    var wand = "Wand of " + DG.drawOne(DG.stock.wands);
	return wand;
  },
  genRing: function(dungeonLevel){
    var ring = "Ring of " + DG.drawOne(DG.stock.rings);
	return ring;
  },
  genMisc: function(dungeonLevel){
    var misc = DG.drawOne(DG.stock.miscellaneous);
	return misc;
  },
  genStaff: function(dungeonLevel){
    var staff = "Staff of " + DG.drawOne(DG.stock.staves);
	return staff;
  },
  genBook: function(dungeonLevel){
    var book = DG.drawOne(DG.stock.books);
	return book;
  },
  genScroll: function(dungeonLevel){
    var scroll = DG.drawOne(DG.stock.scrolls);
	return scroll;
  },
  genTrinket: function(dungeonLevel){
    var trinket = DG.drawOne(DG.stock.trinkets);
	return trinket;
  },
  randomTrap: function(dungeonLevel){
  // will tie to dungeonLevel later
    var trap = DG.drawOne(DG.stock.traps);
	if (DG.rollTwo()){trap += " disarmed by " + DG.drawOne(DG.stock.disarms)}
	if (DG.rollThree()){trap += ", triggered by " + DG.drawOne(DG.stock.triggers)}

    return "Tp: " + trap + "<br/>";
  },
  
  // Dungeon Key table -------------------------------------------------
  fillKey: function() { 
  var dungeonKey = "<thead>\n<tr><th>Location</th><th>Description</th></tr>\n</thead><tbody>"
  var tl = "<tr id ='" 
  var tlm = "'><td class='dungen'>";
  var tm = "</td><td class='dungen'>";
  var tr = "</td></tr>";
  var node = {};
  var nodesLength = DG.data.nodes.length;
  for (i = 0; i < nodesLength; i +=1){
      node = DG.data.nodes[i];
      dungeonKey = dungeonKey + ( tl + node["id"] + tlm + node["label"] + tm + node["title"] + tr );
   }
   dungeonKey += "\n</tbody>";
   //This function will render out the labels and descriptions from 
   //DG.data.nodes into table#dungeon_key
   document.getElementById("dungeon_key").innerHTML = dungeonKey;
   document.getElementById("dungeon_key_for_printing").innerHTML = dungeonKey;
  },
  // Dig a dungeon ---------------------------------------------------------
  digDungeon: function(){
    var data = { nodes: null, edges: null };
    var levelSelect = document.getElementById("level");
	var sizeSelect = document.getElementById("size");
	var patternSelect = document.getElementById("pattern");
	var selectedSize = "5,5";
	var selectedPattern = patternSelect.options[patternSelect.selectedIndex].value;
	DG.data.nodes = [];
	DG.data.edges = [];
	DG.roomCount = 0;
    DG.edgeCount = 0;
    DG.dungeonLevel = parseInt(levelSelect.options[levelSelect.selectedIndex].value);
    selectedSize = sizeSelect.options[sizeSelect.selectedIndex].value;
    DG.minRooms = parseInt(selectedSize.split(",")[0]);
    DG.maxRooms = parseInt(selectedSize.split(",")[1]);
    DG.setRandomRoomCount();
 
    DG.makeRooms();

	switch (selectedPattern) {
    case "branch":
	  DG.linkStrats.branchLink(DG.allNodeIds());
	break;
	case "branch_loops":
	  DG.linkStrats.branchLink(DG.allNodeIds());
	  DG.linkStrats.randomLink(Math.floor(DG.roomCount/5) + 1);
	break;
	case "triangles":
	  DG.linkStrats.trianglesLink(DG.allNodeIds());
	  DG.linkStrats.randomLink(Math.floor(DG.roomCount/6) + 1);
	break;
	case "grid":
	  DG.linkStrats.gridLink();
	break;
	case "random":
	  DG.linkStrats.randomAllLink(Math.floor(DG.roomCount) + 2);
	break;
	case "mixed":
	
	break;
	default:
	}
	
    DG.initNetwork();
  }
  
};

// link strategies  --------------------------------------------------------------------
DG.linkStrats = {
  branchLink: function(roomIds) { console.log("branch");
    var nodes = roomIds.length;
    var linkedNodes = [];
    var unlinkedNodes =roomIds.slice();

    unlinkedNodes = DG.shuffle(unlinkedNodes);
    var currentNodeID = unlinkedNodes.pop();
    linkedNodes.push(currentNodeID);
    var toLink = currentNodeID;
    var newEdge = {}
    while (unlinkedNodes.length > 0 ){
       currentNodeID = unlinkedNodes.pop();
       DG.linkNodes(currentNodeID, toLink);
       linkedNodes.push(currentNodeID);
       toLink = linkedNodes[DG.rollDie(0,linkedNodes.length-1)];        
    }
  },
  linearLink: function(roomIds){ console.log("linear");
    for (var i = 0; i < roomIds.length -1; i+=1){
      var startEdge = i;
      var endEdge = startEdge + 1;
      DG.linkNodes(startEdge,endEdge);
    }
  },
  randomLink: function(linksToMake){ console.log("random");
    for(var i = 0; i < linksToMake; i+=1){
     var startEdge = DG.rollDie(0,DG.roomCount-1);
     var endEdge = DG.rollOther(0,DG.roomCount-1,startEdge);
     DG.linkNodes(startEdge,endEdge);}
  },
  randomAllLink: function(linksToMake){ console.log("randomAll");
    DG.linkStrats.randomLink(linksToMake);
    var nodes = DG.allNodeIds().slice();
	  
	var linkedNodes = [];
	DG.data.edges.forEach(function(edge){linkedNodes.push(edge["from"])});
	DG.data.edges.forEach(function(edge){linkedNodes.push(edge["to"])});
    console.log(linkedNodes);
	var unlinkedNodes = nodes.remove.apply(nodes,linkedNodes);
 
	unlinkedNodes.map(function(node){DG.linkNodes(node,(linkedNodes.pop() || 1));});
  },
  trianglesLink: function(roomIds){ console.log("triangles");
   var nodesCount = roomIds.length;
   var unlinkedNodes = roomIds.slice();
   var linkedNodes = [];
   var triangle = [];
   var triangles = [];
   while(unlinkedNodes.length > 2){
      triangle = unlinkedNodes.splice(0,3);
      linkedNodes += triangle;
      DG.linkNodes(triangle[0],triangle[1]);
      DG.linkNodes(triangle[0],triangle[2]);
      DG.linkNodes(triangle[1],triangle[2]);
      triangles.push(triangle);
   }
   for(var i = triangles.length -1; i > 0; i-= 1){
     DG.linkNodes(triangles[i][0],triangles[i-1][1]);
     //DG.linkNodes(triangles[i][0],triangles[i-1][2]);
     //DG.linkNodes(triangles[i][1],triangles[i-1][2]);
   } 
   unlinkedNodes.map(function(node){DG.linkNodes(node,node - 1)});
  },
  gridLink: function(){ console.log("grid");
    var rowLength = Math.floor(Math.sqrt(DG.roomCount)) + DG.rollDie(0,3);
	var gridArray = [[]];
	var gridRow = 0;
	var nodes = DG.data.nodes.length;
	var gridCol = 0;
	// lay out room objects into a 2D grid array
	for (var i = 0; i < nodes; i+=1){
    
      gridArray[gridRow][gridCol] = DG.data.nodes[i].id;
	  if (gridCol == (rowLength -1)){
		 gridCol = 0;
		 gridRow += 1;
		 gridArray[gridRow] = [];
	  } else {
		 gridCol += 1;
	  }
	}  /* Should have a grid of references to node IDs at end of loop, accounting for all nodes. The last row may be short. */

	for(var r = 0; r < gridArray.length -1; r +=1){
	  for (var c = 0; c < gridArray[r+1].length; c += 1){
	     console.log(gridArray[r][c],gridArray[r+1][c]);
         DG.linkNodes(gridArray[r][c],gridArray[r+1][c]);
      }
	  for (var c = 0; c < gridArray[r].length; c += 1){
	    console.log(gridArray[r][c],gridArray[r][c+1]);
         DG.linkNodes(gridArray[r][c],gridArray[r][c+1]);
      }	  
	}
  }
};


