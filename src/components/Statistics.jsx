import React from "react";
import GitHubCalendar from 'react-github-calendar';
const Statistics = () => {


  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div
      id="bgdivimg"
      style={{ height: "auto", marginTop: "1rem", paddingBottom: "2rem" ,boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px" ,}}
      name="statistics"
      className="bg-gradient-to-b from-black-800 to-black w-full h-screen experience mbottom ptop"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div >
          <p
            style={{ color:"white" }}

            className="text-4xl font-bold border-b-4 border-white-500 p-2 inline">
            Statistics
          </p>
          <p style={{color:"aqua"}} className="py-6">These are some of statistics graphs to determine my contribution and knowledge in this digital world.</p>
        </div>
        <div
          className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 px-12 py-5 sm:px-0"
        // style={{ display: "grid", gridTemplateColumns:"repeat(2,1fr)", alignItems: "center", gap: "2rem", padding: "2rem", }}
        >
          <div style={{ height: "200px" }}>
            <p align="center">
              <a href=""><img style={{ height: "200px" }} alt="Summaiya-Begum's Github Stats" src="https://github-readme-stats.vercel.app/api?username=Summaiya-Begum&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" /></a>
            </p>
          </div>

          {/* git Calender */}
          <div style={{ padding: "1rem", background: "black", height: "200px" }} className="flex justify-center">
            <GitHubCalendar
              username="Summaiya-Begum"
              transformData={selectLastHalfYear}
              hideTotalCount
              hideColorLegend

            />
          </div>

        </div>
        <div>
          <img alt="Summaiya's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=Summaiya-Begum&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
        </div>

      </div>
    </div>
  );
};

export default Statistics;
