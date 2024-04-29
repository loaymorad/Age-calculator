document.addEventListener("DOMContentLoaded", function() {
    
    const resultBtn = document.querySelector(".result-btn");
    const yearCount = document.querySelector(".yearCount");
    const monthCount = document.querySelector(".monthCount");
    const dayCount = document.querySelector(".dayCount");
    const errorText = document.querySelector(".error");

    let day, month, year;

    resultBtn.addEventListener("click", (e) => {
        day = parseInt(document.querySelector(".in-Day").value);
        month = parseInt(document.querySelector(".in-Month").value) - 1;
        year = parseInt(document.querySelector(".in-Year").value);
        const birthDay = new Date(year, month, day);
        if(validDate()) {
            let age = calculateAge(birthDay);
            yearCount.textContent = `${age.years}`;
            monthCount.textContent = `${age.months}`;
            dayCount.textContent = `${age.days}`;
        } else {
            errorText.textContent = `*Invalid birthday`;
        }
    });

    function validDate() {
        let today = new Date();
        if (year > 1900 && today.getFullYear() >= year && month >= 0 && month <= 12 && day >= 1 && day <= 31 ) {
            return true;
        } else {
            return false;
        }
    }

    function calculateAge(birthDay) {
        let age = { years: 0, months: 0, days: 0 };
        let today = new Date();
        let dayDiff = today.getDate() - birthDay.getDate();
        if (dayDiff >= 0) {
            age.days = dayDiff;
        } else {
            age.days = dayDiff + 30;
            today.setMonth(today.getMonth() - 1);
        }
        let monthDiff = today.getMonth() - birthDay.getMonth();
        if (monthDiff >= 0) {
            age.months = monthDiff;
        } else {
            age.months = monthDiff + 12;
            today.setFullYear(today.getFullYear() - 1);
        }
        let yearDiff = today.getFullYear() - birthDay.getFullYear();
        age.years = yearDiff;
        return age;
    }
});
