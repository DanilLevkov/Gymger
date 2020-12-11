

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
      { name: "Бентч", isChecked: true },
    ]
  },
  {
    type: 'Силовые',
    items: [
      { name: "Hot Iron", isChecked: true },
      { name: "Crossfet", isChecked: true },
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

export function getRows() {
  return rows;
}

const rows = [
    {
      time: '11:30',
      tu: [{
        title: "Йога checkedBig",
        type: "Йога",
        difficulty: "checkedBig",
        vacant: 5,
        hall: "Зал 1",
        time: '18:30-19:30',
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },],
      th: [{
        title: "Йога checkedMiddle", 
        type: "Йога",
        difficulty: "checkedMiddle",
        vacant: 2,
        hall: "Зал 1",
        time: '18:30',
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },],
      st: [{
        title: "Crossfet checkedLittle",
        difficulty: "checkedLittle",
        type: "Crossfet",
        hall: "Зал 1",
        time: '18:30',
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },],
      sd: [{
        title: "Crossfet checkedBig",
        type: "Crossfet",
        difficulty: "checkedBig",
        hall: "Зал 1",
        time: '18:30',
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },],
      md: [
        {
          title: "Gym morning",
          type: "Hot Iron",
          vacant: 50,
          difficulty: "checkedBig",
          hall: "Зал 1",
          time: '18:30',
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info",
        },
        {
          title: "Gym2",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 2,
          time: '18:30',
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info2",
        },
      ],
      wd: [
        {
          title: "Gym Wen",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 15,
          time: '18:30',
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info",
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 1,
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info2",
          time: '18:30',
        },
      ],
      fr: [
        {
          title: "Lazy",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 12,
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info lazy",
          time: '18:30',
        },
      ]
    },
    {
      time: '18:30',
      tu: [],
      th: [],
      st: [],
      md: [],
      sd: [
        {
          title: "Gym morning",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 4,
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym Long Long Long name",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 2,
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info2",
          time: '12:30',
        },
      ],
      wd: [
        {
          title: "Gym Wen",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info2",
          time: '12:30',
        },
      ],
      fr: [
        {
          title: "Lazy",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info lazy",
          time: '12:30',
        },
      ]
    },
    {
      time: '15:00',
      st: [],
      sd: [],
      md: [
        {
          title: "Gym morning",
          type: "Hot Iron",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info",
          time: '14:30',
        },
        {
          title: "Gym2",
          type: "Hot Iron",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info2",
          time: '14:30',
        },
      ],
      wd: [
        {
          title: "Gym Wen",
          type: "Hot Iron",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info",
          time: '14:30',
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info2",
          time: '14:30',
        },
      ],
      fr: [
        {
          title: "Lazy",
          type: "Hot Iron",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info lazy",
          time: '14:30',
        },
      ]
    },
    {
      time: '13:45',
      tu: [],
      th: [],
      st: [],
      md: [],
      sd: [
        {
          title: "Gym morning",
          type: "Hot Iron",
          difficulty: "checkedLittle",
          hall: "Зал 1",
          vacant: 4,
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym Long Long Long name",
          type: "Hot Iron",
          hall: "Зал 1",
          vacant: 2,
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info2",
          time: '12:30',
        },
      ],
      wd: [
        {
          title: "Gym Wen",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info2",
          time: '12:30',
        },
      ],
      fr: [
        {
          title: "Lazy",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info lazy",
          time: '12:30',
        },
      ]
    },
    {
      time: '20:30',
      tu: [],
      th: [],
      st: [],
      md: [],
      sd: [
        {
          title: "Gym morning",
          type: "Hot Iron",
          hall: "Зал 1",
          vacant: 4,
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym Long Long Long name",
          type: "Hot Iron",
          hall: "Зал 1",
          vacant: 2,
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?science",
          short_info: "Some info2",
          time: '12:30',
        },
      ],
      wd: [
        {
          title: "Gym Wen",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info2",
          time: '12:30',
        },
      ],
      fr: [
        {
          title: "Lazy",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          image_url: "https://source.unsplash.com/random/?computer",
          short_info: "Some info lazy",
          time: '12:30',
        },
      ]
    },
  ];