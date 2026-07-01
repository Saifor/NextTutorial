import Link from "next/link";
import {LessonsProps} from "@/types/lessons.types";

export const LessonsItems = ({lessons}: LessonsProps) => {
    return (
        <div className="max-xl:flex gap-3 flex-col xl:grid xl:grid-cols-2">
            { lessons.map((lesson, index) => (
                <div key={index} className="max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[minmax(100,400px)_minmax(100px,200px)] w-full gap-2 border p-2 rounded-2xl">
                    <p className="flex flex-col text-wrap">
                        <span className="font-bold text-[16px]">Lesson {index+1}: </span>
                        <span className="text-[14px] whitespace-pre-line">{lesson.info}</span>
                    </p>
                    { lesson.subLessons && (
                        <div className="flex flex-col items-center gap-2">
                            { lesson.subLessons.map((subLesson, subIndex) => (
                                <Link key={subIndex} href={subLesson.pageUrl} className="w-full text-center hover:underline
                            p-2 border-2 rounded-2xl hover:scale-[102%] text-wrap bg-red-700/30">
                                    {subLesson.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}