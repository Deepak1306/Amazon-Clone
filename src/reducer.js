export const initialState ={
    basket:[{
       id:"122126",
       title:"Apple iPhone 13 Pro Max (128GB) - Sierra Blue" ,
       price:129999,
       rating:5,
       image:"https://m.media-amazon.com/images/I/61i8Vjb17SL._SX679_.jpg"
        
    }]
};

export const getBasketTotal=(basket)=> basket?.reduce((amount,item)=>item.price+amount,0);



function reducer(state,action){
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
         
        return {
            basket:[...state.basket,action.item]
        };
        
        case 'REMOVE_FROM_BASKET':
        let newbasket=[...state.basket];

        const index=state.basket.findIndex((baskteItem)=>baskteItem.id===action.id);

         if(index>=0){
             newbasket.splice(index,1);

         }
        return {
        basket:newbasket
        };
        
        
        default:
        return state;

    }
}

export default reducer;