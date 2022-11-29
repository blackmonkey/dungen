DG.view = {
	solidColorList: ["gray", "black", "red", "green", "blue", "maroon", "brown", 'darkblue', 'gunmetal'],
	bgColorList: ["white", "wheat", "salmon", "lightblue", "lightgreen", "lightgray", "gray", "black", "red", "green", "blue", "maroon", "brown", 'darkblue', 'gunmetal'],
	shapeList: ["box", "ellipse", "circle", "database", "text", "diamond", "dot", "star", "triangle", "triangleDown", "square"],
	widthList: ["0", "1", "2", "3", "4", "5", "6", "8", "10"],
	radiusList: ["0", "1", "2", "3", "4", "5", "6", "8", "10"],
	sizeList: ["3", "5", "8", "10", "15", "20", "25", "30"],
	textSizeList: ["10", "12", "14", "16", "18", "20", "22", "24", "28", "32", "36", "40"],

	selectControl: function (selectCtrl, options, currentVal) {
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

	checkBoxSet: function (panel, allTags, tagData) {
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

	init: function () {
		DG.view.initEditEdgeDialog();
		DG.view.initSelectThemeDialog();
		DG.view.initStyleDialog();
		DG.view.initNodeDialog();
	},

	initEditEdgeDialog: function () {
		let dialog = $('#editEdgeModal');
		DG.view.selectControl(dialog.find('#edgeColor'), DG.view.solidColorList, DG.view.solidColorList[0]);
	},

	initSelectThemeDialog: function () {
		let dialog = $('#selectThemeModal');
		DG.view.checkBoxSet(dialog.find('#monsterTags'), DG.stock.monsterTags, DG.data.monsterTags);
		DG.view.checkBoxSet(dialog.find('#nodeTags'), DG.stock.nodeTags, DG.data.nodeTags);
		DG.view.checkBoxSet(dialog.find('#edgeTags'), DG.stock.edgeTags, DG.data.edgeTags);
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
		DG.view.selectControl(dialog.find('#style-nodeTextSize'), DG.view.textSizeList, DG.data.style.fontSize);
		DG.view.selectControl(dialog.find('#style-fontColor'), DG.view.bgColorList, DG.data.style.fontColor);
		DG.view.selectControl(dialog.find('#style-bgColor'), DG.view.bgColorList, DG.data.style.bgColor);
		DG.view.selectControl(dialog.find('#style-borderColor'), DG.view.solidColorList, DG.data.style.border);
		DG.view.selectControl(dialog.find('#style-shape'), DG.view.shapeList, DG.data.style.shape);
		DG.view.selectControl(dialog.find('#style-nodeSize'), DG.view.sizeList, DG.data.style.size);
		DG.view.selectControl(dialog.find('#style-boxBorderRadius'), DG.view.radiusList, DG.data.style.borderRadius);
		DG.view.selectControl(dialog.find('#style-borderWidth'), DG.view.widthList, DG.data.style.borderWidth);
		DG.view.selectControl(dialog.find('#style-edgeWidth'), DG.view.widthList, DG.data.style.edges.width);
		DG.view.selectControl(dialog.find('#style-edgeColor'), DG.view.solidColorList, DG.data.style.edges.color.color);
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
			Object.assign(DG.data.style, DG.defaultStyle);
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
		DG.view.selectControl(dialog.find('#node-nodeTextSize'), DG.view.textSizeList, DG.data.style.fontSize);
		DG.view.selectControl(dialog.find('#node-fontColor'), DG.view.bgColorList, DG.data.style.fontColor);
		DG.view.selectControl(dialog.find('#node-bgColor'), DG.view.bgColorList, DG.data.style.bgColor);
		DG.view.selectControl(dialog.find('#node-borderColor'), DG.view.solidColorList, DG.data.style.border);
		DG.view.selectControl(dialog.find('#node-shape'), DG.view.shapeList, DG.data.style.shape);
		DG.view.selectControl(dialog.find('#node-nodeSize'), DG.view.sizeList, DG.data.style.size);
		DG.view.selectControl(dialog.find('#node-boxBorderRadius'), DG.view.radiusList, DG.data.style.borderRadius);
		DG.view.selectControl(dialog.find('#node-borderWidth'), DG.view.widthList, DG.data.style.borderWidth);
	},
};

// Arguments to the Vis.Network creation call ----------------------------------------------
DG.nodeDialog = function (node, callback) {
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

DG.edgeDialog = function (edge, callback) {
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
	DG.view.selectControl(dialog.find('#fromNode'), nodes, fromNodeId);
	DG.view.selectControl(dialog.find('#toNode'), nodes, toNodeId);

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
