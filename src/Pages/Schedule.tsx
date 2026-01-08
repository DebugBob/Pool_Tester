import { IlamyCalendar } from "@ilamy/calendar";

const events = [
  {
    id: "1",
    title: "Residential",
    start: new Date("2026-01-15T10:00:00"),
    end: new Date("2026-01-15T11:00:00"),
    description: "[Type of test] at [adress]",
    backgroundColor: "#3b82f6",
    color: "white",
  },
  {
    id: "2",
    title: "Hotel",
    start: new Date("2026-01-20T23:59:59"),
    end: new Date("2026-01-20T23:59:59"),
    allDay: true,
    backgroundColor: "#ef4444",
    color: "white",
  },
];

const Schedule = () => {
  return (
    <div className="h-screen bg-gray-50 pt-24 px-8 pb-8">
      <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-hidden">
        <IlamyCalendar events={events} />
      </div>
    </div>
  );
};

export default Schedule;
