document.addEventListener('DOMContentLoaded', function () {
    const cardRooms = document.querySelectorAll('.card-room');
    cardRooms.forEach(function (room) {
        const cardIcon = room.querySelector('.card-icon');
        cardRoom.addEventListener('click', function () {
            cardIcon.classList.toggle('clicked'); // Toggle the 'clicked' class on click
        });
    });
});

$(function() {
    $('#tanggalBooking').daterangepicker({
        singleDatePicker: true,
        opens: 'left',
        autoUpdateInput: false,
        locale: {
            format: 'DD/MM/YYYY',
            applyLabel: 'Pilih',
            cancelLabel: 'Batal',
            fromLabel: 'Dari',
            toLabel: 'Ke',
        }
    }, function(start, end, label) {
        console.log("Start date: " + start.format('YYYY-MM-DD'));
        $('#tanggalBooking').val(start.format('DD/MM/YYYY'));
    });

    $('#startDate').daterangepicker({
        singleDatePicker: true,
        opens: 'left',
        autoUpdateInput: false,
        locale: {
            format: 'DD/MM/YYYY',
            applyLabel: 'Pilih',
            cancelLabel: 'Batal',
            fromLabel: 'Dari',
            toLabel: 'Ke',
        }
    }, function(start, end, label) {
        console.log("Start date: " + start.format('YYYY-MM-DD'));
        $('#startDate').val(start.format('DD/MM/YYYY'));
    });

    $('#endDate').daterangepicker({
        singleDatePicker: true,
        opens: 'left',
        autoUpdateInput: false,
        locale: {
            format: 'DD/MM/YYYY',
            applyLabel: 'Pilih',
            cancelLabel: 'Batal',
            fromLabel: 'Dari',
            toLabel: 'Ke',
        }
    }, function(start, end, label) {
        console.log("End date: " + start.format('YYYY-MM-DD'));
        $('#endDate').val(start.format('DD/MM/YYYY'));
    });
});
