export default function Subjects() {
    const subjects = [
        { name: 'Mathematics', color: 'bg-yellow-100' },
        { name: 'Chemistry', color: 'bg-green-100' },
        { name: 'English', color: 'bg-blue-100' },
    ];

    return (
        <section id="subjects" className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Subjects We Teach</h2>
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
                {subjects.map(subject => (
                    <div key={subject.name} className={`p-6 rounded-lg shadow ${subject.color}`}>
                        <h3 className="text-xl font-semibold">{subject.name}</h3>
                        <p className="mt-2 text-gray-600">Comprehensive lessons designed for school and exam success.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
