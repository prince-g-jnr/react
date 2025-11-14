function BlogPost() {

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Premier League red cards are up four times compared to last season!
                </h1>
                <div className="text-gray-600 text-sm md:text-base flex justify-center space-x-4">
                    <span>By <strong>Gbolahan Ademuyiwa</strong></span>
                    <span>•</span>
                    <span>Nov 13, 2025</span>
                    <span>•</span>
                    <span>10 min read</span>
                </div>
            </div>

            <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl mb-8">
                <img
                    src="https://blogstorage.s3.amazonaws.com/uploads/cache/df/2a/df2aa8315c8dcb7a61d5d0008d496e29.jpg"
                    alt="picture"
                    className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-6 text-gray-800 leading-relaxed">
                    <h1 className="text-2xl">
                        The Premier League is known for its intense competition and dramatic moments, but an increase in red cards to start the season has fans concerned.
                    </h1>

                    <p>
                        Referees have been reaching for their pockets more frequently, issuing four times as many red cards compared to the previous season, according to statistics compiled by SafeBettingSites.com.
                    </p>
                    <p>
                        This unexpected trend has sparked discussions among fans, players, and pundits alike.
                    </p>
                    <p>
                        As the new Premier League season kicked off, spectators anticipated thrilling matches and close contests. However, what has caught the attention of many is the sudden surge in red cards being shown by referees.
                    </p>
                    <p>
                        Last season's statistics painted a very different picture, with significantly fewer players receiving their marching orders.
                    </p>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic">
                        “One thing remains certain: in the world of football, the unexpected is always just around the corner.”
                    </blockquote>
                </div>

                <aside className="space-y-6">
                    <h3 className="text-xl font-bold border-b-2 pb-2">
                        Related Posts
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://blogstorage.s3.amazonaws.com/uploads/cache/94/33/9433c08786866e8c115676de87748a9c.jpg"
                                alt="picture"
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                                    Early verdict on the big spend at Chelsea FC
                                </h4>
                                <p className="text-sm text-gray-500">6 min read</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img
                                src="https://blogstorage.s3.amazonaws.com/uploads/cache/95/d4/95d494e34926889b69844eb0013b1506.jpg"
                                alt="Picture"
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                                    Champions League round of 16 predictions!
                                </h4>
                                <p className="text-sm text-gray-500">5 min read</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img
                                src="https://blogstorage.s3.amazonaws.com/uploads/cache/a3/97/a39798443c81a764afb8c357537d5709.jpg"
                                alt="Picture"
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                                    2 reasons why Cristiano Ronaldo should leave Manchester United this summer
                                </h4>
                                <p className="text-sm text-gray-500">1 min read</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default BlogPost;