import { getData } from '../dataManager';

const modifiersData = [
	{
		id: 0,
		name: 'None',
		legend: 'Nothing Lol',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'None',
		rarityColor: '#FFFFFF',
		imageId: 'https://i.imgur.com/iKfI8Cp.jpg'
	},

	{
		id: 1,
		name: 'Atlantean Essence',
		legend:
			'Gives stats per 10 levels rounded down in the following order depending on if your item has the stat or not: Power -> Defense -> Attack Size -> Attack Speed -> Agility -> Intensity -> Power. Shown below is the stat you will get given the stats of your current item.',
		defense: 8.83, // Defense Changed?
		power: 1,
		agility: 3,
		attackSize: 3,
		attackSpeed: 3,
		intensity: 3,
		insanity: 1,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/JvqDmI1.jpg'
	},
	{
		id: 2,
		name: 'Frozen',
		legend: 'Adds extra defense for each 10 levels (Cant be on boss nor Dark Sea drops)',
		defense: 4.416666666666667, // Apparently frozen is 53 at 12 lol
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/2omXP94.jpg'
	},

	{
		id: 3,
		name: 'Archaic',
		legend: 'Adds Attack Size for each 10 levels (Cant be on boss nor Dark Sea drops)',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 1.5,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/y60ywMS.jpg'
	},

	{
		id: 4,
		name: 'Sandy',
		legend: 'Adds Intensity for each 10 levels (Cant be on boss nor Dark Sea drops)',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 1.5,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/9Kef1D8.jpg'
	},

	{
		id: 5,
		name: 'Superheated',
		legend: 'Adds low power and intensity for each 10 levels (Cant be on boss nor Dark Sea drops)',
		defense: 0,
		power: 0.25,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0.6666666666666667,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/AOewWr9.jpg'
	},

	{
		id: 6,
		name: 'Drowned',
		legend:
			'Adds low defense and attack size for each 10 levels (Cant be on boss nor Dark Sea drops)',
		defense: 2.25,
		power: 0,
		agility: 0,
		attackSize: 0.6666666666666667,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/u3o1Dlv.jpg'
	},

	{
		id: 7,
		name: 'Blasted',
		legend: 'Adds power for each 10 levels (Cant be on boss nor Dark Sea drops)',
		defense: 0,
		power: 0.5,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/VhK4lL4.jpg'
	},

	{
		id: 8,
		name: 'Crystalline',
		legend: 'Adds Attack Speed for each 10 levels (Cant be on boss nor Dark Sea drops)',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 1.5,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Modifier',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/GCAnSwF.jpg'
	}
];

export const modifiers = getData(modifiersData);