import MissionUtils from "@woowacourse/mission-utils";
import { formatMonthAndDayOfTheWeek } from "../utilities/Messages.js";

class WorkView {
    async inputMonthAndDayOfTheWeek() {
        const input = await MissionUtils.Console.readLineAsync(formatMonthAndDayOfTheWeek());
        return input.split(',');
    }
}

export default WorkView;