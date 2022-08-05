import $ from "jquery";
import { showError } from './error.js';
// import { domain } from '../env.js';
import config from '../../../gulp/config.js';

export default () => {
    const errorsQuiz = [
        {
            required: true,
            text: 'Выберите объект',
        },
        {
            required: true,
            text: 'Выберите архитектуру',
        },
        {
            required: true,
            text: 'Выберите площадь',
        },
        {
            required: true,
            text: 'Выберите назначение',
        },
        {
            required: true,
            text: 'Выберите подарок',
        },
    ];

    const checkQiz = (slideCurrent) => {
        if (!errorsQuiz[slideCurrent - 1].required) {
            return true;
        }

        const slide = $(`[slide="${slideCurrent}"]`);

        if (slide.find("[type='checkbox']").length > 0 && !slide.find("[type='checkbox']").is(':checked')) {
            showError(errorsQuiz[slideCurrent - 1].text, 4000);
            return false;
        }
        if (slide.find("[type='radio']").length > 0 && !slide.find("[type='radio']").is(':checked')) {
            showError(errorsQuiz[slideCurrent - 1].text, 4000);
            return false;
        }

        return true;
    };

    const nextQuiz = () => {
        const slideCurrent = Number($(".quiz__form").attr("slide-current"));

        if (!checkQiz(slideCurrent)) {
            return;
        }

        $(`[slide="${slideCurrent}"]`).css("opacity", "0");
        if (slideCurrent === 5) {
            $(".quiz__form-control").css("opacity", "0");
            setTimeout(() => {
                $(".quiz__form-control").css("display", "none");
            }, 300);
        }

        setTimeout(() => {
            $(`[slide="${slideCurrent}"]`).css("display", "none");

            $(`[slide="${slideCurrent + 1}"]`).css("display", "flex");
            setTimeout(() => {
                $(`[slide="${slideCurrent + 1}"]`).addClass("show");
                $(`.quiz__questions-item`).removeClass("active");
                $(`.quiz__questions-item:nth-child(${slideCurrent})`).addClass("done");
                $(`.quiz__questions-item:nth-child(${slideCurrent + 1})`).addClass("active");
            }, 100);
        }, 300);

        $(".quiz__form").attr("slide-current", slideCurrent + 1);

        $(".quiz__form-soc-btn").on("click", function () {
            $(".quiz__form-soc-btn").removeClass("active");
            $(this).addClass("active");
        });
    };

    $(".quiz__form-next, .quiz__form-radio input").on("click", nextQuiz);

    $('.quiz__form').on('submit', function (event) {
        event.preventDefault();
        if ($(this).find('[name="phone"]').val() === '') {
            showError('Введите номер', 4000);
            return;
        }

        const data = $(this).serializeArray();

        data.type = 'dddd';

        $.ajax({
            url: `${config.dest.domain ? config.isProd : config.src.domain}php/quiz.php`,
            type: 'post',
            dataType: 'json',
            data,
        })
        .done((resp) => {
            if (resp.success) {
                console.log(resp);
                window.location.href = resp.redirect;
            }
            else {
                showError(resp.message, 4000);
                console.log(resp.message);
            }
        })
        .fail(() => {
            showError('Ошибка', 4000);
            console.log("error");
        })
        .always(() => {
            console.log("complete");
        });
    });
};
