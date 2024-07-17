const Footer = () =>{
    return(
        <div className="uk-position-bottom uk-overlay uk-overlay-default uk-padding-small uk-text-center uk-position-fixed">
            <footer>
                <div className="uk-flex">
                    <div className="uk-text-left uk-width-1-2">
                        <span uk-icon="uk-margin-small-right">©</span> 2024 - Todos los derechos reservados 
                    </div>
                    <div className="uk-text-right uk-width-2-2">
                        <a href="" className="uk-icon-button uk-margin-small-right" uk-icon="facebook"></a>
                        <a href="" className="uk-icon-button uk-margin-small-right" uk-icon="x"></a>
                        <a href="" className="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer