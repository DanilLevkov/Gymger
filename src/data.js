
// Value - это +-1 на сколько изменилось число
export function cangeVacant(id, value) {
}

export function getCoach(id) {
  return coaches[id];
}

const coaches = [
  { 
    id: 1, 
    name: "Елена Н.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R-ufhjhgNJ0SQkdcUGZpL7vevbEO6YUGWg&usqp=CAU",
    info: "Образование: высшее, дополнительное - Федеральная Школа Фитнеса Варвары Медведевой IT \n Достижения: кандидат в мастера спорта по спортивной аэробике, призер чемпионатов России и СНГ, гран- при Байкал",
    categ: "инструктор-эксперт",
    experience: "5 лет",
  },
  { 
    id: 2, 
    name: "Елена Н.",
    avatar: "data:image/jpeg;base64,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",
    info: "Образование: высшее, дополнительное - Федеральная Школа Фитнеса Варвары Медведевой IT \n Достижения: кандидат в мастера спорта по спортивной аэробике, призер чемпионатов России и СНГ, гран- при Байкал",
    categ: "инструктор-эксперт",
    experience: "5 лет",
  },
  { 
    id: 3, 
    name: "Елена Н.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R-ufhjhgNJ0SQkdcUGZpL7vevbEO6YUGWg&usqp=CAU",
    info: "Образование: высшее, дополнительное - Федеральная Школа Фитнеса Варвары Медведевой IT \n Достижения: кандидат в мастера спорта по спортивной аэробике, призер чемпионатов России и СНГ, гран- при Байкал",
    categ: "инструктор-эксперт",
    experience: "5 лет",
  },
  { 
    id: 4, 
    name: "Елена Н.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R-ufhjhgNJ0SQkdcUGZpL7vevbEO6YUGWg&usqp=CAU",
    info: "Образование: высшее, дополнительное - Федеральная Школа Фитнеса Варвары Медведевой IT \n Достижения: кандидат в мастера спорта по спортивной аэробике, призер чемпионатов России и СНГ, гран- при Байкал",
    categ: "инструктор-эксперт",
    experience: "5 лет",
  },
  { 
    id: 5, 
    name: "Елена Н.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R-ufhjhgNJ0SQkdcUGZpL7vevbEO6YUGWg&usqp=CAU",
    info: "Образование: высшее, дополнительное - Федеральная Школа Фитнеса Варвары Медведевой IT \n Достижения: кандидат в мастера спорта по спортивной аэробике, призер чемпионатов России и СНГ, гран- при Байкал",
    categ: "инструктор-эксперт",
    experience: "5 лет",
  },
  { 
    id: 6, 
    name: "Елена Н.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R-ufhjhgNJ0SQkdcUGZpL7vevbEO6YUGWg&usqp=CAU",
    info: "Образование: высшее, дополнительное - Федеральная Школа Фитнеса Варвары Медведевой IT \n Достижения: кандидат в мастера спорта по спортивной аэробике, призер чемпионатов России и СНГ, гран- при Байкал",
    categ: "инструктор-эксперт",
    experience: "5 лет",
  },
];


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

export function getRows() {
  return rows;
}

const rows = [
    {
      time: '11:30',
      tu: [{
        id: 1,
        title: "Йога по тяжелее",
        type: "Йога",
        difficulty: "checkedMiddle",
        vacant: 5,
        hall: "Зал 1",
        time: '18:30-19:30',
        short_info: "Some info2",
        long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
        coach_id: 1,
      },],
      th: [{
        id: 2,
        title: "Йога lite", 
        type: "Йога",
        difficulty: "checkedLittle",
        vacant: 4,
        hall: "Зал 1",
        time: '18:30',
        short_info: "Some info2",
        long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
        coach_id: 2,
      },],
      st: [{
        id: 356,
        title: "Записи нет",
        type: "Crossfit",
        vacant: 0,
        difficulty: "checkedLittle",
        hall: "Зал 5",
        time: '18:30',
        short_info: "Some info2",
        long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
        coach_id: 3,
      },],
      sd: [{
        id: 4,
        title: "Crossfit lite",
        type: "Crossfit",
        difficulty: "checkedLittle",
        hall: "Зал 5",
        time: '18:30',
        short_info: "Some info2",
        long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
        coach_id: 4,
      },],
      md: [
        {
          id: 5,
          title: "Gym morning",
          type: "Йога",
          vacant: 50,
          difficulty: "checkedBig",
          hall: "Большой зал",
          time: '18:30',
          short_info: "Some info",
          long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
          coach_id: 5,
        },
        {
          title: "Hot Iron",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 2,
          time: '18:30',
          short_info: "Some info2",
          long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
          coach_id: 4,
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
          short_info: "Some info",
          long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
          coach_id: 3,
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 1,
          short_info: "Some info2",
          time: '18:30',
          long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
          coach_id: 1,
        },
      ],
      fr: [
        {
          title: "Lazy",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 12,
          short_info: "Some info lazy",
          time: '18:30',
          long_info: "Йога в гамаках. Главные плюсы fly-йоги в том, что гамак позволяет выполнять перевернутые асаны, в которых под весом своего же тела вытягивается позвоночник. Занятия развивают вестибулярный аппарат, расслабляют центральную нервную систему, позволяют достичь прекрасных результатов. Класс для всех уровней подготовленности. ",
          coach_id: 1,
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
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym Long Long Long name",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          vacant: 2,
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
          short_info: "Some info",
          time: '12:30',
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
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
          short_info: "Some info lazy",
          time: '12:30',
        },
      ]
    },
    {
      time: '15:00',
      st: [
        {
          title: "Lazy",
          type: "Hot Iron",
          hall: "Зал 1",
          difficulty: "checkedLittle",
          short_info: "Some info lazy",
          time: '12:30',
        },
      ],
      sd: [],
      md: [
        {
          title: "Gym morning",
          type: "Hot Iron",
          difficulty: "checkedLittle",
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
          short_info: "Some info",
          time: '14:30',
        },
        {
          title: "Gym yuuuf",
          type: "Hot Iron",
          difficulty: "checkedLittle",
          short_info: "Some info2",
          time: '14:30',
        },
      ],
      fr: [
        {
          title: "Lazy",
          type: "Hot Iron",
          difficulty: "checkedLittle",
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