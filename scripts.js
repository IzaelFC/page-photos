async function main(){
    var response =  await(await fetch`https://api.unsplash.com/photos/random/?client_id=0Duyq_qOF6ED6_3N6zZSodSqTb45i09-2QhC-1isuQc&count=20`).json()

    var imagem1 = response[0]['links']['download']
    var imagem2 = response[1]['links']['download']
    var imagem3 = response[2]['links']['download']
    var imagem4 = response[3]['links']['download']
    var imagem5 = response[4]['links']['download']

    var lista = [imagem1, imagem2, imagem3, imagem4, imagem5]

    document.getElementById('imagem1').src = lista[0], document.getElementById('id_imagem1').href = lista[0]
    document.getElementById('imagem2').src = lista[1], document.getElementById('id_imagem1').href = lista[1]
    document.getElementById('imagem3').src = lista[2], document.getElementById('id_imagem1').href = lista[2]
    document.getElementById('imagem4').src = lista[3], document.getElementById('id_imagem1').href = lista[3]
    document.getElementById('imagem5').src = lista[4], document.getElementById('id_imagem1').href = lista[4]
}

main()
