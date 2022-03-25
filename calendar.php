<?php include('_header.php'); ?>
    <link class="" href="pages/css/themes/calendar.css" rel="stylesheet" type="text/css" />
    <div class="content full-width full-height">
          <!-- START CALENDAR -->
          <div class="calendar">
            <!-- START CALENDAR HEADER-->
            <div class="calendar-header">
              <div class="drager">
                <div class="years" id="years"></div>
              </div>
            </div>
            <div class="options">
              <div class="months-drager drager">
                <div class="months" id="months"></div>
              </div>
              <h4 class="semi-bold date" id="currentDate">&amp;</h4>
              <div class="drager week-dragger">
                <div class="weeks-wrapper" id="weeks-wrapper">
                </div>
              </div>
            </div>
            <!-- START CALENDAR GRID-->
            <div id="calendar" class="calendar-container">
            </div>
            <!-- END CALENDAR GRID-->
          </div>
          <!-- END CALENDAR -->
        </div>
        <!-- END PAGE CONTENT -->
<?php include('_footer.php'); ?>
