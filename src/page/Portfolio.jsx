import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Cardarray from "../components/Cardarray"
import Viewcard from "../components/Viewcard"
import { useState } from "react"

const Portfolio = () => {
    const [showAll, setshowAll] = useState(false)
    return (
        <>
            <Navbar />
            <div className="mt-20 flex flex-col md:flex-row items-center gap-6 p-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/027/529/363/non_2x/young-man-writing-code-on-a-desktop-computer-software-developer-at-work-programming-coding-script-java-digital-program-code-on-monitor-screen-illustration-vector.jpg"
                        alt="Developer Illustration"
                        className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Our Technical Proficiency:
                    </h1>
                    <ul className="list-none space-y-3 text-gray-700">
                        <li>
                            <strong>Front-End Development:</strong> Proficient in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Redux, Angular.js, and Next.js, we craft responsive and intuitive user interfaces that enhance user experience.
                        </li>
                        <li>
                            <strong>Back-End Development:</strong> Our back-end solutions are powered by Node.js, Express.js, Python (Flask, FastAPI, Django), PHP, Ruby, and Java, ensuring robust and scalable server-side applications.
                        </li>
                        <li>
                            <strong>Database Management:</strong> We utilize MongoDB for efficient and flexible data storage, tailored to meet the specific requirements of each project.
                        </li>
                        <li>
                            <strong>Content Management Systems:</strong> Our team is adept at developing and customizing WordPress websites, providing clients with versatile and user-friendly platforms.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="my-20 px-4">
                <p className="text-center my-4 text-3xl font-serif font-semibold text-gray-800">
                    Our Projects
                </p>

                <div className="grid md:pt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {Cardarray.slice(0, 6).map((card, index) => (
                        <Viewcard
                            key={index}
                            title={card.title}
                            imageURL={card.imageURL}
                            description={card.description}
                            webURL={card.webURL}
                        />
                    ))}
                    {showAll && Cardarray.slice(6,).map((card, index) => (
                        <Viewcard
                            key={index + 6} // Ensure unique keys
                            title={card.title}
                            imageURL={card.imageURL}
                            description={card.description}
                            webURL={card.webURL}
                        />
                    ))}


                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={() => setshowAll(!showAll)}
                        className="px-5 py-2 text-white bg-blue-600 rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-95">
                        {showAll ? "Show Less" : "More About Us"}
                    </button>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default Portfolio