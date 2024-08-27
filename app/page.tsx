import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Guesthouse</h1>
      <p className="text-lg mb-8">
        Experience comfort and luxury at our guesthouse. Book your stay with us today!
      </p>
      <nav className="space-x-4">
        <Link href="/rooms" className="text-blue-500 hover:underline">Rooms</Link>
        <Link href="/booking" className="text-blue-500 hover:underline">Booking</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
