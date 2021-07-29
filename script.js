$("#but").click(function () {
    prints();
    ac();
});
function ac() {
    for (let i = 0; i < 3; i++) {
        $("input").eq(i).val("");
    }
}
function prints() {
    var rn = $('#rollno').val();
    var name = $('#name').val();
    var m = $('#marks').val();
    $("table.tab").html($('table.tab').html() + "<tr> <td> Roll no - " + rn + " , " + name + " has scored " + m + " marks </td ></tr> ");
    $("table.tab>td").addClass('tab');
    // console.log("<tr> <td> Roll no - " + rn + " , " + name + " has scored " + m + " marks </td ></tr> ");
}