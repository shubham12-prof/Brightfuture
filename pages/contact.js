import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="pt-24 px-4">
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Get In Touch</h2>
                <ContactForm />
            </div>
        </>
    );
}
