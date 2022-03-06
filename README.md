# O que foi usado neste projeto:

    - Typescript
    - React JS
    - Next JS
    - Chakra UI
    - Node JS
    - Typeorm
    - Testes automatizados com Jest (apenas no backend)
    - Postgres
    - Express
    - Axios
    - React-hook-form
    - Yup

# Como usar

Primeiramente, é necessário que você tenha o Postgres instalado.

Se caso você tiver o Docker instalado, rode este comando:

```
 docker run --name NOME_DA_IMAGEM -e POSTGRES_PASSWORD=SENHA_DO_BANCO -d postgres
```

Após isso, vá até o arquivo `ormconfig.json` e configure de acordo com os seus dados.

P.S: não se esqueça de criar o banco de dados.

---

Agora acesse a pasta frontend e backend e rode o comando `yarn install`

Após a instalação das dependências, vá até a pasta raiz (sem que seja a frontend e backend) e rode os seguintes comandos:

- `yarn back:start`
- `yarn front:start`
