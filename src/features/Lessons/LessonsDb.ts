export const LessonsDb = [
    {
        info: "Что такое React.js, Components, DOM, Virtual DOM, JSX.\n" +
            "Next.js: pages, layouts, templates.\n" +
            "Использование TailwindCSS, TypeScript.",
    },
    {
        info: "Визуализация ожидания загрузки компонента (например, если с бэка ожидается ответ). В данном примере сделано" +
            "простое ожидание (delay) на 3 секунды, по истечению которого будет отображен сам компонент, а до этого будет" +
            "отображен компонент загрузки.",
        subLessons: [
            { name: "Loading Component", pageUrl: "/lessons/loading" },
            { name: "Error Component", pageUrl: "/lessons/error" }
        ],
    },
    {
        subLessons: [
            { name: "Props", pageUrl: "/lessons/props",}
        ]
    },
    {
        subLessons: [
            { name: "List Items", pageUrl: "/lessons/list"}
        ]
    }
];