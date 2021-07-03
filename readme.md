# Tutorial de instalação do sonar no Windows
## "O melhor aprendizado é quando se compartilha."


[![N|Solid](https://avatars.githubusercontent.com/u/59149941?s=60&v=4)](https://nodesource.com/products/nsolid)
Lindomar Lima, programador e engenheiro de software.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/Lsantos-art/Sonar-Scanner-Tutorial)

## INSTALANDO O SONARQUBE

- CRIE UM BANCO DE DADOS
- VÁ ATÉ https://www.sonarqube.org/downloads E BAIXE A VERSÃO ESCOLHIDA
- CRIE UMA PASTA CHAMADA SONARQUBE-HOME NA RAIZ DO SISTEMA E EXTRAIA O CONTEÚDO DO DOWNLOAD NA MESMA
- ADICIONE AS LINHAS ABAIXO EM SONARQUBE-HOME/conf/sonar.properties
```sh
sonar.jdbc.username=USUARIO_BANCO
sonar.jdbc.password=SENHA_BANCO
sonar.jdbc.url=jdbc:postgresql://localhost/NOME_BANCO

sonar.path.data=/var/sonarqube/data
sonar.path.temp=/var/sonarqube/temp
```
- NA PASTA SONARQUBE-HOME, ABRA O TERMINAL E RODE O COMANDO ABAIXO DE ACORDO COM O SISTEMA

```sh
NO Linux: bin/linux-x86-64/sonar.sh start
NO macOS: bin/macosx-universal-64/sonar.sh start
NO Windows: bin/windows-x86-64/StartSonar.bat
```
PRONTO, PODE SER VISUALIZADO EM: http://localhost:9000 
A SENHA E USUARIOS PADRÃO SÃO "admin"

NÃO FECHE ESTE TERMINAL ENQUANTO ESTIVER USANDO O SONAR, POIS O RUNNER DO NAVEGADOR ESTARÁ RODANDO NELE!

## INSTALANDO O SONAR-SCANNER

- BAIXAR A VERSÃO DO SCANNER DE ACORDO COM O SISTEMA EM https://docs.sonarqube.org/latest/analysis/scan/sonarscanner;
- CRIE UMA PASTA CHAMADA SONAR-SCANNER E EXTRAIA O CONTEÚDO DO DOWNLOAD NELA 
- ADICIONE O SONAR-SCANNER AS VARIAVEIS DE AMBIENTE 
```sh
NO WINDOWS, VÁ EM PROPRIEDADES DO SISTEMA -> VARIÁVEIS DE AMBIENTE -> VARIÁVEIS DO SISTEMA -> NOVO

NO NOME DA VARIÁVEL COLOQUE: "SONAR"
NO CAMPO "VALOR DA VARIAVEL" COLOQUE: C:\SONAR-SCANNER\bin
```

COM ISSO SEU SONAR ESTARÁ PRONTO PARA ANALISAR SEUS PROJETOS. PARA TESTARMOS, BAIXE ESTE REPOSITÓRIO E ADICIONE NO ARQUIVO "C:\SONAR-SCANNER\conf\sonar-scanner.properties" AS SEGUINTES PROPRIEDADES:

```sh
sonar.sourceEncoding=UTF-8

sonar.login=admin
sonar.password=admin

sonar.projectKey=TESTE-01
sonar.projectName=PROJETO-TESTE
sonar.projectVersion=1.0
sonar.sources=PATH_PARA_REPOSITORIO_BAIXADO
```

FEITO ISSO, BASTA RODAR "sonar-scanner" NO CMD E VISUALIZAR EM:
http://localhost:9000/projects

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
