// components/content.tsx
import Image from "next/image";

export default function Content() {
    return (
        <section className="w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 py-16 md:flex md:items-center md:justify-between">
                {/* Text Section */}
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
                        Learn Smarter, Not Harder
                    </h2>
                    <p className="text-lg text-blue-700 mb-6">
                        Unlock your potential with expert tutoring in math, science, coding, and more.
                        Customized learning for every student – anywhere, anytime.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg transition"
                    >
                        Get Started
                    </a>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/study-cold.png"
                        alt="Student learning illustration"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
