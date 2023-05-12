import ItemCount from "./ItemCount";

function ItemListContainer(props) {

    const onAdd = (qty) => {
        console.log = qty
    }

    return (
        <div>
            <h2>AnyShop</h2>
            <h1>{props.gretting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    )
};

export default ItemListContainer;