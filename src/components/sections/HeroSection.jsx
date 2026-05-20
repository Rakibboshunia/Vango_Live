export default function HeroSection() {
    return (
        <section className="relative overflow-hidden py-28">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed30,transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

                <div>
                    <span className="px-4 py-2 rounded-full border border-pink-500/30 text-pink-400 text-sm">
                        COMING SOON
                    </span>

                    <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8">
                        Built For <br />
                        People Who <br />
                        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                            Sell Live.
                        </span>
                    </h1>

                    <p className="text-white/70 text-lg mt-8 max-w-xl">
                        Vango Live gives sellers the tools, audience engagement and checkout experience modern live commerce actually needs.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-500">
                            Join Waitlist
                        </button>

                        <button className="px-8 py-4 rounded-2xl border border-white/20">
                            See How It Works
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-[40px] border border-pink-500/20 bg-[#0b0613] p-5 shadow-2xl shadow-pink-500/20">

                        <img
                            src="/images/hero-preview.png"
                            alt="hero"
                            className="rounded-[30px]"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}