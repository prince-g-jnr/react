function NewsCard() {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 justify-center mx-auto my-15 w-full ">
            
            <img
                src={"https://platform.barcablaugranes.com/wp-content/uploads/sites/21/2025/11/gettyimages-2246147567.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=750"}
                alt="Featured news"
                className="w-full h-50 object-cover"
            />

            <div className="p-5">
                <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Sports
                </span>

                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-700 transition">
                    Don't lecture me about taking care of players' - Luis de la Fuente takes aim at Barcelona over Lamine Yamal
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Spain boss Luis de la Fuente has warned Barcelona not to lecture him about taking care of players after seeing Lamine Yamal withdrawn from his latest squad.

                    The Barcelona teenager won’t feature in Spain’s final two World Cup qualifiers after undergoing treatment for his pubalgia issues, in a move which left De la Fuente “surprised.”

                    The Spain boss says he does plan to talk to Barcelona manager Hansi Flick but says he always looks after his players.
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                    <div>
                        <span className="font-semibold text-gray-700">By Gill Clark</span>
                        <span className="ml-2">• Nov 12, 2025</span>
                    </div>
                    <div>
                        <span>10 min read</span>
                    </div>
                </div>

                <a
                href="#"
                className="inline-block mt-4 text-green-700 font-semibold text-sm hover:text-green-800 transition"
                >
                    Read more →
                </a>
            </div>
        </div>
    );
}

export default NewsCard