## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

##Git Rebase

## Importante: Ao realizar os passos abaixo, deve-se estar na sua branch de trabalho.

1 - Adicionar arquivos ao repositório local.
git add .

2 - Realizar o commit
git commit -m "[Descrição do commit]"

3 - Buscar os arquivos da origin master.
git fetch origin master

4 - Unificar os arquivos da branch master com a atual.
git rebase origin/master

5 - Caso ocorrer conflitos
- Deverá corrigir os conflitos.
- Adicionar Arquivos ao repositório.

git add .

6 - Executar o comando abaixo, vai para o próximo commit e verifica se existe conflito.

git rebase --continue // git rebase --skip

7 - Caso existir conflitos os passos "5" devera ser executado novamente.

8 - Caso não ocorrer mais conflitos, executar.

git push --force-with-lease

Remover um rebase caso não consiga fazer.

rm -fr ".git/rebase-apply"
