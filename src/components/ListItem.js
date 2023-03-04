const ListItem = (details) => {
    return ( 
        <div className="col-md-4">
            <div class="card">
                <img className="card-img-top" src={details.image} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{details.animeName}</h5>
                    <p className="card-text">test</p>
                </div>
            </div>            
        </div>
     );
}
 
export default ListItem;