// UI elements

DG.ui = {
	mapBackgrounds: [
		// commenting out maps that have disappeared from googleusercontent. keeping for restoration once I find the images again.
		//['EA: River Cavern 1', 'https://lh3.googleusercontent.com/-hbgHpKa5fx4/Vph1EQDU3XI/AAAAAAAADKQ/XsaDJ2DTJc0/w530-h747-p-rw/16%2B-%2B1'],
		// ['EA: River Cavern 2', 'https://lh3.googleusercontent.com/-sMEfIC-VvIo/VxsIUEqniQI/AAAAAAAADgQ/A6XxTqtdmnUbtOzUJNgWC530reTX8jugw/w530-h747-p-rw/f1aeb0dd-b0b1-4ac5-b92a-5fb00971fdd1'],
		['EA: Megadungeon Level 1', 'http://4.bp.blogspot.com/-0pr_RVQvg-8/VDYZ2G7RZvI/AAAAAAAAB7g/nh3T30dPSEs/s1600/Level1.png'],
		['EA: Great Hall', 'http://1.bp.blogspot.com/-eYinXW0HVSw/VDDyu4oliXI/AAAAAAAAB6M/VED9x6DcxdQ/s1600/great%2Bhall-partially%2Bedited.png'],
		['EA: Shadowkarst', 'http://3.bp.blogspot.com/-2fhW-crpV44/U-fupnMFSGI/AAAAAAAABhA/HtcHzc7QfmE/s1600/Shadownkarst.png'],
		["EA: The Devil's Staircase", 'https://4.bp.blogspot.com/-2_86MwGxbiE/UvEr6D_mVBI/AAAAAAAAAtI/SZOwC3_h7TA/s1600/devils_staircase.png'],
		['EA: Jagged Dungeon', 'http://3.bp.blogspot.com/-U24J91n4lkU/VkGNG59iDAI/AAAAAAAAC84/tV1hUf2vaAA/s1600/ragged_dungeon.png'],
		["EA: Fool's Rest", 'http://1.bp.blogspot.com/-ApTeB99Mm3w/UzsnXvsbloI/AAAAAAAABPM/zuFgEED7ezQ/s1600/dungeon0401.jpg'],
		['EA: Rough Stone Tomb', 'http://4.bp.blogspot.com/-uw6z3dJxS2E/VA53qig107I/AAAAAAAABn4/EwTFgIWLt6o/s1600/big_rock_walls_1.png'],
		['EA: Rough Tombs', 'http://3.bp.blogspot.com/-xBFa8wO5LdY/VA5smHdNqpI/AAAAAAAABno/WugXGscb3Ls/s1600/big_rock_walls_2.png'],
		['EA: Temple of the Weeping Moon', 'http://2.bp.blogspot.com/-7T6nhIddjN4/U348B7PsctI/AAAAAAAABco/92QsKAVa9Gk/s1600/temple+of+the+weeping+moon-shrunk-edited.png'],
		['EA: Small Stone Chain Walls', 'http://2.bp.blogspot.com/-JpzHDN3kKF0/VA5sgJIqJnI/AAAAAAAABnY/U-Xx1BtK35A/s1600/stone_walls_curve.png'],
		//['EA: Small linking section', 'https://lh4.googleusercontent.com/-nXJcYZCCLS8/VCGYJnLpioI/AAAAAAAABp4/RaAquIMMQa0/w654-h872-no/14%2B-%2B1'],
		['EA: Rough Hewn Tunnels', 'http://2.bp.blogspot.com/-QA8aIrlCC-g/Uw-dU17N7YI/AAAAAAAABE8/DSYLmNCCXv4/s1600/tunnel_level.png'],
		['EA: A big dungeon', 'https://lh3.googleusercontent.com/-P8n-7Ccvscs/VCZO4tzEB-I/AAAAAAAABvs/E481fifRiTg/w1020-h794-no/big_dungeon_level.png'],
		['EA: Cave-in Coming', 'http://1.bp.blogspot.com/-SZLU3p7h7gA/UxE4PSxcxXI/AAAAAAAABFM/tNZn_o2u7Lk/s1600/crack+tunnels.png'],
		//['EA: Geomorphs Dungeon photo', 'https://lh3.googleusercontent.com/dgzE3gNG2FaPAIMnBcVEBXQHsQ-bYQ3KEVoAsggEDjHH572jZ__JjBQRbZo_kYKoISZKb1uK8GcCo9-cUKWqCUnRV-7iA5g6pLLfhUdAi3tXfQ_41q7gmVUlKWtXKdaQvHL-tDqVUTdhW7hKznujwQNVm8TAcTjEqSY1FnJ7VMwyRa0qu5Gr01pbeW3tes9eQQl4XnMdTKSrGZyHMRyp7Ov5PFAgkJlqFo4GLARS143hZOEInmDSd-MuxL8IvQNjWReNXyQlxQLLZpiFwpjOlrnPVSWyxJbsDCYfYyMk5uv_lHkONWMGXfV12WNhCkzM5gd6FAwifmhekzGOcbhYH0nNWmrTNyNaOh4Fk2N_i6wWevtd3PbF_t0uRBLhZTfTEw5iXIVcdJgCUG4vyV02ypOarNIwg4fiWe1K434-u1LPzvNdrBJMXsqpVj0vRTY4IzVG8-gEqO_hTFVDyPEPFN9mYBH-WBwT0DNBqIPL1v-gNPM1pCEdAC9QYFHY4Ia99Gv4iejc2nwlxh9AR-Mj_T6HOIcp3doxa7HiHG9gTWU=w1342-h755-no'],
		//['EA: Rough stone entrance', 'https://lh3.googleusercontent.com/bR3C0FrTtCh_ExamSzbGKJayieEm4u1YsRa90-mIBmwNvtnWRGHsWil34XhPXJWS0XZf2XOE-TM_ebbqu-EHdq-55Rn10b8d70hTvxElsvWLK6NBORswuYEyGAnuFZ1cFbP1lGSfY3p2PUD3A0vv-682VHFmvr-RM7xb7edh96N3x_mnszk-PSlLB6nj2ejWQta-UkkmD8zP3E56Dg5b2MvW7jsjaRVq1kRhtP-DJpE70c4R1BjeVxlI_Skuz4bOXD7n8b0EXuovVhlq34CRsgOuvuQ0a8AvdZ56JlghBhgAZcmRMwtKKfi3gfeNultDnUbZqBM1APmRbb_cyISz51alkQ4Il4Ah-wfTF78MaQ0L6h9uFzoETwJNt_SQAWFTA4AjSM_iBWqg_Ecri9bJSgFQOgmGYSISsGJzQgDbAydavKV1Mibr1A5dtOGoCzGau2bCcXvYe7ZggPiQ5fJnxGczl__K9jKQnGchXRzeZPFBqMQXmZuxIkZqiB1RrkY3q3MjoIiseY9hBiTI1DcLe2_hiudQMthZZRIchm_wVZM=w722-h962-no'],
		['EA: Mesa Cavern', 'http://3.bp.blogspot.com/-_PMt8rAX51k/Uwa2wLcd_JI/AAAAAAAABCo/uPbpardiSbU/s1600/mesacavern.png'],
		//  ['EA: Ximbros photo','https://lh3.googleusercontent.com/66hNS5MJZ5ZTnOHHqB7gx0dmjrptC_H88tQU2fG8npweQ5sEHHKfbdthUJTUdD3--roVqTXQnrd0-OegHrLqHV5376aCwbZvTBxJP6H198Hj1yHNo2BgqlreQZBLlqv3jkncyU6yOjO8s_mo-_CaRF2QxI7bO8bb3BZ4c3r6j0GghTu8Yxpk-QbO2v7WZ4p7R5P4fQ1XX8onizcPVxoRH7ZyfpKZFVc8D7GEisj_0uDYyshmKF9MYhMfBItgCg65afAUjMPbmvW0tcAW8XGhja9ymbHKt-FDISOTSSRJjCs5B8egSoIHVRS1ADu93y0-BRYeZ6HkVEcK_DxN8TWrcTEVoOni2ChG3uk4Iia1ObDSNBWpz-SRmfLXHdsu4BbpqkucHEqfdOgV3-BQuIUZtJ7_qLEL2VBtcokdmAl2VYvedtFSamEH9iNk9JmBBV7FzHW3rlfDwYUozbW50EvNRMUzrtZ7jC0efTlcFIrlgUSglLK73rev_qWgWJjJJF3Cg8h09ZdUbcVVjQ7NcA_Houi5PYuGw7Y3L0NrDMjBuh0=w628-h962-no'],
		['EA: Temple of the Dead God', 'http://1.bp.blogspot.com/-sdcyf4396y0/UvVtz6P8DmI/AAAAAAAAA4g/4PCp5W947Y8/s1600/cross_room_complete_low_rez.png'],
		['EA: Heart of the Spider', 'http://3.bp.blogspot.com/-EdnCE-dbgdA/Uu1Bm6ubRqI/AAAAAAAAAqM/jApU2XwJd5A/s1600/HeartOfTheSpider.jpeg'],
		["EA: Brant's Bolthole", 'http://4.bp.blogspot.com/-RBrUJSPRreo/Uuqcw1e9VMI/AAAAAAAAAno/fXs5rTG6l3Y/s1600/Screen+shot+2014-01-30+at+10.40.33+AM.png'],
		['EA: Magister Mixtos', 'http://3.bp.blogspot.com/-o4wEGT9jJW0/UuiudVx8YhI/AAAAAAAAAnQ/GJ18iMu1uyE/s1600/Scan2copy_rotated.png'],
		['EA: Skrad', 'http://1.bp.blogspot.com/-TpQ0CMt3dVs/Utg7BFF6N0I/AAAAAAAAAkA/S9RK_1nC8Jc/s1600/skrad.png'],
		['EA: Domes and Caverns', 'http://1.bp.blogspot.com/-wieANdIIK2g/UxoJcCTWQXI/AAAAAAAABH4/PAjr-Z5QsY8/s1600/domes+and+caverns.png'],
		['EA: The Nameless Dungeon', 'http://1.bp.blogspot.com/-miHpMzOUvAw/Us0DbidxgrI/AAAAAAAAAh0/JU_S6q4yV0E/s1600/cavern_dungeon_2.png'],
		['EA: Caverns of the Western Reaches', 'http://1.bp.blogspot.com/-Nt_FdApKNgQ/Ut2T04OK9YI/AAAAAAAAAks/PCpRXH7SuK4/s1600/caves_again.png'],
		['EA: CrystalMek', 'http://3.bp.blogspot.com/-sRAcYkKWYA8/Ut28goEiVeI/AAAAAAAAAk8/NXfqRphcYuI/s1600/crystalline.png'],
		['EA: The Ouroburrows', 'http://1.bp.blogspot.com/-scLmOA11ZUM/Ul2XOHkw1yI/AAAAAAAAAXI/iUxUxGMT8s0/s1600/Ouroburrows.png'],
		//['EA: The Folly','https://lh3.googleusercontent.com/-DB54mH9tkUk/U-21w4KhGQI/AAAAAAAABh4/iAp6U4KsVTc/w1020-h765-no/14%2B-%2B1'],
		['EA: A City in Ruin', 'http://1.bp.blogspot.com/-2PbIGcAFP_M/UlsQoRDojgI/AAAAAAAAAWs/d8wm8zlatXw/s1600/City+map.png'],
		['EA: Chasm Geomorph', 'http://2.bp.blogspot.com/-gyk_sXR5Ym0/Uz4VoMbOsPI/AAAAAAAABQM/iqp7x80DWlA/s1600/geomorph_chasm_clean.jpg'],
		['EA: Not Quite a Geomorph', 'http://2.bp.blogspot.com/-igIFdYynfUk/Uv0hgrLv_bI/AAAAAAAAA94/Mw55QqllNCw/s1600/ungeomorph1-2.png'],
		['EA: Krita Caves', 'http://3.bp.blogspot.com/-hW1Y8-hiz4g/UsN-8EM2t1I/AAAAAAAAAg8/qm1Jhrpvxs4/s1600/caverns.jpg'],
		['EA: Krita Dungeon', 'http://1.bp.blogspot.com/-YMrv9zlsnv0/UsNsnO2Pc_I/AAAAAAAAAgs/dybuBokzZzA/s1600/dyson-like.jpg'],
		['EA: More Caves', 'http://4.bp.blogspot.com/-5g1AWQGAsHA/Ut2-oQwMThI/AAAAAAAAAlI/3Bq597ifAO4/s1600/more_caves.png'],
		['EA: Tile 2', 'http://2.bp.blogspot.com/-kvWak71_es4/Uv683XYjGoI/AAAAAAAAA_Y/hBjo-7T1N_o/s1600/tile+2.png'],
		['EA: Diced Dungeon', 'http://4.bp.blogspot.com/-wpRGkFDpfL8/U2J1Xeex_jI/AAAAAAAABTY/GiToJaz-Y1U/s1600/rando_mize_dungeon.png'],
		['EA: A Tunnels Level', 'http://3.bp.blogspot.com/-tHxEnOu6xlc/Uwa-HyY-WgI/AAAAAAAABDA/eCDilDdIdnY/s1600/tunnels.png'],
		['EA: Tile of Doom', 'http://2.bp.blogspot.com/-7Ft0eaIaUXw/UxIyq6nVBgI/AAAAAAAABFo/ZnbsE9Bf7Qo/s1600/tile3-hc.png'],
		//["EA: Smugglers' Stronghold elevation photo", 'https://lh5.googleusercontent.com/-yxgsgJ8k51s/Vdiig4qioBI/AAAAAAAACqI/jaaozySIP9Y/w1020-h765-no/15%2B-%2B1'],
		['EA: Dunport', 'http://1.bp.blogspot.com/-RQalYHN3rGc/UsyVGqG6EHI/AAAAAAAAAhg/G5F5PLI1618/s1600/port+map.png'],
		['BL: Herstmonceux upstairs', 'http://3.bp.blogspot.com/-ntum4mhsiMQ/Uv8rAya18bI/AAAAAAAAA_o/URlGCguamss/s1600/Herstmonceux_BL.png'],
		['BL: Herstmonceux ground', 'http://2.bp.blogspot.com/--sJX2iznte8/Uv8rGi4wDII/AAAAAAAABAA/9iN89fYfMmU/s1600/herstmonceux_ground_floor_plan_BL.png']
	],
	solidColorList: ['gray', 'black', 'red', 'green', 'blue', 'maroon', 'brown', 'darkblue', 'gunmetal'],
	bgColorList: ['white', 'wheat', 'salmon', 'lightblue', 'lightgreen', 'lightgray', 'gray', 'black', 'red', 'green', 'blue', 'maroon', 'brown', 'darkblue', 'gunmetal'],
	shapeList: ['box', 'ellipse', 'circle', 'database', 'text', 'diamond', 'dot', 'star', 'triangle', 'triangleDown', 'square'],
	widthList: ['0', '1', '2', '3', '4', '5', '6', '8', '10'],
	radiusList: ['0', '1', '2', '3', '4', '5', '6', '8', '10'],
	sizeList: ['3', '5', '8', '10', '15', '20', '25', '30'],
	textSizeList: ['10', '12', '14', '16', '18', '20', '22', '24', '28', '32', '36', '40'],

	displaySettlements: function() {
		$('#settlements').val(DG.data.settlements.join('\n'));
	},

	populateNotesFields: function() {
		$('#notes').val(DG.data.notes);
		$('#settlements').val(DG.settlementsNote()).change();
		$('#monsterRelations').val(DG.monsterRelationsNote()).change();
		$('#wanderingMonsters').val(DG.wanderingMonstersNote()).change();
		$('#organizations').val(DG.organizationsNote()).change();
	},

	loadNotesFields: function() {
		$('#notes').val(DG.data.notes);
		$('#settlements').val(DG.data.settlements.join('\n'));
		$('#monsterRelations').val(DG.data.monsterRelations.join('\n'));
		$('#wanderingMonsters').val(DG.data.wanderingMonsters.join('\n'));
		$('#organizations').val(DG.data.organizations.join('\n'));
	},

	selectControl: function(selectCtrl, options, currentVal) {
		selectCtrl.empty();
		options.forEach(opt => {
			if (opt instanceof Array) {
				selectCtrl.append($('<option>', {value: opt[0], text: opt[1]}));
			} else { // opt is a string
				selectCtrl.append($('<option>', {value: opt, text: opt}));
			}
		});
		selectCtrl.val(currentVal).change();
	},

	checkBoxSet: function(panel, allTags, tagData) {
		panel.empty();
		for (let i = 0; i < allTags.length; i++) {
			let tagId = panel.attr('id') + '-' + allTags[i];
			$('<input>').attr({
				type: 'checkbox',
				autocomplete: 'off',
				class: 'btn-check',
				checked: tagData.indexOf(allTags[i]) !== -1,
				id: tagId,
				name: allTags[i],
				value: allTags[i],
			}).appendTo(panel);
			$('<label>').attr({
				class: 'btn btn-outline-success',
				for: tagId,
			}).text(allTags[i]).appendTo(panel);
		}
	},

	init: function() {
		DG.ui.initEditEdgeDialog();
		DG.ui.initSelectThemeDialog();
		DG.ui.initStyleDialog();
		DG.ui.initNodeDialog();
		DG.ui.initSaveMapDialog();
		DG.ui.initLoadMapDialog();
		DG.ui.initDeleteMapDialog();
		DG.ui.initLoadMapBgDialog();
		DG.ui.initMenu();
		DG.ui.initExportMapDialog();
		DG.ui.initImportMapDialog();
		DG.ui.initFields();
	},

	initEditEdgeDialog: function() {
		let dialog = $('#editEdgeModal');
		DG.ui.selectControl(dialog.find('#edgeColor'), DG.ui.solidColorList, DG.ui.solidColorList[0]);
	},

	initSelectThemeDialog: function() {
		let dialog = $('#selectThemeModal');
		DG.ui.checkBoxSet(dialog.find('#monsterTags'), DG.stock.monsterTags, DG.data.monsterTags);
		DG.ui.checkBoxSet(dialog.find('#nodeTags'), DG.stock.nodeTags, DG.data.nodeTags);
		DG.ui.checkBoxSet(dialog.find('#edgeTags'), DG.stock.edgeTags, DG.data.edgeTags);
		dialog.find('#theme-btn-use').click(() => {
			let monsterTags = dialog.find('#monsterTags input:checked').map(() => this.value).get();
			let nodeTags = dialog.find('#nodeTags input:checked').map(() => this.value).get();
			let edgeTags = dialog.find('#edgeTags input:checked').map(() => this.value).get();
			DG.data.monsterTags = monsterTags;
			DG.data.nodeTags = nodeTags;
			DG.data.nodeTable = DG.filterListByTags(DG.stock.nodeLabels, nodeTags);
			DG.data.edgeTags = edgeTags;
			DG.data.edgeTable = DG.filterListByTags(DG.stock.edgeLabels, edgeTags);
			DG.data.detailsTable = DG.filterListByTags(DG.stock.details, nodeTags);
		});
		dialog.find('#theme-btn-any').click(() => {
			dialog.find('#monsterTags input, #nodeTags input, #edgeTags input').prop('checked', false);
			DG.data.monsterTags = [];
			DG.data.nodeTags = [];
			DG.data.nodeTable = [];
			DG.data.edgeTags = [];
			DG.data.edgeTable = [];
		});
	},

	initStyleDialog: function() {
		let dialog = $('#styleModal');
		dialog.find('#style-fontFace').val(DG.data.style.fontFace);
		DG.ui.selectControl(dialog.find('#style-nodeTextSize'), DG.ui.textSizeList, DG.data.style.fontSize);
		DG.ui.selectControl(dialog.find('#style-fontColor'), DG.ui.bgColorList, DG.data.style.fontColor);
		DG.ui.selectControl(dialog.find('#style-bgColor'), DG.ui.bgColorList, DG.data.style.bgColor);
		DG.ui.selectControl(dialog.find('#style-borderColor'), DG.ui.solidColorList, DG.data.style.border);
		DG.ui.selectControl(dialog.find('#style-shape'), DG.ui.shapeList, DG.data.style.shape);
		DG.ui.selectControl(dialog.find('#style-nodeSize'), DG.ui.sizeList, DG.data.style.size);
		DG.ui.selectControl(dialog.find('#style-boxBorderRadius'), DG.ui.radiusList, DG.data.style.borderRadius);
		DG.ui.selectControl(dialog.find('#style-borderWidth'), DG.ui.widthList, DG.data.style.borderWidth);
		DG.ui.selectControl(dialog.find('#style-edgeWidth'), DG.ui.widthList, DG.data.style.edges.width);
		DG.ui.selectControl(dialog.find('#style-edgeColor'), DG.ui.solidColorList, DG.data.style.edges.color.color);
		dialog.find('#style-btn-use').click(() => {
			DG.data.style.fontFace = dialog.find('#style-fontFace').val();
			DG.data.style.fontSize = parseInt(dialog.find('#style-nodeTextSize').val());
			DG.data.style.fontColor = parseInt(dialog.find('#style-fontColor').val());
			DG.data.style.bgColor = dialog.find('#style-bgColor').val();
			DG.data.style.highlightBgColor = DG.data.style.bgColor;
			DG.data.style.border = dialog.find('#style-borderColor').val();
			DG.data.style.edges.width = dialog.find('#style-edgeWidth').val();
			DG.data.style.edges.color.color = dialog.find('#style-edgeColor').val();
			DG.data.style.borderWidth = dialog.find('#style-borderWidth').val();
			DG.data.style.shape = dialog.find('#style-shape').val();
			DG.data.style.size = parseInt(dialog.find('#style-nodeSize').val());
			DG.data.style.borderRadius = parseInt(dialog.find('#style-boxBorderRadius').val());
		});
		dialog.find('#style-btn-apply').click(() => {
			DG.data.style.fontFace = dialog.find('#style-fontFace').val();
			DG.data.style.fontSize = parseInt(dialog.find('#style-nodeTextSize').val());
			DG.data.style.fontColor = parseInt(dialog.find('#style-fontColor').val());
			DG.data.style.bgColor = dialog.find('#style-bgColor').val();
			DG.data.style.highlightBgColor = DG.data.style.bgColor;
			DG.data.style.border = dialog.find('#style-borderColor').val();
			DG.data.style.edges.width = dialog.find('#style-edgeWidth').val();
			DG.data.style.edges.color.color = dialog.find('#style-edgeColor').val();
			DG.data.style.borderWidth = dialog.find('#style-borderWidth').val();
			DG.data.style.shape = dialog.find('#style-shape').val();
			DG.data.style.size = parseInt(dialog.find('#style-nodeSize').val());
			DG.data.style.borderRadius = parseInt(dialog.find('#style-boxBorderRadius').val());

			DG.data.nodes.forEach(node => {
				node.font.face = DG.data.style.fontFace;
				node.font.size = DG.data.style.fontSize;
				node.font.color = DG.data.style.fontColor;
				node.borderWidth = DG.data.style.borderWidth;
				node.color.background = DG.data.style.bgColor;
				node.color.highlight.background = DG.data.style.highlightBgColor;
				node.color.border = DG.data.style.border;
				node.shape = DG.data.style.shape;
				node.size = DG.data.style.size;
				node.shapeProperties.borderRadius = DG.data.style.borderRadius;
			});
			DG.data.edges.forEach(edge => {
				edge.width = DG.data.style.edges.width;
				edge.color = DG.data.style.edges.color;
			});

			DG.initNetwork();
		});
		dialog.find('#style-btn-reset').click(() => {
			$.extend(DG.data.style, DG.defaultStyle);
			dialog.find('#style-fontFace').val(DG.data.style.fontFace);
			dialog.find('#style-nodeTextSize').val(DG.data.style.fontSize).change();
			dialog.find('#style-fontColor').val(DG.data.style.fontColor).change();
			dialog.find('#style-bgColor').val(DG.data.style.bgColor).change();
			dialog.find('#style-borderColor').val(DG.data.style.border).change();
			dialog.find('#style-shape').val(DG.data.style.shape).change();
			dialog.find('#style-nodeSize').val(DG.data.style.size).change();
			dialog.find('#style-boxBorderRadius').val(DG.data.style.borderRadius).change();
			dialog.find('#style-borderWidth').val(DG.data.style.borderWidth).change();
			dialog.find('#style-edgeWidth').val(DG.data.style.edges.width).change();
			dialog.find('#style-edgeColor').val(DG.data.style.edges.color.color).change();
		});
	},

	initNodeDialog: function() {
		let dialog = $('#nodeModal');
		dialog.find('#node-btn-reroll').click(() => {
			let contents = DG.brToLf(DG.makeContents(DG.data.dungeonLevel));
			dialog.find('#nodeDescription').val(contents);
		});
		DG.ui.selectControl(dialog.find('#node-nodeTextSize'), DG.ui.textSizeList, DG.data.style.fontSize);
		DG.ui.selectControl(dialog.find('#node-fontColor'), DG.ui.bgColorList, DG.data.style.fontColor);
		DG.ui.selectControl(dialog.find('#node-bgColor'), DG.ui.bgColorList, DG.data.style.bgColor);
		DG.ui.selectControl(dialog.find('#node-borderColor'), DG.ui.solidColorList, DG.data.style.border);
		DG.ui.selectControl(dialog.find('#node-shape'), DG.ui.shapeList, DG.data.style.shape);
		DG.ui.selectControl(dialog.find('#node-nodeSize'), DG.ui.sizeList, DG.data.style.size);
		DG.ui.selectControl(dialog.find('#node-boxBorderRadius'), DG.ui.radiusList, DG.data.style.borderRadius);
		DG.ui.selectControl(dialog.find('#node-borderWidth'), DG.ui.widthList, DG.data.style.borderWidth);
	},

	initSaveMapDialog: function() {
		let dialog = $('#saveMapModal');
		dialog.find('#save-map-btn-ok').click(() => {
			let key = dialog.find('#dungeonName').val();
			let json = JSON.stringify(DG.data);
			localStorage[key] = json;
			DG.data.mapName = key;
			$('#menu-delete-map').removeClass('disabled');
		});
	},

	initLoadMapDialog: function() {
		let dialog = $('#loadMapModal');
		let selectCtrl = dialog.find('#savedDungeons');
		let loadBtn = dialog.find('#load-map-btn-ok');
		dialog.on('show.bs.modal', evt => {
			let keys = [];
			for (i = 0; i < localStorage.length; i++) {
				key = localStorage.key(i);
				keys.push(key);
			}
			if (keys.length === 0) {
				selectCtrl.empty();
				loadBtn.addClass('disabled');
				return;
			}
			let curName = DG.data.mapName.length > 0 ? DG.data.mapName : keys[0];
			DG.ui.selectControl(selectCtrl, keys, curName);
			loadBtn.removeClass('disabled');
		});
		loadBtn.click(() => {
			let selectedKey = selectCtrl.val();
			let json = localStorage[selectedKey];
			if (json === 'unloaded') {
				alert('Failed to load dungeon "' + selectedKey + '"!');
				return;
			}

			$('#saveMapModal #dungeonName').val(selectedKey);
			$('#menu-delete-map').removeClass('disabled');

			let savedData = JSON.parse(json);
			DG.data = $.extend(DG.data, savedData);
			DG.updateSettlementsData(DG.data.settlements);
			DG.ui.setMapBackground(DG.data.imageSource);
			DG.loadMapBackground();
			DG.initNetwork();
			DG.ui.loadNotesFields();
			// update styles loaded from saved dungeons, without losing styles that are actually set
			DG.data.style = $.extend(DG.data.style, DG.data.defaultStyle);
			DG.data.style = $.extend(DG.data.style, savedData.style);
			DG.data.mapName = selectedKey;
			// might have to go deeper...
		});
	},

	initDeleteMapDialog: function() {
		let dialog = $('#deleteMapModal');
		dialog.on('show.bs.modal', evt => {
			dialog.find('#map-key').text(DG.data.mapName);
		});
		dialog.find('#delete-map-btn-ok').click(() => {
			localStorage.removeItem(DG.data.mapName);
			DG.data.mapName = '';
			$('#saveMapModal #dungeonName').val('');
			$('#menu-delete-map').addClass('disabled');
		});
	},

	initLoadMapBgDialog: function() {
		let dialog = $('#loadMapBgModal');
		let selectCtrl = dialog.find('#mapBgs');
		let backgrounds = DG.ui.mapBackgrounds.map(item => [item[1], item[0]]);
		DG.ui.selectControl(selectCtrl, backgrounds, backgrounds[0]);
		selectCtrl.on('change', e => DG.loadMapBackground(selectCtrl.val()));

		let alert = dialog.find('.alert');
		dialog.on('show.bs.modal', evt => alert.hide());
		dialog.find('#loadMap-btn-load').click(() => {
			let url = dialog.find('#otherMapBg').val();
			if (url) {
				DG.loadMapBackground(url);
			} else {
				alert.show();
			}
		});
	},

	getMapBackground: function() {
		let dialog = $('#loadMapBgModal');
		return dialog.find('#otherMapBg').val() || dialog.find('#mapBgs').val();
	},

	setMapBackground: function(url) {
		let dialog = $('#loadMapBgModal');
		let selectCtrl = dialog.find('#mapBgs');
		let inputCtrl = dialog.find('#otherMapBg');
		if (selectCtrl.find('option[value="' + url + '"]').length != 0) {
			selectCtrl.val(url);
			inputCtrl.val('');
		} else {
			inputCtrl.val(url);
		}
	},

	renderMapBackground: function(url) {
		$('#dungeon').css('background-image', 'url(' + url + ')');
	},

	initMenu: function() {
		if (window.navigator.userAgent.indexOf('Chrome') > 0) {
			$('#menu-download-image').removeClass('disabled');
		}

		$('#menu-clicks-add').change(evt => {
			DG.drawOptions.interaction.dragNodes = !evt.currentTarget.checked;
			DG.network.interactionHandler.options.dragNodes = !evt.currentTarget.checked;
		});
	},

	// save function works in Chrome
	chromeSaveImage: function() {
		let canvas = $('canvas')[0];
		$('<a>').attr({
			download: $('#downloadMapModal #mapImageName').val(),
			href: canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'),
		})[0].click();
	},

	reskin: function() {
		DG.replaceText($('#reskinModal #reskinTextFrom').val(), $('#reskinModal #reskinTextTo').val());
	},

	initExportMapDialog: function() {
		let dialog = $('#exportMapModal');
		dialog.on('show.bs.modal', evt => dialog.find('#exportMapData').val(JSON.stringify(DG.data)));
	},

	initImportMapDialog: function() {
		let dialog = $('#importMapModal');
		let dataField = dialog.find('#importMapData');
		let alert = dialog.find('.alert');
		dialog.on('show.bs.modal', evt => {
			dataField.val('');
			alert.hide();
		});
		dialog.find('#import-btn-ok').click(evt => {
			let json = dataField.val();
			if (json) {
				DG.data = JSON.parse(json);
				DG.ui.setMapBackground(DG.data.imageSource);
				DG.updateSettlementsData(DG.data.settlements);
				DG.loadMapBackground();
				DG.initNetwork();
				DG.data.mapName = 'imported';
				$('#saveMapModal #dungeonName').val(DG.data.mapName);
				DG.ui.loadNotesFields();
				DG.data.style = $.extend(DG.data.style, DG.data.defaultStyle);
				dialog.modal('hide');
			} else {
				alert.show();
			}
		});
	},

	initFields: function() {
		$('#notes').change(evt => DG.data.notes = $(evt.currentTarget).val());
		$('#settlements').change(evt => DG.data.settlements = DG.splitToArray($(evt.currentTarget).val()));
		$('#wanderingMonsters').change(evt => DG.data.wanderingMonsters = DG.splitToArray($(evt.currentTarget).val()));
		$('#organizations').change(evt => DG.data.organizations = DG.splitToArray($(evt.currentTarget).val()));
		$('#monsterRelations').change(evt => DG.data.monsterRelations = DG.splitToArray($(evt.currentTarget).val()));
	},
}

