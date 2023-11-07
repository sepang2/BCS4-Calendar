import DateCard from "./components/DateCard";
import DateData from "./date.json";

const App = () => {
  return (
    <div className="min-hight-screen bg-purple-200 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">2023</h1>
      <h1 className="mb-12 text-7xl text-purple-500 font-bold ">NOV</h1>
      <div className="bg-gray-50 p-10">
        <ul className="grid grid-cols-7 gap-4">
          <li className="w-32 flex justify-center border-b-2 border-gray-300">
            SUN
          </li>
          <li className="w-32 flex justify-center border-b-2 border-gray-300">
            MON
          </li>
          <li className="w-32 flex justify-center border-b-2 border-gray-300">
            TUE
          </li>
          <li className="w-32 flex justify-center border-b-2 border-gray-300">
            WED
          </li>
          <li className="w-32 flex justify-center border-b-2 border-gray-300">
            THU
          </li>
          <li className="w-32 flex justify-center border-b-2 border-gray-300">
            FRI
          </li>
          <li className="w-32 flex justify-center border-b-2 border-gray-300">
            SAT
          </li>
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
