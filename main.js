const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button')
const $img = createElement('img');

const player1 = {
    player: 1,
    name: 'KITANA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword', 'steel fans', 'dagger'],
    attak: function () { console.log(player1.name + 'Fight...') }
};

const player2 = {
    player: 2,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'steel fans', 'dagger'],
    attak: function () { console.log(player2.name + 'Fight...') }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className)
    };

    return $tag;
};

function createPlayer(player) {
    const $player = createElement('div','player' + player.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $name.innerText = player.name
    $life.style.width = player.hp
    $img.src = player.img

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    return $player
};

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player + ' .life');
    player.hp -= Math.ceil(Math.random() *20)
    $playerLife.style.width = player.hp + '%';
    console.log($playerLife.style.width);

    if (player.hp < 0) {
        $arenas.appendChild(playerWin(player.name))
        $playerLife.style.width = 0 + '%'
        $randomButton.disabled = true;
    }
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle')
    $winTitle.innerText = name + ' won'

    return $winTitle
}

function nobodyWin() {
    const $nobodyWin = createElement('div', 'winTitle');
    $nobodyWin.innerText = 'Nobody won';

    return $nobodyWin;
};

function getWinner(player1, player2) {
    if(player1.hp > player2.hp) {
        $arenas.appendChild(playerWin(player1.name))
} else if (player2.hp > player1.hp) {
        $arenas.appendChild(playerWin(player2.name))
} else if (player1.hp == 0 && player2.hp == 0) {
        $arenas.appendChild(nobodyWin());
}
}

$randomButton.addEventListener('click', function() {
    console.log('click');
    changeHP(player1)
    changeHP(player2)
})

getWinner(player1, player2);
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
