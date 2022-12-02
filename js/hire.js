// need a better, more generalized approach to class weapon lists

DG.hire = {
	mercenaryArmors: DG.stock.mercenaryArmors,
	allArmors: DG.stock.allArmors,
	lightArmors: DG.stock.lightArmors,
	mediumArmors: DG.stock.mediumArmors,
	servantArmors: DG.stock.servantArmors,
	weaponSet: DG.stock.weaponSet,
	servantSkills: [
		'Porter',
		'Torchbearer',
		'Porter',
		'Torchbearer',
		'Porter',
		'Torchbearer',
		'Charcoal burner',
		'Farmer',
		'Farmhand',
		'Sailor',
		"Ne'er do well",
		'Lout',
		'Lackey',
		'Cook',
		'Trapper',
		'Scholar',
		'Muleteer',
		'Crafter',
		'Barber Surgeon',
		'Dogsbody',
		'Domestic'
	],
	mercenarySkills: [
		'Mercenary',
		'Soldier',
		'Guard',
		'Mercenary',
		'Soldier',
		'Guard',
		'Bandit',
		'Brigand',
		'Thug',
		'Huntsman',
		'Hunter',
		'Warrior',
		'Graverobber',
		'Berserk',
		'Armsman',
		'Guide',
		'Pirate'
	],
	reasons: [
		'Needs the money to eat',
		'Nearly broke',
		'Bloodthirsty',
		'Tired of living',
		'Thrill seeker',
		'Runaway',
		'Pursued',
		'Accursed',
		'Drunken courage',
		'On a dare',
		'Lonely',
		'Needs to get out of town',
		'In debt',
		'Curiosity',
		'Family issues',
		'Heartbroken',
		'Romantic complications',
		'Looking for a lucky break',
		'Heard the PC band has a racket going',
		'Wants to learn the path to the dungeon',
		'Agent on a mission',
		'Flat broke',
		'Drinking buddy of PC',
		'Friend of PC',
		'Attracted to a PC',
		'Finds something admirable about a PC',
		'Wants revenge on a PC',
		'Enjoys violence',
		'Doppelganger',
		'To spy on the party for someone powerful',
		'Cultist with a mission',
		'Proselytizer',
		'Wants vengeance on something in the dungeon',
		'Wants to take something particular from the dungeon',
		'Dreams of glory',
		'A god demands it',
		'The voices whisper about it',
		'Wants to steal something particular from a PC',
		'Wants to rob the party',
		'Needs a meaning in life',
		'Wants to become an adventurer',
		'Vampire bitten, starting to hunger and wants to find a place in the dungeon out of the light',
		'Lycanthrope bitten and feels the change coming on',
		'A personal quest',
	],
	stats: {
		str: 0,
		int: 0,
		wis: 0,
		con: 0,
		dex: 0,
		cha: 0,
		hp: 0,
		ac: 0
	},

	init: function() {
		DG.hire.setSource();
		$('#hire-hyperborea').change(evt => DG.hire.setSource());
	},

	setupHyperborea: function() {
		DG.hire.characterClasses = DG.stock.hyperborea.characterClasses;
		DG.hire.races = DG.stock.hyperborea.races;
		DG.hire.fighterClasses = DG.stock.hyperborea.fighterClasses;
		DG.hire.mageClasses = DG.stock.hyperborea.mageClasses;
		DG.hire.druidClasses = ['druid'];
		DG.hire.monkClasses = ['monk'];
		DG.hire.unarmoredClasses = DG.stock.hyperborea.unarmoredClasses;
		DG.hire.lightArmoredClasses = DG.stock.hyperborea.lightArmoredClasses;
		DG.hire.mediumArmoredClasses = DG.stock.hyperborea.mediumArmoredClasses;
		DG.hire.heavyArmoredClasses = DG.stock.hyperborea.heavyArmoredClasses;
		DG.hire.monkWeapons = ['Fists', 'Spear', 'Daggers', 'Sword', 'Staff', 'Jittes', 'Tonfa', 'Dagger'];
		DG.hire.servantWeapons = ['Knife', 'Dagger', 'Fists', 'Fists', 'Handaxe', 'Staff', 'Cudgel', 'Club'];
		DG.hire.mageWeapons = ['Daggers', 'Staff', 'Staff & Dagger'];
		DG.hire.druidWeapons = ['Knife', 'Dagger', 'Spear', 'Sickle', 'Shortsword', 'Handaxe', 'Staff', 'Cudgel', 'Club', 'Bow'];
	},

	setupClassic: function() {
		DG.hire.characterClasses = DG.stock.characterClasses;
		DG.hire.races = DG.stock.humanWeightedPcRaces;
		DG.hire.fighterClasses = DG.stock.fighterClasses;
		DG.hire.mageClasses = DG.stock.mageClasses;
		DG.hire.druidClasses = ['druid'];
		DG.hire.monkClasses = ['monk'];
		DG.hire.unarmoredClasses = DG.stock.unarmoredClasses;
		DG.hire.lightArmoredClasses = DG.stock.lightArmoredClasses;
		DG.hire.mediumArmoredClasses = DG.stock.mediumArmoredClasses;
		DG.hire.heavyArmoredClasses = DG.stock.heavyArmoredClasses;
		DG.hire.monkWeapons = ['Fists', 'Spear', 'Daggers', 'Sword', 'Staff', 'Jittes', 'Tonfa', 'Dagger'];
		DG.hire.servantWeapons = ['Knife', 'Dagger', 'Fists', 'Fists', 'Handaxe', 'Staff', 'Cudgel', 'Club'];
		DG.hire.mageWeapons = ['Daggers', 'Staff', 'Staff & Dagger'];
		DG.hire.druidWeapons = ['Knife', 'Dagger', 'Spear', 'Sickle', 'Shortsword', 'Handaxe', 'Staff', 'Cudgel', 'Club', 'Bow'];
	},

	setSource: function() {
		if ($('#hire-hyperborea:checked').length > 0) {
			DG.hire.setupHyperborea();
		} else {
			DG.hire.setupClassic();
		}
	},

	rollStats: function() {
		DG.hire.stats.str = DG.roll3d6();
		DG.hire.stats.int = DG.roll3d6();
		DG.hire.stats.wis = DG.roll3d6();
		DG.hire.stats.con = DG.roll3d6();
		DG.hire.stats.dex = DG.roll3d6();
		DG.hire.stats.cha = DG.roll3d6();
		DG.hire.stats.class = '';
		DG.hire.stats.level = 1;
		DG.hire.stats.hp = 0;
		return 'STR ' + DG.hire.stats.str + '  INT ' + DG.hire.stats.int + '  WIS ' + DG.hire.stats.wis +
		'  CON ' + DG.hire.stats.con + '  DEX ' + DG.hire.stats.dex + '  CHA ' + DG.hire.stats.cha;
	},

	addGuy: function(guy) {
		let field = $('#hire-result');
		let oldVal = $('#hire-result').val();
		field.val(oldVal + guy);
	},

	addGuys: function(count) {
		for (let i = 0; i < count; i++) {
			DG.hire.addGuy(DG.hire.oneGuy());
		}
	},

	add1d6Guys: function() {
		DG.hire.addGuys(DG.roll1d6());
	},

	skills: function(type) {
		if (type === 'servant') {
			return DG.drawOne(DG.hire.servantSkills);
		}
		if (type === 'mercenary') {
			return DG.drawOne(DG.hire.mercenarySkills);
		}
		// levelled
		DG.hire.stats.level = DG.roll3d4low();
		DG.hire.stats.class = DG.drawOne(DG.hire.characterClasses);
		return DG.capFirstChar(DG.hire.stats.class) + ' ' + DG.hire.stats.level;
	},

	personality: function() {
		return DG.rollThree() ? DG.drawOne(DG.stock.allAttitudes) + ' ' : '';
	},

	reason: function() {
		return DG.rollFour() ? '' : '\nReason to hire on: ' + DG.drawOne(DG.hire.reasons);
	},

	race: function() {
		return DG.capFirstChar(DG.drawOne(DG.hire.races));
	},

	armor: function(type) {
		let armorType = '';
		if (type === 'servant') {
			armorType = DG.drawOne(DG.hire.servantArmors);
		} else if (type === 'mercenary') {
			armorType = DG.drawOne(DG.hire.mercenaryArmors);
		} else if (DG.includes(DG.hire.unarmoredClasses, DG.hire.stats.class)) {
			armorType = DG.drawOne(DG.hire.servantArmors);
		} else if (DG.includes(DG.hire.lightArmoredClasses, DG.hire.stats.class)) {
			armorType = DG.drawOne(DG.hire.lightArmors);
		} else if (DG.includes(DG.hire.mediumArmoredClasses, DG.hire.stats.class)) {
			armorType = DG.drawOne(DG.hire.mediumArmors);
		} else if (DG.includes(DG.hire.heavyArmoredClasses, DG.hire.stats.class)) {
			armorType = DG.drawOne(DG.hire.allArmors);
		} else { // missed a class?
			armorType = DG.drawOne(DG.hire.mercenaryArmors);
		}
		return DG.capFirstChar(armorType);
	},

	conBonus: function() {
		let b
		switch (DG.hire.stats.con) {
			case 3:
			case 4:
			case 5:
				b = -2;
				break;
			case 6:
			case 7:
			case 8:
				b = -1;
				break;
			case 9:
			case 10:
			case 11:
			case 12:
				b = 0;
				break;
			case 13:
			case 14:
			case 15:
				b = +1;
				break;
			case 16:
			case 17:
				b = +2;
				break;
			case 18:
				b = +3;
				break;
			default: console.log('Found no bonus for constitution of ' + b);
		}
		return b
	},

	rollHp: function(type) {
		if (type === 'servant') {
			DG.hire.stats.hp = DG.roll1d6();
		} else if (type === 'mercenary') {
			DG.hire.stats.hp = DG.roll1d6() + 1;
		} else {
			for (let i = 0; i < DG.hire.stats.level; i++) {
				if (DG.includes(DG.hire.fighterClasses, DG.hire.stats.class)) {
					DG.hire.stats.hp += DG.rollDie(1, 8);
				} else {
					DG.hire.stats.hp += DG.roll1d6();
				}
			}
		}
		DG.hire.stats.hp += DG.hire.stats.level * DG.hire.conBonus();
		if (DG.hire.stats.hp < DG.hire.stats.level) {
			DG.hire.stats.hp = DG.hire.stats.level;
		}
		return DG.hire.stats.hp;
	},

	weapons: function(type) {
		if (type === 'servant') {
			return DG.drawOne(DG.hire.servantWeapons);
		}
		if (DG.includes(DG.hire.mageClasses, DG.hire.stats.class)) {
			return DG.drawOne(DG.hire.mageWeapons);
		}
		if (DG.includes(DG.hire.druidClasses, DG.hire.stats.class)) {
			return DG.drawOne(DG.hire.druidWeapons);
		}
		if (DG.includes(DG.hire.monkClasses, DG.hire.stats.class)) {
			return DG.drawOne(DG.hire.monkWeapons);
		}
		return DG.hire.weaponSet();
	},

	oneGuy: function() {
		let type = DG.drawOne(['servant', 'servant', 'servant', 'mercenary', 'mercenary', 'mercenary', 'mercenary', 'leveled']);
		let name = DG.wiki(DG.characterName()) + ', ';
		let personality = DG.hire.personality();
		let race = DG.hire.race() + ' ';
		let skills = DG.hire.skills(type) + '\n';
		let stats = DG.hire.rollStats() + '\n';
		let derived = 'HP: ' + DG.hire.rollHp() + '\n';
		let weapons = DG.hire.weapons(type) + ', ';
		let armor = DG.hire.armor(type);
		let reason = DG.hire.reason();
		return name + personality + race + skills + stats + derived + weapons + armor + reason + '\n\n';
	},
};
