

// ------------step-wizard-------------
$(document).ready(function () {
    // Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target);
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });
    // Next Button Click
    $(".next-step").click(function (e) {
        e.preventDefault()
        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        active.addClass('previous');
        nextTab(active);
    });

    // Previous Button Click
    $(".prev-step").click(function (e) {
        e.preventDefault()
        var active = $('.wizard .nav-tabs li.active');
        active.removeClass('previous');
        prevTab(active);
    });

    // Click on Tabs
    $('.nav-tabs').on('click', 'li', function () {
        $('.nav-tabs li.active').removeClass('active');
        $(this).addClass('active');
    });
});

// Navigate to Next Tab
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

// Navigate to Previous Tab
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

// upload file
const fileInput = document.getElementById('file-upload');
const fileNameDisplay = document.getElementById('file-name');

if (fileInput)
    fileInput.addEventListener('change', function () {
        if (fileInput.files.length > 0) {
            let fileNames = 'الملفات المختارة: ';
            for (let i = 0; i < fileInput.files.length; i++) {
                fileNames += fileInput.files[i].name;
                if (i < fileInput.files.length - 1) {
                    fileNames += ', ';
                }
            }
            fileNameDisplay.textContent = fileNames;
        } else {
            fileNameDisplay.textContent = 'لم يتم اختيار أي ملفات بعد';
        }
    });


// validate forms
const forms = document.querySelectorAll('.form-validate');
forms.forEach(form => {
    $(form).find("input, select").on("change mousedown", function () {
        validateForm(form);
    });

    form.addEventListener('submit', function (event) {
        if (!validateForm(form)) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});

function validateForm(form) {
    let isValid = true;
    // input[type="file"]
    const fileInputs = form.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        if (input.hasAttribute('required') && input.files.length === 0) {
            isValid = false;
            input.classList.add('is-invalid');
            $(".file-upload-custom").next().show();
            if (input.nextElementSibling) {
                input.nextElementSibling.textContent = 'الرجاء اختيار ملف.';
            }
        } else {
            input.classList.remove('is-invalid');
            $(".file-upload-custom").next().hide();
            if (input.nextElementSibling) {
                input.nextElementSibling.textContent = '';
            }
        }
    });

    // select
    const selectInputs = form.querySelectorAll('select');
    selectInputs.forEach(select => {
        if (select.hasAttribute('required') && select.value === '') {
            isValid = false;
            select.classList.add('is-invalid');
            select.nextElementSibling.textContent = 'الرجاء اختيار خيار.';
        } else {
            select.classList.remove('is-invalid');
            select.nextElementSibling.textContent = '';
        }
    });

    // (text, email, etc)
    const otherInputs = form.querySelectorAll('input:not([type="file"]), textarea');
    otherInputs.forEach(input => {
        if (input.hasAttribute('required') && input.value.trim() === '') {
            isValid = false;
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent = 'هذا الحقل مطلوب.';
        } else {
            input.classList.remove('is-invalid');
            input.nextElementSibling.textContent = '';
        }
    });

    // mobile Number
    const mobileInput = form.querySelector('.mobileNumber');
    if (mobileInput) {
        if (!/^\d+$/.test(mobileInput.value)) {
            isValid = false;
            mobileInput.classList.add('is-invalid');
            mobileInput.nextElementSibling.textContent = 'الرجاء إدخال رقم هاتف صالح.';
        } else {
            mobileInput.classList.remove('is-invalid');
            mobileInput.nextElementSibling.textContent = '';
        }
    }

    // email
    const emailInput = form.querySelector('.email');
    if (emailInput) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            emailInput.classList.add('is-invalid');
            emailInput.nextElementSibling.textContent = 'الرجاء إدخال بريد إلكتروني صالح.';
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.nextElementSibling.textContent = '';
        }
    }

    // password && confirm password
    const passwordInput = form.querySelector('input[name="password"]');
    const confirmPasswordInput = form.querySelector('input[name="confirm_password"]');

    if (passwordInput && confirmPasswordInput) {
        if (confirmPasswordInput.value.trim() === '') {
            isValid = false;
            confirmPasswordInput.classList.add('is-invalid');
            confirmPasswordInput.nextElementSibling.textContent = 'يرجى إدخال تأكيد كلمة المرور.';
        }
        else if (passwordInput.value !== confirmPasswordInput.value) {
            isValid = false;
            confirmPasswordInput.classList.add('is-invalid');
            confirmPasswordInput.nextElementSibling.textContent = 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين.';
        }
        else {
            confirmPasswordInput.classList.remove('is-invalid');
            confirmPasswordInput.nextElementSibling.textContent = '';
        }
    }

    // activate next if isValid
    if (isValid)
        $(form).find(".next-step").removeClass('disabled');


    return isValid;
}

if ($('.datepicker'))
    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',       // Change date format
        autoclose: true,            // Close picker automatically after selection
        todayHighlight: true,       // Highlight today's date
        startDate: new Date(),      // Disable past dates
        // endDate: '+1y',             // Limit to the next 1 year
        daysOfWeekDisabled: [0, 6], // Disable weekends (Sunday = 0, Saturday = 6)
        calendarWeeks: true,        // Show week numbers
        clearBtn: true,             // Add a clear button
        disableTouchKeyboard: true, // Disable touch keyboard on mobile devices
        
    });