// Arguments to the Vis.Network creation call ----------------------------------------------
DG.nodeDialog = function(node, callback) {
	node = DG.nodesDataSet.get(node.id);

	let dialog = $('#nodeModal');
	dialog.find('#nodeName').val(node.label);
	dialog.find('#nodeDescription').val(DG.brToLf(node.title));
	dialog.find('#node-fontFace').val(node.font.face).change();
	dialog.find('#node-nodeTextSize').val(node.font.size).change();
	dialog.find('#node-fontColor').val(node.font.color).change();
	dialog.find('#node-bgColor').val(node.color.background).change();
	dialog.find('#node-borderColor').val(node.color.border).change();
	dialog.find('#node-shape').val(node.shape).change();
	dialog.find('#node-nodeSize').val(node.size).change();
	dialog.find('#node-boxBorderRadius').val(node.shapeProperties.borderRadius).change();
	dialog.find('#node-borderWidth').val(node.borderWidth).change();
	dialog.find('#node-btn-save').click(() => {
		node.label = dialog.find('#nodeName').val();
		node.title = DG.lfToBr(dialog.find('#nodeDescription').val());
		node.font.face = dialog.find('#node-fontFace').val();
		node.font.size = parseInt(dialog.find('#node-nodeTextSize').val());
		node.font.color = dialog.find('#node-fontColor').val();
		node.color.background = dialog.find('#node-bgColor').val();
		node.color.highlight.background = node.color.background;
		node.color.border = dialog.find('#node-borderColor').val();
		node.borderWidth = dialog.find('#node-borderWidth').val();
		node.shape = dialog.find('#node-shape').val();
		node.size = parseInt(dialog.find('#node-nodeSize').val());
		node.shapeProperties.borderRadius = parseInt(dialog.find('#node-boxBorderRadius').val());
		DG.addMonstersToList();
		DG.nodesDataSet.update(node);
		DG.fillKey();
		callback(node);
	});
	dialog.modal('show');
};

