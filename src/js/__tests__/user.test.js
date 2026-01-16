import Team from '../basic';

let team;

beforeEach(() => {
  team = new Team();
});

test('add without mistake', () => {
  const character = { name: 'Vlad' };
  team.add(character);
  expect(team.toArray()).toEqual([character]);
});

test('add with mistake', () => {
  const character = { name: 'Vlad' };
  team.add(character);
  expect(() => team.add(character)).toThrow('Character is already in the team');
});

test('add All characters without double', () => {
  const character = { name: 'Vlad' };
  const character1 = { name: 'Kate' };
  team.addAll(character, character1);
  expect(team.toArray()).toEqual([character, character1]);
});

test('add All characters with double', () => {
  const character = { name: 'Vlad' };
  team.addAll(character, character);
  expect(team.toArray()).toEqual([character]);
});

test('character to Array', () => {
  const character = { name: 'Vlad' };
  const character1 = { name: 'Kate' };
  team.addAll(character, character1);
  expect(team.toArray()).toEqual([character, character1]);
});
