// 임시 데이터
const data = [
  { date: "2023-01-21", title: "설날연휴" },
  { date: "2023-01-22", title: "설날" },
  { date: "2023-01-23", title: "설날연휴" },
  { date: "2023-01-24", title: "설날연휴" },
];

// 데이터 가공
const calendarList = data.reduce(
  (acc, v) => ({ ...acc, [v.date]: [...(acc[v.date] || []), v.title] }),
  {}
);

// pad method
Number.prototype.pad = function () {
  return this > 9 ? this : "0" + this;
};

// 달력 생성
const makeCalendar = (date) => {
  // 현재의 년도와 월 받아오기
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;

  // 한달전의 마지막 요일
  const firstDay = new Date(date.setDate(1)).getDay();
  // 현재 월의 마지막 날 구하기
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  // 남은 박스만큼 다음달 날짜 표시
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = "";

  // 한달전 날짜 표시하기
  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 이번달 날짜 표시하기
  for (let i = 1; i <= lastDay; i++) {
    const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`;

    htmlDummy += `
      <div>
        ${i}
        <p>
          ${calendarList[date]?.join("</p><p>") || ""}
        </p>
      </div>
    `;
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(
    `.dateTitle`
  ).innerText = `${currentYear}년 ${currentMonth}월`;
};

const date = new Date();

makeCalendar(date);

// 이전달 이동
document.querySelector(`.prevDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
};

// 다음달 이동
document.querySelector(`.nextDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
};
