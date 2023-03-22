function newUser (email='', password='', displayName='', state='anonymous'){
    function validateAttributes(email, password, displayName){
        // set validations here, for example:
        // username could validate length, make an api call for uniqueness
        // password could be length, inclusion of certain types of characters, and exclusion of the rest
        // displayName could be exclusion of bad language, things to make them look like an admin, etc.
        if (true) { // valid conditions should replace true, shortcutting because POC
            return true
        }
        return false
    }

    if (!validateAttributes(email, password, displayName)) {
        return false;
    }

    let user = {}
    user.email = email;
    user.password = password;
    user.displayName = displayName;
    user.state = state;
    return user
}

function updateUser(user={}, email='', password='', displayName='', state='anonymous'){
    if (!user?.userSend) return false;
    user.email = email;
    user.password = password;
    user.displayName = displayName;
    user.state = state;
    return user
}

export { newUser, updateUser }
