import Link from 'next/link';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        For inquiries or assistance, please email us at 
        <a href="mailto:support@guesthouse.com" className="text-blue-500 hover:underline"> support@guesthouse.com</a> 
        or call <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a>.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">Go Back Home</Link>
    </div>
  );
};

export default Contact;
