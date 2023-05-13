import Item from "./Item";

function ItemList({usuarios}) {
    

    return (
        <div>
            <h1>Hi, soy ItemList!</h1>
            <div key={usuarios.id}>
                {usuarios?.map((e) => {
                return (
                <div key={e.id}>
                    <Item 
                        usuarios={e}
                        key={e.id}
                    ></Item>
                </div>
                )
            })
            }
            </div>
        </div>
    )
};

export default ItemList;

//<Link to={'/details/' + i.id}></Link>