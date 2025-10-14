import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        name="Priya Sharma"
        role="Parent of Class 6 Student"
        content="My daughter's confidence in Math has improved tremendously. The personalized attention and teaching methods are excellent!"
        rating={5}
      />
    </div>
  );
}
