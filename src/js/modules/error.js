import $ from "jquery";

let timerError;

export const showError = (text, sec) => {
    $(".error").hide();
    $(".error__text").text(text);
    $(".error").fadeIn(300);
    timerError = clearTimeout(timerError);
    timerError = setTimeout(() => {
        $(".error").fadeOut(300);
    }, sec);
};

export const errorHandler = () => {
    $(document).on('mouseup', (e) => {
        const div = $(".error");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.fadeOut(300);
        }
    });
};
