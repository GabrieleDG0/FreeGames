var numSelected = null;
var tileSelected = null;
var errors = 0;
var board = [
    "--3-1---5",
    "----8-9-2",
    "---5-4---",
    "1-5----9-",
    "7------26",
    "---74----",
    "6---91--4",
    "812--365-",
    "-9--2578-"
]
var solution = [
    "473912865",
    "561387942",
    "928564173",
    "185236497",
    "749158326",
    "236749518",
    "657891234",
    "812473659",
    "394625781"
]
window.onload = function() {
    setGame();
}
function setGame() {
    for (let i = 1; i<=9; i++){
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    for (let r = 0; r < 9; r++) {
        for (let c=0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board [r][c];
                tile.classList.add("tile-start")
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}
function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
function selectTile() {
    if (numSelected){
        if (this.innerText != "") {
            return;
        }
        this.innerText = numSelected.id;
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        if (solution[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        } 
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}