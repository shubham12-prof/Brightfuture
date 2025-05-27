export default function ContactForm() {
    return (
        <form className="max-w-xl mx-auto bg-white p-8 rounded shadow">
            <div className="mb-4">
                <label className="block font-semibold">Name</label>
                <input className="w-full border p-2 rounded mt-1" type="text" placeholder="Your name" />
            </div>
            <div className="mb-4">
                <label className="block font-semibold">Email</label>
                <input className="w-full border p-2 rounded mt-1" type="email" placeholder="Your email" />
            </div>
            <div className="mb-4">
                <label className="block font-semibold">Message</label>
                <textarea className="w-full border p-2 rounded mt-1" rows="4" placeholder="How can we help?"></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Send Inquiry
            </button>
        </form>
    );
}
