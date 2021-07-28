

export default function Featured({type}){ //type movie or series
    return (
        <div className="featured">
            {/* if there is type , select category */}
            { type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="comedy" >Comedy</option>
                        <option value="crime" >Crime</option>
                        <option value="drama" >Drama</option>
                    </select>
                </div>
            )

            }
            <img className="fimg1" src="https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img"/>
        <div className="info">
            <img className="fimg2" src=""/>
            <span className="desc">
            Film English is an independent publisher which has the largest online collection of short film lesson plans, feature-length film viewing guides and other ... 
            </span>
            <div className="buttons">
                <button className="play"> 
                {/* icon play ***********************/}
                <span>Play</span>
                </button>
                <button className="more info">
                      {/* icon info ***********************/}
                <span>Info</span> 
                </button>
            </div>
        </div>
        </div>
    )
}