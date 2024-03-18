import { getData } from '../dataManager';

const cannonData = [
	{
		id: 0,
		name: 'None',
		legend: 'Nothing Lol',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#FFFFFF',
		imageId: 'https://i.imgur.com/Sx4ZkpY.jpg'
	},
	{
		id: 1,
		name: 'Light Cannons',
		legend: 'A set of lightweight, cheap cannons.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -5,
		stability: 0,
		turning: 0,
		maxLevel: 10,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/1QJYq3K.jpg'
	},
	{
		id: 2,
		name: 'Normal Cannons',
		legend: 'A set of standard ship cannons.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 20,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/5dDfdFC.jpg'
	},
	{
		id: 3,
		name: 'Heavy Cannons',
		legend: 'A set of heavy expensive cannons.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 30,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/BmS7yTx.jpg'
	},
	{
		id: 4,
		name: 'Bronze Cannons',
		legend: 'A set of cannons reinforced with bronze metal, increasing their damage.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 80,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/IDEuOJO.jpg'
	},
	{
		id: 5,
		name: 'Heavy Bronze Cannons',
		legend: 'A set of heavy cannons reinforced with bronze metal, increasing their damage.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 10,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/2jdV2dW.jpg'
	},
	{
		id: 6,
		name: 'Carronades',
		legend: 'A set of cannons built for firing powerful shots at a close range.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 50,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/UyWMQhy.jpg'
	},
	{
		id: 7,
		name: 'Bronze Carronades',
		legend: 'A set of reinforced bronze cannons built for firing powerful shots at a close range.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 80,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/LiIdpD1.jpg'
	},
	{
		id: 8,
		name: 'Culverins',
		legend: 'A set of cannons built for firing at long range.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 50,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/QXVXN5d.jpg'
	},
	{
		id: 9,
		name: 'Bronze Culverins',
		legend: 'A set of bronze reinforced cannons built for firing at a long range.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 80,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/O4Jvusr.jpg'
	},
	{
		id: 10,
		name: 'Iron Culverins',
		legend: 'A set of bronze-reinforced iron cannons built for firing at long range.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 120,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/lkfhhAc.jpg'
	},
	{
		id: 11,
		name: 'Iron Carronades',
		legend:
			'A set of bronze-reinforced iron cannons built for firing powerful shots at close range.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -7,
		stability: 0,
		turning: 0,
		maxLevel: 120,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/qOBnlrd.jpg'
	},
	{
		id: 12,
		name: 'Dragonfire Carronades',
		legend:
			'A set of cannons with a unique mechanism built in which causes flames to spew from the barrel for a short duration after they are fired, dealing additional damage to nearby ships.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -10,
		stability: 0,
		turning: 0,
		maxLevel: 120,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/BSKDY3W.jpg'
	},
	{
		id: 13,
		name: 'Lesser Arcanium Cannons',
		legend:
			'A set of cannons made out of lesser arcanium metal, forged to conduct some magic. When firing with this equipped, it will overflow with stored magic energy and imbue it into the cannonball, increasing its damage and applying additional effects.',
		durability: 0,
		magicStorage: 150,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: -5,
		stability: 0,
		turning: 0,
		maxLevel: 100,
		mainType: 'Cannon',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/R5A2JaY.jpg'
	}
];

export const cannons = getData(cannonData);
