async function main() {
    const lista = await response();
  
    for (let i = 1; i <= 12; i++) {
      const img = document.getElementById(`imagem${i}`);
      img.src = lista[i - 1];
      const link = document.getElementById(`id_imagem${i}`);
      link.href = lista[i - 1];
    }
  }
  
  async function response() {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=0Duyq_qOF6ED6_3N6zZSodSqTb45i09-2QhC-1isuQc&count=15`
    );
    const data = await response.json();
    const lista = data.slice(0, 12).map((item) => item.links.download);
    return lista;
  }

  main()
