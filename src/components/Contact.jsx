


const Contact = () => {
    return (
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Name">Name</label>
                    <input placeholder="Name" class="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text"/>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">Email</label>
                    <input placeholder="Email" class="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                           type="email"/>
                </div>
                <div class="mb-4">
                    <textarea placeholder="Message" class="text-gray-700 shadow appearance-none border border-blue-500 rounded w-full py-2 px-3"/>
                </div>
                <div class="mb-6">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;