
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='flex items-center justify-center self-center h-screen  overflow-hidden'>
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-4">Oops! The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="text-primary hover:underline">Go Back to Home</Link>
        </div>
    </section>
  );
};

export default NotFound;
