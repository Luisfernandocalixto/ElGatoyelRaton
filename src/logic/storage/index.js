export const saveGameToStorage = ({ board, turn }) => {
    //guardar partida 
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {

    //remover valores del tablero cada vez que se actualice la pagina
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')

}