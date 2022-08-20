import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";
import { isMobile } from "../helpers/utils.js";
import { } from 'jquery.cookie';

export default () => {
    let comebackOpen = false;

    if ($('.comeback').length === 0) {
        return;
    }

    const comebackOpenPopup = () => {
        const MAXOPEN = 3;
        let count = $.cookie('comeback') ? $.cookie('comeback') : false;
        if (!count) {
            count = 1;
        }
        else {
            if (count >= MAXOPEN) {
                return;
            }
            count++;
        }
        $.cookie('comeback', count, { expires: 30 });

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
    };

    $(document).on('mouseleave', (e) => {
        if (e.clientY < 10) {
            if (comebackOpen) {
                return;
            }
            comebackOpenPopup();
        }
    });

    if (isMobile(window)) {
        if (comebackOpen) {
            return;
        }
        setTimeout(() => {
            comebackOpenPopup();
        }, 15000);
    }

    $(".comeback__form-soc-btn").on("click", function () {
        $(".comeback__form-soc-btn").removeClass("active");
        $(this).addClass("active");
    });
};
