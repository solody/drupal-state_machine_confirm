(function ($, Drupal) {
    Drupal.behaviors.stateMachineConfirm = {
        attach: function (context, settings) {
            console.log(context);
            $('form.state-machine-state-transition-form', context).once('stateMachineConfirm').each(function () {
                // Apply the myCustomBehaviour effect to the elements only once.
                $(this).submit(function () {
                    return confirm('操作将无法撤消，您确定要执行此操作吗？');
                })
            });
        }
    };
})(jQuery, Drupal);