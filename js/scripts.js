$(document).ready(function() {
  $("#formName").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    $(".person1").text(person1Input);
  });
});

$(document).ready(function() {
  $("#formFood").submit(function() {
    event.preventDefault();
    const food = $("#food").val();
  });
});

$(document).ready(function() {
  $("#formMusic").submit(function() {
    event.preventDefault();
    const style = $("#food").val();
  });
});

$(document).ready(function() {
  $("#formBorn").submit(function() {
    event.preventDefault();
    const dob = $("#born").val();
  });
});

$(document).ready(function() {
  $("#formColor").submit(function() {
    event.preventDefault();
    const favoriteColor = $("#color").val();
  });
});