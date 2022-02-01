window.onload = function () {
    console.log("loaded");

    $(`.home-container .item`).each(function (evt) {

        $(this).on("click", function () {

            if($(this).hasClass(`about`)) {
                window.location.href = `about.html`;
            }
            else if($(this).hasClass(`exercises`)) {
                window.location.href = `exercises.html`;
            }
            else if ($(this).hasClass(`projects`)) {
                window.location.href = `projects.html`;
            }

            else if ($(this).hasClass(`others`)) {
                // to do
            }

        })
    })
}