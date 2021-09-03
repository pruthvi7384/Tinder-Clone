import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';

function ChatRoom() {
    const [messages,setmessage] = useState([
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPDWXJNGaIPbf3qwnoSc8fYvH5-zqeQgNKw&usqp=CAU',
            message: 'Whats Up'
        },
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPDWXJNGaIPbf3qwnoSc8fYvH5-zqeQgNKw&usqp=CAU',
            message: 'Hows it going'
        },
        {
            message: 'Hows it going'
        }
    ])
    return (
        <div>
            <div className="chat-room">
                <p className="chat-timestamp">YOU MATCHED WITH ELLEN ON 10/08/21</p>
                {messages.map((message)=>(
                    message.name ? (
                        <div className="chatscrren_messages">
                            <Avatar alt={message.name} src={message.image} className="chat_scrren_image" />
                            <p className="chat_scrren_text">{message.message}</p>
                        </div>
                    ) : (
                        <div className="chatscrren_messages">
                            <p className="chatscrren_user_text">{message.message}</p>
                        </div>
                    )
                ))}
            </div>
            <form className="chat_rom_input">
                    <input className="chat_inputFiled" type="text" placeholder="Type a message..."/>
                    <button className="send_button">SEND</button>
            </form>
        </div>
    )
}

export default ChatRoom
