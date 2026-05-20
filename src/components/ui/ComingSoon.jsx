export default function ComingSoon({ title }) {
    return (
        <section className="py-32 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="rounded-3xl border border-pink-500/20 bg-gradient-to-b from-[#12051d] to-black p-20 text-center">

                    <h2 className="text-5xl font-bold mb-5">
                        {title}
                    </h2>

                    <p className="text-pink-500 text-xl font-semibold">
                        Coming Soon
                    </p>

                </div>
            </div>
        </section>
    );
}