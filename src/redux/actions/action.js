const ITEM_UPDATE ="ITEM_UPDATE";
export function itemUpdate(quantity){
    let payload={
        quantity:quantity,
       
    }
    return {
        type: ITEM_UPDATE,
        payload
    }
}



