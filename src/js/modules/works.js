import $ from "jquery";

export default () => {
    const worksStepShow = 8;
    const worksShow = (count, offset) => {
        for (let i = offset; i < count + offset; i++) {
            $('.works__item').eq(i).addClass('show');
        }

        if ($('.works__item:not(.show)').length === 0) {
            $('.works__btn-wrapper').hide();
        }
    };

    worksShow(worksStepShow, 0);

    $('.works__btn-wrapper').on('click', function () {
        const offset = Number($(this).attr('offset'));

        worksShow(worksStepShow, offset);
        $(this).attr('offset', offset + worksStepShow);
    });
};
