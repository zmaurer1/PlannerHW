var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var setSlots = function() {

    for(let i=1; i<= 8; i++) {
        let textAreaId = "txt".concat(i);
        $(`#${textAreaId}`).val(localStorage.getItem(textAreaId))
    }
}

var setAppt = function(appt) {
    localStorage.setItem(appt.attr(`id`), appt.val());
}

$(".saveBtn").click(function(){
    setAppt($(this).siblings("textarea"));
})
var colorTime = function() {
    for(let i=1; i<= 8; i++) {
        let hourSlot = "hr".concat(i);
        let currentHour = today.format("hh")
        if((i+8)==currentHour){
            $(`#${hourSlot}`).css(`background-color`, `red`);
        }else if((i+8)>currentHour) {
            $(`#${hourSlot}`).css(`background-color`, `green`);
        }else{
            $(`#${hourSlot}`).css(`background-color`, `purple`);
        }
    }
    console.log(today.format("hh"))
}
setSlots();
colorTime();