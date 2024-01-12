const products = [
    {
        'id': 1,
        'image': 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'product_name': 'Airforce Low Cuts',
        'product_price': '149.99',
        'discounted_price': '99.99',
    },
    {
        'id': 2,
        'image': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Nike Air Max 270',
        'product_price': '199.99',
        'discounted_price': '149.99',
    },
    {
        'id': 3,
        'image': 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXMlMjBjb252ZXJzZXxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Converse All Star',
        'product_price': '79.99',
        'discounted_price': '59.99',
    },
    {
        'id': 4,
        'image': 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXMlMjBhZGlkYXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Adidas Superstar',
        'product_price': '99.99',
        'discounted_price': '79.99',
    },
    {
        'id': 5,
        'image': 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXMlMjB2YW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Vans Old Skool',
        'product_price': '69.99',
        'discounted_price': '49.99',
    },
    {
        'id': 6,
        'image': 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzJTIwcmVlYm9rfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Reebok Classic Leather',
        'product_price': '89.99',
        'discounted_price': '69.99',
    },
    {
        'id': 7,
        'image': 'https://images.unsplash.com/photo-1512374382149-233c42daa494?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzJTIwcHVtYXxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Puma Suede Classic',
        'product_price': '79.99',
        'discounted_price': '59.99',
    },
    {
        'id': 8,
        'image': 'https://images.unsplash.com/photo-1556048219-bb6978360b84?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzJTIwYmFsZW5jaWFnYXxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Balenciaga Triple S',
        'product_price': '999.99',
        'discounted_price': '799.99',
    },
    {
        'id': 9,
        'image': 'https://images.unsplash.com/photo-1543109740-9f5e3a4e7f32?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzJTIwdGltYmVybGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Timberland 6-Inch Boot',
        'product_price': '189.99',
        'discounted_price': '149.99',
    },
    {
        'id': 10,
        'image': 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2VzJTIwYXNpY3N8ZW58MHx8MHx8&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Asics Gel-Kayano 26',
        'product_price': '159.99',
        'discounted_price': '119.99',
    },
    {
        'id': 11,
        'image': 'https://images.unsplash.com/photo-1512327428887-25438b73f0d9?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzJTIwZ3VjY2l8ZW58MHx8MHx8&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Gucci Ace Sneaker',
        'product_price': '599.99',
        'discounted_price': '499.99',
    },
    {
        'id': 12,
        'image': 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXMlMjB2YW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1974&auto=format&fit=crop',
        'product_name': 'Vans Old Skool',
        'product_price': '69.99',
        'discounted_price': '49.99',
    }
];

export { products };