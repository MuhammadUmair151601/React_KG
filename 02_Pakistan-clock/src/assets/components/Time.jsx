function Time() {
  return (
    <div className="font-bold">
      {new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })}
    </div>
  );
}
export default Time;