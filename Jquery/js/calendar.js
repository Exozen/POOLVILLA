$(function () {
    // แทรกโค้ต jquery           
    $("#startdate").datepicker({minDate: 0,
        dateFormat: 'dd-M-yy',
        onSelect: function (dateText)
        {
            var actualDate = new Date(dateText);
            
            var newDate = new Date(actualDate.getFullYear()+543, actualDate.getMonth(), actualDate.getDate()+1);
           // var newDate2 = new Date(actualDate.getFullYear() + 543, actualDate.getMonth(), actualDate.getDate() + 1);
            //    newDate = newDate.toLocaleFormat('%d-%b-%Y');   
            $('#endDate').datepicker('option', 'minDate', newDate).val(formatDate(newDate));
           // $('#startdate').datepicker('option', 'minDate', newDate).val(formatDate(newDate));
            //  $('#endDate').datepicker({dateFormat: 'yy-mm-dd'}).val();
            newDate = new Date(actualDate.getFullYear()-543, actualDate.getMonth(), actualDate.getDate()+1);
        }
    });
});
$(function () {
    // แทรกโค้ต jquery
    $("#endDate").datepicker({minDate: 0, dateFormat: 'dd-M-yy'});
    // minDate: -20 ไม่สามารถเลือกวันที่ ก่อน 20 วันก่อนหน้าได้
    // maxDate: '+1M +10D' ไม่สามารถเลือก วันที่ถัดจาก อีก 1 เดือนและ 10 วัน ได้
    // หากต้องการให้เลือกวันที่ได้เฉพาะวันปัจจุบันเป็นต้นไป
    // สามารถกำหนด เป็น $("#dateInput").datepicker({minDate: 0});
});
function formatDate(date) {
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + '-' + monthNames[monthIndex] + '-' + year;
}

