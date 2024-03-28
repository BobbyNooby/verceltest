import { ArmorItem } from './ArmorItem.js';

const testArmor = new ArmorItem(
	'TestName',
	'Hello this is a legend',
	10,
	20,
	'testMainType',
	'testSubType',
	'Rare',
	'testImageId',
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

console.log('HI');
console.log(testArmor.getStats());
