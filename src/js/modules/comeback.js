import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";
import { } from "jquery.cookie";

export default () => {
    let comebackOpen = false;

    if ($('.comeback').length === 0) {
        return;
    }

    $(document).on('mouseleave', (e) => {
        if (e.clientY < 10) {
            if (comebackOpen) {
                return;
            }
            let count = $.cookie('comeback') ? $.cookie('comeback') : false;

            if (!count) {
                count = 1;
            }
            else {
                if (count >= 3) {
                    return;
                }
                count++;
            }
            $.cookie('comeback', count, { expires: 365 });

            Fancybox.show(
                [
                    {
                        src: "#comeback",
                    },
                ],
                {
                },
            );

            comebackOpen = true;
        }
    });

    $(".comeback__form-soc-btn").on("click", function () {
        $(".comeback__form-soc-btn").removeClass("active");
        $(this).addClass("active");
    });
};
