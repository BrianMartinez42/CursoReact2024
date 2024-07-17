import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <>
            <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom">
                    <div className="uk-card-media-top uk-position-relative uk-height-1-1 uk-width-1-1">
                        <Link to={"/item/" + item.id}><img src={item.image} className="uk-object-cover uk-height-1-1 uk-width-1-1" alt=""/></Link>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item