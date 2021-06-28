export function getDateTime(type,data) {
  var date = new Date(data)
  date.setHours(date.getHours() - 7);

  var tahun = date.getFullYear();
  var month = date.getMonth();
  var tanggal = date.getDate();
  var day = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();

  switch (day) {
    case 0:
      day = "Minggu";
      break;
    case 1:
      day = "Senin";
      break;
    case 2:
      day = "Selasa";
      break;
    case 3:
      day = "Rabu";
      break;
    case 4:
      day = "Kamis";
      break;
    case 5:
      day = "Jum'at";
      break;
    case 6:
      day = "Sabtu";
      break;
  }
  switch (month) {
    case 0:
      month = "Januari";
      break;
    case 1:
      month = "Februari";
      break;
    case 2:
      month = "Maret";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "Mei";
      break;
    case 5:
      month = "Juni";
      break;
    case 6:
      month = "Juli";
      break;
    case 7:
      month = "Agustus";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "Oktober";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "Desember";
      break;
  }

  if (hour < 10) hour = "0" + hour;

  if (minute < 10) minute = "0" + minute;

  date = tanggal + " " + month + " " + tahun;
  var dateDay = day + ", " + tanggal + " " + month + " " + tahun;
  var dateTime =
    hour +
    ":" +
    minute +
    ", " +
    day +
    ", " +
    tanggal +
    " " +
    month +
    " " +
    tahun;

  if (type == "date") return date;
  else if (type == "dateDay") return dateDay;
  else return dateTime;
}
