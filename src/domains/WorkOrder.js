class WorkOrder {
    #order

    constructor(order) {
        this.#order = order;
    }

    schedule() {
        const result = this.#order.shift();
        this.#order.push(result);
        return result;
    }
}

export default WorkOrder;