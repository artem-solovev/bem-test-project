block('goods')(

    tag()('ul'),

    content()(function() {
        return this.ctx.goods.map(function(item){
            return [
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'title',
                            content: item.title
                        },
                        {
                            elem: 'image',
                            url: item.image
                        },
                        {
                            elem: 'price',
                            content: item.price
                        }
                    ]
                },
                ' '
            ];
 
        });

    }),
  
    elem('item')(
        tag()('li')
    ),

    elem('title')(
        tag()('h3')
    ),

    elem('image')(
        tag()('img'),

        attrs()(function() {
            return { src: this.ctx.url };    
        })
    ),
            
    elem('price')(
        tag()('span')
    )
);