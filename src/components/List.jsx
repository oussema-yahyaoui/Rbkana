import ListItem from "./ListItem"
// import arrow
export default function List(){
    return (
        <div className="list">
        <span className="listTitle">keep Watching ...</span> 
        <div className="listwrapper">
            {/* icon arrow  */}
            <div className="listcontainer">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
        </div>   
        </div>
    )
}