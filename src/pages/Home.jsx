import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
                    {/* Placeholder for Hero Video/Image */}
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700 text-4xl font-bold opacity-20">
                        CINEMATIC BACKGROUND
                    </div>
                </div>

                <div className="relative z-20 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        EXPERIENCE <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">VELOCITY</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                    >
                        The future of luxury automotive. Configure your dream machine today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <button className="bg-primary text-black font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,157,0.5)]">
                            Explore Inventory
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Featured Section Placeholder */}
            <section className="py-20 px-4 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors group cursor-pointer">
                            <div className="h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-600">
                                Car Image
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Model X-Stream</h3>
                            <p className="text-gray-400 mb-4">Starting at $120,000</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">0-60 in 2.9s</span>
                                <span className="text-primary text-sm font-bold">Details &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
