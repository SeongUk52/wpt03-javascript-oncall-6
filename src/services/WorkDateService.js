import WorkDateRepository from "../repositories/WorkDateRepository.js";

class WorkDateService {
    #workDateRepository;

    constructor(month, startDayOfTheWeek) {
        this.#workDateRepository = new WorkDateRepository(month, startDayOfTheWeek);
    }
}

export default WorkDateService;