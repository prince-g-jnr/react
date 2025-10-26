import { useState } from "react";

function LikeButton() {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [IsDisabled, setIsDisabled] = useState(false);
    
    function handleClicks () {
        setIsDisabled(true);

        setLike((currentLiked) => {
            const newLike = !currentLiked;
            setLikeCount(newLike  ? 1 : 0);
            return newLike;
        });

        setTimeout(() => {
            setIsDisabled(false)
        }, 1000);
    };

    return (
        <div>
            <button 
             onClick={handleClicks}
             disabled={IsDisabled}
             className={`
                ${like ? 'liked' : 'unliked'}
                ${IsDisabled ? '' : ''}
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