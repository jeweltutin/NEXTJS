
export default function Resume() {
    const data = [
        {
            title: "Education",
            icon: "🎓",
            items: [
                { year: "2021-2023", title: "Ph.D in Horribleness", institution: "ABC University, Los Angeles, CA" },
                { year: "2019 - Present", title: "Sr. Software Tester", institution: "Google Inc." },
                { year: "2021", title: "Best Developer", institution: "University Of Melbourne, NA" },
            ],
        },
        {
            title: "Experience",
            icon: "💼",
            items: [
                { year: "2017-2021", title: "Computer Science", institution: "Imperialize Technical Institute" },
                { year: "2015-2017", title: "Cr. Web Developer", institution: "ib-themes ltd." },
                { year: "2008", title: "Best Writter", institution: "Online Typodev Solution Ltd." },
            ],
        },
        {
            title: "Awards",
            icon: "🏅",
            items: [
                { year: "2015-2017", title: "Graphic Designer", institution: "Web Graphy, Los Angeles, CA" },
                { year: "2014 - 2015", title: "Jr. Web Developer", institution: "Creative Gigs." },
                { year: "2015-2017", title: "Best Freelancer", institution: "Fiverr & Upwork Level 2 & Top Rated" },
            ],
        },
    ];

    const skills = [
        { name: "Web Design", level: 80, color: "bg-red-500" },
        { name: "Mobile App", level: 95, color: "bg-purple-500" },
        { name: "Illustrator", level: 65, color: "bg-blue-500" },
        { name: "Photoshop", level: 75, color: "bg-pink-500" },
    ];

    const knowledges = [
        "Digital Design",
        "Marketing",
        "Social Media",
        "Print",
        "Time Management",
        "Flexibility",
    ];

    return (
        <div className="min-h-screen py-12 px-6 lg:px-20">
            <h1 className="text-4xl font-bold text-center mb-12">Resume</h1>
            <div className="grid lg:grid-cols-3 gap-8">
                {data.map((section) => (
                    <div key={section.title}>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <span>{section.icon}</span> {section.title}
                        </h2>
                        <div className="space-y-6">
                            {section.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 border rounded-lg bg-gray-50 hover:shadow-lg transition duration-300"
                                >
                                    <p className="text-sm text-gray-500">{item.year}</p>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-12 px-6 lg:px-20 bg-gray-50 mt-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Working Skills */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Working Skills</h2>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                        <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className={`${skill.color} h-2.5 rounded-full`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Knowledges */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Knowledges</h2>
                        <div className="flex flex-wrap gap-3">
                            {knowledges.map((knowledge, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700"
                                >
                                    {knowledge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
