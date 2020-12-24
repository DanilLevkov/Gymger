
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

const gyms = [
  {
    type: 'Растяжка',
    items: [
      { name: "Йога", isChecked: true },
      { name: "Пилатес", isChecked: true },
    ]
  },
  {
    type: 'Силовые',
    items: [
      { name: "Hot Iron", isChecked: true },
      { name: "Crossfit", isChecked: true },
      { name: "Math Ball", isChecked: true },
    ]
  },
  {
    type: 'Бассейн',
    items: [
      { name: "Водные процедуры", isChecked: true },
      { name: "Ныряние", isChecked: true },
    ]
  },
];
