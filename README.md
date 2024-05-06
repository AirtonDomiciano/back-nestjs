## Executaveis 

Executa Slint => npm run lint:fix

# Git Rebase

Importante: Ao realizar os passos abaixo, deve-se estar na sua branch de trabalho.

### 1 - Adicionar arquivos ao repositório
 local. git add .

### 2 - Realizar o commit 
git commit -m "[Descrição do commit]"


### 3 - Buscar os arquivos da origin master. 
git fetch origin main

### 4 - Unificar os arquivos da branch master com a atual. 
git rebase origin/main

## Caso ocorrer conflitos
### 5 - Deverá corrigir os conflitos. Adicionar Arquivos ao repositório.
git add .

### 6 - Executar o comando abaixo, vai para o próximo commit e verifica se existe conflito.
git rebase --continue // git rebase --skip

## 7 - Caso existir conflitos os passos "5" devera ser executado novamente.

### 8 - Caso não ocorrer mais conflitos, executar.
git push --force-with-lease

### Remover um rebase caso não consiga fazer.
rm -fr ".git/rebase-apply"
