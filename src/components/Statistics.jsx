import React from "react";
// import GitHubCalendar from 'react-github-calendar';
const Statistics = () => {


  // const selectLastHalfYear = contributions => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 6;

  //   return contributions.filter(day => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };

  return (
    <div
      style={{ height: "auto" }}
      name="statistics"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience mbottom ptop"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            style={{ textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}

            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Statistics
          </p>
          <p className="py-6">These are some of statistics graphs to determine my contribution and knowledge in this digital world.</p>
        </div>
        {/* git Calender */}
        {/* <div className="flex justify-center">
          <GitHubCalendar
            username="Summaiya-Begum"
            transformData={selectLastHalfYear}
            hideTotalCount
            hideColorLegend
          />
        </div> */}
        <div>
          <p align="center">
            <a href="https://github.com/Summaiya-Begum/github-readme-stats"><img alt="Summaiya-Begum's Github Stats" src="https://github-readme-stats.vercel.app/api?username=Summaiya-Begum&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" /></a>
          </p>
        </div>
        <div>
          <img alt="Summaiya's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=Summaiya-Begum&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
        </div>

      </div>
    </div>
  );
};

export default Statistics;
