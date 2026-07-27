import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { businessesData } from '../../data/businesses/businessesData';
import BusinessTemplate from '../../components/business-detail/BusinessTemplate';

export default function BusinessDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const business = id ? businessesData[id] : undefined;

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-teal-800 mb-4">Business not found</h2>
          <Link to="/" className="text-brand-orange hover:underline inline-flex items-center gap-2">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const variant = business.id === 'kitchen' ? 'orange' : 'teal';

  return <BusinessTemplate business={business} variant={variant} />;
}
