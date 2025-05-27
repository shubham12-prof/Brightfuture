import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <section
                className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1470&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 max-w-3xl text-white opacity-80">
                    <h1 className="text-4xl font-semibold drop-shadow-md mb-6">
                        In look for a tutor?
                    </h1>
                    <h2 className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Expert Tuition in Maths, Chemistry & English
                    </h2>
                    <p className="text-2xl drop-shadow-md">
                        Unlock your academic potential with tailored one-on-one and group lessons.
                    </p>
                </div>


            </section>


            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={28} />
            </a>
        </>
    );
}
