function handleGithubOnclick1(e) {
    e.preventDefault();
    window.open('https://github.com/nathanphan26/chipotle-discord-bot', '_blank');
}

function handleGithubOnclick2(e) {
    e.preventDefault();
    window.open('https://github.com/nathanphan26/personal-website', '_blank');
}

function handleGithubOnclick3(e) {
    e.preventDefault();
    window.open('https://github.com/nathanphan26/personal-website-2', '_blank');
}

function AllProjects() {
    return (
        <>
        <h1 class="text-4xl font-bold tracking-tight overflow-x-auto mx-auto mt-10 max-w-7xl">All Projects</h1>
        <div class="overflow-x-auto bg-gray-800">
                    <div class="min-w-screen min-h-screen bg-gray-800 flex justify-center font-sans overflow-hidden pt-12">
                        <div class="w-full lg:w-5/6 bg-gray-800">
                            <div class="bg-gray-800 shadow-md rounded my-6">
                                <table class="min-w-max w-full table-auto bg-gray-800">
                                    <thead>
                                        <tr class="bg-gray-800 text-gray-600 uppercase text-sm leading-normal">
                                            <th class="py-3 px-6 text-left">Project</th>
                                            <th class="py-3 px-6 text-left">Description</th>
                                            <th class="py-3 px-6 text-center">Tech Stack</th>
                                            <th class="py-3 px-6 text-center">Status</th>
                                            <th class="py-3 px-6 text-center">Externals</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-gray-600 text-sm font-light">
                                    <tr class="border-b border-gray-800 hover:bg-emerald-300">
                                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="mr-2">
                                                    </div>
                                                    <span class="font-medium">Personal Website v2</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-left">
                                                <div class="flex items-center">
                                                    <span>Personal website built in React</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <div class="flex items-center justify-center">
                                                    <span className="p-1">JavaScript</span>
                                                    <span className="p-1">AWS Amplify</span>
                                                    <span className="p-1">Github</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                            <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" onClick={handleGithubOnclick3}>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                                                </svg>
                                            </button>
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-800 hover:bg-emerald-300">
                                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="mr-2">
                                                    </div>
                                                    <span class="font-medium">Chipotle Discord Bot</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-left">
                                                <div class="flex items-center">
                                                    <span>Discord bot that takes in a code command and generates a link to prepopulate a text to chipotle sweepstakes</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <div class="flex items-center justify-center">
                                                    <span className="p-1">JavaScript</span>
                                                    <span className="p-1">Heroku</span>
                                                    <span className="p-1">Github</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                            <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" onClick={handleGithubOnclick1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                                                </svg>
                                            </button>
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-800 hover:bg-emerald-300">
                                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="mr-2">
                                                    </div>
                                                    <span class="font-medium">Personal Website v1</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-left">
                                                <div class="flex items-center">
                                                    <span>Personal website built in React</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <div class="flex items-center justify-center">
                                                    <span className="p-1">JavaScript</span>
                                                    <span className="p-1">AWS Amplify</span>
                                                    <span className="p-1">Github</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                            <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" onClick={handleGithubOnclick2}>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                                                </svg>
                                            </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
            </>
    )
}

export default AllProjects