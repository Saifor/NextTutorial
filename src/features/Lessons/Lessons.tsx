import Link from "next/link";
import {LessonsProps} from "@/types/lessons.types";

export const LessonsItems = ({lessons}: LessonsProps) => {
    return (
        <div className="max-xl:flex gap-3 flex-col xl:grid xl:grid-cols-2">
            { lessons.map((lesson, index) => (
                <div key={index} className="grid grid-cols-[400px_200px] w-full gap-2 border p-2 rounded-2xl">
                    <p className="text-white text-[16px] text-wrap">
                        <b>Lesson {index+1}: </b>
                        {lesson.info}
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        { lesson.subLessons.map((subLesson, subIndex) => (
                            <Link key={subIndex} href={subLesson.pageUrl} className="w-full text-center hover:underline
                            p-2 border-2 rounded-2xl hover:scale-[102%]">
                                {subLesson.name}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}