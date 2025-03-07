const Contacts = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 font-playD gap-y-8">

            <div>
                <h1 className="text-4xl">Contacts</h1>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex items-center bg-white p-6 rounded-lg max-w-lg">
                    <img
                    src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover"
                    />

                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-gray-800">cat 1</h2>
                        <p className="text-gray-600">
                            meowmeowmeowmeowmeowmeowm
                        </p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-6 rounded-lg max-w-lg">
                    <img
                    src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover"
                    />

                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-gray-800">cat 2</h2>
                        <p className="text-gray-600">
                            meowmeowmeowmeowmeowmeo
                        </p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-6 rounded-lg max-w-lg">
                    <img
                    src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover"
                    />

                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-gray-800">cat 3</h2>
                        <p className="text-gray-600">
                            meowmeowmeowmeowmeowmeo
                        </p>
                    </div>
                </div>


            </div>
            
        </div>

    );
};

export default Contacts;
