let command = null;
const todoList = [];
while (command !== 'quit') {
    command = prompt('명령어를 입력하세요');

    if ("new" === command) {
        let todo = prompt('할 일을 입력하세요.');
        todoList.push(todo);
        console.log(`${todo} added to list`);
    } else if ("list" === command) {
        console.log("*******");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("*******");
    } else if ("delete" === command) {
        let num = prompt('삭제할 목록의 번호를 입력하세요.');
        todoList.splice(num, 1);
        console.log('Todo Removed');
        console.log("*******");
    } else if ("quit" === command) {
        console.log('OK, YOU QUIT THE APP');
    }
}

