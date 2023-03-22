import {useSelector} from "react-redux";

export default function UserPanel() {
    const user = useSelector((state) => state.user.value)

    function showUserInfo() {
        switch(user.userState){
            case 'signed_up':
            case 'registered':
            case 'engaged':
                return (
                    <div>
                        {user.displayName || user.email}
                    </div>
                )
            default:
                return (
                    <div>
                        Login | Register
                    </div>
                );
        }
    }

    return (
        <div id="UserPanel">
            {showUserInfo()}
        </div>
    );
}
