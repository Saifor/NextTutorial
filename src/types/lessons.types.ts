export interface LessonsProps {
    lessons: {
        info?: string;
        subLessons?: SubLessonsProps[];
    }[]
}

export interface SubLessonsProps {
    name: string
    pageUrl: string;
}