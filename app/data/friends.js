var friend_list = [];

function Friend(name, photo_url, answers) {
    this.name = name,
    this.photo_url = photo_url,
    this.answers = answers;
}

Friend.prototype.calcScore = function() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.answers.reduce(reducer);

}

Friend.prototype.addFriend = function() {
    friend_list.push(this);
}

function friendMatch(user) {
    var userScore = user.calcScore();
    if (friend_list.length < 1) {
        return user;
    } else {
        var match = friend_list[0]
        for (var i = 0; i < friend_list.length; i++) {
            if (Math.abs(userScore - match.calcScore()) > Math.abs(userScore - friend_list[i].calcScore())) {
                match = friend_list[i]
            }
        }
    }
    return match;
    
}

// Create a dummy value
var bear = new Friend("A bear", "https://www.wikiality.com/file/2016/11/bears1.jpg", [1,1,1,1,1,1]);
var squirrel = new Friend ("A Squirrel", "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&h=350", [5,5,5,5,5,5]);
friend_list.push(bear);
friend_list.push(squirrel);

module.exports = {
    friend_list,
    Friend,
    friendMatch
}