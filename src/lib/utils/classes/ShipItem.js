import { ItemClass } from './ItemClass';
export class ShipItem extends ItemClass {
	constructor(
		name,
		legend,

		maxLevel,
		mainType,
		subType,
		rarity,
		rarityColor,
		imageId,

		durability = 0,
		magicStorage = 0,
		ramDefense = 0,
		ramStrength = 0,
		resilience = 0,
		speed = 0,
		stability = 0,
		turning = 0
	) {
		super(name, legend, maxLevel, mainType, subType, rarity, rarityColor, imageId);

		this.durability = durability;
		this.magicStorage = magicStorage;
		this.ramDefense = ramDefense;
		this.ramStrength = ramStrength;
		this.resilience = resilience;
		this.speed = speed;
		this.stability = stability;
		this.turning = turning;
	}
}
