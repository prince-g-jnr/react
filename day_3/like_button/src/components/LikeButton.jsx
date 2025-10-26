import { useState } from "react";

function LikeButton() {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [Disabled, setDisabled] = useState(true);
    
    function handleClicks () {
        setDisabled(false);

        setLike((currentLiked) => {
            const newLike = !currentLiked;
            setLikeCount(newLike  ? 1 : 0);
            return newLike;
        });

        setTimeout(() => {
            setDisabled(true)
        }, 1000);
    };

    return (
        <div>
            <button 
             onClick={handleClicks}
             IsDisabled={Disabled}
             className={`
                ${like ? 'liked' : 'unliked'}
                ${Disabled ? '' : ''}
                `}
            >
                <span role="img" aria-label={like ? 'red heart' : 'white heart'}>
                    {like ? '❤️' : '🤍'}
                </span>
                {like ? 'Liked' : 'Like'}
            </button>
            <span className="text">
                {likeCount} {likeCount === 1 ? 'like' : 'likes'}
            </span>
        </div>
    )
}

export default LikeButton;