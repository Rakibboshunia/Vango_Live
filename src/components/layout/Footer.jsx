export default function Footer() {
    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-5">

                <div>
                    <h2 className="text-2xl font-bold">
                        VANGO <span className="text-pink-500">LIVE</span>
                    </h2>

                    <p className="text-sm text-white/50 mt-2">
                        © 2026 Vango Live. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-white/60 text-sm">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Seller Agreement</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </footer>
    );
}