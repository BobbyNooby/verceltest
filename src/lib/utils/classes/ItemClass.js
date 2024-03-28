export class ItemClass {
	constructor(
		name,
		legend,

		minLevel = -1, // Testing for items have a min level for like scrolls and ship parts and shi.
		maxLevel = 120, // Max level an item can be atm.
		mainType,
		subType,
		rarity,
		imageId
	) {
		this.name = name;
		this.legend = legend;

		this.minLevel = minLevel;
		this.maxLevel = maxLevel;
		this.mainType = mainType;
		this.subType = subType;
		this.rarity = rarity;

		const rarityColors = {
			Common: '#7D7D7F',
			Uncommon: '#817346',
			Rare: '#6765EC',
			Exotic: '#FF0000',
			Seasonal: '#C001C2',
			Legendary: '#00FF00'
		};

		this.rarityColor = rarityColors[rarity];
		this.imageId = imageId;
	}
}
