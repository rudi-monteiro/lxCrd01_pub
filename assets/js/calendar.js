/* ============================================================
 * Calendar
 * This is a Demo App that was created using Pages Calendar Plugin
 * We have demonstrated a few function that are useful in creating
 * a custom calendar. Please refer docs for more information
 * ============================================================ */

(function($) {

    'use strict';

    $(document).ready(function() {

        var selectedEvent;
        $('body').pagescalendar({
            //Loading Dummy EVENTS for demo Purposes, you can feed the events attribute from 
            //Web Service
            events: [{
                title: 'Hora da cartilha',
                class: 'bg-success-lighter',
                start: '2018-04-17T06:00:00',
                end: '2018-04-17T08:00:24',
                other: {}
            }, {
                title: 'Pesquisa de opinião',
                class: 'bg-success-lighter',
                start: '2018-04-17T09:00:00',
                end: '2018-04-17T10:00:24',
            }, {
                title: 'capacitação equipe',
                class: 'bg-complete-lighter',
                start: moment().startOf('week').add(1, 'days').add(2, 'hours').format(),
                end: moment().startOf('week').add(1, 'days').add(6, 'hours').format(),
                other: {
                    //You can have your custom list of attributes here
                    note: 'test'
                }
            }, {
                title: 'Fechar mês UNOP',
                class: 'bg-success-lighter',
                start: moment().startOf('week').add(2, 'days').add(2, 'hours').format(),
                end: moment().startOf('week').add(2, 'days').add(3, 'hours').format(),
                other: {
                    //You can have your custom list of attributes here
                    note: 'test'
                }
            }, {
                title: 'Reunião Mensal',
                class: 'bg-danger-lighter',
                start: moment().startOf('week').add(5, 'days').add(5, 'hours').format(),
                end: moment().startOf('week').add(5, 'days').add(6, 'hours').format(),
                other: {
                    //You can have your custom list of attributes here
                    note: 'test'
                }
            }, ],
            onViewRenderComplete: function() {
                //You can Do a Simple AJAX here and update 
            },
            onEventClick: function(event) {
                //Open Pages Custom Quick View
                if (!$('#calendar-event').hasClass('open'))
                    $('#calendar-event').addClass('open');


                selectedEvent = event;
                setEventDetailsToForm(selectedEvent);
            },
            onEventDragComplete: function(event) {
                selectedEvent = event;
                setEventDetailsToForm(selectedEvent);
            },
            onEventResizeComplete: function(event) {
                selectedEvent = event;
                setEventDetailsToForm(selectedEvent);
            },
            onTimeSlotDblClick: function(timeSlot) {
                //Adding a new Event on Slot Double Click
                var newEvent = {
                    title: 'my new event',
                    class: 'bg-success-lighter',
                    start: timeSlot.date,
                    end: moment(timeSlot.date).add(1, 'hour').format(),
                    allDay: false,
                    other: {
                        //You can have your custom list of attributes here
                        note: 'test'
                    }
                };
                selectedEvent = newEvent;
                $('body').pagescalendar('addEvent', newEvent);

                //Open Pages Custom Quick View
                if (!$('#calendar-event').hasClass('open'))
                    $('#calendar-event').addClass('open');
                setEventDetailsToForm(selectedEvent);
            }
        });
        //After the settings Render you Calendar
        $('body').pagescalendar('render');

        // Some Other Public Methods That can be Use are below \
        //console.log($('body').pagescalendar('getEvents'))
        //get the value of a property
        //console.log($('body').pagescalendar('getDate','MMMM'));

        function setEventDetailsToForm(event) {
            $('#eventIndex').val();
            $('#txtEventName').val();
            $('#txtEventCode').val();
            $('#txtEventLocation').val();
            //Show Event date
            $('#event-date').html(moment(event.start).format('MMM, D dddd'));

            $('#lblfromTime').html(moment(event.start).format('h:mm A'));
            $('#lbltoTime').html(moment(event.end).format('H:mm A'));

            //Load Event Data To Text Field
            $('#eventIndex').val(event.index);
            $('#txtEventName').val(event.title);
            $('#txtEventCode').val(event.other.code);
            $('#txtEventLocation').val(event.other.location);
        }

        $('#eventSave').on('click', function() {
            selectedEvent.title = $('#txtEventName').val();

            //You can add Any thing inside "other" object and it will get save inside the plugin.
            //Refer it back using the same name other.your_custom_attribute

            selectedEvent.other.code = $('#txtEventCode').val();
            selectedEvent.other.location = $('#txtEventLocation').val();

            $('body').pagescalendar('updateEvent', $('#eventIndex').val(), selectedEvent);

            $('#calendar-event').removeClass('open');
        });
        $('#eventDelete').on('click', function() {
            $('body').pagescalendar('removeEvent', $('#eventIndex').val());
            selectedEvent.other.code = $('#txtEventCode').val();
            selectedEvent.other.location = $('#txtEventLocation').val();

            $('#element').pagescalendar('updateEvent', $('#eventIndex').val(), selectedEvent);
            $('#calendar-event').removeClass('open');

        });
        $('#eventDelete').on('click', function() {
            $('#element').pagescalendar('removeEvent', $('#eventIndex').val());
            $('#calendar-event').removeClass('open');
        });


//$('#calendar').pagescalendar("setLocale",'pt');
//console.log('tete');
        
    });

})(window.jQuery);