const rest = document.getElementById('rest');

const produtos = [
    { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
    { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
    { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
    { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
  ];


  
  let relatorio = ''; 
  let produtosMaisVendidos = ''; 
   
  let totalPorProduto = ''; 
   
  const maisLucrativo = { nome: '', totalVendas: 0 }; 
   
  produtos.forEach(prod => { 
   
    const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 
   
    relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`; 
   
    if (prod.quantidadeVendida > 100) { 
   
      produtosMaisVendidos += `${prod.nome}\n` 
   
    } 
   
    totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`; 
   
    if (totalVendidoProduto > maisLucrativo.totalVendas) { 
   
      maisLucrativo.nome = prod.nome; 
   
      maisLucrativo.totalVendas = totalVendidoProduto; 
   
    }  
   
  }) 
   
  console.log('Relatório de produtos vendidos:'); 
   
  console.log(relatorio); 
   
  console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
   
  console.log(produtosMaisVendidos); 
   
  console.log('Total de vendas por produto:'); 
   
  console.log(totalPorProduto); 
   
  console.log('Produto mais lucrativo:'); 
   
  console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);