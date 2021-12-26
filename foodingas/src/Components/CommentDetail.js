import moment from 'moment';


function ReenderComments({ comments }) {
    if (comments) {
        const commentsList = comments.map((comment) => {
            return ( <
                ul key = { comment.id }
                className = "list-unstyled" >
                <
                li > { comment.comment } < /li> <
                li > --{ comment.author }, { moment(comment.date).fromNow() } < /li> < /
                ul >
            );
        });
        return ( <
            div >
            <
            h4 > Comments < /h4> { commentsList } < /
            div >
        )
    } else
        return ( <
            div > < /div>
        );

}
const CommentDeta = (props) => {
    return ( < div className = "col-12 col-md-5 m-1" > < ReenderComments comments = { props.comments }
        /> </div > )
};

export default CommentDeta;