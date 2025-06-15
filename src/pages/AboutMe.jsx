import React from 'react'

const AboutMe = () => {
  return (
    <section id="About" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 text-gray-800 dark:text-white flex items-center justify-center px-4 sm:px-6 lg:px-16 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        </div>

        <div className="max-w-6xl w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">About Me</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    Hello! I'm <span className="font-bold text-blue-600 dark:text-blue-400">Kalash Baldota</span>, an aspiring Full Stack Web Developer and <strong className="text-indigo-600 dark:text-indigo-400">Machine Learning Enthusiast</strong> currently pursuing a degree in Information Technology at <strong className="text-blue-600 dark:text-blue-400">PCCOER, under Savitribai Phule Pune University</strong>.
                </p>

                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I specialize in building modern, responsive full-stack web applications using technologies like <strong className="text-orange-600 dark:text-orange-400">React</strong>, <strong className="text-cyan-600 dark:text-cyan-400">Node.js</strong>, <strong className="text-purple-600 dark:text-purple-400">MongoDB</strong>, and <strong className="text-yellow-600 dark:text-yellow-400">Express.js</strong>. My passion for AI drives me to work on <strong className="text-emerald-600 dark:text-emerald-400">deepfake detection</strong> and other real-world ML applications.
                    </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I'm always eager to learn and challenge myself through hackathons, open-source collaboration, and impactful projects. Whether it's developing a dynamic portfolio or deploying AI-powered tools, I aim to create solutions that make a difference.
                </p>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>Highlights
                </h3>
                <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-blue-300 dark:border-blue-700 hover:bg-white/30 transition-all duration-300">
                    <p className="font-semibold text-yellow-200">🎓 IT Undergraduate, PCCOER</p>
                    <p className="text-sm text-white dark:text-gray-300 mt-1">Savitribai Phule Pune University</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300">
                    <p className="font-semibold text-yellow-200">💻 Deepfake Detection Project</p>
                    <p className="text-sm text-blue-100">Built using TensorFlow/Keras, React, and Node.js</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300">
                    <p className="font-semibold text-yellow-200">🏆 Hackathon Finalist</p>
                    <p className="text-sm text-blue-100">Recognized for solving real-world problems through tech</p>
                    </div>
                </div>
                </div>

                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>My Vision
                </h3>
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 italic text-lg">
                    "I strive to merge design and intelligence — crafting systems that are both user-friendly and smart."
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe