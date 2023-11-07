const DayCard = ({ day }) => {
  return (
    <li
      className={`w-32 font-bold flex justify-center border-b-2 border-gray-300 ${
        day === "SAT" && "text-blue-500"
      } ${day === "SUN" && "text-red-500"}`}
    >
      {day}
    </li>
  );
};

export default DayCard;
