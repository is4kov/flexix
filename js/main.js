/*
    var Flex = {

        elements: {
            container: document.getElementById('flexbox-container')
        },
        options: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start'
        }
    };

    function addEl() {}

    function removeEl() {}*/


$().ready(function() {
    var $exampleContainer = $('#flexbox-container');
    var exampleItemsMinLength = 3;
    var exampleItemsMaxLength = 70;
    var exampleItemsTextPhrase = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus deleniti dicta earum explicabo hic repellendus similique soluta vero voluptatem. Alias eaque molestiae numquam quibusdam reiciendis tempora ullam velit? Accusantium consequatur ducimus fugit impedit iusto necessitatibus nostrum, officia, placeat recusandae rem tenetur totam, ut vel velit voluptatum? Nihil, perferendis qui! Ab ducimus harum laboriosam modi, nobis sapiente sunt! Accusantium ad aspernatur corporis debitis dolores earum eius enim illo, magni omnis optio sunt voluptatibus? Cum deleniti deserunt dignissimos dolor dolores et ipsum labore libero maxime nesciunt nulla porro praesentium reprehenderit, repudiandae rerum saepe sint suscipit temporibus unde, voluptatum. Nostrum, quisquam veritatis.';
    var exampleItemTemplate = '<div class="example-item" contenteditable>new item</div>';

    $('[data-control="select"]').change(function() {
        var $this = $(this);

        //console.log(this, this.value);
        //console.log($this.data('control-option'), this.value);
        $exampleContainer.css($this.data('control-option'), this.value);
    });

    $('[data-control="button"][data-control-option="increment"]').click(function() {
        var $this = $(this);
        var exampleItemsCurrentLength = $exampleContainer.children().length;

        if (exampleItemsCurrentLength < exampleItemsMaxLength) {
            //var newItem = document.createDocumentFragment(exampleItemTemplate);
            $exampleContainer.append(exampleItemTemplate);
        } else {
            console.log('maximum of items have been reached, enough');
            return false;
        }
    });

    $('[data-control="button"][data-control-option="decrement"]').click(function() {
        var $this = $(this);
        console.log(true)

        var exampleItemsCurrentLength = $exampleContainer.children().length;

        if (exampleItemsCurrentLength > exampleItemsMinLength) {
            $exampleContainer.children().last().remove();
        } else {
            console.log('there is minimum of elements already');
            return false;
        }
    });
});