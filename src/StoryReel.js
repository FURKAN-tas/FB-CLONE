import React from 'react'
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return <div className="storyReel">
        <Story 
        image="https://www.sha.com.tr/images/haberler/2019/04/kartal-yavrusu_1e8d1.jpg"
        profile="https://avatars.githubusercontent.com/u/889610?v=4"
        title="Furkan Taş"/>
        <Story 
        image="https://i.pinimg.com/236x/da/df/6a/dadf6a20353342886904afc6af052b3a--for-cats-ironman.jpg"
        profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nofeFZqVKlUr6DiQ7mu4v7X3WdprTUPe1Q&usqp=CAU"
        title="Sonny Sangha"/>
        <Story 
        image="http://copilot.github.com/social.png"
        profile="https://avatars.githubusercontent.com/u/8461930?v=4"
        title="Rafeh Qazi"/>
        <Story 
        image="https://www.magazinlife.com/wp-content/uploads/2021/01/Mark-Zuckerberg-Facebook-WhatsApp-Instagram-Messenger.jpg"
        profile="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        title="Mark Zuckerberg" />
        <Story
        image="https://pazarlamasyon.com/wp-content/uploads/2019/03/Jeff-Bezos-Amazon.jpg"
        profile="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        title="Jeff Bezos" />
    </div>;
    
}

export default StoryReel
