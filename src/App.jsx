import DateCard from "./components/DateCard";
import DateData from "./date.json";
import DayCard from "./components/DayCard";
import DayData from "./day.json";

const App = () => {
  return (
    <div className="min-hight-screen bg-purple-200 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">2023</h1>
      <h1 className="mb-12 text-7xl text-purple-500 font-bold ">NOV</h1>
      <div className="bg-gray-50 p-10 mb-20">
        <ul className="grid grid-cols-7 gap-4">
          {DayData.map((v, i) => {
            return <DayCard key={i} day={v.day} />;
          })}
          <li className="w-32 h-32"></li>
          <li className="w-32 h-32"></li>
          <li className="w-32 h-32"></li>
          {DateData.map((v, i) => {
            return <DateCard key={i} date={v.date} todo={v.todo} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
