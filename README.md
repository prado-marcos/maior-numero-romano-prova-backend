# Maior número romano em uma palavra
## Prova Backend

## Para começar
Para instalar os modulos necessários:

```
$ npm install
```

Para rodar os testes:

```
$ npm test
```

## Lógica por trás da API
### Função largestRomanNumInStr
-Função "largestRomanNumInStr" recebe uma string
-A string é processada para substituir os caracteres que não pertencem aos numerais romanos, e substitui os caracters não desejados por "espaço"
-O caracteres são passados para caixa alta
-As substrings são separadas, e o começo de uma string e o fim dela sao delimitados pelos espaços, e então essas substrings são adicionadas a um array
-São retirados todos os elementos vazios do array
-São retirados todas as substrings que não seguem o padrão de numeral romano
-Esse array é percorrido, cada número romano é convertido em números decimais, e se tal número for o maior na sequência do array, é salvo em um objeto o o número romano e seu correspondente valor em decimal
-Por fim tal função retorna um objeto formado pelo maior número romano e seu correspondente valor em decimal

### Servidor
-Na parte do servidor, a aplicação recebe uma requisição atraves da função post, que recebe como requisição um JSON com a seguinte estrutura como exemplo: { "text": "AXXBLX" }
-O corpo da requisição é processado pela função "largestRomanNumInStr" e retorna o objeto correspondente a conversão
-Por fim tal objeto é enviado como resposta