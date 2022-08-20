import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";
import { } from "jquery.cookie";
import { isMobile } from "../helpers/utils.js";

export default () => {
    let comebackOpen = false;

    if ($('.comeback').length === 0) {
        return;
    }

    const comebackOpenPopup = () => {
        const MAXOPEN = 3;
        let count = localStorage.getItem('comeback') ? localStorage.getItem('comeback') : false;
        if (!count) {
            count = 1;
        }
        else {
            if (count >= MAXOPEN) {
                return;
            }
            count++;
        }
        localStorage.setItem('comeback', count);

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
        }, 5000);
    }

    $(".comeback__form-soc-btn").on("click", function () {
        $(".comeback__form-soc-btn").removeClass("active");
        $(this).addClass("active");
    });
};
