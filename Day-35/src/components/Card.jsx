function Card(user ) {
    
    return (
        <div className="Card">
            <div className="User">   
                <div className="Name"> { user.username}</div>
                <div className="Setting"><i class="bi bi-three-dots"></i></div>
            </div> 

            <div className="Meme"><img src={user.image} alt="" /></div>
            <div className="Like"><i class="bi bi-heart"></i></div>
            <div className="Comment"><i class="bi bi-chat-left-text"></i></div>
            <div className="Share"><i class="bi bi-share"></i></div>
        
        </div>
        
        
    
        );
}
export default Card