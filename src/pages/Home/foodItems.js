const foodItems = []

for(let i=1; i <= 6; i++) {
    const item = {
        id: i,
        name: 'Food Item ' + i, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 1
    }

    foodItems.push(item)
}

export {foodItems}