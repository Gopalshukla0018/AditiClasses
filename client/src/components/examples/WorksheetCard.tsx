import WorksheetCard from '../WorksheetCard';

export default function WorksheetCardExample() {
  return (
    <div className="p-8 max-w-xs">
      <WorksheetCard
        title="Complete Math Practice Set"
        subject="Mathematics"
        grade="Class 5"
        price={199}
        pages={25}
      />
    </div>
  );
}
