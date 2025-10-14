import CourseCard from '../CourseCard';

export default function CourseCardExample() {
  return (
    <div className="p-8">
      <CourseCard
        title="Mathematics & Science"
        grade="Class 5"
        subjects={["Math", "Science", "EVS"]}
        timing="Mon-Fri, 5:00 PM - 6:30 PM"
        duration="3 Months"
        price={2500}
        color="primary"
      />
    </div>
  );
}
