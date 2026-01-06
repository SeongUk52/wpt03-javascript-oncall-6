class WorkController {
    #workView
    #workDateService

    constructor(workView, workDateService) {
        this.#workView = workView;
        this.#workDateService = workDateService;
    }

    async run() {
        const [month, dayOfTheWeek] =
            await this.#workView.inputMonthAndDayOfTheWeek();
    }
}

export default WorkController;