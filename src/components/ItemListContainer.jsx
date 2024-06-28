const ItemListContainer = (prop) =>
{
    return(
        <>
            <h1 class="uk-article-title">{prop.titulo}</h1>
            <p class="uk-text-lead">{prop.mensaje}</p>
        </>
    )
}

export default ItemListContainer