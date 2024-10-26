import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,reading_time}) => {
    return (
        <div className="w-1/3 bg-slate-500 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-4xl">Reading Time: {reading_time}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    reading_time: PropTypes.number
}

export default Bookmarks;