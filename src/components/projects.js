import  { Outlet, NavLink } from "react-router-dom";

function Projects() {
    return (

            <div className="w-full bg-gray-800" id='projects'>
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-3">
                            Check out some recent projects        
                        </h1>
                        <NavLink to ="/projects">See more projects...</NavLink>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <a className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-around hvr-bob no-decoration">
                            <div className="text-center mb-auto">
                                <p className="text-xl text-white font-bold mb-2">Chipotle Discord Bot</p>
                            </div>
                            <p className="text-base text-gray-400 font-normal mb-2">Discord bot that takes in a code command and generates a link to prepopulate a text to chipotle sweepstakes</p>
                            <p className="text-base text-emerald-300 font-normal">JavaScript / Heroku</p>
                        </a>

                        <a className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-around hvr-bob no-decoration">
                            <div className="text-center mb-auto">
                                <p className="text-xl text-white font-bold mb-2">AWS Amplify React Hosting CI/CD via Github</p>
                            </div>
                            <p className="text-base text-gray-400 font-normal mb-2">Learn how to host your React application on AWS Amplify integrated with Github for continuous deployment</p>
                            <p className="text-base text-emerald-300 font-normal">JavaScript / AWS Amplify / Github</p>
                        </a>

                        <a className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-around hvr-bob no-decoration">
                            <div className="text-center mb-auto">
                                <p className="text-xl text-white font-bold mb-2">...</p>
                            </div>
                            <p className="text-base text-gray-400 font-normal mb-2">...</p>
                            <p className="text-base text-emerald-300 font-normal">...</p>
                        </a>
                    </div>
                </section>
            </div>
    )
}

export default Projects;