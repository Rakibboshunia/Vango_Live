export default function Header() {
    return (
        <header className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/70">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600"></div>

                    <h1 className="text-2xl font-bold tracking-wide">
                        VANGO <span className="text-pink-500">LIVE</span>
                    </h1>
                </div>

                <nav className="hidden md:flex items-center gap-10 text-sm text-white/80">
                    <a href="#">For Sellers</a>
                    <a href="#">For Customers</a>
                    <a href="#">How It Works</a>
                    <a href="#">About Us</a>
                </nav>

                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 hover:scale-105 duration-300">
                    Join Waitlist
                </button>
            </div>
        </header>
    );
}