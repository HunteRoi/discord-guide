---
id: les-webhooks
title: Les webhooks
---
import Image from '../src/components/Image';

Vivement demandé par la communauté (et surtout les développeurs) il fut un temps, Discord décida d'implémenter le système de webhook. 
Je vais pas m'embêter à t'expliquer tout sur le webhook, Discord a très bien fait ça. Lis donc [l'article à ce sujet](https://support.discordapp.com/hc/fr/articles/228383668) !

## Etape 1 : mettre en place le webhook
<Image src="https://cdn.discordapp.com/attachments/497053799534559242/497097262070104065/webhook-etape1.gif" alt="étape 1" />

## Etape 2 : comprendre ce qu'est un webhook
Un webhook, c'est comme un tube pneumatique pour faire passer des messages d'un endroit à l'autre. Le premier endroit, ce serait l'**application que tu utilises** pour _envoyer_ le webhook. L'endroit de destination, c'est un **canal écrit Discord**. Le message, bah c'est le **contenu du webhook** (un message texte, [une intégration](les-embeds), ...). Et le tube pneumatique, c'est l'**API de Discord**!

Pour utiliser un webhook, tu as besoin de deux choses : 

1. son ID, qui permet à Discord de **savoir sur quel tuyau le webhook pointe** (pour envoyer le message) ;
2. son token, qui permet de **s'authentifier auprès de Discord** ("coucou, c'est moi j'peux passer svp?").

Toute entité nécessitant une authentification possède donc un token (les webhooks, les bots et même toi en tant qu'utilisateur) et c'est _extrêmement_ précieux! Ne partage __jamais__ ton token.

Maintenant que c'est dit, passons à la suite. Ces deux choses nécessaires se trouvent dans l'URL fourni par Discord lors de la création du webhook. Lien URL qui ressemble à ce qui suit :
```
https://discordapp.com/api/webhooks/472492847115927582/-r0SIJM4rOZ5aIrOrgtaPi1z1PByun1LwqcXRDcNH3LOfn3lERlMcJBHdTOgwNDQ5BuM
https://discordapp.com/api/webhooks/        ID        /                              TOKEN
```

## Etape 3 : utiliser le webhook pour communiquer
L'API de Discord, majoritairement développée en Python, transmet des données. Ces données sont donc généralement véhiculées à travers un format commun, qu'on appelle le [**J**ava**S**cript **O**bject **N**otation](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation). C'est la représentation en chaîne de caractères d'un objet en Javascript.

1. Pour _construire_ un webhook, j'utilise un outil de visualisation en ligne (https://leovoel.github.io/embed-visualizer/).
⚠️ Il faut activer le "mode webhook" afin que le contenu JSON soit valide!
2. Pour _envoyer_ un webhook, j'utilise une application qui permet d'émettre des _requêtes HTTP_.
J'utilise [Insomnia](https://insomnia.rest/) mais il en existe d'autres, comme [Postman](https://www.getpostman.com) par exemple.

Ci-après un tutoriel rapide avec Insomnia dans lequel je réalise une requête HTTP de type "post". En effet, j'envoie l'objet JSON sur l'URL du webhook, ce dernier gérant le reste (comprendre l'objet reçu, le traduire et ensuite l'afficher dans le canal sous forme d'un message lisible).
<Image src="https://cdn.discordapp.com/attachments/497053799534559242/497097572704321546/webhook-etape3bgif.gif" alt="étape 3" />
