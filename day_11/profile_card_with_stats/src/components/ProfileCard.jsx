function ProfileCard() {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header with Nigerian colors */}
            <div className="h-32 bg-gradient-to-r from-green-600 via-white to-green-600"></div>

            {/* Avater */}
            <div className="relative px-6 -mt-16">
                <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white mx-auto"></div>
            </div>

            {/* Content */}
            <div className="text-center px-6 py-4">
                <h2 className="text-2xl font-bold text-gray-800">Gbolahan Ademuyiwa</h2>
                <p className="text-gray-600 mt-1">AI Developer</p>
                <p className="text-sm text-gray-500 mt-2">Ogun, Nigeria 🇳🇬</p>

                {/* Bio */}
                <p className="text-gray-700 my-4 text-sm leading-relaxed">
                    Passionate about building amazing web application with React and Tailwind CSS. 
                </p>

                {/* Stats */}
                <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
                    <div>
                        <p className="text-2xl font-bold text-naija-green">5m</p>
                        <p className="text-xs text-gray-600 uppercase">followers</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-naija-green">10k</p>
                        <p className="text-xs text-gray-600 uppercase">post</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-naija-green">100m</p>
                        <p className="text-xs text-gray-600 uppercase">likes</p>
                    </div>
                </div>

                {/* Button */}
                <button className="mt-6 w-full bg-green-700 text-white font-semibold py-3 rounded-lg">
                    Follow
                </button>
            </div>
        </div>
    )
}

export default ProfileCard;