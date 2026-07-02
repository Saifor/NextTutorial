import 'server-only'

export const MOCK_USERS = [
    {id: 0, name: "Me (Vladislav)", email: "saifor@bk.ru", age: 26, sex:"Male"},
    {id: 111, name: "Anton", sex: "male", age: 30},
    {id: 2, name: "Andrey", sex: "муж.", age: 18},
    {id: 3, name: "Артём", sex: "муж.", age: 22},
    {id: 4, name: "Evgeniy", sex: "машина", age: 22},
]

export const MOCK_LESSONS = [
    { // LESSON 1
        info: "Что такое React.js, Components, DOM, Virtual DOM, JSX.\n" +
            "Next.js: pages, layouts, templates.\n" +
            "Использование TailwindCSS, TypeScript.",
    },
    { // LESSON 2
        info: "Визуализация ожидания загрузки компонента (например, если с бэка ожидается ответ). В данном примере сделано " +
            "простое ожидание (delay), по истечению которого будет отображен сам компонент, а до этого будет " +
            "отображён компонент загрузки.",
        subLessons: [
            { name: "Loading Component", pageUrl: "/lessons/loading" },
            { name: "Error Component", pageUrl: "/lessons/error" }
        ],
    },
    { // LESSON 3
        info: "Передача свойств компоненту.",
        subLessons: [
            { name: "Props", pageUrl: "/lessons/props",}
        ]
    },
    { // LESSON 4
        info: "Часто возникает необходимость отображать несколько похожих компонентов из набора данных. " +
            "Для работы с массивом данных можно использовать методы массивов JavaScript. " +
            "Отображение данных из массивов.",
        subLessons: [
            { name: "List Items", pageUrl: "/lessons/list"}
        ]
    },
    { // LESSON 5
        info: "Добавление интерактивности.\n" +
            "Events - обработчики событий. Добавление взаимодействия (клик и пр.). \n" +
            "State - состояние (память компонента). Добавление переменной состояния.",
        subLessons: [
            { name: "Events", pageUrl: "/lessons/events"},
            { name: "State", pageUrl: "/lessons/state"}
        ]
    },
    { // LESSON 6
        info: "Загрузка MOCK-данных.",
        subLessons: [
            { name: "Users", pageUrl: "/users"},
        ]
    }
];