// External Libraries
import moment from "moment";
import "moment/locale/ar-sa";
//External Libraries

export default function getTimeAndDate() {
  moment.locale("ar-sa");
  const dateAndTime = moment().format("MMMM Do YYYY, h:mm a");

  return dateAndTime;
}
