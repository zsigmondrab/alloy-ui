YUI.add('aui-layout-builder-remove-col-tests', function(Y) {

    var suite = new Y.Test.Suite('aui-layout-builder-remove-col');

    suite.add(new Y.Test.Case({
        name: 'Layout Builder Remove Col Tests',

        tearDown: function() {
            if (this._layoutBuilder) {
                this._layoutBuilder.destroy();
            }
        },

        _createLayoutBuilder: function(config) {
            var layout = new Y.Layout({
                rows: [
                    new Y.LayoutRow({
                        cols: [
                            new Y.LayoutCol({
                                size: 6,
                                value: { content: '6' }
                            }),
                            new Y.LayoutCol({
                                size: 6,
                                value: { content: '6' }
                            })
                        ]
                    })
                ]
            });
            this._layoutBuilder = new Y.LayoutBuilder(Y.merge({
                container: Y.one('.container'),
                layout: layout
            }, config));
        },

        'should remove a col when click on remove col button': function() {
            var col,
                deleteColButton,
                layout;

            this._createLayoutBuilder();

            col = Y.one('.col-sm-6');
            col.simulate('mouseover');
            deleteColButton = col.one('.layout-remove-col');
            deleteColButton.simulate('click');

            layout = this._layoutBuilder.get('layout');
            Y.Assert.areEqual(layout.get('rows')[0].get('cols').length, 1);
        }
    }));

    Y.Test.Runner.add(suite);

}, '', {
    requires: ['aui-layout-builder', 'node-event-simulate', 'test']
});