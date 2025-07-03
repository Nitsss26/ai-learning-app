'use client';
import Link from "next/link";
import Image from "next/image";
import { ProgressBar } from "../ui/progress";

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  image?: string;
  slug: string;
  rating?: number;
  hours?: number;
  lessons?: number;
}

interface CourseDashboardProps {
  courses: Course[];
}

export const CourseDashboard = ({ courses }: CourseDashboardProps) => {
  const cardColors = [
    "from-purple-700/30 to-indigo-700/30",
    "from-pink-700/30 to-rose-700/30",
    "from-cyan-700/30 to-teal-700/30",
    "from-emerald-700/30 to-lime-700/30",
    "from-yellow-700/30 to-orange-700/30",
  ];

  return (
    <section className="w-full px-4 md:px-8 py-10 min-h-screen text-white">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-cyan-300">🎓 Your Courses</h2>
        <p className="text-white/60 text-sm mt-2">
          Track your progress and continue learning.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course, index) => {
          const bgGradient = `bg-gradient-to-br ${cardColors[index % cardColors.length]}`;

          return (
            <Link
              key={course.id}
              href={`/courses/${course.slug}/purchased`}
              className="group"
            >
              <div
                className={`rounded-2xl overflow-hidden ${bgGradient} backdrop-blur-xl border border-white/10 transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-[1.02] flex flex-col`}
              >
                {/* Image */}
                  <Image
                    src={course.image || "/images/default-course.jpg"}
                    alt={course.title}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover transition duration-300 group-hover:brightness-90"
                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3 flex-grow">
                  <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-white/60 mt-1">
                    <span>⭐ {course.rating ?? '4.5'}</span>
                    <span>⏱ {course.hours ?? 10} hrs</span>
                    <span>📘 {course.lessons ?? 12} lessons</span>
                  </div>

                  {/* Progress */}
                  <div className="mt-auto">
                    <ProgressBar value={course.progress} />
                  </div>
                </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
