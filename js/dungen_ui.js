// UI elements

var exportButton = document.getElementById("export");
exportButton.addEventListener("click", function () {
	DG.ui.exportDungeon();
});

var importButton = document.getElementById("import");
importButton.addEventListener("click", function () {
	DG.ui.importDungeon();
});

var replaceButton = document.getElementById("replace");
replaceButton.addEventListener("click", function () {
	var textFrom = $('#text_from').val();
	var textTo = $('#text_to').val();
	DG.replaceText(textFrom, textTo);
	return false;
});

$('#notes').change(function () {
	DG.data.notes = $(this).val();
});

$('#settlements').change(function () {
	DG.data.settlements = DG.splitToArray($(this).val());
});

$('#wandering_monsters').change(function () {
	DG.data.wandering_monsters = $(this).val().split("\n");
});

$('#organizations').change(function () {
	DG.data.organizations = $(this).val().split("\n");
});

$('#monster_relations').change(function () {
	DG.data.monster_relations = $(this).val().split("\n");
});

// $("#notes").on("clearText", function () {
//   $(this).val('');
//   DG.data.notes = $(this).val();
// });

function populateUI() {
}

DG.ui = {
	populateMonsterRelations: function () {
		$("#monster_relations").val(DG.monsterRelationsNote());
		DG.data.monster_relations = $("#monster_relations").val().split("\n");
	},
	populateWanderingMonsters: function () {
		$("#wandering_monsters").val(DG.wanderingMonstersNote());
		DG.data.wandering_monsters = $("#wandering_monsters").val().split("\n");
	},
	populateOrganizations: function () {
		$("#organizations").val(DG.organizationsNote());
		DG.data.organizations = $("#organizations").val().split("\n");
	},
	populateSettlements: function () {
		// should store into DG.data.settlements
		$("#settlements").val(DG.settlementsNote());
		DG.data.settlements = DG.splitToArray($("#settlements").val());
	},
	displaySettlements: function () {
		DG.ui.loadDataNote(DG.data.settlements, $("#settlements"));
	},
	populateNotesFields: function () {
		$("#notes").val(DG.data.notes);
		DG.ui.populateSettlements();
		DG.ui.populateMonsterRelations();
		DG.ui.populateWanderingMonsters();
		DG.ui.populateOrganizations();
	},
	loadNotesFields: function () {
		$("#notes").val(DG.data.notes);
		DG.ui.loadDataNote(DG.data.monster_relations, $("#monster_relations"));
		DG.ui.loadDataNote(DG.data.wandering_monsters, $("#wandering_monsters"));
		DG.ui.loadDataNote(DG.data.organizations, $("#organizations"));
		DG.ui.loadDataNote(DG.data.settlements, $("#settlements"));
	},
	loadDataNote: function (data, jq_note) {
		var len = data.length;
		var noteText = "";
		for (var s = 0; s < len; s++) {
			var dataLine = data[s];
			noteText += dataLine + '\n';
		}
		jq_note.val(noteText);
	},

	exportDungeon: function () {
		var dungeonString = JSON.stringify(DG.data);
		$("#export-import").val(dungeonString);
	},  // export a file with the data structure

	importDungeon: function () {
		var dungeonData = $("#export-import").val();
		DG.data = JSON.parse(dungeonData);
		DG.updateSettlementsData(DG.data.settlements);
		DG.initNetwork();
		DG.ui.loadNotesFields();
	} //import a file previously exported
}

$(document).ready(function() {
	DG.view.init();
});
