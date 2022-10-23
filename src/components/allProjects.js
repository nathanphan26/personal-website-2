function AllProjects() {
    return (
        <div class="overflow-x-auto">
                <div class="min-w-screen min-h-screen bg-gray-800 flex justify-center bg-gray-100 font-sans overflow-hidden pt-12">
                    <div class="w-full lg:w-5/6">
                        <div class="bg-white shadow-md rounded my-6">
                            <table class="min-w-max w-full table-auto bg-gray-800">
                                <thead>
                                    <tr class="bg-gray-800 text-gray-600 uppercase text-sm leading-normal">
                                        <th class="py-3 px-6 text-left">Project</th>
                                        <th class="py-3 px-6 text-left">Description</th>
                                        <th class="py-3 px-6 text-center">Tech Stack</th>
                                        <th class="py-3 px-6 text-center">Externals</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                </div>
                                                <span class="font-medium">React Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                </div>
                                                <span>Eshal Rosas</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 bg-gray-800 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6" src="https://img.icons8.com/color/100/000000/vue-js.png"/>
                                                </div>
                                                <span class="font-medium">Vue Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                </div>
                                                <span>Anita Rodriquez</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6" src="https://img.icons8.com/color/100/000000/angularjs.png"/>
                                                </div>
                                                <span class="font-medium">Angular Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                                </div>
                                                <span>Taylan Bush</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 bg-gray-800 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/laravel-64.png"/>
                                                </div>
                                                <span class="font-medium">Laravel Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/4.jpg"/>
                                                </div>
                                                <span>Tarik Novak</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6" src="https://img.icons8.com/color/48/000000/git.png" />
                                                </div>
                                                <span class="font-medium">GIT Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/5.jpg"/>
                                                </div>
                                                <span>Oscar Howard</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 bg-gray-800 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6" src="https://img.icons8.com/color/48/000000/nodejs.png" />
                                                </div>
                                                <span class="font-medium">NodeJS Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/6.jpg"/>
                                                </div>
                                                <span>Melisa Moon</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                                                </div>
                                                <span class="font-medium">JavaScript Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/7.jpg"/>
                                                </div>
                                                <span>Cora Key</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 bg-gray-800 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6" src="https://img.icons8.com/color/48/000000/php.png"/>
                                                </div>
                                                <span class="font-medium">PHP Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/8.jpg"/>
                                                </div>
                                                <span>Kylan Dorsey</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                                <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AllProjects