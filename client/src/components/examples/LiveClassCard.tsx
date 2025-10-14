import LiveClassCard from '../LiveClassCard';

export default function LiveClassCardExample() {
  return (
    <div className="p-8 max-w-md">
      <LiveClassCard
        title="Advanced Algebra Concepts"
        subject="Mathematics"
        teacher="Mrs. Aditi Sharma"
        date="Monday, March 15, 2024"
        time="5:00 PM - 6:30 PM"
        duration="90 mins"
        enrolled={18}
        maxStudents={25}
        status="upcoming"
      />
    </div>
  );
}
