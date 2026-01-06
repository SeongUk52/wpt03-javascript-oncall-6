class WorkDate{
    #workdayWorkOrder;
    #holidayWorkOrder;
    #dayOfTheWeek;

    constructor(dayOfTheWeek) {
        this.#dayOfTheWeek = dayOfTheWeek;
    }

    isWeekEnd() {
        return (this.#dayOfTheWeek === '토' || this.#dayOfTheWeek === '일');
    }
}

export default WorkDate;