// # 3. 친구 찾기

// 이름이 4글자면 친구입니다. 친구를 찾는 함수를 작성해주세요.

// **샘플코드**


const findFriends = (users) => {
    let friends = [];
    for (let i = 0; i < users.length; i++){
        if (users[i].length === 4){
            friends.push(users[i]);
        }
    }
    return friends;
}


// **예시**

// - ex) ["Ryan", "Kieran", "Mark"] => ["Ryan", "Mark"]

// **주의할점**

// - 입력받은 순서를 유지해서 출력해주세요.