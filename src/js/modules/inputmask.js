import Inputmask from "inputmask";
import $ from "jquery";

export default () => {
    // $('.mask').Inputmask({ mask: "+7 (999) 999-9999" })
    Inputmask({ mask: "+7 (999) 999-9999", clearIncomplete: true }).mask($('.mask'));
};
