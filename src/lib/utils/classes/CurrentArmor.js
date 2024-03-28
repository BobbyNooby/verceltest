import { ArmorItem } from './ArmorItem';

const blankArmor = new ArmorItem(
	'None',
	'None Legend',
	0,
	120,
	'NoneMainType',
	'NoneSubType',
	'Common',
	'assets/images/unknown.png',
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
);

export class CurrentArmor {
	constructor(
		accessory1 = blankArmor,
		accessory2 = blankArmor,
		accessory3 = blankArmor,
		chestplate = blankArmor,
		pants = blankArmor
	) {
		this.accessory1 = accessory1;
		this.accessory2 = accessory2;
		this.accessory3 = accessory3;
		this.chestplate = chestplate;
		this.pants = pants;
	}

	isArmorAlreadyExist(inputArmor) {
		let currentArmorSet = [
			this.accessory1,
			this.accessory2,
			this.accessory3,
			this.chestplate,
			this.pants
		];

		for (const armor of currentArmorSet) {
			if (armor.name == inputArmor.name) {
				return true;
			}
		}

		return false;
	}

	setArmor(category, armor) {
		console.log(this.isArmorAlreadyExist(armor));
		if (!this.isArmorAlreadyExist(armor)) {
			switch (category) {
				case 'accessory1':
					this.accessory1 = armor;
				case 'accessory2':
					this.accessory2 = armor;
				case 'accessory3':
					this.accessory3 = armor;
				case 'chestplate':
					this.chestplate = armor;
				case 'pants':
					this.pants = armor;
			}
		} else {
			console.log('Cant set armor, already exists');
		}
	}
}
