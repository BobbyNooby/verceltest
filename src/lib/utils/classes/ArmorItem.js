import { ItemClass } from './ItemClass';

export class ArmorItem extends ItemClass {
	constructor(
		name,
		legend,

		minLevel,
		maxLevel,

		mainType,
		subType,
		rarity,
		imageId,

		gemNo = 0,

		powerIncrement = 0,
		defenseIncrement = 0,
		agilityIncrement = 0,
		attackSpeedIncrement = 0,
		attackSizeIncrement = 0,
		intensityIncrement = 0,
		insanity = 0,
		warding = 0,
		drawback = 0
	) {
		super(name, legend, minLevel, maxLevel, mainType, subType, rarity, imageId);

		this.gemNo = gemNo;
		for (let i = 1; i <= this.gemNo; i++) {
			this[`gem${i}`] = null;
		}

		this.powerIncrement = powerIncrement;
		this.defenseIncrement = defenseIncrement;
		this.agilityIncrement = agilityIncrement;
		this.attackSpeedIncrement = attackSpeedIncrement;
		this.attackSizeIncrement = attackSizeIncrement;
		this.intensityIncrement = intensityIncrement;
		this.insanity = insanity;
		this.warding = warding;
		this.drawback = drawback;
	}

	getStats() {
		let stats = {
			name: this.name,
			legend: this.legend,

			minLevel: this.minLevel,
			maxLevel: this.maxLevel,

			mainType: this.mainType,
			subType: this.subType,
			rarity: this.rarity,
			rarityColor: this.rarityColor,
			imageId: this.imageId,

			gemNo: this.gemNo
		};
		for (let i = 1; i <= this.gemNo; i++) {
			Object.assign(stats, this[`gem${i}`].getStats());
		}
		return stats;
	}
}
