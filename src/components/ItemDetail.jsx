import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{
    return (
        <>
            <div className="uk-panel uk-card uk-card-default">
                <img src={item.image} className="uk-align-center uk-align-left@m uk-margin-remove-adjacen" width="500" height="500" alt=""/>
                <h3 className="uk-card-title">{item.title}</h3>
                <p>{item.description}</p>
                <ItemCount stock={item.stock}/>
            </div>
        </>
    )
}

export default ItemDetail