DG.edgeDialog = function(edge, callback) {
	let fromNodeId = edge.from;
	let toNodeId = edge.to;

	let currentColor;
	if (typeof edge.color === 'undefined') {
		edge.color = DG.data.style.edges.color;
	}
	currentColor = edge.color.color;

	let dialog = $('#editEdgeModal');
	dialog.find('#edgeName').val(DG.edgesDataSet.get(edge.id).label);
	dialog.find('#edgeColor').val(currentColor).change();

	let nodes = DG.nodesDataSet.map(node => [node.id, node.label], {
		fields: ['id', 'label'],
		returnType: 'Object'
	});
	DG.ui.selectControl(dialog.find('#fromNode'), nodes, fromNodeId);
	DG.ui.selectControl(dialog.find('#toNode'), nodes, toNodeId);

	dialog.find('#edge-btn-save').click(() => {
		edge.label = dialog.find('#edgeName').val();
		edge.color.color = dialog.find('#edgeColor').val();
		edge.from = dialog.find('#fromNode').val();
		edge.to = dialog.find('#toNode').val();
		DG.edgesDataSet.update(edge);
		callback(edge);
	});
	dialog.modal('show');
};

$(document).ready(function() {
	DG.ui.init();
	DG.digDungeon();
	DG.hire.init();
});
