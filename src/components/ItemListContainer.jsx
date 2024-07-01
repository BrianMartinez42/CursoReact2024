const ItemListContainer = (prop) =>
{
    return(
        <>
            <h1 className="uk-article-title">{prop.titulo}</h1>
            <p className="uk-text-lead">{prop.mensaje}</p>
        </>
    )
}

export default ItemListContainer