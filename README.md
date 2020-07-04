# Introdução

Esta aplicação é a reprodução de um relógio analógico feita em JavaSrcipt.
A aplicação está em uma 'label' com quatro relógios e horários de diferentes países (Relógio Mundial) e as functions não estão compactadas, foram apenas duplicadas.

## Alterar os horários

Para alterar os horários do relódgio digital é preciso modificar a seguinte linha dentro da function de **_updateClock_**:
```
now.tz("Asia/Dubai");
```

Procure por *Moment timeZone* para encontrar o local que deseja para sua aplicação. Exemplo: "America/Sao_Paulo".

## Alterar Nome e data

Acho que o nome está bem claro, basta alterar manualmente dentro da __<div>__.
Já nas informações da data, acabei usando outra function chamada *_relogio()_*. Dentro dela usei o _Date()_ para imprimir o resultado que desejava que é o dia da semana mais o dia, mês e ano.

Para alterar precisamos mudar a seguinte linha:
```
let dataDub = new Date(data.valueOf() + data.getTimezoneOffset() * 140000);
```
Note o número ao final do código que coloquei como exemplo (DataDub é a data de Dubai).
Cada hora é representada por _20000_ (vinte mil) e no caso de Dubai que está 7 horas na nossa frente multiplicamos os _20000_ por _7_ que nos dará os _140000_, sacou? 

Se for dimunuir hora deve alterar o de positivo (+) para negativo (-) nesta parte do código:

```
data.valueOf() + data.getTimezoneOffset()
``` 

Acho que no geral está tudo intuítivo, mas qualquer dúvida estamos aí.

__Nota__: *A base da movimentação dos ponteiros encontrei em alguma comunidade, mas não lembro onde foi, mas dareis os creditos assim que achar*