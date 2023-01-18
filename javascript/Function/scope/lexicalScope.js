/*
    렉시칼(Lexical) 범위 
    부모 함수의 안에 중첩된 내부 함수는 해당 외부 함수의 범위나 범위 내에서 정의된 변수에 엑세스할 수 있다.
    부모 함수나 조부모 함수 등이 엑세스하는 동일한 항목에 엑세스할 수 있다.
    하지만 역방향으로는 불가능하다.
*/

function bankRobbery() {
    const heroes = ['spiderman', 'Wolberine', 'Black Panther', 'Batwoman'];
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
    // console.log(color); // color is not defined
}

bankRobbery(); // PLEASE HELP US, SPIDERMAN
                // PLEASE HELP US, WOLBERINE
                // PLEASE HELP US, BLACK PANTHER
                // PLEASE HELP US, BATWOMAN
