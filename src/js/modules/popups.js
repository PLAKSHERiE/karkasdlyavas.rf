import { Fancybox } from "@fancyapps/ui";
import $ from "jquery";
import { showError } from "./error.js";
import env from '../helpers/env.js';

export default () => {
    Fancybox.bind("[data-fancybox]", {
        // Your options go here
    });

    $("[data-house]").on("click", function () {
        $('#house [name="house"]').val($(this).attr("data-house"));
        Fancybox.show(
            [
                {
                    src: "#house",
                },
            ],
            {
            },
        );
    });

    $('.popup__form').on('submit', function (event) {
        event.preventDefault();
        if ($(this).find('[name="phone"]').val() === '') {
            showError('Введите номер', 4000);
            return;
        }
        const data = $(this).serializeArray();

        $.ajax({
            url: `${env.DOMAIN}php/forms.php`,
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
