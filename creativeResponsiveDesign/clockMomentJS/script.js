moment().format('MMMM Do YYYY, h:mm:ss a'); // September 1st 2021, 2:43:28 pm
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // Sep 1st 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();

// moment("20111031", "YYYYMMDD").fromNow(); // 10 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
// moment().startOf('day').fromNow();        // 15 hours ago
// moment().endOf('day').fromNow();          // in 9 hours
// moment().startOf('hour').fromNow();       // an hour ago

// moment().subtract(10, 'days').calendar(); // 08/22/2021
// moment().subtract(6, 'days').calendar();  // Last Thursday at 2:45 PM
// moment().subtract(3, 'days').calendar();  // Last Sunday at 2:45 PM
// moment().subtract(1, 'days').calendar();  // Yesterday at 2:45 PM
// moment().calendar();                      // Today at 2:45 PM
// moment().add(1, 'days').calendar();       // Tomorrow at 2:45 PM
// moment().add(3, 'days').calendar();       // Saturday at 2:45 PM
// moment().add(10, 'days').calendar();      // 09/11/2021


document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(updateTime));

function updateTime() {
    document.documentElement.style.setProperty("--day", "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty("--hours", "'" + moment().format("k") + "'");
    document.documentElement.style.setProperty("--minutes", "'" + moment().format("mm") + "'");
    document.documentElement.style.setProperty("--seconds", "'" + moment().format("ss") + "'");

    requestAnimationFrame(updateTime);
}
