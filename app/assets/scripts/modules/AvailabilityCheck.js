import $ from 'jquery';

class AvailabityCheck{

  constructor(){
    this.serverData = [];
    this.lastCP = 0;
    this.obj = "";
    $(".service").hide();
    $(".loc").hide();
    $(".street").hide();

    var that = this;
    $("#btnCP").click(function () {
      that.loadCP(Number($("#inpCP").val()), 0);
      $(".service").hide();
      $(".loc").show();
      $(".street").hide();

    });

    $(".inpCP").keypress(function (evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;

      if (charCode == 13) {
        $("#btnCP").click();
        return true;
      }
      return that.isNumber(evt);
    });

    //on locality change load streets
    $("#loc").change(function () {
      $(".service").hide();
      $("#street").empty();
      $("#street").append("<option selected value='[ Wählen Sie ihre Strasse& ]'>[ Wählen Sie ihre Strasse ]</option>");
      $(".street").show();

      for (var i in that.serverData) {
        if ($(this).val() === that.decodeHtml(that.serverData[i].locality)) {
          for (var b in that.serverData[i].streets) {
            $("#street").append("<option value='" + that.serverData[i].streets[b].homes[0].id + "' data-service='0'>" + that.serverData[i].streets[b].street + "</option>");
          }
        }
      }
    });

    $("#street").change(function () {
      $(".service").hide();
      $(".serv" + $(this).find("option:selected").attr("data-service")).show();
    });

  }

  setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }

  getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
      c_value = null;
    } else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
  }

  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  loadCP(cp, preload) {

    $("#loc").empty();
    $("#street").empty();
    $(".service").hide();

    var that = this;

    $.ajax({
      url: "https://ses.internet.lu/Scripts/sql.exe?Sql=getAdressesEx.phs&SqlDB=ses_fo&_iZip=" + cp + "&callback=?",
      dataType: 'jsonp',
      success: function (data) {
        console.log(data);
        if (data.localities) {
          var c = 0;
          //create select content
          for (var i in data.localities) {
            $("#loc").append("<option value='" + data.localities[i].locality + "'>" + data.localities[i].locality + "</option>");
            c++;
          }
          if (c == 0) {
            $("#loc").append("<option>Nicht gefunden</option>");
            $("#street").append("<option>Nicht gefunden</option>");
            return true;
          }
          //order select option alphabetically
          $("#loc").append($("#loc option").remove().sort(function (a, b) {
            var at = $(a).text(),
            bt = $(b).text();
            return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
          }));

          $("#loc").prepend("<option selected value='[ Wählen Sie ihren Ort / Stadt ]'>[ Wählen Sie ihren Ort / Stadt ]</option>");
          that.serverData = data.localities;
          if (preload) {
            $('#loc option[value="' + that.getCookie("locality") + '"]').prop("selected", true);
            $('#loc').change();
            $('#street option[value="' + that.getCookie("street") + '"]').prop("selected", true);
            $('#street').change();
          }
        } else {
          $("#loc").append("<option>Nicht gefunden</option>");
          $("#street").append("<option>Nicht gefunden</option>");
        }
      },
      error: function () {
      }
    });
    return true;
  }
}

export default AvailabityCheck;
