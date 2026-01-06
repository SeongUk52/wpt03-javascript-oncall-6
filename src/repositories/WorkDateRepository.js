import WorkDate from "../domains/WorkDate.js";

class WorkDateRepository {
    static DAYS_IN_MONTH = [
        31, // 1월
        28, // 2월 (고정)
        31, // 3월
        30, // 4월
        31, // 5월
        30, // 6월
        31, // 7월
        31, // 8월
        30, // 9월
        31, // 10월
        30, // 11월
        31  // 12월
    ];
    static DAY_OF_THE_WEEK = [
      '월', '화', '수', '목', '금', '토', '일'
    ];
    static SPECIAL_HOLIDAY = [
        [0], [1], [], [1], [], [5], [6], [], [15], [], [3, 9], [], [25]
    ];

    #workDates;
    #month

    constructor(month, startDayOfTheWeek) {
        this.#workDates = [];
        this.#month = month;

        const daysInMonth = WorkDateRepository.DAYS_IN_MONTH[month - 1];
        const startIndex = WorkDateRepository.DAY_OF_THE_WEEK.indexOf(startDayOfTheWeek);

        for(let i = 0; i < daysInMonth; i++) {
            const dayIndex = (startIndex + i) % 7;
            const dayOfWeek = WorkDateRepository.DAY_OF_THE_WEEK[dayIndex];

            this.#workDates.push(new WorkDate(i + 1, dayOfWeek))
        }

    }

    findWorkdays() {
        return this.#workDates
            .filter(i => !i.isWeekEnd)
            .filter(i => !WorkDateRepository.SPECIAL_HOLIDAY[this.#month].includes(i))
    }

    findHolidays() {
        return this.#workDates
            .filter(i => i.isWeekEnd)
            .filter(i => WorkDateRepository.SPECIAL_HOLIDAY[this.#month].includes(i))
    }
}

export default WorkDateRepository;