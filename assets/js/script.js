// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Save user input to local storage by time-block.
  function saveToLocalStorage() {
    var userInput = $(this).siblings(".description").val();
    var parentId = $(this).parent().attr('id');
    console.log(userInput);
    console.log(parentId);
    localStorage.setItem(parentId, userInput);
  }

    $(".saveBtn").on("click", saveToLocalStorage);

  // Apply the correct class and get user input from local storage.
  function timeIntervals() {
    var timePeriods = $(".time-block"); 
    var currentTime = dayjs().hour();

    timePeriods.each(function() {
      var id = $(this).attr('id');
        if (parseInt(id) === currentTime) {
            $(this).addClass("present");
        } else if (parseInt(id) > currentTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    var valueSaved = localStorage.getItem(id);
    console.log(valueSaved);
    var textAreaChild = $(this).children().eq(1).val(valueSaved);
    console.log(textAreaChild);
    });

  }

  timeIntervals();

  // Current Time in the Header
  function realTimeInterval() {
  var currentDate = new Date();
  currentDate = $('#currentDay').text(currentDate);
  }

  setInterval(realTimeInterval, 1000);
});
