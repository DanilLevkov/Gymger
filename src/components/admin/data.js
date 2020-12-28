
export function getColumns() {
  return columns;
}

const columns = [
  { id: 'md', label: 'Понедельник' },
  { id: 'tu', label: 'Вторник' },
  { id: 'wd', label: 'Среда' },
  { id: 'th', label: 'Четверг' },
  { id: 'fr', label: 'Пятница' },
  { id: 'st', label: 'Суббота' },
  { id: 'sd', label: 'Воскресенье' },
];


export function getGyms() {
  return gyms;
}

export const gyms = [
  {
    "items": [
      { "name": "Йога", "isChecked": true },
      { "name": "Дыхательная гимнастика", "isChecked": true },
      { "name": "Fly Йога", "isChecked": true },
      { "name": "Stretching", "isChecked": true },
      { "name": "Pilates", "isChecked": true }
    ],
    "type": "Мягкий фитнес"
  },
  {
    "items": [
      { "name": "Functional Man", "isChecked": true },
      { "name": "Box", "isChecked": true }
    ],
    "type": "Мужские классы"
  },
  {
    "items": [
      { "name": "Step Basic", "isChecked": true },
      { "name": "Step Profi", "isChecked": true },
      { "name": "Cycle", "isChecked": true }
    ],
    "type": "Кардио классы"
  },
  {
    "items": [
      { "name": "Hot Iron 1", "isChecked": true },
      { "name": "Hot Iron 2", "isChecked": true },
      { "name": "Body Sculpt", "isChecked": true }
    ],
    "type": "Силовые классы"
  },
  {
    "items": [
      { "name": "Zumba", "isChecked": true },
      { "name": "Dance", "isChecked": true }
    ],
    "type": "Танцевальные классы"
  }
];