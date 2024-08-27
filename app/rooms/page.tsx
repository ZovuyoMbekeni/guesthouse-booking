import Link from 'next/link';

const Rooms = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Our Rooms</h1>
      <p className="text-lg mb-8">
        We offer a variety of rooms to suit your needs. Choose from standard, deluxe, or suite rooms.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">Go Back Home</Link>
    </div>
  );
};

export default Rooms;
